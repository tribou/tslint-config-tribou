const Path = require('path')


module.exports = {

  defaultSeverity: 'error',

  extends: [
    'tslint:recommended',
  ],

  rulesDirectory: [
    Path.join(Path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    Path.join(Path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
    Path.join(Path.dirname(require.resolve('vrsource-tslint-rules')), 'rules'),
  ],

  rules: {
    'no-bitwise': true,
    'block-spacing': [
      true,
      'always',
    ],
    'no-consecutive-blank-lines': [
      true,
      2,
    ],
    'linebreak-style': [
      true,
      'LF',
    ],
    'no-trailing-whitespace': true,
    'prefer-const': true,
    'no-var-keyword': true,
    'object-literal-shorthand': true,
    'object-literal-key-quotes': [
      true,
      'as-needed',
    ],
    'prefer-literal': [
      true,
      'object',
      'function',
      'array',
    ],
    curly: [
      true,
      'ignore-same-line',
    ],
    'prefer-array-literal': true,
    'interface-name': [
      true,
      'always-prefix',
    ],
    quotemark: [
      true,
      'single',
      'jsx-double',
    ],
    'no-eval': true,
    'no-function-constructor-with-string-args': true,
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
    'no-param-reassign': true,
    'no-jasmine-focus': true,
    align: [
      true,
      'arguments',
      'parameters',
    ],
    'ter-prefer-arrow-callback': [true],
    'ter-arrow-body-style': [
      true,
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'ter-arrow-parens': [
      true,
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    'ter-arrow-spacing': [
      true,
      {
        before: true,
        after: true,
      },
    ],
    'no-duplicate-imports': true,
    'one-variable-per-declaration': [
      true,
      'ignore-for-loop',
    ],
    'no-increment-decrement': true,
    'triple-equals': [
      true,
      'allow-null-check',
    ],
    'brace-style': [
      true,
      'stroustrup',
      {
        allowSingleLine: true,
      },
    ],
    'comment-format': [
      true,
      'check-space',
    ],
    indent: [
      true,
      'space',
    ],
    'ter-indent': [
      true,
      2,
      { SwitchCase: 1 },
    ],
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-preblock',
    ],
    eofline: true,
    'space-in-parens': [
      true,
      'never',
    ],
    'array-bracket-spacing': [
      true,
      'never',
    ],
    'object-curly-spacing': [
      true,
      'always',
    ],
    'ter-max-len': [
      true,
      {
        code: 80,
        tabWidth: 2,
        ignoreImports: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'trailing-comma': [
      true,
      {
        multiline: 'always',
        singleline: 'never',
      },
    ],
    'multiline-arrow': [
      true,
      'require-parens',
      'require-block',
    ],
    semicolon: [
      false,
      'always',
    ],
    radix: true,
    'no-construct': true,
    'function-name': [
      true,
      {
        'static-method-regex': '^[a-z][\\w\\d]+$',
      },
    ],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
    ],
    'no-var-self': true,
    'import-name': true,
  },

}
