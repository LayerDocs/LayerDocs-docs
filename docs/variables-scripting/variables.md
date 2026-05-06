# Variables

.docname &#123;Variables&#125;
.include &#123;docs&#125;

Variables allow you to store and reuse values throughout your document. They are essential for avoiding repetition, creating dynamic content, and building reusable components.

## Defining a variable

Use **`.var &#123;name&#125; &#123;value&#125;`** to define a variable. The `value` is a [dynamic value](typing.qd), meaning it can be of any type: text, numbers, booleans, or even complex elements like layouts.

```markdown
.var {name} {LayerDocs}
```

## Accessing a variable

Once defined, you can access a variable by calling it as a parameter-less function:

.examplemirror
    .var &#123;name&#125; &#123;LayerDocs&#125;

    Hello, **.name**!

## Reassigning a variable

You can update a variable's value at any point. There are two equivalent ways to do this:

- `.myvar &#123;newvalue&#125;`
- `.var &#123;myvar&#125; &#123;newvalue&#125;`

.examplemirror
    .var &#123;mynumber&#125; &#123;5&#125;

    .mynumber

    .mynumber &#123;.mynumber::sum &#123;1&#125;&#125;

    .mynumber

## Block variables

As mentioned in [Syntax of a function call](syntax-of-a-function-call.qd#the-body-argument):
&gt; A body argument always refers to the last parameter of the signature.

This means a variable's value can span multiple lines and contain complex block content, not just simple inline values. This is powerful for storing reusable layouts, styled containers, or any structured content.

.examplemirror
    .var &#123;myrow&#125;
        .row gap:&#123;2cm&#125;
            A

            B

            C

    .container background:&#123;teal&#125; padding:&#123;1cm&#125;
        .myrow

## Scoped variables

For temporary variables that should only exist within a limited scope, see the [`.let`](let.qd) function. Unlike `.var`, which creates document-wide variables, `.let` creates variables that exist only within a lambda block.