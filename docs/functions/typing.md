# Typing

.docname &#123;Typing&#125;
.include &#123;docs&#125;

LayerDocs is **dynamically typed**: every value that may be passed to a function argument is wrapped in a `DynamicValue` object. This object can represent any supported type, and it carries the information needed to convert itself to the expected type when required.

The dynamic value is then *adapted* or converted to the type expected by the signature of the native function (written in Kotlin, which is strongly typed) at invocation time. If a conversion cannot be made, an error occurs.

This invoke-time adaptation reduces constraints, allowing the same value to be handled differently depending on its context.

.examplemirror
    .var &#123;myvar&#125; &#123;true&#125;

    .if &#123;.myvar&#125;
        My value is .uppercase &#123;.myvar&#125;

In the previous example:
- `.var`'s signature accepts a `DynamicValue`.
- `.if` takes a [`Boolean`](boolean.qd), so the dynamic `true` value kept in the `myvar` variable is converted to boolean.
- `.uppercase` takes a `String`, so the `true` value is used as a string.

See the *Value types* section of this wiki to see all supported types.

## Example: source + result

The following example is a simplified version of a function defined in this wiki, which shows a LayerDocs code snippet and its visual result right below it:

.examplemirror
    .function &#123;sourceresult&#125;
        source:
        .code &#123;markdown&#125;
            .source
        .source

    .sourceresult
        ##! LayerDocs 

        LayerDocs was born in **.sum &#123;2000&#125; &#123;24&#125;**

The previous example shows how versatile LayerDocs values are. In the function declaration, the `.source` argument is retrieved twice:
- In [`.code`](code.qd), which expects a string, so the source is read as-is and inserted in a code block.
- At the top level: the LayerDocs source is automatically adapted to the context, so it is parsed as rich Markdown content.