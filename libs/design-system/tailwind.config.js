const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const defaultConfig = require('../tailwindcss-preset/tailwind.config');

module.exports = {
  ...defaultConfig,
  content: [
    join(
      __dirname,
      'libs/design-system/src/lib/**/!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
