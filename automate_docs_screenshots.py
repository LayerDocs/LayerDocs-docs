import os
import re
import fitz  # PyMuPDF
import layerdocs
from pathlib import Path

# Config for Nextra 4 App Router
DOCS_DIR = Path("src/app")
OUTPUT_ASSETS_DIR = Path("public/assets/outputs") # Nextra uses 'public' for static assets
OUTPUT_ASSETS_DIR.mkdir(parents=True, exist_ok=True)

def generate_screenshots():
    print("Starting LayerDocs Screenshot Automation (Nextra 4 Edition)...")
    
    # Walk through all page.mdx files in the app directory
    for mdx_file in DOCS_DIR.rglob("page.mdx"):
        with open(mdx_file, "r", encoding="utf-8") as f:
            content = f.read()

        # Find code blocks marked as layerdocs-example
        pattern = re.compile(r'```markdown layerdocs-example\n(.*?)\n```', re.DOTALL)
        matches = pattern.finditer(content)
        
        new_content = content
        modified = False

        for i, match in enumerate(matches):
            code_snippet = match.group(1)
            # Use the folder name as the ID
            example_id = f"{mdx_file.parent.name}_ex_{i}"
            pdf_path = f"temp_{example_id}.pdf"
            img_path = OUTPUT_ASSETS_DIR / f"{example_id}.png"
            
            print(f"Rendering example {example_id} from {mdx_file.parent.name}...")
            
            try:
                # 1. Render to PDF
                layerdocs.render(code_snippet, output=pdf_path)
                
                # 2. Convert PDF to Image
                doc = fitz.open(pdf_path)
                if doc.page_count > 0:
                    page = doc.load_page(0)
                    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
                    pix.save(str(img_path))
                doc.close()
                
                # 3. Cleanup temp PDF
                if os.path.exists(pdf_path):
                    os.remove(pdf_path)
                
                # 4. Insert image link in Markdown
                # In Nextra, public assets are served from the root /
                img_markdown = f"\n\n![Output Preview](/assets/outputs/{example_id}.png)\n"
                if img_markdown not in new_content:
                    new_content = new_content.replace(match.group(0), match.group(0) + img_markdown)
                    modified = True
                    
            except Exception as e:
                print(f"Error rendering {example_id}: {e}")

        if modified:
            with open(mdx_file, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated {mdx_file.parent.name}")

if __name__ == "__main__":
    generate_screenshots()
