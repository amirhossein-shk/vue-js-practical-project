import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  prettier
);
