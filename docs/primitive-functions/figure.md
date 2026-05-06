# Figure

.docname &#123;Figure&#125;
.include &#123;docs&#125;

LayerDocs introduces the concept of **figure**, which is missing in base Markdown. A figure wraps an image and centers it horizontally. When a paragraph contains only a single image (in other words, the image is isolated from other content), LayerDocs automatically converts it into a figure.

.examplemirror
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

    

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

&gt; Tip: The [image size](image-size.qd) feature works on figures as well.

## Caption

If the image contains a *title* attribute (wrapped in double quotes, single quotes, or parentheses), LayerDocs displays it as a caption.

.examplemirror
    

&gt; Tip: Figures can be **numbered**. See [Numbering](numbering.qd) for more information.