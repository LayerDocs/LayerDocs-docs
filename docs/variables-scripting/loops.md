# Loops

.docname &#123;Loops&#125;
.include &#123;docs&#125;

## For-each

The main type of loop is provided by the **`.foreach`** function, which accepts:
1. An [`Iterable`](iterable.qd) value
2. A single-parameter [lambda](lambda.qd) block, where the argument is the current item being iterated

.examplemirror
    .foreach &#123;2..4&#125;
        n:
        The number is: **.n**

The function returns an ordered iterable **collection** of the same size as the input, containing the evaluation of the lambda for each iterated value. This means the function can be used as an expression, similarly to the `map` function in many programming languages.

.examplemirror &#123;Keep in mind that `\.1` implicitly refers to the first parameter of the lambda.&#125;
    .row alignment:&#123;spacearound&#125;
        .foreach &#123;1..3&#125;
            .1

Any iterable value is accepted, including Markdown lists. See [*Iterable*](iterable.qd) for all possible ways of defining an iterable value.

.examplemirror
    .var &#123;letters&#125;
      - A
      - B
      - C

    .foreach &#123;.letters&#125;
      ###! .1

      The letter is **.1**.

The type of iterated elements is preserved. See [*Typing*](typing.qd) for more information.

.examplemirror
    .row alignment:&#123;spacearound&#125; 
        .foreach &#123;1..5&#125;
            n:
            .multiply &#123;.n&#125; by:&#123;.n&#125;

## Repeat

The **`.repeat &#123;times&#125;`** function is a shorthand for `.foreach &#123;1..times&#125;`.

.examplemirror
    .repeat &#123;3&#125;
        .1