# Destructuring

.docname &#123;Destructuring&#125;
.include &#123;docs&#125;

Destructuring splits a [lambda](lambda.qd) parameter into its individual components. For instance, a [pair](iterable.qd#pair) has two components, while a generic [iterable](iterable.qd) can have many.

The following types support destructuring:
- [`Iterable`](iterable.qd), including [`Pair`](iterable.qd#pair)
- [`Dictionary`](dictionary.qd), as an iterable of pairs

A value is destructured into `N` components when all of the following conditions are met:
- The type supports destructuring
- The lambda expects a single argument, such as with [`.foreach`](loops.qd)
- You supply `N &gt; 1` lambda parameters

When LayerDocs destructures the lambda argument, it operates on the individual components rather than the element itself.

## Example: `.foreach`

In this example, we define a [Dictionary](dictionary.qd) and iterate over its destructured key-value components.

.examplemirror
    .var &#123;mydictionary&#125;
        .dictionary
            - a: 1
            - b: 2
            - c: 3

    .foreach &#123;.mydictionary&#125;
        key value:
        **.key** has value **.value**

## Example: `.sorted`

In this example, we define a [Dictionary](dictionary.qd) and iterate over its destructured key-value components using `.foreach`, but only after sorting its entries by value using [`.sorted`](iterable.qd#operations), which takes a lambda that defines the ordering criteria.

&gt; Note: Remember that `@lambda` is required when declaring an [inline lambda](lambda.qd#inline-lambda).

.examplemirror
    .var &#123;mydictionary&#125;
        .dictionary
            - a: 3
            - b: 1
            - c: 2

    .foreach &#123;.mydictionary::sorted by:&#123;@lambda name value: .value&#125;&#125;
        name value:
        .name