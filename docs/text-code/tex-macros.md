# Tex Macros

.docname &#123;TeX macros&#125;
.include &#123;docs&#125;

When writing [TeX formulae](tex-formulae.qd), you may want to use custom macros.

The **`.texmacro &#123;name&#125; &#123;content&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Document/texmacro.html&#125; function defines a new macro that can be used in equations.

.examplemirror
    .texmacro &#123;\gradient&#125; &#123;\nabla&#125;

    $ \gradient f $

As with every LayerDocs function, you can use the last argument as a [*block argument*](syntax-of-a-function-call.qd#block-vs-inline-function-calls).

.example
    ```text
    .texmacro {\gradient}
        \nabla
    ```

## Parameters

Macros can feature a variable number of parameters, which are referenced inside the macro content as `#1`, `#2`, and so on.

.examplemirror
    .texmacro &#123;\sumlim&#125;
        \sum_&#123;#1&#125;^&#123;#2&#125;

    $ \sumlim&#123;i=1&#125;&#123;n&#125; a_i $

## Composing

You can define multiple macros and combine them, as you would do in LaTeX:

.examplemirror
    .texmacro &#123;\hello&#125;
        \text &#123;Hello, \textit &#123;world&#125;&#125;

    .texmacro &#123;\highlight&#125;
        \colorbox&#123;blue&#125;&#123;#1&#125;

    $ \highlight&#123;\hello&#125; $

You can also compose them on top of other macros:

.examplemirror
    .texmacro &#123;\hello&#125;
        \text &#123;Hello, \textit &#123;world&#125;&#125;

    .texmacro &#123;\highlighthello&#125;
        \colorbox&#123;blue&#125;&#123;\hello&#125;

    $ \highlighthello $