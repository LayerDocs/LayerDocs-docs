# Table Of Contents

.docname &#123;Table of contents&#125;
.include &#123;docs&#125;

A table of contents provides a quick overview of your document by displaying links to headings in a visual hierarchy. Readers can click on any entry to jump directly to that section. You can see a table of contents right now in the right sidebar, or at the end of the page if you're on a mobile device.

You can display a table of contents through the **`.tableofcontents`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Document/tableofcontents.html&#125; function.

## Basic usage

The function accepts the following optional parameters:

| Parameter | Description | Accepts | Default |
|-----------|-------------|---------|---------|
| `title` | Title that precedes the table of contents. If unset, it is automatically localized. | Inline content | Automatically localized if [`.doclang`](document-metadata.qd)'s locale is supported (e.g., `Table of Contents` for English) |
| `maxdepth` | Maximum heading level to display. For example, `maxdepth:&#123;2&#125;` collects `#` and `##` headings, but not `###` or deeper. | Integer | `3` |

.exampleoutput &#123;!(550)[Table of contents](table-of-contents/basic.png)&#125;
    .tableofcontents maxdepth:&#123;2&#125;

    ## A

    ...

    ### A.A

    ...

    ### A.B

    ...

    ## B

    ...

    ## C

    ### C.A

    #### C.A.A

    ...

## Behavior by document type

The table of contents adapts to different document types:

- In **`paged`** and **`slides`** documents, each entry also displays the corresponding page number.
- In **`slides`** documents, the table of contents has a constrained height and becomes vertically scrollable when content overflows.

## Theming

[Layout themes](themes.qd) greatly influence the appearance of the table of contents.

.example
    !(550)[Table of contents with minimal theme](table-of-contents/minimal-theme.png "'minimal' theme")

## Ignoring specific headings

Sometimes you want certain headings to appear in your document but not in the table of contents. [Decorative headings](headings.qd#decorative-headings) serve this purpose: they are not numbered and are excluded from the table of contents.

To mark a heading as decorative, append `!` to the last `#` sign:

```markdown
##! A decorative heading
```

## Custom numbering

You can customize how headings are numbered in the table of contents via the `.numbering` function. See [Numbering](numbering.qd) for more information.

## Heading options

The heading that precedes the table of contents can be customized with the following parameters:

| Parameter           | Description                                                                                                                   | Accepts | Default                                             |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------|
| `headingdepth`      | Depth of the heading that precedes the table of contents.                                                                     | Integer | Depends on document type (1 for most, 3 for `docs`) |
| `breakpage`  | Whether the heading triggers an automatic [page break](page-break.qd#automatic-break).                                       | Boolean | `yes`                                               |
| `numberheading`     | Whether the heading should be [numbered](numbering.qd) and have its position tracked in the document hierarchy.               | Boolean | `no`                                                |
| `indexheading`      | Whether the heading should be included in the table of contents itself. Implicitly enables `numberheading`.                   | Boolean | `no`                                                |

## Focusing entries

The `focus` parameter highlights a specific entry in the table of contents, drawing attention to the current section.

.exampleoutput &#123;!(550)[Table of contents with focus](table-of-contents/focused.png)&#125; prelude:&#123;Adding `focus:&#123;A.B&#125;` to the previous example highlights that entry:&#125;
    .tableofcontents maxdepth:&#123;2&#125; focus:&#123;A.B&#125;

This feature is particularly useful in presentations, where you might want to show a mini table of contents at the beginning of each chapter to orient your audience.

### Using markers for chapter navigation

For slide presentations, you can combine `focus` with **markers** to create elegant chapter navigation. The `.marker` function creates an invisible level-0 heading, which is not normally possible with the standard `#`-based syntax.

Here is a practical pattern for chapter slides:

```markdown
.function {chapter}
    name:
    .tableofcontents maxdepth:{0} focus:{.name}
    .marker {.name}
```

You can then invoke it with `.chapter &#123;My chapter&#125;` at the start of each section. Setting `maxdepth:&#123;0&#125;` ensures only markers appear in the table of contents, creating a clean chapter-level overview rather than showing all headings.