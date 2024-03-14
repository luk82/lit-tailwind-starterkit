import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';

export default defineConfig({
  component: {
    supportFile: 'cypress/support/component.ts',
    devServer: {
      framework: 'svelte',
      bundler: 'vite',
    },
    indexHtmlFile: 'cypress/support/component-index.html',
  },

  e2e: {
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, config);
    },
  },
  experimentalWebKitSupport: true,
});
