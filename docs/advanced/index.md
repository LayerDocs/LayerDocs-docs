# Advanced Features

LayerDocs is not just a lightweight library; it's a complete ecosystem.

## The Core Engine (JVM)

For high-fidelity rendering, LayerDocs includes a Kotlin-based core engine. This engine supports advanced features like:

*   **Fragmentation**: Smart multi-page splitting.
*   **HTML Export**: Convert `.dl` directly to high-quality HTML/CSS.
*   **LSP Support**: Autocomplete and error checking in your editor.

## Cloud Rendering

If you are running in an environment where you cannot install Chromium or Java, you can use the **LayerDocs Cloud API**.

```python
import layerdocs
layerdocs.render_cloud(code, url="https://your-server.com")
```

## Custom Styling

While LayerDocs Lite comes with a professional default theme, you can customize fonts and margins when using the Core engine via `PipelineOptions`.

---

Check out the [LayerDocs Wiki](https://quarkdown.com/wiki/) for more deep dives into the typesetting logic!
