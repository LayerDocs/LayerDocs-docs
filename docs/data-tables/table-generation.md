# Table Generation

.docname &#123;Table generation&#125;
.include &#123;docs&#125;

## Table generation by columns

The **`.table`** function takes a single block argument which is an [iterable](iterable.qd) of **tables**.
The result of the call is a **new table** that combines the supplied tables **by columns**.

In the following example, `.repeat` is used, which, like other supported [loops](loops.qd), returns the results from each iteration as an iterable.

.examplemirror
    .table
        .repeat &#123;3&#125;
            n:
            | Column .n |
            |-----------|
            | Cell .n:1 |
            | Cell .n:2 |
            | Cell .n:3 |

## Table generation by rows

The **`.tablebyrows`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.TableComputation/tablebyrows.html&#125; function takes two arguments: an optional iterable of headers and an iterable of rows.

.examplemirror
    .var &#123;headers&#125;
       - Name
       - Age
       - City

    .tablebyrows &#123;.headers&#125;
        - - John
          - 25
          - NY
        - - Lisa
          - 32
          - LA
        - - Mike
          - 19
          - CHI

.examplemirror &#123;If no headers are provided, the table will have no header row. Additionally, dynamic content can be used to generate cells:&#125;
    .tablebyrows
        .repeat &#123;3&#125;
            y:
            .repeat &#123;3&#125;
                x:
                Cell .x:.y