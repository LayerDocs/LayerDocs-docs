# Css

.docname &#123;CSS&#125;
.include &#123;docs&#125;

The **`.css`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Html/css.html&#125; function lets you apply CSS styles to the document.

&gt; [!WARNING]
&gt; CSS styles only apply to HTML and HTML-PDF documents. They have no effect on other output formats.
&gt;
&gt; See the [HTML](html.qd) page for more details on this topic.

```css
.css
    body {
        background-color: green;
    }
  
    h1 {
        color: pink;
    }
```

You can also load CSS styles from a file using the [`.read`](file-data.qd) function:

```markdown
.css {.read {styles.css}}
```

&gt; [!NOTE]
&gt; Unlike [`.code`](code.qd), the `.css` function does not allow function calls inside its body argument because they would be ambiguous with CSS syntax.
&gt;
&gt; For this reason, you must inline the `.read` call as shown in the previous example.

## Custom classes

You can assign custom CSS class names to specific elements using the `classname` parameter, which is available in [`.container`](container.qd) for blocks and [`.text`](text.qd) for inline elements.

.examplemirror
    .container classname:&#123;my-custom-class&#125;
        This is a block with a custom class.

        - Item 1
        - Item 2
        - Item 3

    This is an .text &#123;inline text&#125; classname:&#123;my-custom-class&#125; with a custom class.

    .css
        .my-custom-class &#123;
            padding: 8px;
            border-radius: 8px;
            background: linear-gradient(to right, blue 0%, forestgreen 100%);
        &#125;

## Custom reusable elements

You can leverage [custom functions](declaring-functions.qd) to create reusable elements with custom classes.

.examplemirror
    .function &#123;mytext&#125;
        content:
        .text &#123;.content&#125; classname:&#123;my-custom-class&#125;

    This is a .mytext &#123;text&#125; and here is .mytext &#123;another&#125;.

## Overriding properties

If you want to *override* LayerDocs's default styles, we recommend using the **`.cssproperties`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Html/cssproperties.html&#125; function.

This function takes a [dictionary](dictionary.qd) of strings, where each item is a `--ld-*` CSS property and its value.

You can find a complete list of available properties in the [global theme source](https://github.com/SatyamPote/layerdocs/blob/main/layerdocs-html/src/main/scss/global.scss). Unknown properties are safely ignored.

.example
    ```yaml
    .cssproperties
        - background-color: green
        - heading-color: pink
        - block-margin: 12px
    ```

.box &#123;Why is this preferred over `\.css`?&#125;
    LayerDocs's themes use CSS custom properties for more granular control and easier overrides. For instance, the same property may be applied differently depending on the document type.

    When you call functions like [`.pageformat`](page-format.qd) or [`.paragraphstyle`](paragraph-style.qd), they apply their effects by injecting the corresponding `--ld-*` properties.

    Overriding a `--ld-*` property rather than its raw CSS equivalent provides smoother control and reduces the risk of future breaking changes.