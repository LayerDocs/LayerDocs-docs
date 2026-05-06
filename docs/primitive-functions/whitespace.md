# Whitespace

.docname &#123;Whitespace&#125;
.include &#123;docs&#125;

You can add blank space anywhere via the **`.whitespace`** function .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Layout/whitespace.html&#125; , which accepts optional `width` and `height` [Size](sizes.qd#single-size-size) arguments.

- If you set neither argument, a simple whitespace character is rendered (` `), which is useful for adding blank lines.
- If you set at least one argument, a rectangle of that size is rendered. Note that this might not always work outside of [layout functions](stacks.qd).

.examplemirror
    Line 1

    Line 2

    .whitespace

    Line 3

.examplemirror
    .row
        A

        .whitespace width:&#123;1cm&#125;

        B

        .whitespace width:&#123;2cm&#125;

        C