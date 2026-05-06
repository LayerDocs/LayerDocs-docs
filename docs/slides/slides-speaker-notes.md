# Slides Speaker Notes

.docname &#123;Slides speaker notes&#125;
.include &#123;docs&#125;

Speaker notes are helpful tools for remembering talking points, reminders, or extra details while presenting.

Calling the **`.speakernote`** function adds a speaker note to the current slide. The function accepts a block of any kind of content, and you can add multiple speaker notes to the same slide.

```markdown
.speakernote
  This is a **speaker note** for the current slide.
```

!(1000)[image](slides-speaker-notes/speaker-view.png)

By default, speaker notes are displayed only when the document is viewed in the **speaker view**, which you can enable by pressing the **`S`** key while viewing the HTML presentation.

&gt; Note: Reveal.js' speaker view requires an active [web server](cli-webserver.qd).

### Outside speaker view

Additionally, notes may be displayed outside the speaker view, and also in exported PDF, by enabling `.slides speakernotes:&#123;yes&#125;` (see [Slides configuration](slides-configuration.qd)).

- HTML:

  !(1000)[Notes in regular presentation](slides-speaker-notes/notes-html.png)

- PDF:

  !(1000)[Notes in PDF](slides-speaker-notes/notes-pdf.png)