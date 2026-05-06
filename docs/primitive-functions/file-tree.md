# File Tree

.docname &#123;File Tree&#125;
.include &#123;docs&#125;

The **`.filetree`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.MiscElements/fileTree.html&#125; function creates a visual file tree from a standard Markdown list.
Each inline item becomes a file, and each nested list becomes a directory.

.examplemirror
    .filetree
        - src
          - components
            - Button.ts
            - Card.ts
          - index.ts
        - README.md

## Ellipsis

An item with `...` as its text is rendered as an ellipsis, representing omitted content in the tree.

.examplemirror
    .filetree
        - src
          - main.ts
          - ...
        - LICENSE
        - README.md

## Highlighting entries

Wrapping an entry's name in **bold** (`**...**`) highlights it, useful for drawing attention to specific files or directories.

.examplemirror
    .filetree
        - **src**
          - main.ts
          - utils.ts
        - LICENSE
        - **README.md**