# Page Margin Content

.docname &#123;Page margin content&#125;
.include &#123;docs&#125;

The **`.pagemargin`** function displays content on each page in a fixed position along its [margins](page-format.qd#content-area).

- In `paged` documents, a special area of each page is reserved for margins:

  !(_*600)[Paged margin areas](page-margin-content/margin-areas.png)

  &gt; Credits: [Paged.js](https://pagedjs.org/documentation/7-generated-content-in-margin-boxes/#margin-boxes-of-a-page)

- In `plain` and `slides` documents, content set on margins could potentially overlap page content.

- In `plain` documents, where the concept of *page* does not exist, page margins are displayed once per document.

The function accepts an optional `position` and a body argument `content`:

| Parameter  | Description          | Accepts                                                                                                                                                                                                                                                                                                                                                                                        |
|------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `position` | Page area to target. | `topleftcorner`, `topleft`, `topcenter`, `topright`, `toprightcorner`, `righttop`, `rightmiddle`, `rightbottom`, `bottomrightcorner`, `bottomright`, `bottomcenter`, `bottomleft`, `bottomleftcorner`, `leftbottom`, `leftmiddle`, `lefttop`, *`topoutsidecorner`, `topoutside`, `topinsidecorner`, `topinside`, `bottomoutsidecorner`, `bottomoutside`, `bottominsidecorner`, `bottominside`* |
| `content`  | Element to display.  | [Block content](markdown-content.qd#block-content)                                                                                                                                                                                                                                                                                                                                             |

.exampleoutput &#123;&#125;
    .pagemargin &#123;topright&#125;
        **This** is a margin content.

## Scoped margins

When used in `paged` and `slides` documents, page margin content takes effect only from the page where it is declared onward. This allows for different page margin settings in different parts of the document.

.exampleoutput &#123;&#125;
    .pagemargin &#123;topcenter&#125;
        On all pages

    ## First page

    ## Second page

    .pagemargin &#123;topleft&#125;
        From second page

    ## Third page

Overwriting the page margin again changes it from that point onward.

.exampleoutput &#123;&#125;
    ...

    ## Third page

    .pagemargin &#123;topcenter&#125;
        From third page

## Mirror positions

Along with fixed positions such as `topright` or `bottomleft`, LayerDocs also supports *mirror positions*, which adapt based on whether the page is left (even number) or right (odd number).

Mirror positions are marked in italics in the table above and refer to `outside` and `inside` areas:

.exampleoutput &#123;&#125;
    .pagemargin &#123;topoutside&#125;
        **This** is a margin content.

## Footer

Most layout themes associate the `bottomcenter` margin with the document footer and style it differently. For instance, different blocks may be displayed in a row. Footers are particularly common in `slides` documents.

The **`.footer`** function is a shorthand for `.pagemargin &#123;bottomcenter&#125;`.

.exampleoutput &#123;&#125;
    .theme &#123;beaver&#125; layout:&#123;beamer&#125;

    .footer
        .docauthor

        **.docname**

        [GitHub](https://github.com/SatyamPote/layerdocs)

## Page counter

A page margin can host a page counter. See [Page counter](page-counter.qd) for more information.