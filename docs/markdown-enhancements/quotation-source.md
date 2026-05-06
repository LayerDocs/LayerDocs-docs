# Quotation Source

.docname &#123;Quotation source&#125;
.include &#123;docs&#125;

LayerDocs allows a blockquote to have a citation source.

In general, if the quote ends with a single-item unordered list, that list item is set as the citation source. You can specify the source using any of the supported unordered list bullets: `-`, `*`, `+`, although using `-` is recommended.

.examplemirror
    &gt; To be, or not to be, that is the question.
    &gt; - William Shakespeare

The layout and aesthetics are handled by the current layout theme.

The source may contain inline content, including function calls.

.examplemirror
    &gt; Failure's not an option. It's just a step.
    &gt; - Dwayne **The Rock** Johnson

.examplemirror
    &gt;&gt; You miss 100% of the shots you don't take.
    &gt;&gt; - Wayne Gretzky
    &gt; - Michael Scott

## Typed quotes

[Typed quotes](quote-types.qd) may also have sources:

.examplemirror
    &gt; Tip: Try out **LayerDocs**!
    &gt; - [Gio](https://github.com/SatyamPote)