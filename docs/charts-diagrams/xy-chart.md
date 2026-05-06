# Xy Chart

.docname &#123;XY chart&#125;
.include &#123;docs&#125;

The **`.xychart`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Mermaid/xychart.html&#125; function allows you to plot 2D line and bar charts in a pure, flexible LayerDocs fashion, through the power of [Mermaid diagrams](mermaid-diagrams.qd).

All parameters, except for `values`, are optional.

| Parameter | Description                                                                   | Accepts                                                                                                      |
|-----------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `lines`   | Whether to draw lines (defaults to true).                                     | [Boolean](boolean.qd)                                                                                        |
| `bars`    | Whether to draw bars (defaults to false).                                     | [Boolean](boolean.qd)                                                                                        |
| `x`       | Label for the X axis.                                                         | String                                                                                                       |
| `xrange`  | Numerical range for the X axis. Can be open-ended. Incompatible with `xtags`. | [Range](range.qd)                                                                                            |
| `xtags`   | Categorical tags for the X axis. Incompatible with `xrange`.                  | [Iterable](iterable.qd)                                                                                      |
| `y`       | Label for the Y axis.                                                         | String                                                                                                       |
| `yrange`  | Range for the Y axis. Can be open-ended.                                      | [Range](range.qd)                                                                                            |
| `caption` | Caption. If present, the chart is [numbered](numbering.qd) as a figure.       | String                                                                                                       |
| `values`  | Y values to plot.                                                             | [Iterable](iterable.qd) of points (single line), or iterable of iterables of points (multiple lines)         |

## Axis ranges

`xrange` and `yrange` define the boundaries of the visible area of the chart through the usual `x..y` [Range](range.qd) syntax.

The range may also be open on either end, or both:
- If open on the left end, the range starts from the minimum value among the plotted points.
- If open on the right end, the range ends at the maximum value among the plotted points.

For instance, `..` (infinite) is the default range, which shows the area between the minimum and maximum values.

## Possible input sources

### From static list (single line)

You can represent `values` as a Markdown list, just like all iterables.

.examplemirror
    .xychart bars:&#123;yes&#125; x:&#123;Months&#125; y:&#123;Revenue&#125; yrange:&#123;100..&#125;
        - 250
        - 500
        - 350
        - 450
        - 400
        - 500
        - 600

### From static list (multiple lines)

In case of nested lists (iterable of iterables), multiple lines will be plotted:

.examplemirror
    .xychart x:&#123;Months&#125; y:&#123;Revenue&#125;
        - - 250
          - 500
          - 350
          - 450
          - 400

        - - 400
          - 150
          - 200
          - 400
          - 450

### From iterations

LayerDocs [loops](loops.qd) return an iterable containing the result of each iteration, making them a suitable input for `values`, especially in combination with [math](math.qd) functions.

.examplemirror
    .xychart
        .repeat &#123;100&#125;
            .1::pow &#123;2&#125;::divide &#123;100&#125;

        .repeat &#123;100&#125;
            .1::logn::multiply &#123;10&#125;

### From CSV/table

[Table manipulation](table-manipulation.qd) functions such as [`.tablecolumn`](table-manipulation.qd#retrieve-columns) can extract values from the columns of a table as iterables.

.examplemirror
    .xychart
        .tablecolumn &#123;2&#125;
            .csv &#123;assets/sales.csv&#125;

If you need to access multiple columns from the same table, consider calling `.tablecolumns` for efficiency, which returns a collection of columns. You can then perform any [`Iterable`](iterable.qd) operation on it.

.examplemirror &#123;In the following example, the chart displays two lines: one for the second and one for the third column of the CSV. Additionally, the first column of the table is used as a set of categorical tags for the X axis.&#125;
    .var &#123;columns&#125;
        .tablecolumns
            .csv &#123;assets/sales.csv&#125;

    .xychart xtags:&#123;.columns::first&#125; x:&#123;Years&#125; y:&#123;Sales&#125;
        .columns::second
        .columns::third