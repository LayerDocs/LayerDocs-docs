# Localization

.docname &#123;Localization&#125;
.include &#123;docs&#125;

LayerDocs supports **string localization** out of the box.

The first step is to set the document language via [**`.doclang &#123;locale&#125;`**](document-metadata.qd). Call this function among the other document metadata functions (such as `.docname`, `.docauthor`, etc.).

The `locale` value can be either a case-insensitive English full name (e.g., `English`, `Italian`, `French (Canada)`) or an IETF BCP 47 language tag (e.g., `en`, `it`, `fr-CA`).

## Built-in localization

LayerDocs's built-in libraries expose localization tables that localize elements such as [quote types](quote-types.qd), [numbering](numbering.qd) captions, and [table of contents](table-of-contents.qd) title.

&gt; Note: The currently supported locales are **Chinese, English, French, German, Italian, Japanese, Polish, Portuguese, Russian, Ukrainian**.
&gt;
&gt; Contributions to support new locales are welcome:
&gt; - [stdlib](https://github.com/SatyamPote/layerdocs/blob/main/layerdocs-stdlib/src/main/resources/lib/localization.qd?)
&gt; - [paperlib](https://github.com/SatyamPote/layerdocs/blob/main/layerdocs-libs/src/main/resources/paper.qd?)

## Creating your own localized strings

.examplemirror &#123;Imagine a function `\.theorem` that displays **`Theorem.`** before its content. You could define it as follows:&#125; type:&#123;warning&#125;
    .function &#123;theorem&#125;
        **Theorem.**

    .theorem This is my theorem

This works well for your own English document, but what if you are making a library for everyone to use? You would need to support multiple languages. This is where *localization tables* come in.

The `.localization &#123;name&#125;` function defines a new **localization table** associated with a unique name. Its body parameter accepts a particular Markdown list that, in LayerDocs, is called a [*dictionary*](dictionary.qd).

This localization dictionary exposes key-value pairs for each locale that you intend to support. The locale names follow the same rules as those from `.doclang`, meaning they can be full names or tags. As long as `.doclang` is set, you can access the localized string via `.localize &#123;table:key&#125;`, in this case `.localize &#123;mylib:theorem&#125;`.

.exampleoutput &#123;**Theorem.** This is my theorem&#125; prelude:&#123;The previous function would now look like this:&#125;
    .localization name:&#123;mylib&#125;
        - English
          - theorem: Theorem
        - Italian
          - theorem: Teorema

    .function &#123;theorem&#125;
        **.localize &#123;mylib:theorem&#125;.**

    .theorem This is my theorem

## Extending a built-in localization table

If your locale is not yet supported by LayerDocs and you are unable to contribute to the project, you can still extend the built-in localization tables for your document.

When calling `.localization &#123;name&#125;`, an additional **`merge:&#123;yes&#125;`** argument causes the localization table with the given name to be extended with the new user-provided one. Any conflicting entries will be replaced by the new ones.

For instance, [typed boxes](box.qd) feature a localized title by default, such as *Warning* for a warning-typed box. If the document locale is not supported, the title will be missing. To extend the built-in localization with box titles in Canadian French, use the following approach:

```yaml
.localization {std} merge:{yes}
    - fr-CA
      - warning: Avertissement
      - error: Erreur
      ...
```

After that, assuming Canadian French is set in `.doclang`, the new entries will be available to the `.box` function.

Built-in table names and entries are listed in this page's [*Built-in localization*](#built-in-localization).