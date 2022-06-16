// Base configs
const logic = require('./baseLogicRules');
const style = require('./baseStyleRules');
const formatting = require('./baseFormattingRules');
// Plugin configs
const a11y = require('./a11yPlugin');
const importPlugin = require('./importPlugin');
const jest = require('./jestPlugin');
const reactHooks = require('./reactHooksPlugin');
const react = require('./reactPlugin');
const testingLib = require('./testingLibraryPlugin');
const typescript = require('./typescriptPlugin');
const typescriptExt = require('./typescriptPluginExtended');
const unicorn = require('./unicornPlugin');

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowReserved: false,
    ecmaFeatures: { impliedStrict: true, jsx: true, modules: true },
    babelOptions: { configFile: `${__dirname}/../babelrc/web.babel.js` },
    ecmaVersion: '6',
    sourceType: 'module',
    requireConfigFile: false,
    tsconfigRootDir: `${__dirname}/../../`,
    project: ['./tsconfig.json'],
  },
  globals: {
    __DEV__: 'readonly',
    ga: 'readonly',
    global: 'readonly',
    process: 'readonly',
  },
  env: {
    browser: true,
    es2015: true,
    node: false,
  },
  ignorePatterns: [
    '**/node_modules/**',
    '**/apps/**/build/',
    '**/apps/**/build-hyperion/',
    '**/dist/',
    '**/packages/**/cjs/',
    '**/packages/**/esm/',
    '**/packages/**/umd/',
    // Old packages contain errors but are not being updated unless something is broken
    '**/apps/com.parkholidays.my/',
    '**/apps/com.parkholidays.owners/',
    '**/apps/com.parkholidays.wifi/',
    // TODO: these have parser errors, likely due to using flow in a mostly TS environment
    // Need to resolve these and then remove the ignore patterns below
    '**/packages/plutus/src/index.js',
    '**/rollup/',
    '**/packages/legacy_components/src/select/index.js',
  ],
  reportUnusedDisableDirectives: true,
  plugins: [
    ...a11y.plugins,
    ...importPlugin.plugins,
    ...jest.plugins,
    ...react.plugins,
    ...reactHooks.plugins,
    ...testingLib.plugins,
    ...typescript.plugins,
    ...unicorn.plugins,
  ],
  settings: {
    ...a11y.settings,
    ...importPlugin.settings,
    ...jest.settings,
    ...react.settings,
    ...reactHooks.settings,
    ...testingLib.settings,
    ...typescript.settings,
    ...unicorn.settings,
  },
  rules: {
    ...logic.rules,
    ...style.rules,
    ...formatting.rules,
    ...a11y.rules,
    ...importPlugin.rules,
    ...jest.rules,
    ...react.rules,
    ...reactHooks.rules,
    ...testingLib.rules,
    ...typescript.rules,
    ...typescriptExt.rules,
    ...unicorn.rules,
  },
  overrides: [
    ...typescript.overrides,
    ...typescriptExt.overrides,
    ...jest.overrides,
  ],
};
