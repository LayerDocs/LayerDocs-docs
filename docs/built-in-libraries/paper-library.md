# Paper Library

.docname &#123;Paper library&#125;
.include &#123;docs&#125;
.include &#123;paper&#125;

The built-in .repolink &#123;`paper`&#125; &#123;blob/main/layerdocs-libs/src/main/resources/paper&#125; library is written in LayerDocs and adds support for typical elements of scientific papers in a LaTeX fashion.

The library features the following components:
- Abstract
- Titled, numbered blocks:
  - Definitions
  - Lemmas
  - Theorems
  - Proofs

&gt; Note: The supported languages align with those supported by LayerDocs's core. See [*Built-in localization*](localization.qd#built-in-localization) for further information.

The first step is to [import](importing-external-libraries.qd) the library:

```markdown
.include {paper}
```

## Abstract

**`.abstract`** generates the layout for a titled *abstract* block. Its content goes in the block argument.

.exampleoutput &#123;&#125;
    .abstract
        This is my *abstract*! Here goes the summary of the document.  
        .loremipsum

    This is not part of the abstract, instead.

The alignment of the title defaults to center and can be changed via `.abstractalignment &#123;start|center|end&#125;`.

.exampleoutput &#123;&#125;
    .abstractalignment &#123;start&#125;

    .abstract
        This is my *abstract*! Here goes the summary of the document.  
        .loremipsum

## Titled blocks

You can create any of the following blocks:
- Definition via **`.definition`**
- Lemma via **`.lemma`**
- Theorem via **`.theorem`**
- Proof via **`.proof`**

All the mentioned functions take one block argument that defines the content.

.exampleoutput &#123;&#125;
    .definition
        Let $ \Delta x $ be an object's change in position over a time interval $ \Delta t $,
        then the average velocity is defined as $ v = \frac &#123;\Delta x&#125; &#123;\Delta t&#125; $.

### Custom title suffix

The default title suffix is `.` (dot) and can be customized via `.paperblocksuffix &#123;suffix&#125;`:

.exampleoutput &#123;&#125;
    .paperblocksuffix &#123;:&#125;

### Numbering

Defining a [numbering format](numbering.qd) causes the blocks of that type to be numbered. The format names are plural: `definitions`, `lemmas`, `theorems`, `proofs`.

.exampleoutput &#123;!(600)[Numbered blocks](paper-library/numbered-blocks.png)&#125;
    .numbering
        - definitions: 1.a
        - lemmas: i

    ...

    .definition
        .loremipsum

    .lemma
        .loremipsum

    .definition
        .loremipsum

### End-of-proof

Proofs also feature a special *end-of-proof* character, which defaults to `∎`.

.exampleoutput &#123;&#125;
    .theorem
        .loremipsum

    .proof
        .loremipsum

You can customize the end-of-proof character via `.proofend &#123;string&#125;`:

.exampleoutput &#123;&#125;
    .proofend &#123;😎&#125;