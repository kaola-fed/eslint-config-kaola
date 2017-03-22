module.exports = {
    rules: {
        // Possible Errors
        // @TODO: 'no-await-in-loop': [1],
        'no-cond-assign': [2, 'except-parens'],
        'no-console': [1, { allow: ['warn', 'error', 'info'] }],
        'no-constant-condition': [2],
        'no-control-regex': [2],
        'no-debugger': [1],
        'no-dupe-args': [2],
        'no-dupe-keys': [2],
        'no-duplicate-case': [2],
        'no-empty-character-class': [2],
        'no-empty': [1, { allowEmptyCatch: true }],
        'no-ex-assign': [2],
        'no-extra-boolean-cast': [1],
        // @disagreed: 'no-extra-parens',
        'no-extra-semi': [1],
        'no-func-assign': [2],
        'no-inner-declarations': [1],
        'no-invalid-regexp': [2],
        'no-irregular-whitespace': [1],
        'no-obj-calls': [2],
        // @disagreed: `hasOwnProperty`; 'no-prototype-builtins',
        'no-regex-spaces': [1],
        'no-sparse-arrays': [1],
        // @disagreed: 'no-template-curly-in-string'
        'no-unexpected-multiline': [2],
        'no-unreachable': [1],
        'no-unsafe-finally': [1],
        'no-unsafe-negation': [1],
        'use-isnan': [2],
        // @has-problem: 'valid-jsdoc'
        'valid-typeof': [1],

        // Best Practices
        // @TODO: 'accessor-pairs',
        'array-callback-return': [2],
        'block-scoped-var': [1],
        // @unnessesary: 'class-methods-use-this',
        // @useless: 'complexity'
        // @TODO: 'consistent-return': [1, { treatUndefinedAsUnspecified: true }],
        'curly': [1, 'all'],
        // @unnessesary: 'default-case': [0],
        'dot-location': [1, 'property'],
        'dot-notation': [1, { allowKeywords: true }],
        'eqeqeq': [1, 'always'],
        // @unnessesary: 'guard-for-in',
        'no-alert': [1],
        'no-caller': [1],
        'no-case-declarations': [1],
        'no-div-regex': [1],
        // @disagreed: 'no-else-return',
        'no-empty-function': [1],
        'no-empty-pattern': [1],
        'no-eq-null': [1],
        'no-eval': [1],
        // @disagreed: 'no-extend-native',
        // @unnessesary: 'no-extra-bind': [1],
        'no-extra-label': [1],
        // @unnessesary: 'no-fallthrough',
        'no-floating-decimal': [1],
        'no-global-assign': [1],
        // @disagreed: 'no-implicit-coercion',
        // @unnessesary: 'no-implicit-globals',
        'no-implied-eval': [1],
        // @has-problem: 'no-invalid-this: [0],
        'no-iterator': [1],
        'no-labels': [1],
        // @disagreed: 'no-lone-blocks',
        // @has-problem: 'no-loop-func': [1],
        // @useless: 'no-magic-numbers': [1, { ignore: [0, 1], enforceConst: true }],
        'no-multi-spaces': [1],
        'no-multi-str': [1],
        // @unnessesary: 'no-new-func': [1],
        'no-new-wrappers': [2],
        // @disagreed: 'no-new',
        'no-octal-escape': [1],
        'no-octal': [2],
        // @disagreed: 'no-param-reassign',
        'no-proto': [1],
        'no-redeclare': [2],
        // @useless: 'no-restricted-properties',
        // @disagreed: 'no-return-assign': 'except-parens',
        'no-return-await': [1],
        'no-script-url': [1],
        'no-self-assign': [2],
        'no-self-compare': [2],
        'no-sequences': [2],
        'no-throw-literal': [1],
        'no-unmodified-loop-condition': [1],
        'no-unused-expressions': [1, { allowShortCircuit: true, allowTernary: true }],
        'no-unused-labels': [2],
        'no-useless-call': [1],
        'no-useless-concat': [1],
        'no-useless-escape': [2],
        'no-useless-return': [1],
        'no-void': [1],
        // @disagreed: 'no-warning-comments',
        'no-with': [2],
        // @unnessesary: 'prefer-promise-reject-errors',
        'radix': [1, 'as-needed'],
        'require-await': [1],
        // @disagreed: 'vars-on-top',
        'wrap-iife': [1, 'inside'],
        'yoda': [1, 'never', { exceptRange: true }],

        // Strict Mode
        // @unnessesary: strict,

        // Variables
        // @unnessesary: 'init-declarations',
        'no-catch-shadow': [1],
        'no-delete-var': [2],
        'no-label-var': [1],
        // @TODO: 'no-restricted-globals',
        'no-shadow-restricted-names': [2],
        // @disagreed: 'no-shadow',
        'no-undef-init': [1],
        'no-undef': [2],
        // @unnessesary: 'no-undefined',
        'no-unused-vars': [2, { args: 'none' }],
        'no-use-before-define': [2, { functions: false }],

        // Node.js and CommonJS
        // @TODO: 'callback-return',
        // @TODO: 'global-require',
        // @TODO: 'handle-callback-err',
        // @TODO: 'no-mixed-requires',
        'no-new-require': [1],
        // @TODO: 'no-path-concat',
        // @TODO: 'no-process-env',
        // @TODO: 'no-process-exit',
        // @TODO: 'no-restricted-modules',
        // @TODO: 'no-sync',

        // Stylistic Issues
        'array-bracket-spacing': [1, 'never'], // @TODO
        'block-spacing': [1, 'always'],
        'brace-style': [1, '1tbs', { allowSingleLine: true }],
        'camelcase': [1],
        // @disagreed: 'capitalized-comments': [1],
        'comma-dangle': [1, 'always-multiline'],
        'comma-spacing': [1],
        'comma-style': [1],
        'computed-property-spacing': [1],
        'consistent-this': [1, 'self'],
        'eol-last': [1],
        // @useless: 'func-names',
        'func-call-spacing': [1],
        'func-name-matching': [1],
        'func-style': [1, 'expression', { allowArrowFunctions: true }],
        // @useless: 'id-blacklist',
        // @useless: 'id-length',
        // @useless: 'id-match',
        'indent': [1, 4, { SwitchCase: 1 }],
        // @useless: 'jsx-quotes',
        'key-spacing': [1],
        'keyword-spacing': [1],
        // @unnessesary: 'line-comment-position': [1],
        'linebreak-style': [1],
        // @TODO: 'lines-around-comment',
        'lines-around-directive': [1],
        // @useless: 'max-depth',
        // @useless: 'max-len',
        // @useless: 'max-lines',
        // @useless: 'max-nested-callbacks',
        // @useless: 'max-params',
        // @useless: 'max-statements-per-line',
        // @useless: 'max-statements',
        'multiline-ternary': [1, 'never'],
        'new-cap': [1],
        'new-parens': [1],
        // @unnessesary: 'newline-after-var',
        // @unnessesary: 'newline-before-return',
        // @disagreed: 'newline-per-chained-call',
        'no-array-constructor': [1],
        // @disagreed: 'no-bitwise',
        // @useless: 'no-continue',
        // @useless: 'no-inline-comments',
        // @disagreed: 'no-lonely-if',
        // @TODO: 'mixed-operators'
        'no-mixed-spaces-and-tabs': [1],
        // @disagreed: 'no-multi-assign',
        'no-multiple-empty-lines': [1, { max: 1, maxEOF: 1, maxBOF: 0 }],
        'no-negated-condition': [0],
        'no-nested-ternary': [1],
        'no-new-object': [1],
        // @useless: 'no-plusplus',
        // @TODO: 'no-restricted-syntax',
        'no-tabs': [1],
        // @useless: 'no-ternary',
        'no-trailing-spaces': [1],
        // @disagreed: 'no-underscore-dangle',
        'no-unneeded-ternary': [1, { defaultAssignment: false }],
        'no-whitespace-before-property': [1],
        // @has-problem:'object-curly-newline': [1, { multiline: true, minProperties: 1}],
        'object-curly-spacing': [1, 'always'],
        // @disagreed: 'object-property-newline',
        // @TODO: 'one-var-declaration-per-line',
        // @TODO: 'one-var',
        // @TODO: 'operator-assignment',
        'operator-linebreak': [1, 'before'],
        'padded-blocks': [1, 'never'],
        'quote-props': [1, 'as-needed'],
        'quotes': [1, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        // @TODO: 'require-jsdoc',
        'semi-spacing': [1],
        'semi': [1, 'always', { omitLastInOneLineBlock: false }],
        // @useless: 'sort-keys',
        // @useless: 'sort-vars',
        'space-before-blocks': [1],
        'space-before-function-paren': [1, { anonymous: 'always', named: 'never' }],
        'space-in-parens': [1, 'never'],
        'space-infix-ops': [1],
        'space-unary-ops': [1],
        'spaced-comment': [1],
        'template-tag-spacing': [1, 'always'],
        'unicode-bom': [1],
        // @disagreed: 'wrap-regex',

        // ECMAScript 6
        'arrow-body-style': [1, 'as-needed'],
        'arrow-parens': [2, 'always'],
        'arrow-spacing': [2],
        'constructor-super': [2],
        // @TODO: 'generator-star-spacing'
        'no-class-assign': [2],
        // @unnessesary: 'no-confusing-arrow',
        'no-const-assign': [2],
        'no-dupe-class-members': [2],
        'no-duplicate-imports': [1],
        'no-new-symbol': [2],
        // @TODO: 'no-restricted-imports'
        'no-this-before-super': [2],
        'no-useless-computed-key': [2],
        'no-useless-constructor': [2],
        'no-useless-rename': [2],
        'no-var': [2],
        'object-shorthand': [2, 'always'],
        'prefer-arrow-callback': [2],
        'prefer-const': [2, { destructuring: 'all'}],
        // @TODO: 'prefer-destructuring',
        'prefer-numeric-literals': [2],
        'prefer-rest-params': [2],
        'prefer-spread': [2],
        // @has-problem: abc + ''; prefer-template': [1],
        // @TODO: 'require-yield',
        'rest-spread-spacing': [2, 'never'],
        // @useless: 'sort-imports',
        'symbol-description': [2],
        'template-curly-spacing': [2, 'never'],
        'yield-star-spacing': [2],
    },
};
