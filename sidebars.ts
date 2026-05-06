import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/quickstart', 'getting-started/cli-options'],
    },
    {
      type: 'category',
      label: 'Functions',
      items: ['functions/syntax-of-a-function-call', 'functions/declaring-functions', 'functions/typing', 'functions/localization'],
    },
    {
      type: 'category',
      label: 'Document Setup',
      items: [
        'document-setup/document-metadata',
        'document-setup/document-types',
        'document-setup/themes',
        'document-setup/font-configuration',
        'document-setup/page-format',
        'document-setup/multi-column-layout',
        'document-setup/page-margin-content',
        'document-setup/page-counter',
        'document-setup/persistent-headings',
        'document-setup/numbering',
        'document-setup/paragraph-style',
        'document-setup/caption-position',
        'document-setup/table-of-contents',
        'document-setup/bibliography',
        'document-setup/footnotes',
        'document-setup/book-cover'
      ],
    },
    {
      type: 'category',
      label: 'Markdown Enhancements',
      items: [
        'markdown-enhancements/figure',
        'markdown-enhancements/image-size',
        'markdown-enhancements/tex-formulae',
        'markdown-enhancements/table-caption',
        'markdown-enhancements/code-caption',
        'markdown-enhancements/decorative-headings',
        'markdown-enhancements/quote-types',
        'markdown-enhancements/quotation-source',
        'markdown-enhancements/cross-references',
        'markdown-enhancements/page-break',
        'markdown-enhancements/text-symbols',
        'markdown-enhancements/keybindings',
        'markdown-enhancements/icons',
        'markdown-enhancements/emojis'
      ],
    },
    {
      type: 'category',
      label: 'Primitive Functions',
      items: [
        'primitive-functions/headings',
        'primitive-functions/stacks',
        'primitive-functions/container',
        'primitive-functions/align',
        'primitive-functions/float',
        'primitive-functions/figure',
        'primitive-functions/clip',
        'primitive-functions/box',
        'primitive-functions/file-tree',
        'primitive-functions/collapsible',
        'primitive-functions/landscape-content',
        'primitive-functions/whitespace'
      ],
    },
    {
      type: 'category',
      label: 'Multi-file Projects',
      items: [
        'multi-file-projects/including-other-layerdocs-files',
        'multi-file-projects/inclusion-vs-subdocuments',
        'multi-file-projects/importing-external-libraries'
      ],
    },
    {
      type: 'category',
      label: 'Variables & Scripting',
      items: [
        'variables-scripting/variables',
        'variables-scripting/math',
        'variables-scripting/conditional-statements',
        'variables-scripting/loops',
        'variables-scripting/let',
        'variables-scripting/destructuring'
      ],
    },
    {
      type: 'category',
      label: 'Data & Tables',
      items: ['data-tables/table-manipulation', 'data-tables/table-generation', 'data-tables/file-data'],
    },
    {
      type: 'category',
      label: 'Charts & Diagrams',
      items: ['charts-diagrams/xy-chart', 'charts-diagrams/mermaid-diagrams'],
    },
    {
      type: 'category',
      label: 'Text & Code',
      items: ['text-code/text', 'text-code/code', 'text-code/line-breaks', 'text-code/tex-macros'],
    },
    {
      type: 'category',
      label: 'Slides',
      items: ['slides/slides-configuration', 'slides/slides-fragment', 'slides/slides-speaker-notes'],
    },
    {
      type: 'category',
      label: 'HTML & CSS',
      items: ['html-css/html', 'html-css/css', 'html-css/html-options', 'html-css/html-static-assets'],
    },
    {
      type: 'category',
      label: 'Value Types',
      items: [
        'value-types/text',
        'value-types/boolean',
        'value-types/none',
        'value-types/enumeration-entry',
        'value-types/iterable',
        'value-types/dictionary',
        'value-types/range',
        'value-types/lambda',
        'value-types/sizes',
        'value-types/color'
      ],
    },
    {
      type: 'category',
      label: 'Built-in Libraries',
      items: ['built-in-libraries/docs-library', 'built-in-libraries/paper-library'],
    },
    {
      type: 'category',
      label: 'Resources & Logging',
      items: ['resources-logging/media-storage', 'resources-logging/logging'],
    },
    {
      type: 'category',
      label: 'CLI Tools',
      items: ['cli-tools/cli-compiler', 'cli-tools/pdf-export', 'cli-tools/cli-project-creator', 'cli-tools/cli-webserver'],
    },
    {
      type: 'category',
      label: 'Inside LayerDocs',
      items: [
        'inside-layerdocs/pipeline',
        'inside-layerdocs/pipeline---lexing',
        'inside-layerdocs/pipeline---parsing',
        'inside-layerdocs/pipeline---function-call-expansion',
        'inside-layerdocs/pipeline---tree-traversal',
        'inside-layerdocs/pipeline---rendering',
        'inside-layerdocs/pipeline---post-rendering'
      ],
    },
  ],
};

export default sidebars;
