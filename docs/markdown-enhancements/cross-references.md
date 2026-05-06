# Cross References

.docname &#123;Cross references&#125;
.include &#123;docs&#125;

In typesetting, cross-references are references to other parts of the document, such as figures, tables, sections, and equations.

In LayerDocs, you create a cross-reference using the **`.ref &#123;id&#125;`** function, where `id` is the cross-reference ID of the target element. The function can appear either before or after the target element.

&gt; Note: Cross-referencing works best when elements are numbered, and you have set a supported document language.
&gt; See [Numbering](numbering.qd) and [Localization](localization.qd) for details.

You typically set the ID using the `&#123;#id&#125;` syntax. The exact location depends on the element type, as the following sections explain.

### Sections

.exampleoutput &#123;&#125;
    Once you install LayerDocs, check out .ref &#123;getting-started&#125; for a quick guide.

    ## Getting started &#123;#getting-started&#125;

&gt; Tip: In HTML rendering, the reference ID of headings also becomes the HTML `id` attribute, which makes them suitable for linking.


### Figures

.exampleoutput &#123;&#125;
    The LayerDocs logo is shown in .ref &#123;logo&#125;.

     &#123;#logo&#125;

### Tables

.exampleoutput &#123;&#125;
    As shown in .ref &#123;data&#125;, coffee is the most popular beverage.

    | Person  | Beverage |
    |---------|----------|
    | Alice   | Tea      |
    | Bob     | Coffee   |
    | Charlie | Coffee   |
    &#123;#data&#125;

.example
    With a [caption](table-caption.qd):

    ```markdown
    | Person  | Beverage |
    |---------|----------|
    | Alice   | Tea      |
    | Bob     | Coffee   |
    | Charlie | Coffee   |
    "Beverage preferences" {#data}
    ```

### Equations

.exampleoutput &#123;&#125;
    Einstein's famous equation is shown in .ref &#123;energy&#125;.

    $ E = mc^2 $ &#123;#energy&#125;

.example
    For multi-line equations:

    ```markdown
    $$$ {#energy}
    E = mc^2
    $$$
    ```

&gt; Tip: See [TeX Formulae](tex-formulae.qd) for more information on writing equations in LayerDocs.

### Code blocks (listings)

.exampleoutput &#123;&#125;
    See the main function in .ref &#123;main&#125;.

    ```kotlin {#main}
    fun main() {
        println("Hello, World!")
    }
    ```

.example
    With a [caption](code-caption.qd):

    ~~~markdown
    ```kotlin "Hello World in Kotlin" {#main}
    fun main() {
        println("Hello, World!")
    }
    ```
    ~~~

### Custom numbered elements

&gt; The `.numbered` function is explained in detail in [Numbering](numbering.qd#custom-numbered-elements).

.exampleoutput &#123;&#125;
    In Example .ref &#123;my-example&#125; you can see a custom numbered element.

    .numbered &#123;examples&#125; ref:&#123;my-example&#125;
        number:
        **Example .number:** this is a custom numbered element.