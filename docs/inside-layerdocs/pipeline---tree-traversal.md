# Pipeline   Tree Traversal

.docname &#123;Pipeline - Tree traversal&#125;
.include &#123;docs&#125;

&gt; Main packages: .repolink &#123;`core.ast.iterator`&#125; &#123;tree/main/layerdocs-core/src/main/kotlin/com/layerdocs/core/ast/iterator&#125;, .repolink &#123;`core.context.hooks`&#125; &#123;tree/main/layerdocs-core/src/main/kotlin/com/layerdocs/core/context/hooks&#125;

After the function calls have been expanded, the AST is traversed depth-first to gather enriched information about the document, such as:
- Heading hierarchy, used for the [table of contents](table-of-contents.qd)
- [Numbering](numbering.qd): each heading, figure, and other numbered element is assigned a unique number based on its location in the heading hierarchy
- Link definition bound to each link reference

For performance reasons, only one traversal is performed during this stage. Each operation can however act independently by attaching its own *hook* to the tree iterator, which is triggered when nodes of a certain kind are encountered.