# Page Counter

.docname &#123;Page counter&#125;
.include &#123;docs&#125;

The **`.currentpage`** and **`.totalpages`** functions display, respectively, the current index (beginning from 1) of the page or slide where the function call appears and the total number of pages or slides. They do not accept any arguments.

These functions are supported in `paged` and `slides` documents. In other document types, the `-` placeholder is shown instead.

&gt; Note: These functions return visual elements (nodes), *not* numbers. Therefore, you cannot perform operations like `.sum &#123;.currentpage&#125; &#123;3&#125;`.

## Fixed page counter

You can display a page counter on each page using [page margin content](page-margin-content.qd):

```markdown
.pagemargin {bottomcenter}
  .currentpage / .totalpages
```

## Formatting the page number

The **`.formatpagenumber &#123;format&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Document/formatpagenumber.html&#125; function sets a new page number format from the page where it appears. It only affects page numbers from that point onwards.

The format string accepts the same syntax as the one in [numbering](numbering.qd):

- `1` (default) for decimal (1, 2, 3, ...)
- `a` for lowercase latin alphabet (a, b, c, ...)
- `A` for uppercase latin alphabet (A, B, C, ...)
- `i` for lowercase roman numerals (i, ii, iii, ...)
- `I` for uppercase roman numerals (I, II, III, ...)

These changes are reflected in `.currentpage` and page numbers in the [table of contents](table-of-contents.qd).

.exampleoutput &#123;&#125;
    .pagemargin &#123;topcenter&#125;
        .currentpage

    # First page

    .formatpagenumber &#123;i&#125;

    # Second page

    # Third page

## Resetting the page number

The **`.resetpagenumber &#123;from?&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Document/resetpagenumber.html&#125; function allows you to overwrite the current page number at any point in a `paged` or `slides` document.

These changes are reflected in `.currentpage` and page numbers in the [table of contents](table-of-contents.qd).

.exampleoutput &#123;&#125;
    .pagemargin &#123;topcenter&#125;
        .currentpage

    # First page

    # Second page

    .resetpagenumber start:&#123;20&#125;

    # Third page