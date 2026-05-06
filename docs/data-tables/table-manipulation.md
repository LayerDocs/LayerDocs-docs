# Table Manipulation

.docname &#123;Table manipulation&#125;
.include &#123;docs&#125;

This page describes table manipulation functions .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.TableComputation&#125; that allow you to sort, filter, and compute values from any kind of table, including plain Markdown ones and those [loaded from CSV](file-data.qd#table-from-csv).

.examplemirror
    .tablesort &#123;2&#125; order:&#123;descending&#125;
        .csv &#123;assets/people.csv&#125;

## Sort rows

The **`.tablesort`** function sorts a table based on the values of a specific column.

| Parameter | Description                           | Accepts                             |
|-----------|---------------------------------------|-------------------------------------|
| `column`  | Index of the column, starting from 1. | 1 to number of columns.             |
| `order`   | Sorting order.                        | `ascending` (default), `descending` |

.examplemirror
    .tablesort &#123;2&#125; order:&#123;descending&#125;
        | Name | Age | City |
        |------|-----|------|
        | John | 25  | NY   |
        | Lisa | 32  | LA   |
        | Mike | 19  | CHI  |

.examplemirror &#123;The sorting follows the most natural way for humans to sort strings (*alphanumeric* sorting):&#125;
    .tablesort &#123;2&#125;
        |   Item   | Price |
        |----------|-------|
        | Pencil   | $1    |
        | Eraser   | $0.50 |
        | Backpack | $20   |
        | Notebook | $3    |

## Filter rows

The **`.tablefilter`** function keeps or removes rows based on the values of a specific column.

| Parameter | Description                                                                                                           | Accepts                                                               |
|-----------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| `column`  | Index of the column, starting from 1.                                                                                 | 1 to number of columns.                                               |
| `filter`  | Lambda that returns whether each row should be kept, with the value of its cell in the corresponding column as input. | [`Dynamic`](typing.qd) -&gt; [`Boolean`](boolean.qd) [lambda](lambda.qd) |

.examplemirror
    .tablefilter &#123;2&#125; &#123;@lambda x: .x::isgreater &#123;20&#125;&#125;
        | Name | Age | City |
        |------|-----|------|
        | John | 25  | NY   |
        | Lisa | 32  | LA   |
        | Mike | 19  | CHI  |

## Compute/aggregate columns

The **`.tablecompute`** function computes the cells in a column and appends the result to a new row.

| Parameter | Description                                                                                      | Accepts                                                                 |
|-----------|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| `column`  | Index of the column, starting from 1.                                                            | 1 to number of columns.                                                 |
| `compute` | Lambda that returns the computed value, with the collection of the cells in the column as input. | [`Iterable`](iterable.qd) -&gt; [`Dynamic`](typing.qd) [lambda](lambda.qd) |

See [*Iterable*](iterable.qd) to learn more about available operations on collections.

.examplemirror
    .tablecompute &#123;2&#125; &#123;@lambda x: .x::average::round&#125;
        | Name | Age | City |
        |------|-----|------|
        | John | 25  | NY   |
        | Lisa | 32  | LA   |
        | Mike | 19  | CHI  |

## Composition

You can chain multiple table operations. The order of operations goes from inner to outer:

.examplemirror
    .tablecompute &#123;2&#125; &#123;@lambda x: .x::average::round&#125;
        .tablesort &#123;2&#125;
            | Name | Age | City |
            |------|-----|------|
            | John | 25  | NY   |
            | Lisa | 32  | LA   |
            | Mike | 19  | CHI  |

## Retrieve columns

The **`.tablecolumn`** function extracts values from the cells of a specific column and returns them as an [Iterable](iterable.qd).

| Parameter | Description                           | Accepts                 |
|-----------|---------------------------------------|-------------------------|
| `column`  | Index of the column, starting from 1. | 1 to number of columns. |

.examplemirror
    .var &#123;values&#125;
        .tablecolumn &#123;2&#125;
            | Name | Age | City |
            |------|-----|------|
            | John | 25  | NY   |
            | Lisa | 32  | LA   |
            | Mike | 19  | CHI  |

    .values::first

## Bulk-retrieve columns

Additionally, the **`.tablecolumns`** function returns all the columns from the table as an iterable of iterables. This is more efficient when you need to access multiple columns from the same table, compared to calling `.tablecolumn` multiple times.

.examplemirror
    .var &#123;columns&#125;
        .tablecolumns
            | Name | Age | City |
            |------|-----|------|
            | John | 25  | NY   |
            | Lisa | 32  | LA   |
            | Mike | 19  | CHI  |

    .foreach &#123;.columns&#125;
        col:
        .col::first