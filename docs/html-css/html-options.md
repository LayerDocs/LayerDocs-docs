# Html Options

.docname &#123;HTML options&#125;
.include &#123;docs&#125;

The **`.htmloptions`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Html/htmlOptions.html&#125; function configures HTML-specific generation settings.

```markdown
.htmloptions baseurl:{https://example.com}
```

## Base URL

The `baseurl` parameter sets the base URL of the generated website for SEO purposes. When specified:

- A `&lt;link rel="canonical"&gt;` tag is added to each page, helping search engines identify the preferred URL for each [subdocument](subdocuments.qd).
- A `sitemap.xml` is generated if there's at least one subdocument.

```markdown
.htmloptions baseurl:{https://example.com}
```

&gt; Tip: Setting a base URL is recommended when publishing a LayerDocs document as a website, especially for `docs` projects with multiple subdocuments.