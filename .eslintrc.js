module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        wx: true,
        $config: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'prefer-const': 2,
        'object-shorthand': 2,
        'no-prototype-builtins': 2,
        'no-multi-assign': ['error'],
        'prefer-template': 'error',
        'dot-notation': ['error', { allowKeywords: true }],
        'arrow-body-style': ['error', 'as-needed', {
            requireReturnForObjectLiteral: false
        }],
        'prefer-destructuring': ['error', {
            VariableDeclarator: {
                array: false,
                object: true
            },
            AssignmentExpression: {
                array: true,
                object: true
            }
        }, {
            enforceForRenamedProperties: false
        }],
        'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
        'no-console': 'off',
        'no-debugger': 'off',
        'no-empty': 2,
        'no-eq-null': 2,
        'no-new': 2,
        'no-fallthrough': 2,
        'no-unreachable': 2,
        'no-var': 2,
        'no-return-assign': 0,
        'vue/attribute-hyphenation': [
            'error',
            'always'
        ],
        'vue/html-indent': [
            'error',
            4
        ],
        'vue/require-prop-types': 'error',
        'vue/order-in-components': 'error',
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false
            }
        ],
        'vue/html-quotes': [
            'error',
            'double'
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
