# Keybindings

.docname &#123;Keybindings&#125;
.include &#123;docs&#125;

The **`.keybinding &#123;keys&#125;`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.MiscElements/keybinding.html&#125; function displays a keyboard shortcut or key combination.

.examplemirror
    Press .keybinding &#123;Mod+K&#125; to trigger the action.

Keys are separated by `+`, `,`, or `-` delimiters.

On macOS, modifier keys automatically display their native symbols (e.g. Command instead of Ctrl). 

&gt; If you're on macOS right now, you can notice the difference in the above example: the first keybinding displays as `Ctrl K` on other platforms, but as `⌘ K` on macOS.

## Modifiers

The following modifier names are recognized (case-insensitive):

| Input                           | Default display | macOS display |
|---------------------------------|-----------------|---------------|
| `cmd`, `command`, `meta`, `mod` | Ctrl            | ⌘             |
| `ctrl`, `control`               | Ctrl            | ⌃             |
| `alt`, `option`                 | Alt             | ⌥             |
| `shift`                         | Shift           | ⇧             |

Any other key name is displayed as-is, capitalized.

.examplemirror
    .keybinding &#123;Cmd+Alt+Tab&#125;

.examplemirror
    .keybinding &#123;Alt+F4&#125;

## Literal delimiter keys

Since `+`, `,`, and `-` are reserved as delimiters, use their literal names to represent them as keys:

| Literal          | Key |
|------------------|-----|
| `plus`           | `+` |
| `comma`          | `,` |
| `dash`, `minus`  | `-` |
| `dot`, `period`  | `.` |

.examplemirror
    .keybinding &#123;Ctrl+plus&#125;

.examplemirror
    .keybinding &#123;Ctrl+dot&#125;