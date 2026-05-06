import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'introduction',
    'quickstart',
    {
      type: 'category',
      label: 'Syntax',
      items: ['syntax/index'],
    },
    {
      type: 'category',
      label: 'Components',
      items: ['components/index'],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: ['advanced/index'],
    },
  ],
};

export default sidebars;
