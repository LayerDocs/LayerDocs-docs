# Container

.docname &#123;Container&#125;
.include &#123;docs&#125;

The **`.container`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Layout/container.html&#125; function creates a highly customizable block of content, and resets the current layout rules back to normal.

## Layout reset

.examplemirror &#123;Imagine you want to create a row with two columns, each containing a heading and some text. A beginner might try the following *wrong* approach. As explained in the [Stacks](stacks.qd) page, stack functions rely on the strict Markdown concept of a block, an isolated chunk of the document, to determine which elements they handle.&#125; type:&#123;warning&#125;
    &lt;!-- WRONG! --&gt;
    .row alignment:&#123;center&#125; gap:&#123;1cm&#125;
        ##! Left
        Text on left column.

        ##! Right
        Text on right column.


.examplemirror &#123;You might then try using columns. This works, but the concept is not quite right. You do not want a *layout rule*; you just want to reset the document flow back to normal. This is exactly what the container does: it groups elements together according to the natural flow of the document.&#125; type:&#123;warning&#125;
    &lt;!-- Could be improved --&gt;
    .row alignment:&#123;center&#125; gap:&#123;1cm&#125;
        .column cross:&#123;start&#125;
            ##! Left
            Text on left column.

        .column cross:&#123;start&#125;
            ##! Right
            Text on right column.

.examplemirror &#123;The correct way to achieve the desired layout is to use containers. Each container resets the layout rules, allowing the row to treat them as separate blocks of content.&#125;
    &lt;!-- Correct! --&gt;
    .row alignment:&#123;center&#125; gap:&#123;1cm&#125;
        .container
            ##! Left
            Text on left column.

        .container
            ##! Right
            Text on right column.

## Styling

The following optional parameters are available:

| Parameter | Description | Accepts | Default |
|-----------|-------------|---------|---------|
| `width` | Box width constraint. | [`Size`](sizes.qd) | No constraint |
| `height` | Box height constraint. | [`Size`](sizes.qd) | No constraint |
| `fullwidth` | Whether to take up the parent's full width. Overridden by `width`. | [`Boolean`](boolean.qd) | False |
| `foreground` | Text color. | [`Color`](color.qd) | Document's default |
| `background` | Background color. | [`Color`](color.qd) | None |
| `border` | Border color. | [`Color`](color.qd) | Browser's default if `borderwidth` is set, none otherwise |
| `borderwidth` | Border size. | [`Sizes`](sizes.qd) | Browser's default if `border` is set, none otherwise |
| `borderstyle` | Border type. | `normal`, `dashed`, `dotted`, `double` | `normal` if `border` or `borderwidth` is set, none otherwise |
| `margin ` | Whitespace outside the content. | [`Sizes`](sizes.qd) | None |
| `padding ` | Whitespace around the content. | [`Sizes`](sizes.qd) | None |
| `radius` | Corner or border radius. | [`Sizes`](sizes.qd) | None |
| `alignment` | Content alignment. | `start`, `center`, `end` | Browser's default |
| `textalignment` | Text alignment. | `start`, `center`, `end`, `justify` | Browser's default |
| `fontsize`, `fontweight`, `fontstyle`, `fontvariant`, `textdecoration`, `textcase` | Text transformation. See [Advanced text formatting](text.qd) for details. | | None |
| `classname` | Custom CSS class name. | String | None |


.examplemirror
    .container fullwidth:&#123;yes&#125; borderstyle:&#123;dashed&#125; padding:&#123;1cm&#125; fontsize:&#123;medium&#125; fontstyle:&#123;italic&#125; fontvariant:&#123;smallcaps&#125;
        This is a styled container. Fancy, isn't it?

        LayerDocs can truly give life to complex layouts with ease.