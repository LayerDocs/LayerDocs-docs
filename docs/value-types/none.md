# None

.docname &#123;None&#125;
.include &#123;docs&#125;

*None* is a special value that represents nothing or emptiness (similar to `null` in many programming languages). Functions can return it, and it also serves as a placeholder for [optional parameters](declaring-functions.qd#optional-parameters).

## Operations

| Function                        | Description                                                                                                                                               | Return type                          |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| `.none`                         | Creates an empty value.                                                                                                                                   | `none`                               |
| `.isnone &#123;value&#125;`               | Checks whether `value` is `none`.                                                                                                                         | [`Boolean`](boolean.qd)              |
| `.otherwise &#123;value&#125; &#123;fallback&#125;` | Returns `value` if it is not `none`, `fallback` otherwise. Works best with [function call chaining](syntax-of-a-function-call.qd#chaining-calls).         | Type of either `value` or `fallback` |
| `.ifpresent &#123;value&#125; &#123;lambda&#125;`   | If `value` is not `none`, maps it to a new value according to the [lambda](lambda.qd). If `none`, returns `none`. Works best with function call chaining. | Type returned by `lambda`, or `none` |
| `.takeif &#123;value&#125; &#123;lambda&#125;`      | Returns `value` if the boolean-returning [lambda](lambda.qd) is accepted on `value`. Returns `none` otherwise. Works best with function call chaining.    | Type of `value`, or `none`           |

## Passing None to functions

Native functions from the stdlib, written in Kotlin, often accept nullable parameters. When such a parameter is passed `None`, the function treats it as if it were `null`, which often means that the parameter is considered absent.

This is particularly useful when a value is stored in a variable that might or might not be `None`, and you want to forward it to a function without checking first.

.examplemirror
    .function &#123;highlight&#125; 
        color?:
        .container background:&#123;.color&#125;
            Value of color: .color
    
    1. .highlight &#123;teal&#125;
    2. .highlight

## Example operations

.example
    ```markdown
    Hi! I'm .name::otherwise {unnamed}
    ```
    .layerdocsoutput
        - If `name` is `John`: *Hi! I'm John*
        - If it is `none`: *Hi! I'm unnamed*

.example
    ```markdown
    .num::takeif {@lambda x: .x::equals {5}}
    ```
    .layerdocsoutput
        - If `num` is 5: *5*
        - Otherwise: *None*

    &gt; Confused about `@lambda`? It begins a parametric [inline `Lambda`](lambda.qd#inline-lambda). Check its page for further details.

.example
    ```markdown
    .num::takeif {@lambda x: .x::iseven}::ifpresent {Even}::otherwise {Odd}
    ```
    .layerdocsoutput
        - If `num` is even: *Even*
        - Otherwise: *Odd*

.example
    ```markdown
    .x::ifpresent {@lambda Yes, .1 is present}::otherwise {Not present}
    ```
    .layerdocsoutput
        - If `x` is `something`: *Yes, something is present*
        - If it is `none`: *Not present*

    &gt; Here, the lambda parameter is implicit and accessed by position.