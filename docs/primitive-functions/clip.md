# Clip

.docname &#123;Clip&#125;
.include &#123;docs&#125;

The **`.clip &#123;shape&#125;`** block function clips its content to a defined shape.

Supported shapes:
- `circle`

.examplemirror
    

    .clip &#123;circle&#125;
        

## Figures

When clipping a [figure](figure.qd), only the content is affected, leaving the caption intact:

.examplemirror
    

    .clip &#123;circle&#125;
        

## General content

Clipping works with any content, not just images. Here a [container](container.qd) is used:

.examplemirror
    .clip &#123;circle&#125;
        .container padding:&#123;2cm&#125; background:&#123;teal&#125;
            #! Hello!