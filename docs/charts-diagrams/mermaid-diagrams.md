# Mermaid Diagrams

.docname &#123;Mermaid diagrams&#125;
.include &#123;docs&#125;

LayerDocs offers full Mermaid interoperability via the **`.mermaid`** block function, bringing Mermaid diagrams and charts into your documents.

The block parameter accepts the Mermaid code content. Refer to [Mermaid's documentation](https://mermaid.js.org/intro/) for information about its powerful syntax to create flowcharts, pie charts, class and sequence diagrams, and much more.

.examplemirror
    .mermaid
        flowchart TD
            A([Start]) --&gt; B[Enter username and password]
            B --&gt; C&#123;Correct?&#125;
            C -- Yes --&gt; D[Redirect to dashboard]
            C -- No --&gt; E[Show error message]
            D --&gt; F([End])
            E --&gt; F

The Mermaid code accepts LayerDocs function calls.

.examplemirror
    .var &#123;n1&#125; &#123;2&#125;
    .var &#123;n2&#125; &#123;3&#125;

    .mermaid
        flowchart TD
            A([Start]) --&gt; B&#123;.n1 + .n2 = ?&#125;
            B -- .sum &#123;.n1&#125; &#123;.n2&#125; --&gt; C([Correct])

## Diagram from file

Since function calls can be used inside the block argument, you can leverage use the [**`.read`**](file-data.qd) function to load text from a file.

```markdown
.mermaid
    .read {chart.mmd}
```

## Diagram caption and numbering

An optional `caption` argument assigns a caption to the diagram and lets the block be numbered according to the document's *figure* [numbering](numbering.qd).

.exampleoutput &#123;&#125;
    .mermaid caption:&#123;My Mermaid diagram.&#125;
        flowchart TD
            A([Start]) --&gt; B[Enter username and password]
            B --&gt; C&#123;Correct?&#125;
            C -- Yes --&gt; D[Redirect to dashboard]
            C -- No --&gt; E[Show error message]
            D --&gt; F([End])
            E --&gt; F

.exampleoutput &#123;&#125; prelude:&#123;To number the diagram without a caption, pass an empty string as the caption value.&#125;
    .mermaid caption:&#123;&#125;
        flowchart TD
            A([Start]) --&gt; B[Enter username and password]
            B --&gt; C&#123;Correct?&#125;
            C -- Yes --&gt; D[Redirect to dashboard]
            C -- No --&gt; E[Show error message]
            D --&gt; F([End])
            E --&gt; F