# Headings

.docname &#123;Headings&#125;
.include &#123;docs&#125;

The **`.heading &#123;content&#125; &#123;depth&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Primitives/heading.html&#125; function creates a heading with fine-grained control over its behavior.

Unlike standard Markdown headings (`#`, `##`, etc.), this function allows explicit control over numbering, page breaks, table of contents indexing, and custom identifiers.

## Parameters

| Parameter   | Description                                                                                                                                                                | Accepts        | Default  |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|----------|
| `content`   | Inline content of the heading.                                                                                                                                             | Inline content | Required |
| `depth`     | Importance level of the heading (1 for H1, 6 for H6).                                                                                                                      | Integer (1-6)  | Required |
| `ref`       | Custom identifier for [cross-referencing](cross-references.qd). If unset, the ID is automatically generated.                                                               | String         | Unset    |
| `numbered`  | Whether the heading is [numbered](numbering.qd) and has its position tracked in the document hierarchy. Actual numbering depends on the active `.numbering` configuration. | Boolean        | `yes`    |
| `indexed`   | Whether the heading appears in the [table of contents](table-of-contents.qd) and navigation sidebar.                                                                       | Boolean        | `yes`    |
| `breakpage` | Whether the heading triggers an automatic [page break](page-break.qd#automatic-break).                                                                                     | Boolean        | `yes`    |

## Basic usage

.exampleoutput &#123;##! My heading&#125; prelude:&#123;This is equivalent to `## My heading` in standard Markdown.&#125;
    .heading &#123;My heading&#125; depth:&#123;2&#125;

## Controlling numbering

You can create headings that are not tracked by the [numbering](numbering.qd) system:

```markdown
.heading {Appendix} depth:{1} numbered:{no}
```

Unlike [decorative headings](decorative-headings.qd) (`#!`), this approach lets you independently control whether the heading appears in the table of contents.

## Controlling table of contents indexing

By default, headings appear in the [table of contents](table-of-contents.qd) and navigation sidebar of `plain` and `paged` documents. You can exclude a heading while still allowing it to be numbered:

```markdown
.heading {Secret section} depth:{2} indexed:{no}
```

Conversely, you can include an unnumbered heading in the table of contents:

```markdown
.heading {Acknowledgments} depth:{1} numbered:{no} indexed:{yes}
```

## Disabling page breaks

By default, headings trigger automatic page breaks (when [`.autopagebreak`](page-break.qd#automatic-break) is enabled). You can disable this for individual headings:

```markdown
.heading {Continued} depth:{1} breakpage:{no}
```

## Custom identifiers

You can assign a custom identifier for [cross-referencing](cross-references.qd):

```markdown
.heading {Introduction} depth:{2} ref:{intro}
```

See also [Decorative headings](decorative-headings.qd) for headings excluded from numbering and the table of contents.