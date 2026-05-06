# Code

.docname &#123;Code&#125;
.include &#123;docs&#125;

You can create code blocks using the standard Markdown specification: either with 4-space or 1-tab indentation, or with triple backticks or tildes.

.examplemirror
    ```javascript
    function greet(name) {
        return `Hello, ${name}!`;
    }
    ```

LayerDocs also provides a more powerful **`.code`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Text/code.html&#125; block function.

.examplemirror
    .code lang:&#123;javascript&#125;
        function greet(name) &#123;
            return `Hello, $&#123;name&#125;!`;
        &#125;

## `.code` vs. standard code blocks

### Content processing

Standard code blocks render their content as-is without any processing. The `.code` function, on the other hand, accepts any LayerDocs string as its body parameter, which means you can **evaluate functions** before displaying their output as code. This is particularly useful when combining `.code` with [`.read`](file-data.qd) to load a code snippet from a file:

.examplemirror
    .code
        .read &#123;assets/point.ts&#125;

### Language specification

Standard fenced code blocks specify their language right after the opening delimiter, for example ` ```markdown `. 

The `.code` function specifies the language through the optional `lang` argument, for example `.code &#123;markdown&#125;` or `.code lang:&#123;markdown&#125;`. If unspecified, auto-detection is attempted.

.examplemirror
    .code lang:&#123;typescript&#125;
        .read &#123;assets/point.ts&#125;

### Line numbers

Standard code blocks always show line numbers by default. The `.code` function lets you toggle line numbers using the optional `linenumbers` [`Boolean`](boolean.qd) argument, which defaults to `yes` (equivalent to `true`).

.examplemirror
    .code linenumbers:&#123;no&#125;
        .read &#123;assets/point.ts&#125;

### Focused lines

The `.code` function allows you to focus on a [`Range`](range.qd) of lines, starting from `1`. Line numbers must be enabled for this feature to work.

.examplemirror
    .code focus:&#123;5..8&#125;
        .read &#123;assets/point.ts&#125;

## Inline code

Just as `.code` is a dynamic alternative to triple backticks (`` ``` ``), **`.codespan &#123;text&#125;`** is a dynamic alternative to inline backticks (`` `text` ``). This allows function calls within its content.