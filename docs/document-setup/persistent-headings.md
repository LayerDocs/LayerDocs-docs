# Persistent Headings

.docname &#123;Persistent headings&#125;
.include &#123;docs&#125;

The **`.lastheading &#123;depth&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Document/lastheading.html&#125; function allows you to reference the last heading of a given depth across pages or slides.

When used in combination with [page margin content](page-margin-content.qd), this function enables persistent headings, such as chapter titles or section names, to appear in the page margins.

&gt; Note: `depth` refers to the heading level: `1` for `#`, `2` for `##`, and so on.

.exampleoutput &#123;&#125;
    .pagemargin &#123;topcenter&#125;
        *.lastheading depth:&#123;1&#125;*

    ## Chapter 1

    .repeat &#123;10&#125;
        .loremipsum

Note that headings of lesser depth reset the last reference.

.exampleoutput &#123;&#125; prelude:&#123;In the following example, the depth-2 persistent heading appears when on a depth-2 section (page 2), but resets when entering a depth-1 section (page 3).&#125;
    .pagemargin &#123;topleft&#125;
        *.lastheading depth:&#123;1&#125;*

    .pagemargin &#123;topright&#125;
        *.lastheading depth:&#123;2&#125;*

    ## Chapter 1

    .repeat &#123;6&#125;
        .loremipsum

    ### Subsection

    .loremipsum

    ## Chapter 2

    .repeat &#123;2&#125;
        .loremipsum