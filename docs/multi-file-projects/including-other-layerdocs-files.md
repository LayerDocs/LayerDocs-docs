# Including Other Layerdocs Files

.docname &#123;Including other LayerDocs files&#125;
.include &#123;docs&#125;

The **`.include &#123;file&#125; &#123;sandbox?&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Ecosystem/include.html&#125; function loads and evaluates an external LayerDocs source file.

The parameter accepts a string that represents the **path to the target file**, which can be relative to the main source file's location or absolute.

&gt; To include external libraries, refer to [*Importing external libraries*](importing-external-libraries.qd).

.example
    &gt; `file.qd`
    &gt; ```markdown
    &gt; ### Hello LayerDocs
    &gt;
    &gt; This is external content.
    &gt; ```

    &gt; `main.qd`
    &gt; ```markdown
    &gt; .include &#123;file.qd&#125;
    &gt; ```

    .layerdocsoutput
        ### Hello LayerDocs

        This is external content.

&gt; Important: Circular dependency results in an error.

&gt; [!NOTE]
&gt;
&gt; Do not confuse inclusion with [subdocuments](subdocuments.qd).
&gt; See [*Inclusion vs. subdocuments*](inclusion-vs-subdocuments.qd) for a comparison.

## Bulk include

A clean approach with typesetting systems is having a main file that gathers all the different subfiles together. The `.includeall` function, which takes an [Iterable](iterable.qd) of paths, serves as a convenient shorthand for repeated `.include` calls.

The following snippet is from [Mock](https://github.com/SatyamPote/layerdocs/blob/main/mock)'s `main.qd` file:

.code lang:&#123;markdown&#125;
    .read &#123;../mock/main.qd&#125; lines:&#123;6..&#125;

You can also combine the function with [`.listfiles`](file-data.qd) to automatically include all files in a directory:

```markdown
.includeall {.listfiles {somedirectory} sortby:{name}}
```

## Context sharing

The `.include` function's `sandbox` parameter lets you control how much isolation the included file has from the main file. The included file always inherits the context of the main file, but you can optionally allow changes in the included file to propagate back.

For these examples, consider the following files:

&gt; `file.qd`
&gt; ```markdown
&gt; .docname &#123;New name&#125;
&gt;
&gt; .function &#123;greet&#125;
&gt;   name:
&gt;   Hello, **.name**!
&gt; ```

&gt; `main.qd`
&gt; ```markdown
&gt; .docname &#123;My document&#125;
&gt; .include &#123;file.qd&#125; sandbox:&#123;&lt;value&gt;&#125;
&gt;
&gt; 1. .docname
&gt; 2. .greet &#123;John&#125;
&gt; ```

Here are the available options, in ascending order of isolation:

### `share` (default)

Both contexts are synchronized bidirectionally. Any customization, function, variable, and other information declared in the included file will also be available in the main file, and vice versa.

&gt; Output:
&gt;
&gt; 1. New name
&gt; 2. Hello, **John**!

### `scope`

Similar to `share`, but function and variable declarations do not propagate back to the main file.

This is the same behavior used in nested lambda scopes, such as in [`.function`](declaring-functions.qd) and [`.foreach`](loops.qd).

&gt; Output:
&gt; 1. New name
&gt; 2. Compile error: `.greet` is not defined.

### `subdocument`

The included file is completely isolated from the main file. Any changes, including metadata and layout options, do not propagate back.

This is the same behavior as [subdocuments](subdocuments.qd).

&gt; Output:
&gt;
&gt; 1. My document
&gt; 2. Compile error: `.greet` is not defined.

## Use case: setting up

A common use case is putting all setup function calls in a separate file. See the *Document setup* section of this wiki for all available options.

&gt; `setup.qd`
&gt; ```markdown
&gt; .docname &#123;My document&#125;
&gt; .docauthor &#123;SatyamPote&#125;
&gt; .doctype &#123;slides&#125;
&gt; .doclang &#123;English&#125;
&gt; .theme &#123;darko&#125; layout:&#123;minimal&#125;
&gt;
&gt; .footer
&gt;    ...
&gt; ```

&gt; `main.qd`
&gt; ```markdown
&gt; .include &#123;setup.qd&#125;
&gt;
&gt; # My cool document
&gt;
&gt; ...
&gt; ```