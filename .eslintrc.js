module.exports = {
  env: {
    "jest": true,
  },
  ignorePatterns: ['cjs', 'lib'],
  extends: [
    'eslint-config-team-spec',
    'eslint-config-team-spec/prettier',
    'eslint-config-team-spec/vue',
  ],
}