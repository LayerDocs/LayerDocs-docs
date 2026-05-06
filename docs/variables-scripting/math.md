# Math

.docname &#123;Math&#125;
.include &#123;docs&#125;

Mathematical functions provide a way to perform numeric operations.

.examplemirror
    .var &#123;radius&#125; &#123;8&#125;

    If we try to calculate the **surface** of a circle of **radius .radius**,
    we'll find out it's **.pow &#123;.radius&#125; to:&#123;2&#125;::multiply &#123;.pi&#125;::truncate &#123;2&#125;**

Handling complex math is particularly effective when combined with [function call chaining](syntax-of-a-function-call.qd#chaining-calls). The following two calls are equivalent, with the latter being more natural to read:

```markdown
.truncate {.multiply {.pow {.radius} to:{2}} by:{.pi}} {2}
```

```markdown
.pow {.radius} to:{2}::multiply {.pi}::truncate {2}
```

For a complete list of available functions, refer to the standard library's [`Math` documentation](https://layerdocs.com/docs/layerdocs-stdlib/com.layerdocs.stdlib.module.Math).