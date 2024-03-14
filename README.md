Starter kit for building Lit components using Tailwind CSS.

Utilizing Lit components, Tailwind CSS, Vite, Storybook, Prettier with Tailwind CSS class reordering, minified CSS, PostCSS, Cypress for testing, and visual regression.

1. Generate a minified Tailwind CSS file at `/static/tw.css` by executing: npm run `tw:create`.
2. Build a JavaScript file for use with Lit components at /statictwlit.js by running npm run tw:build.
3. Launch the Vite development server with npm run dev.
4. Include components in /index.html, for example: <script type="module" src="/src/components/my-component/my-component.js"></script>.


For development, utilize `tw:build:dev`. The generated Tailwind styles remain unminified.