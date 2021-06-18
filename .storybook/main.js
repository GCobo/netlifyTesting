const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-storysource'
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          // HACK Storybook 6.1 with emotion 11 https://github.com/storybookjs/storybook/issues/13145
          '@emotion/css': path.join(process.cwd(), 'node_modules/@emotion/css'),
          '@emotion/core': path.join(
            process.cwd(),
            'node_modules/@emotion/react'
          ),
          'emotion-theming': path.join(
            process.cwd(),
            'node_modules/@emotion/react'
          ),
          '@emotion/styled': path.join(
            process.cwd(),
            'node_modules/@emotion/styled'
          )
        }
      }
    };
  }
};
