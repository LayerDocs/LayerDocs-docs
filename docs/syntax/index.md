# Syntax Overview

LayerDocs uses a hybrid syntax that combines the best of Markdown and LaTeX.

## Headings

Use the `#` symbol for headings. LayerDocs supports three levels:

```markdown
# Level 1 Heading (Main Title)
## Level 2 Heading (Section)
### Level 3 Heading (Subsection)
```

## Text Formatting

Standard Markdown formatting works out of the box:

*   **Bold**: `**text**`
*   *Italic*: `*text*`
*   `Inline Code`: `` `code` ``

## Lists

### Unordered Lists
Use `*` or `-` for bullet points:

```markdown
* Item A
* Item B
```

### Ordered Lists
Use `1.`, `2.`, etc. for numbered lists:

```markdown
1. First Step
2. Second Step
```

## Page Breaks

To force a new page, use three dashes on a single line:

```markdown
This is on page 1.
---
This is on page 2.
```

## Math (LaTeX)

LayerDocs supports LaTeX-style math rendering.

### Inline Math
Surround your formula with single dollar signs: `$E=mc^2$`.

### Math Blocks
Surround your formula with double dollar signs:

```markdown
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
```

Learn about [Components](../components/index.md) next!
