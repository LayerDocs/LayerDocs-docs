# Float

.docname &#123;Float&#125;
.include &#123;docs&#125;

The **`.float &#123;alignment&#125;`** function transforms any content into a floating element that breaks the normal flow and allows subsequent content to wrap around it.

The `alignment` parameter accepts `start` or `end`.

.examplemirror
    .float &#123;start&#125;
        !(70%)[Icon](assets/icon.svg)

    .loremipsum

In addition to images, you can make any other content float.

.examplemirror
    .float &#123;end&#125;
        .box &#123;Hello&#125; type:&#123;warning&#125;
            Floating!

    .loremipsum