# Boolean

.docname &#123;Boolean&#125;
.include &#123;docs&#125;

Boolean values are represented by the following literals, which are **case insensitive**:

| Boolean value | Literals      |
|---------------|---------------|
| **`true`**    | `true`, `yes` |
| **`false`**   | `false`, `no` |

Using the `yes` and `no` literals is encouraged because they contribute to a more natural language flow.

```markdown
.code linenumbers:{no}
  My code
```

## Operators

The following operator functions return a `Boolean` value:

- `.not &#123;bool&#125;`: Negates a boolean. [Chaining](syntax-of-a-function-call.qd#chaining-calls) is recommended: `.bool::not`
- `.islower &#123;a&#125; &#123;than&#125;`: Returns `true` if `a` is less than `than`
- `.isgreater &#123;a&#125; &#123;than&#125;`: Returns `true` if `a` is greater than `than`
- `.isequal &#123;a&#125; &#123;to&#125;`: Returns `true` if `a` equals `to`