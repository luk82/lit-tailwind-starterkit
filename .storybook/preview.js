import { themes } from '@storybook/theming';

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
  },
  globalTypes: {
    stylesheets: {
      themes: [
        {
          id: 'theme-1',
          title: 'Theme 1',
          url: './static/theme-1.css',
        },
        {
          id: 'theme-2',
          title: 'Theme 2',
          url: './static/theme-2.css',
        },
      ],
    },
  },
};

export default preview;
