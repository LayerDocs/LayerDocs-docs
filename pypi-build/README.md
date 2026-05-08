# LayerDocs Python

Official Python wrapper for **LayerDocs**, the next-generation modular documentation engine.

LayerDocs bridges the gap between the simplicity of Markdown and the professional precision of LaTeX, all within a modern, AI-integrated ecosystem.

## 🚀 Key Features

- **Professional PDF Generation**: High-fidelity typesetting using ReportLab.
- **Modular Syntax**: Supports the powerful `.function {arg}` Quarkdown syntax.
- **AI-Ready**: Optimized for LLM parsing and automated document generation.
- **Premium Themes**: Built-in support for "Galactic" (Vercel-style) and "Hyperlegible" layouts.

## 📦 Installation

```bash
pip install layerdocs
```

## 🛠️ Quick Start

```python
import layerdocs

# Compile a Quarkdown (.qd) file to PDF
layerdocs.compile(
    source="main.qd", 
    output="manual.pdf", 
    theme="galactic"
)

# Convert Markdown to LayerDocs-formatted HTML
html = layerdocs.to_html("content.md")
print(html)
```

## 💻 CLI Usage

You can also use LayerDocs directly from your terminal:

```bash
# Compile and watch for changes
layerdocs c main.qd -p -w
```

## 🔗 Links

- **GitHub Repository**: [https://github.com/LayerDocs/LayerDocs-core](https://github.com/LayerDocs/LayerDocs-core)
- **Documentation**: [https://github.com/LayerDocs/LayerDocs-docs](https://github.com/LayerDocs/LayerDocs-docs)

## 📄 License

This project is licensed under the MIT License.
