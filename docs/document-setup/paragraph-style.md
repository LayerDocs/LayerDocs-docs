# Paragraph Style

.docname &#123;Paragraph style&#125;
.include &#123;docs&#125;

The **`.paragraphstyle`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Document/paragraphstyle.html&#125; function allows you to override the global style of paragraphs.

All parameters are optional, and if left unset, they delegate their value to the active theme.

| Parameter       | Description                                                                       | Accepts |
|-----------------|-----------------------------------------------------------------------------------|---------|
| `lineheight`    | Whitespace between lines, multiplied by the font size.                            | Number  |
| `letterspacing` | Whitespace between letters, multiplied by the font size.                          | Number  |
| `spacing`       | Whitespace between subsequent paragraphs, multiplied by the font size.            | Number  |
| `indent`        | Whitespace at the start of each non-first paragraph, multiplied by the font size. | Number  |

Using `spacing:&#123;0&#125; indent:&#123;2&#125;` produces the classic LaTeX look.

.exampleoutput &#123;&#125;
    .paragraphstyle lineheight:&#123;2.5&#125; spacing:&#123;0&#125; indent:&#123;2&#125;