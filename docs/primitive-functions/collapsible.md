# Collapsible

.docname &#123;Collapsible&#125;
.include &#123;docs&#125;

The **`.collapse`** function creates an interactive collapsible block that users can toggle by clicking.

The function requires an [inline](markdown-content.qd#inline-content) title, which is always displayed, and [block](markdown-content.qd#block-content) content, which appears when expanded.

.examplemirror
    .collapse &#123;A _collapsible_ block. **Click me!**&#125;
        You found this hidden content.

        **Surprise!**

You can change the initial state of the block using the optional `open` [`Boolean`](boolean.qd) argument, which defaults to `false` (collapsed).

.examplemirror
    .collapse &#123;A _collapsible_ block. **Click me!**&#125; open:&#123;yes&#125;
        Not so hidden content anymore!