export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 300],
    'subject-case': [2, 'never', ['pascal-case']],
  },
}
