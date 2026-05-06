# Bibliography

.docname &#123;Bibliography&#125;
.include &#123;docs&#125;

LayerDocs provides CSL-powered bibliography support for the following bibliography formats:
- [BibTeX](https://www.bibtex.org) (`.bib`)
- CSL JSON (`.json`)
- YAML (`.yaml`/`.yml`)
- EndNote (`.enl`)
- RIS (`.ris`)

To get started, call the **`.bibliography &#123;file&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Bibliography/bibliography.html&#125; function, where `file` is the path to your bibliography file, with extension. You can find some BibTeX examples [here](https://www.bibtex.com/e/entry-types/).

.examplemirror
  .bibliography &#123;bibliography/file.bib&#125;

## Citations

You can cite one or more entries from the bibliography using the **`.cite &#123;key&#125;`** function.

Consider the following BibTeX entries:

```text
@article{einstein,
  author = "Albert Einstein",
  ...
}

@book{hawking,
  author = "Stephen Hawking",
  ...
}
```

You can cite them using their keys. Multiple keys can be specified as a comma-separated list
to produce a single combined citation label, whose format depends on the active [citation style](#style).

.examplemirror
    Einstein's publication .cite &#123;einstein&#125; in 1905 revolutionized the field of physics.
    Similarly, Hawking's book .cite &#123;hawking&#125; has had a profound impact
    on our understanding of cosmology and black holes.

    These works .cite &#123;einstein, hawking&#125; are foundational to modern physics.

## Style

The optional `style` parameter configures the look and format of the bibliography and its citation references.
It accepts a [CSL](https://citationstyles.org) (Citation Style Language) style identifier.
LayerDocs ships with a selection of citation styles from the [CSL Style Repository](https://github.com/citation-style-language/styles),
including `ieee` (default), `apa`, `chicago-author-date`, `nature`, `modern-language-association`, and many more.

```markdown
.bibliography {bibliography.bib} style:{apa}
```

.collapse &#123;Full list of supported styles&#125;
    .code lang:&#123;text&#125; linenumbers:&#123;no&#125;
        .read &#123;../layerdocs-core/csl-styles.txt&#125;

## Title

By default, the title is [localized](localization.qd) to the current locale set via `.doclang`, if supported. You can set a custom title using the `title` parameter.

.examplemirror
    .bibliography &#123;bibliography/file.bib&#125; title:&#123;My bibliography&#125;

### Heading options

The heading that precedes the bibliography can be further customized with the following parameters:

| Parameter       | Description                                                                                                                             | Accepts | Default |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|---------|---------|
| `headingdepth`  | Depth of the heading that precedes the bibliography.                                                                                    | Integer | `1`     |
| `breakpage`     | Whether the heading triggers an automatic [page break](page-break.qd#automatic-break).                                                  | Boolean | `yes`   |
| `numberheading` | Whether the heading should be [numbered](numbering.qd) and have its position tracked in the document hierarchy.                         | Boolean | `no`    |
| `indexheading`  | Whether the heading should be included in the document's [table of contents](table-of-contents.qd). Implicitly enables `numberheading`. | Boolean | `no`    |

For example, depending on the current [auto page break](page-break.qd#automatic-break) configuration, the title may cause a page break. You can prevent this:

```markdown
.bibliography {file.bib} title:{My bibliography} breakpage:{no}
```