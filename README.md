# LayerDocs: The Modular Documentation Engine

<p align="center">
  <img src="public/logo.png" alt="LayerDocs Logo" width="120" />
</p>

**LayerDocs** is a next-generation, versatile Markdown-based typesetting system designed for technical modularity, structural depth, and premium aesthetic output. It bridges the gap between the simplicity of Markdown and the professional precision of LaTeX, all within a modern, AI-integrated ecosystem.

## 🚀 Why LayerDocs?

In an era of rapid information exchange, static documentation is no longer enough. LayerDocs provides:
- **Depth & Modularity**: Organize large documentation projects into logical subdocuments and reusable components.
- **Scientific Precision**: Native, high-performance LaTeX rendering for complex mathematical equations.
- **Premium Aesthetics**: Vercel-inspired, high-contrast themes optimized for readability and developer experience.
- **AI-Ready Syntax**: Proprietary `.qd` (Quarkdown) syntax optimized for parsing and generation by LLMs.

## 🛠️ Core Features

- **`.function {arg}` Syntax**: A powerful, unified command system for controlling document layout, including tables, charts, and media.
- **Cross-Platform Output**: Generate high-fidelity PDFs for print and responsive HTML/Next.js sites for the web.
- **Rich Media Support**: Integrated Mermaid.js diagrams, interactive charts, and advanced image manipulation.
- **AI Studio**: (Coming Soon) A built-in interactive editor with real-time preview and seamless Ollama integration.

## 📦 PyPI Installation

LayerDocs is available as a lightweight Python package for automated document compilation.

```bash
pip install layerdocs
```

### Quick Start (Python)

```python
import layerdocs

# Compile a Quarkdown file to a professional PDF
layerdocs.compile(
    source="main.qd", 
    output="manual.pdf", 
    theme="galactic"
)

# Convert Markdown to LayerDocs HTML
html_output = layerdocs.to_html("docs/intro.md")
```

## 💻 CLI Usage

The LayerDocs CLI provides a suite of tools for local development and build automation.

```bash
# Initialize a new project
layerdocs init my-docs

# Compile and watch for changes with a local web server
layerdocs c main.qd -p -w --port 8089
```

## 🏗️ Project Structure

A typical LayerDocs project follows this modular structure:

```text
my-docs/
├── _setup.qd       # Global configuration and theming
├── _nav.qd         # Sidebar and navigation definitions
├── main.qd         # Main entry point
├── assets/         # Images, CSS, and static files
└── docs/           # Modular content pages (.qd or .md)
```

## 🤝 Community & Support

- **GitHub Repository**: [LayerDocs Core](https://github.com/LayerDocs/LayerDocs-core)
- **Discussions**: [Join the conversation](https://github.com/LayerDocs/LayerDocs-core/discussions)
- **Issues**: [Report a bug](https://github.com/LayerDocs/LayerDocs-core/issues)

## 📄 License

This project is licensed under the **GNU GPLv3 License**. See the `LICENSE` file for details.

---

Built with ❤️ by [SatyamPote](https://github.com/SatyamPote) and the LayerDocs community.
