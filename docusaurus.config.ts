import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LayerDocs',
  tagline: 'Modern, high-performance typesetting for the web.',
  favicon: 'img/favicon.ico',

  url: 'https://layerdocs.com',
  baseUrl: '/',

  organizationName: 'LayerDocs',
  projectName: 'LayerDocs-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/LayerDocs/LayerDocs-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'LayerDocs',
      logo: {
        alt: 'LayerDocs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/LayerDocs/LayerDocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Quickstart',
              to: '/docs/quickstart',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Wiki',
              href: 'https://github.com/LayerDocs/LayerDocs/wiki',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/LayerDocs/LayerDocs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LayerDocs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
