# Syntax Of A Function Call

.docname &#123;Syntax of a function call&#125;
.include &#123;docs&#125;

**Functions** are the key feature of LayerDocs, distinguishing it from other Markdown dialects and many other markup languages. They are loaded from external libraries, either native (e.g., .repolink &#123;standard library&#125; &#123;tree/main/layerdocs-stdlib/src/main/kotlin/com/layerdocs/stdlib&#125;) or defined in a LayerDocs source, and come in different categories:

| Category                            | Examples                                                 |
|-------------------------------------|----------------------------------------------------------|
| Layout rules                        | `row`, `column`, `grid`, `center`                        |
| Utility views                       | `tableofcontents`, `whitespace`                          |
| Mathematical and logical operations | `sum`, `divide`, `pow`, `sin`, `isgreater`               |
| Control structures and statements   | `if`, `foreach`, `repeat`, `var`, `let`, `function`      |
| File data                           | `include`, `csv`, `read`                                 |
| Alteration of document metadata     | `docname`, `docauthor`, `doctype`, `theme`, `pageformat` |

## Basic syntax

When called from a LayerDocs source, the function name is preceded by a `.` (dot) and each argument is wrapped in curly brackets.

```markdown
.myfunction {arg1} {arg2}
```

.examplemirror
    .multiply &#123;6&#125; &#123;3&#125;

## Positional and named arguments

In the previous snippet, `arg1` and `arg2` refer to the first and second parameter of the function signature respectively. These are called *positional arguments* because their meaning is determined by their position in the call.

An argument can also refer to a parameter by name. These *named arguments* use the syntax `name:&#123;arg&#125;`.

```markdown
.myfunction firstparam:{arg1} secondparam:{arg2}
```

.examplemirror &#123;You can mix positional and named arguments to improve readability of the function call, as long as all arguments that follow a named argument are named as well.&#125;
    .multiply &#123;6&#125; by:&#123;3&#125;

## Multi-line arguments

Arguments can span over multiple lines. Indentation is optional and arbitrary.

.examplemirror
    .divide &#123;
        .cos &#123;.pi&#125;
    &#125; by:&#123;
        .sum &#123;2&#125; &#123;1&#125;
    &#125;

## Line continuation

When a function call has many arguments, a backslash (`\`) at the end of a line continues the argument list on the next line.

```markdown
.container alignment:{center} \
           background:{red} \
           padding:{1px}
```

The backslash and the newline are consumed by the compiler, and optional leading whitespace on the continuation line is ignored. You can use as many continuation lines as you need.

Line continuation is supported in both block and inline function calls.

## Nested function calls

Function calls can be nested in arguments, allowing you to compose complex expressions.

.examplemirror
    .multiply &#123;.pow &#123;3&#125; to:&#123;2&#125;&#125; by:&#123;.pi&#125;

## Chaining calls

Although LayerDocs exclusively relies on top-level declarations, it exploits some OOP-like syntactic sugar that greatly increases the readability of nested function calls.

Consider the following call:

```markdown
.sum {.subtract {.pow {3} {2}} {1}} {2}
```

This performs $ (3^2 - 1) + 2 = 10 $. As simple as it is, it could not be harder to write and read! The following call is totally equivalent:

```markdown
.pow {3} {2}::subtract {1}::sum {2}
```

Much better. It now resembles the way we naturally read math.

To understand how chaining works, consider this simpler example (see [*Variables*](variables.qd) to learn more about variables):

```markdown
.myvar::uppercase
```

Behind the scenes, the compiler transforms this call into:

```markdown
.uppercase {.myvar}
```

.examplemirror
    .var &#123;myvar&#125; &#123;hello!&#125;

    .myvar::uppercase

Generally speaking, `.a::b` is transformed into `.b &#123;.a&#125;`, `.a::b::c` into `.c &#123;.b &#123;.a&#125;&#125;`, and so on.

You can append additional arguments to any function in the chain. Just keep in mind that the chained value is always **the first argument**, positionally speaking, of the next call.

.examplemirror &#123;`\.a &#123;x&#125;::b &#123;y&#125;` is transformed into `\.b &#123;\.a &#123;x&#125;&#125; &#123;y&#125;`:&#125;
    .sum &#123;10&#125; &#123;5&#125;::multiply &#123;2&#125;

Many core functions are designed to be called in a chain, for example [`None` operations](none.qd#examples).

## Tight function calls

A function call must normally be surrounded by whitespace, a symbol, or the beginning or end of a line. This means that a call directly adjacent to a word character is not recognized:

.examplemirror type:&#123;warning&#125;
    H.text &#123;2&#125; script:&#123;sub&#125;O

Wrapping the entire function call in curly braces allows it to appear anywhere, regardless of the surrounding characters. The wrapping braces are consumed by the compiler and do not appear in the output:

.examplemirror
    H&#123;.text &#123;2&#125; script:&#123;sub&#125;&#125;O

## Block vs. inline function calls

Function calls can appear in two contexts: inline or block.

### Inline calls

An **inline** function call is preceded and/or followed by other inline content, such as text. The output of an inline function call is simply replaced in the parent's block.

.examplemirror
    Ever wondered what **26+16** equals? It's .sum &#123;26&#125; &#123;16&#125;. Here you go.

### Block calls

A **block** function call is an isolated one. For context, in Markdown, a *block* is a paragraph, a code snippet, a quote, a list, and so on. 

```markdown
Paragraph 1

.myfunction {arg1} {arg2}

Paragraph 2
```

### The body argument

The main difference between inline and block function calls is a special argument called **body argument**. This argument **always** refers to the **last parameter** of the signature (even if named arguments were used).

A body argument expands over multiple lines, is not wrapped by brackets, and requires each line to be **indented** by at least two spaces or one tab:

```markdown
.myfunction {arg1} {arg2}
    Body argument, line 1
    and line 2.
```

The whole body must share the same indentation. The following produces unexpected results, as indentation is inconsistent:

```html
.myfunction {arg1} {arg2}
    Body argument, line 1

        and line 2. <!-- This is a 4-spaces indented code block! -->
```

### Nesting functions in body arguments

Other functions, block or inline, can be nested inside body arguments:

```html
.row alignment:{center}                    <!-- Block  -->
    This document was made by .docauthor   <!-- Inline -->

    .column                                <!-- Block  -->
        The document name is .docname      <!-- Inline -->

        .loremipsum                        <!-- Block  -->
```

### Body arguments and inline calls

When nested inside inline arguments, function calls are always inline. Thus, the following is invalid since body arguments are accepted only in block calls:

```markdown
.center {
    .row
        Hi
}
```

While this is valid as `.row` is called within a body argument:

```markdown
.center
    .row
        Hi
```