# Text

.docname &#123;Text&#125;
.include &#123;docs&#125;

The **`.text`** inline function provides extensive text formatting that cannot be expressed in plain Markdown.

| Parameter              | Accepts                                                                                                                                                        |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **`text`** (mandatory) | Inline content.                                                                                                                                                |
| **`size`**             | `tiny` (50%), `small` (75%), `normal` (100%), `medium` (125%), `large` (150%), `larger` (200%), `huge` (300%)                                                  |
| **`weight`**           | `normal`, `bold`                                                                                                                                               |
| **`style`**            | `normal`, `italic`                                                                                                                                             |
| **`decoration`**       | `underline`, `overline`, `underoverline`, `strikethrough`, `all`                                                                                               |
| **`case`**             | `uppercase`, `lowercase`, `capitalize`                                                                                                                         |
| **`variant`**          | `normal`, `smallcaps`                                                                                                                                          |
| **`script`**           | `sub` (subscript), `sup` (superscript)                                                                                                                         |
| **`url`**              | URL to link to. If set, the text becomes a link. If the URL is set but empty, the text content itself is used as the URL (assuming it represents a valid URL). |

.examplemirror
    ##! A demo of .text &#123;LayerDocs&#125; variant:&#123;smallcaps&#125;

    The .text &#123;quick brown fox&#125; size:&#123;large&#125; decoration:&#123;underoverline&#125; jumps over the lazy dog.