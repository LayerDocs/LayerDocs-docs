# Importing External Libraries

.docname &#123;Importing external libraries&#125;
.include &#123;docs&#125;

The **`.include`** function, previously seen in [*Including other LayerDocs files*](including-other-layerdocs-files.qd), can also import external **libraries**.

When you download LayerDocs or build it via `distZip`, the `lib/qd` directory contains utility libraries written in LayerDocs itself.

.filetree
    - layerdocs
      - lib
        - qd
          - lib.qd
          - ...
      - bin
        - layerdocs.jar

You can import `.qd` files into a LayerDocs project via `.include &#123;name&#125;`, without the file extension.

For example, to import `paper.qd`, use `.include &#123;paper&#125;`.

&gt; Note: Unlike `.include &#123;path&#125;`, this approach only loads declared symbols without appending Markdown content from the file.

&gt; Tip: The default library directory is `&lt;install directory&gt;/lib/qd`. You can override this via the command-line option `-l` or `--libs`.