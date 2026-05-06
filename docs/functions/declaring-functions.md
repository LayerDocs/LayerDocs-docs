# Declaring Functions

.docname &#123;Declaring functions&#125;
.include &#123;docs&#125;

You can declare functions using the **`.function`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Flow/function.html&#125; function (in LayerDocs, everything is a function!).

It accepts two arguments: the function name and its body. The function can then be invoked as a normal function call - see [Syntax of a function call](syntax-of-a-function-call.qd).

.examplemirror
    .function &#123;helloworld&#125;
        Hello, world!

    .helloworld

## Parameters

The body parameter is a [lambda](lambda.qd), and each parameter of the function is a parameter of the lambda block. You can access each argument within the function body as a [variable](variables.qd), which in LayerDocs is essentially a function with no parameters.

.examplemirror
    .function &#123;greet&#125;
        to from:
        Hello, .to from .from!

    .greet &#123;world&#125; &#123;John&#125;

&gt; Tip: You can name arguments to improve readability:
&gt;
&gt; ```markdown
&gt; .greet &#123;world&#125; from:&#123;John&#125;
&gt; ```

### Optional parameters

If a function parameter ends with a question mark `?`, it becomes optional. When you do not provide the corresponding argument, it receives the value [`None`](none.qd).

.examplemirror
    .function &#123;greet&#125;
        to from?:
        Hello, .to from .from!

    .greet &#123;world&#125;

    .greet &#123;world&#125; &#123;John&#125;

`None` provides several useful [operations](none.qd#operations), such as `.otherwise` for placeholders that emulate default parameter values.

.examplemirror
    .function &#123;greet&#125;
        to from?:
        Hello, .to from .from::otherwise &#123;unnamed&#125;!

    .greet &#123;world&#125;

    .greet &#123;world&#125; &#123;John&#125;

### Block parameters

Block arguments always correspond to the last parameter of a function. There is no special syntax to declare them; just define the function as usual.

.examplemirror
    .function &#123;myexample&#125;
        title content:
        .box &#123;.title&#125;
            .content

    .myexample &#123;Example title&#125;
        This is the content of the example.

## Returning values

In LayerDocs, there are no return statements. Every reached instruction becomes part of the output - see [Conditional statements](conditional-statements.qd).

.examplemirror
    .function &#123;myfunction&#125;
        .if &#123;.iseven &#123;3&#125;&#125;
            A
        B

    .myfunction

Functions can return any Markdown content. 

.examplemirror
    .function &#123;greet&#125;
        to from:
        **Hello, .to** from .from!

    .greet &#123;world&#125; from:&#123;John&#125;

LayerDocs is [weakly typed](typing.qd), so functions can return any type of value.

.examplemirror
    .function &#123;area&#125;
        width height:
        .multiply &#123;.width&#125; by:&#123;.height&#125;

    The area of the rectangle is **.area &#123;4&#125; &#123;2&#125;**.

.examplemirror
    .function &#123;isadult&#125;
        age:
        .age::isgreater than:&#123;18&#125;

    .if &#123;.isadult age:&#123;20&#125;&#125;
        You're an adult!