import os
import re
import shutil

MAPPING = {
    ".": ["introduction.md", "quickstart.md"],
    "getting-started": ["quickstart.qd", "cli-options.qd"],
    "functions": ["syntax-of-a-function-call.qd", "declaring-functions.qd", "typing.qd", "localization.qd"],
    "document-setup": ["document-metadata.qd", "document-types.qd", "themes.qd", "font-configuration.qd", "page-format.qd", "multi-column-layout.qd", "page-margin-content.qd", "page-counter.qd", "persistent-headings.qd", "numbering.qd", "paragraph-style.qd", "caption-position.qd", "table-of-contents.qd", "bibliography.qd", "footnotes.qd", "book-cover.qd"],
    "markdown-enhancements": ["figure.qd", "image-size.qd", "tex-formulae.qd", "table-caption.qd", "code-caption.qd", "decorative-headings.qd", "quote-types.qd", "quotation-source.qd", "cross-references.qd", "page-break.qd", "text-symbols.qd", "keybindings.qd", "icons.qd", "emojis.qd"],
    "primitive-functions": ["headings.qd", "stacks.qd", "container.qd", "align.qd", "float.qd", "figure.qd", "clip.qd", "box.qd", "file-tree.qd", "collapsible.qd", "landscape-content.qd", "whitespace.qd"],
    "multi-file-projects": ["including-other-layerdocs-files.qd", "inclusion-vs-subdocuments.qd", "importing-external-libraries.qd"],
    "variables-scripting": ["variables.qd", "math.qd", "conditional-statements.qd", "loops.qd", "let.qd", "destructuring.qd"],
    "data-tables": ["table-manipulation.qd", "table-generation.qd", "file-data.qd"],
    "charts-diagrams": ["xy-chart.qd", "mermaid-diagrams.qd"],
    "text-code": ["text.qd", "code.qd", "line-breaks.qd", "tex-macros.qd"],
    "slides": ["slides-configuration.qd", "slides-fragment.qd", "slides-speaker-notes.qd"],
    "html-css": ["html.qd", "css.qd", "html-options.qd", "html-static-assets.qd"],
    "value-types": ["text.qd", "boolean.qd", "none.qd", "enumeration-entry.qd", "iterable.qd", "dictionary.qd", "range.qd", "lambda.qd", "sizes.qd", "color.qd"],
    "built-in-libraries": ["docs-library.qd", "paper-library.qd"],
    "resources-logging": ["media-storage.qd", "logging.qd"],
    "cli-tools": ["cli-compiler.qd", "pdf-export.qd", "cli-project-creator.qd", "cli-webserver.qd"],
    "inside-layerdocs": ["pipeline.qd", "pipeline---lexing.qd", "pipeline---parsing.qd", "pipeline---function-call-expansion.qd", "pipeline---tree-traversal.qd", "pipeline---rendering.qd", "pipeline---post-rendering.qd"]
}

LEGACY_DIR = "../LayerDocs-Source/docs"
DOCS_DIR = "src/app"

def migrate():
    for category, files in MAPPING.items():
        cat_dir = os.path.join(DOCS_DIR, category)
        os.makedirs(cat_dir, exist_ok=True)
        
        for qd_file in files:
            src_path = os.path.join(LEGACY_DIR, qd_file)
            if not os.path.exists(src_path):
                src_path = os.path.join(LEGACY_DIR, qd_file.replace(".qd", ".md"))
                if not os.path.exists(src_path): continue
                
            with open(src_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            content = content.replace("Quarkdown", "LayerDocs").replace("quarkdown", "layerdocs")
            content = re.sub(r'!\[.*?\]\(.*?\)', '', content)
            content = content.replace("<", "&lt;").replace(">", "&gt;")
            
            title = qd_file.replace(".qd", "").replace(".md", "").replace("-", " ").title()
            
            # Using flat structure: category/page.mdx
            filename = os.path.splitext(qd_file)[0] + ".mdx"
            dst_path = os.path.join(cat_dir, filename)
            
            md_content = f"# {title}\n\n{content}"
            
            with open(dst_path, 'w', encoding='utf-8') as f:
                f.write(md_content)
            print(f"Migrated {qd_file} to {dst_path}")

if __name__ == "__main__":
    migrate()
