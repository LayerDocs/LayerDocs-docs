# Stacks

.docname &#123;Stacks&#125;
.include &#123;docs&#125;

Stack functions are layout functions that arrange a group of elements according to certain layout rules. There are three of them:
- **`.row`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Layout/row.html&#125;
- **`.column`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Layout/column.html&#125;
- **`.grid`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Layout/grid.html&#125;

## Blocks

To understand which elements to handle, stack functions rely on the strict Markdown concept of a block, which is an isolated chunk of the document: a paragraph, a code block, a list, a quote, a figure, or another function call.

.examplemirror
    .row gap:&#123;1cm&#125;
        A

        B

        C

.examplemirror &#123;The following example has only one item because A, B, and C are all part of the same paragraph (due to *lazy lines*):&#125; type:&#123;warning&#125;
    .row gap:&#123;1cm&#125;
        A
        B
        C


.examplemirror
    .row
        

        

## Parameters

All stack functions accept the following optional arguments:

| Parameter   | Description                                  | Accepts                                                                |
|-------------|----------------------------------------------|------------------------------------------------------------------------|
| `alignment` | Main axis alignment (CSS `justify-content`). | `start`, `center`, `end`, `spacebetween`, `spacearound`, `spaceevenly` |
| `cross`     | Cross axis alignment (CSS `align-items`).    | `start`, `center`, `end`, `stretch`                                    |
| `gap`       | Space between items.                         | [`Size`](sizes.qd)                                                     |

The `grid` function requires a `columns` argument, which must be specified as an integer. .br
It also provides optional `vgap` and `hgap` parameters that override the `gap` setting, allowing you to control the vertical and horizontal spacing independently.

.examplemirror
    .grid columns:&#123;2&#125; alignment:&#123;spacearound&#125;
        A

        *B*

        **C**

        ***D***

## Composition

You can compose stack functions to create complex layouts:

.examplemirror
    .row alignment:&#123;spacearound&#125;
        .column
            **Michael Scott**

            Dunder Mifflin Paper Company, Inc.

            [michaelscott@example.com](mailto:michaelscott@example.com)

        .column
            **Forrest Gump**

            Bubba Gump Shrimp Co.

            [forrestgump@example.com](mailto:forrestgump@example.com)