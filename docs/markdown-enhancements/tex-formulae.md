# Tex Formulae

.docname &#123;TeX formulae&#125;
.include &#123;docs&#125;

LayerDocs natively supports TeX math equations and formulae. When rendering to HTML, this feature is powered by [KaTeX](https://www.katex.org).

## Inline

Inline equations can be created by wrapping text between two `$` symbols. Both delimiters must be preceded and followed by a whitespace (or beginning/end of the line).

.examplemirror
    Let $ \overline v = \frac &#123;\Delta x&#125; &#123;\Delta t&#125; $ be the **average velocity** of an object.

## One-line block

Block equations are usually visually centered and share the same syntax as inline ones, but need to be isolated from other content:

.examplemirror
    The following function is a **Fourier Transform**:

    $ F(u) = \int^&#123;+\infty&#125;_&#123;-\infty&#125; f(x) e^&#123;-i 2\pi x&#125; dx $

&gt; Note: This syntax does **not** interrupt paragraphs, so make sure to space blocks properly. If the paragraph is not interrupted, the formula is recognized as inline due to Markdown's *lazy lines*.
&gt;
&gt; .examplemirror
&gt;     The following function is a **Fourier Transform**:
&gt;     $ F(u) = \int^&#123;+\infty&#125;_&#123;-\infty&#125; f(x) e^&#123;-i 2\pi x&#125; dx $

## Multiline block

A block formula can span over multiple lines thanks to a syntax similar to fenced code blocks, using three `$` symbols as delimiters.

.examplemirror
    $$$
    f(x) =
    \begin&#123;cases&#125;
        0 & \text&#123;if &#125; x = 0 \\
        1 & \text&#123;if &#125; x \neq 0
    \end&#123;cases&#125;
    $$$

## Macros

LayerDocs supports the creation of TeX macros via the `.texmacro` function. See [*TeX macros*](tex-macros.qd) for more information.