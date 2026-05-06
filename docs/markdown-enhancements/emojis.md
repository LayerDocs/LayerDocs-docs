# Emojis

.docname &#123;Emojis&#125;
.include &#123;docs&#125;

LayerDocs documents support emojis through direct insertion or shortcode functions.

## Direct insertion

You can insert emoji characters directly into your source code:

.examplemirror
    LayerDocs's logo is not a planet 🪐  
    I love LayerDocs! 😍

## Shortcode function

You can use the `.emoji` .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Emoji/emoji.html&#125; function with a shortcode:

.examplemirror
    LayerDocs's logo is not a planet .emoji &#123;ringed-planet&#125;  
    I love LayerDocs! .emoji &#123;heart-eyes&#125;

&gt; [!NOTE]
&gt; During compilation, the first call to `.emoji` in a document loads the entire emoji set, which may slightly increase compilation time. Subsequent calls are faster.

For a complete list of supported shortcodes, refer to the [Emoji Cheat Sheet](https://layerdocs.com/docs/emoji-list/).

### Variants

| Type | Result | Code |
|---|:---:|---|
| Simple shortcode | 😉 | `.emoji &#123;wink&#125;` |
| One skin tone | 👋🏾 | `.emoji &#123;waving-hand~medium-dark&#125;` |
| Two skin tones | 🧑🏼‍🤝‍🧑🏾 | `.emoji &#123;people-holding-hands~medium-light,medium-dark&#125;` |

### Credits

Shortcode support is provided by [Emoji.kt](https://github.com/kosi-libs/Emoji.kt). Thanks!