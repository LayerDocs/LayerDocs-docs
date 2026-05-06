# Conditional Statements

.docname &#123;Conditional statements&#125;
.include &#123;docs&#125;

The **`.if`** function creates a conditional statement:

1. The first parameter is the [`boolean`](boolean.qd) condition to evaluate.
2. The second parameter is a parameter-less [lambda](lambda.qd) that runs only if the condition is true.

.examplemirror
    .if &#123;yes&#125;
        Hello, LayerDocs!

## Nesting

The function returns the lambda's result if the condition is satisfied, or nothing otherwise. This means the function *propagates* its content up the call stack.

.examplemirror
    &lt;!-- Read this from bottom to top --&gt;

    .if &#123;yes&#125;
        .if &#123;no&#125;
            .if &#123;yes&#125;
                .if &#123;yes&#125;
                    Hello!

This behavior lets you use the function as part of any expression. For example, you can use it to conditionally include content inside layout functions, such as [stacks](stacks.qd).

.examplemirror
    .row gap:&#123;1cm&#125;
        A

        .if &#123;.iseven &#123;3&#125;&#125;
            B

        C

## Negation

The **`.ifnot`** function is a shorthand that inverts `.if`'s behavior, returning a value only if the condition is *not* satisfied.

LayerDocs does not yet have an *else* statement, but you can emulate one using the [`.let`](let.qd) function:

.examplemirror
    .let &#123;.iseven &#123;3&#125;&#125;
        condition:
        .if &#123;.condition&#125;
            3 is even!
        .ifnot &#123;.condition&#125;
            3 is odd!

&gt; Tip: `.ifnot &#123;.condition&#125;` is equivalent to `.if &#123;.condition::not&#125;`