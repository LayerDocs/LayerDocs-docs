# Pipeline   Rendering

.docname &#123;Pipeline - Rendering&#125;
.include &#123;docs&#125;

&gt; Main packages: .repolink &#123;`core.rendering`&#125; &#123;tree/main/layerdocs-core/src/main/kotlin/com/layerdocs/core/rendering&#125;
&gt;
&gt; Rendering modules: .repolink &#123;`layerdocs-html`&#125; &#123;tree/main/layerdocs-html&#125;, .repolink &#123;`layerdocs-plaintext`&#125; &#123;tree/main/layerdocs-plaintext&#125;

Once the AST is fully generated and enriched, it is time to translate it into a target format, such as HTML.

This translation is performed via a depth-first traversal of the AST, starting from the root. Each visit to a node produces some output (in the case of HTML, an element tag) which, ideally in a one-to-one fashion, translates the information stored by the node into the target format.

To ensure scalability, LayerDocs locates each rendering target in external modules, such as `layerdocs-html`, which can be plugged into the core architecture.

---

Example Markdown input:

```markdown
## Title

This is **bold** and _italic_ text.

- Item 1
- Item 2
```

Output HTML:

```html
<h1>Title</h1>
<p>This is <strong>bold</strong> and <em>italic</em> text.</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```