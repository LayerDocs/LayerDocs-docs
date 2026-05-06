# Quickstart

Get up and running with LayerDocs in less than a minute.

## Installation

LayerDocs is available on PyPI. You can install it using pip:

```bash
pip install layerdocs
```

## Your First Document

Create a new file named `hello.dl` (LayerDocs uses the `.dl` extension) and add the following content:

```markdown
# My First LayerDocs Report

Welcome to a professional PDF rendered in milliseconds.

.box {Pro Tip} type:{tip}
  LayerDocs is incredibly fast!

---
# Page 2
This content is on a new page.
```

## Compiling to PDF

### Via Command Line
Run the following command in your terminal:

```bash
layerdocs hello.dl -o output.pdf
```

### Via Python API
You can also use LayerDocs directly in your Python scripts:

```python
import layerdocs

code = "# Hello\nThis is LayerDocs."
layerdocs.render(code, output="hello.pdf")
```

## Running in Google Colab

If you are using Google Colab, LayerDocs is optimized for the free tier. No extra setup is required!

```python
!pip install layerdocs
import layerdocs

layerdocs.render("# Colab Test", output="test.pdf")
```

Next, learn more about the [LayerDocs Syntax](./syntax/index.md).
