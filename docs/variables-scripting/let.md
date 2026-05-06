# Let

.docname &#123;Let&#125;
.include &#123;docs&#125;

The **`.let`** function defines a temporary variable that is accessible only within its scope. It accepts two parameters:
1. The value, of [any type](typing.qd), to assign to the scoped variable
2. A [lambda](lambda.qd) block that accepts one parameter (the given value)

.examplemirror
    .let &#123;.multiply &#123;4&#125; &#123;2&#125;&#125;
        area:
        The area of the rectangle is .area.
        If it were a triangle, it would have been .divide &#123;.area&#125; by:&#123;2&#125;.

The function returns the evaluation of the lambda, so you can use it as an expression.

.examplemirror
    .center
        .let &#123;LayerDocs&#125;
            name:
            .uppercase &#123;.name&#125;, .lowercase &#123;.name&#125;, .capitalize &#123;.name&#125;

The lambda block also accepts implicit positional parameters. See [*Lambda*](lambda.qd) for more information.

.examplemirror
    .center
        .let &#123;LayerDocs&#125;
            .uppercase &#123;.1&#125;, .lowercase &#123;.1&#125;, .capitalize &#123;.1&#125;