# Multi Column Layout

.docname &#123;Multi-column layout&#125;
.include &#123;docs&#125;

[**`.pageformat &#123;columns&#125;`**](page-format.qd) applies a multi-column layout to each page when the value of `columns` is higher than 1.

.exampleoutput &#123;&#125;
    .pageformat columns:&#123;2&#125;

## Full-span content

In a multi-column layout, all elements except for level 1-3 headings render within their own column.
You can set some content to span across all columns of the layout by using the **`.fullspan`** block function.

.exampleoutput &#123;&#125;
    .fullspan
        