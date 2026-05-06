# Quote Types

.docname &#123;Quote types&#125;
.include &#123;docs&#125;

If a blockquote begins with `Tip:`, `Note:`, `Warning:`, or `Important:`, LayerDocs assigns that type to the quote. The prefix is stripped off and the element is styled accordingly.

.examplemirror
    &gt; Note: Some useful information to keep in mind.

For compatibility purposes, the GitHub-style syntax `[!NOTE]`, `[!TIP]`, `[!WARNING]`, and `[!IMPORTANT]` is also supported.

.examplemirror
    &gt; [!NOTE]
    &gt; Some useful information to keep in mind.

If the document's locale is set via [`.doclang`](document-metadata.qd) and the locale is supported, a localized prefix is displayed and styled according to the current layout theme.

!(550)[Minimal theme](quote-types/minimal-theme.png "Localized prefix in the 'minimal' layout theme")

!(650)[Latex theme](quote-types/latex-theme.png "Localized prefix in the 'latex' layout theme")

&gt; Tip: Quotes and [boxes](box.qd) are different ways to achieve typed alerts.