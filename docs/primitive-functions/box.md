# Box

.docname &#123;Box&#125;
.include &#123;docs&#125;

The **`.box`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Layout/box.html&#125; function creates a special box container with an inline *title* and block *content*.

.examplemirror
    .box &#123;Box title&#125;
        Welcome to the **LayerDocs wiki**!
        Here you'll learn how to get started with your first document.

You can omit the title:

.examplemirror
    .box
        Welcome to the **LayerDocs wiki**!
        Here you'll learn how to get started with your first document.

## Box types

A box can have a type, which defaults to `callout` if not specified. The available types are:

- `callout`
- `tip`
- `note`
- `warning`
- `error`

.examplemirror
    .box &#123;Box title&#125; type:&#123;tip&#125;
        This is a tip box!

    .box &#123;Box title&#125; type:&#123;note&#125;
        This is a note box!

    .box &#123;Box title&#125; type:&#123;warning&#125;
        This is a warning box!

## Automatic localization

If you omit the title, set [`.doclang`](document-metadata.qd), and the locale is supported, the box title is automatically [localized](localization.qd).

.examplemirror
    .box type:&#123;tip&#125;
        This is a tip box!

    .box type:&#123;note&#125;
        This is a note box!

    .box type:&#123;warning&#125;
        This is a warning box!

&gt; Tip: Boxes and [typed quotes](quote-types.qd) are two different ways to create typed alerts.