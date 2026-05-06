# Inclusion Vs Subdocuments

.docname &#123;Inclusion vs subdocuments&#125;
.include &#123;docs&#125;

LayerDocs offers two ways to include content from other files: **inclusion** and **subdocumenting**. These approaches differ significantly in how they work and what they are best suited for.

## Inclusion

[Inclusion](including-other-layerdocs-files.qd) via `.include` and `.includeall` evaluates other LayerDocs source files.

The function returns the evaluation result, making it appear as if the target file's content was inserted directly in place of the function call. This is an **opaque operation** because the output contains no traces of the original file.

.example
    &gt; `main.qd`:
    &gt;
    &gt; ```markdown
    &gt; Hello 1
    &gt;
    &gt; .include &#123;other.qd&#125;
    &gt; ```

    &gt; `other.qd`:
    &gt;
    &gt; ```markdown
    &gt; Hello 2
    &gt; ```

    .layerdocsoutput
        .html &#123;&lt;p style="opacity: 0.6"&gt;index.html:&lt;/p&gt;&#125;

        ```html
        <p>Hello 1</p>
        <p>Hello 2</p>
        ```

### Context

The execution context is ***shared*** between the main file and the included file.

Any customization, function, variable, and other information declared in the main file will be available in the included file, **and vice versa**.

You can optionally restrict this behavior via the [`sandbox`](including-other-layerdocs-files.qd#context-sharing) parameter.

### Circular references

Circular or recursive inclusions are not allowed and will result in an error.

## Subdocuments

[Subdocuments](subdocuments.qd) are independent and referenceable source files.

Subdocuments render as separate resources, and LayerDocs stores links to them in a graph structure.

.example
    &gt; `main.qd`:
    &gt;
    &gt; ```markdown
    &gt; Hello 1
    &gt;
    &gt; [Other](other.qd)
    &gt; ```

    &gt; `other.qd`:
    &gt;
    &gt; ```markdown
    &gt; Hello 2
    &gt; ```

    .layerdocsoutput
        .html &#123;&lt;p style="opacity: 0.6"&gt;index.html:&lt;/p&gt;&#125;

        ```html
        <p>Hello 1</p>
        <p><a href="./other">Other</a></p>
        ```

        .html &#123;&lt;p style="opacity: 0.6"&gt;other.html:&lt;/p&gt;&#125;

        ```html
        <p>Hello 2</p>
        ```

### Context

When evaluating subdocuments, the context is ***inherited*** from the referrer.

Any customization and declaration made in the referrer will be available in the subdocument, but not the other way around.

### Circular references

Each subdocument is evaluated only once, so circular and recursive references are allowed.