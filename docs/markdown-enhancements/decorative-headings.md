# Decorative Headings

.docname &#123;Decorative headings&#125;
.include &#123;docs&#125;

To prevent a heading from being numbered and from appearing in the [table of contents](table-of-contents.qd), append a `!` after the last `#` sign. For example: `#!`, `##!`, `###!`, etc.

.exampleoutput &#123;&#125;
    ```markdown
    .center
        #! My document

    ## Introduction

    .loremipsum
    ```

&gt; Note: A heading with all optional flags disabled via [`.heading`](headings.qd) is equivalent to a decorative heading:
&gt;
&gt; ```markdown
&gt; .heading &#123;My decorative heading&#125; depth:&#123;2&#125; numbered:&#123;no&#125; indexed:&#123;no&#125; breakpage:&#123;no&#125;
&gt; ```