# File Data

.docname &#123;File data&#125;
.include &#123;docs&#125;

LayerDocs provides functions to retrieve information from files.

&gt; [!NOTE]
&gt; The following functions accept a `path` parameter, which can be either a path relative to the main source file's location or an absolute path. Use a slash (`/`) as the path separator, regardless of the operating system.

## File text content

The **`.read &#123;path&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Data/read.html&#125; function returns the string content of the specified file.

An optional `lines` parameter of type [`Range`](range.qd) selects a specific range of lines (inclusive, starting from 1). An invalid or out-of-bounds range causes an error. If you do not provide a range, LayerDocs reads the entire file.

```markdown
.read {myfile.txt} lines:{3..8}
```

Open ranges work as follows:

- If the range is open on the left end (`..N`), LayerDocs reads from the beginning of the file to line `N`.
- If the range is open on the right end (`N..`), LayerDocs reads from line `N` to the end of the file.
- If the range is open on both ends (`..`), LayerDocs reads the entire file.

.examplemirror &#123;`\.read` is particularly useful in combination with functions such as [`\.code`](code.qd), [`\.mermaid`](mermaid-diagrams.qd) and [`\.css`](css.qd) to load code snippets from external files.&#125;
    .code
        .read &#123;assets/point.ts&#125;

## Listing files in a directory

The **`.listfiles &#123;path&#125; &#123;sortby?&#125; &#123;order?&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Data/listfiles.html&#125; function returns an [iterable](iterable.qd) of the files in a directory. The result is unordered by default, but you can sort it by name or date.

Like any other collection, you can iterate over the result or supply it to other functions. For example, you can perform automatic bulk inclusions via [`.includeall`](including-other-layerdocs-files.qd):

```markdown
.includeall {.listfiles {somedirectory} sortby:{name}}
```

## Getting a file name

The **`.filename &#123;path&#125; &#123;extension?&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Data/filename.html&#125; function returns the file name from a given file path. The optional `extension` boolean parameter controls whether the file extension is included in the result.

.examplemirror
    .filename &#123;assets/point.ts&#125; extension:&#123;no&#125;

## Table from CSV

The **`.csv &#123;path&#125; &#123;mode?&#125; &#123;caption?&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Data/csv.html&#125; function loads a table from a CSV file. The first row of the CSV file always serves as the header row.

Tables loaded from CSV can also be manipulated. See [*Table manipulation*](table-manipulation.qd) for more information.

.examplemirror
    .csv &#123;assets/people.csv&#125;

You can also provide a caption.

.examplemirror
    .csv &#123;assets/people.csv&#125; caption:&#123;People data.&#125;

The `mode` parameter controls how the CSV file is parsed. It defaults to `plain`, which treats all cell content as plain text. If set to `markdown`, LayerDocs parses cell content as inline LayerDocs source code, allowing formatting, rich content, and inline function calls within the CSV.

```markdown
Name,  Favorite drink, Age *(as of 2026)*
Alice, Coffee,         .subtract {2026} {1995}
Bob,   *Pepsi*,        .subtract {2026} {2001}
```

.examplemirror
    .csv &#123;assets/people2.csv&#125; mode:&#123;markdown&#125;