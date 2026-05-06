# Themes

.docname &#123;Themes&#125;
.include &#123;docs&#125;

A theme defines the look and feel of your LayerDocs document. More themes are planned for the future.

Themes are split into two groups: *color* themes, which define the color scheme of a document, and *layout* themes, which set the general structural rules of the layout. Combining them allows you to create a document that truly stands out.

You can set a theme via the **`.theme &#123;colortheme&#125; layout:&#123;layouttheme&#125;`** function.

### Color themes
- `paperwhite` (default)
- `darko`
- `galactic`
- `beaver`

### Layout themes
- `latex` (default)
- `hyperlegible`
- `minimal`
- `beamer`

---

Some suggested combinations are:
- `paperwhite+latex` (LaTeX look, great for `paged` documents)
- `galactic+hyperlegible` (this wiki)
- `darko+minimal`
- `beaver+beamer` (Beamer look, great for academic-style presentations)

## Contributing

.repolink &#123;Theme contributions&#125; &#123;tree/main/layerdocs-html/src/main/scss&#125; are welcome.

Please make sure themes work well with all three document types before submitting. The .repolink &#123;Mock document&#125; &#123;tree/main/mock#readme&#125; is a great way to test themes against a variety of different elements.