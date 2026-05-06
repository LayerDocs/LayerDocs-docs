# Book Cover

.docname &#123;Book cover&#125;
.include &#123;docs&#125;

A common pattern for [paged documents](document-types.qd) is a full-bleed cover page, where an image spans the entire first page. This is achieved by combining:
- [`.pageformat`](page-format.qd) to remove margins on the first page;
- [`.container`](container.qd) to hold a full-width image.

.exampleoutput &#123;!(500)[Book cover](book-cover/result.png)&#125;
    .doctype &#123;paged&#125;

    .pageformat pages:&#123;..1&#125; margin:&#123;0&#125;

    .container fullwidth:&#123;yes&#125; margin:&#123;0&#125;
        !(100%)[Cover](cover.png)

    # Introduction
    
    ...