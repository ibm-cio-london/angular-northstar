module.exports = {
    'plugins': [
        'jasmine'
    ],
    'env': {
        'browser': true,
        'jasmine': true,
        'node': true
    },
    'globals': {
        'jQuery': false,
        'angular': false,
        'IBMCore': false,
        'inject': false
    },
    'rules': {
        'no-bitwise': 2,
        'camelcase': 2,
        'curly': 2,
        'eqeqeq': 2,
        'wrap-iife': [
            2,
            'any'
        ],
        'no-use-before-define': [
            2,
            {
                'functions': false
            }
        ],
        'new-cap': 2,
        'no-caller': 2,
        'quotes': [
            2,
            'single'
        ],
        'no-undef': 2,
        'no-unused-vars': 2,
        'strict': [
            2,
            'function'
        ],
        'no-empty': [
            2,
            {
                'allowEmptyCatch': true
            }
        ],
        'no-with': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-str': 2,
        'one-var': [
            2,
            'never'
        ],
        'space-unary-ops': [
            2,
            {
                'words': false,
                'nonwords': false
            }
        ],
        'space-before-function-paren': [
            2,
            {
                'anonymous': 'always',
                'named': 'always'
            }
        ],
        'array-bracket-spacing': [
            2,
            'never',
            {}
        ],
        'comma-dangle': [
            2,
            'never'
        ],
        'no-trailing-spaces': 2,
        'comma-style': [
            2,
            'last'
        ],
        'dot-notation': 2,
        'eol-last': 2,
        'space-infix-ops': 2,
        'keyword-spacing': [
            2,
            {}
        ],
        'spaced-comment': [
            2,
            'always'
        ],
        'space-before-blocks': [
            2,
            'always'
        ],
        'indent': [
            2,
            4,
            {
                'SwitchCase': 1
            }
        ],
        'linebreak-style': [
            2,
            'unix'
        ],
        'jasmine/no-focused-tests': 2
    }
};
