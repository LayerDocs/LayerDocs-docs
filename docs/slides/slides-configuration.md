# Slides Configuration

.docname &#123;Slides configuration&#125;
.include &#123;docs&#125;

The **`.slides`** .docslink &#123;layerdocs-stdlib/com.layerdocs.stdlib.module.Slides/slides.html&#125; function allows you to override the default configuration of `slides` documents. All of its parameters are **optional**:

| Parameter      | Description                                                                                       | Accepts                         | Default                         |
|----------------|---------------------------------------------------------------------------------------------------|---------------------------------|---------------------------------|
| `center`       | Whether content should be centered vertically.                                                    | [`Boolean`](boolean.qd)         | Up to the current layout theme. |
| `controls`     | Whether navigation controls should be shown.                                                      | [`Boolean`](boolean.qd)         | `true`                          |
| `speakernotes` | Whether [speaker notes](slides-speaker-notes.qd) should be displayed outside of the speaker view. | [`Boolean`](boolean.qd)         | `false`                         |
| `transition`   | Transition style between slides.                                                                  | `none`, `fade`, `slide`, `zoom` | `slide`                         |
| `speed`        | Transition speed between slides.&lt;br/&gt;Requires `transition` to be set.                             | `default`, `fast`, `slow`       | `default`                       |