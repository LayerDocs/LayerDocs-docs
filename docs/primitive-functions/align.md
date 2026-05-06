# Align

.docname &#123;Align&#125;
.include &#123;docs&#125;

The **`.align`** block function sets the horizontal alignment of content, including multiline text alignment.

The primary parameter accepts the alignment type: `start`, `center`, or `end`. For convenience, **`.center`** is a shorthand for `.align &#123;center&#125;`.

.examplemirror
    .align &#123;end&#125;
        #! My document

    .loremipsum

.examplemirror
    .center
        #! My document

    .loremipsum