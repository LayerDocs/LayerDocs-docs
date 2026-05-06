# Components

Components are the heart of LayerDocs. they allow you to add structure and professional styling to your documents.

## Callout Boxes (.box)

Boxes are used to highlight important information. The syntax is:

```markdown
.box {Your Title} type:{type}
  Your content goes here.
```

### Supported Types

| Type | Color | Description |
| :--- | :--- | :--- |
| `note` | Grey | General information (Default) |
| `tip` | Green | Suggestions and success messages |
| `warning` | Amber | Cautions for the user |
| `error` | Red | Critical errors and failures |

### Example

```markdown
.box {System Update} type:{tip}
  Version 0.4.1 is now live!
```

## Tables

LayerDocs supports standard Markdown pipe tables. They are automatically rendered with professional padding and alternating row colors.

```markdown
| Feature | Status |
| :--- | :--- |
| Speed | High |
| Memory | Low |
```

## Code Blocks

Fenced code blocks are supported with **Syntax Highlighting** powered by Pygments.

```python
def success():
    return True
```

Learn about [Advanced Features](../advanced/index.md) next!
