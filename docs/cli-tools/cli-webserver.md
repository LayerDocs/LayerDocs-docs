# Cli Webserver

.docname &#123;CLI - Webserver&#125;
.include &#123;docs&#125;

LayerDocs's webserver allows direct communication between the compiler and the browser, making [live previewing](inside-live-preview.qd) possible.

You can start the server via **`layerdocs start`**.

&gt; [!IMPORTANT]
&gt; A webserver is **mandatory** in order to show *paged* documents, because of a paged.js requirement.

&gt; [!TIP]
&gt; `layerdocs c ... -p` is shorthand for `layerdocs c ... && layerdocs start -f &lt;generated file&gt; -b default`

## Options

- **`-f &lt;file&gt;`** or **`--file &lt;file&gt;`**: (*mandatory*) the file the server should point to. It would preferably be the output directory of the compilation.

- **`-p &lt;port&gt;`** or **`--port &lt;port&gt;`**: the webserver's port. If unset, defaults to `8089`.

- **`-b &lt;browser&gt;`** or **`--browser &lt;browser&gt;`**: optional browser to open the served page on.