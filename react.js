module.exports = {
    plugins: [
        'react',
        'react-hooks'
    ],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    rules: {
        // 对jsx属性值强制使用双引号
        'jsx-quotes': ['error', 'prefer-double'],

        // jsx props中不允许使用常规函数和绑定调用，忽略refs属性和dom组件，允许使用箭头函数
        'react/jsx-no-bind': ['warn', {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: false,
            ignoreDOMComponents: true
        }],

        // 每个文件只声明一个组件以提高组件的可读性和重用性，规则将忽略无状态组件，并允许在同一个文件中拥有多个无状态组件，或者一个有状态组件和一些无状态组件
        'react/no-multi-comp': ['warn', { ignoreStateless: true }],

        // 禁止使用字符串形式指定ref
        'react/no-string-refs': 'error',
        
        // 防止多行JSX周围缺少括号，针对JSX中的prop属性不应用此规则
        'react/jsx-wrap-multilines': ['error', {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'ignore'
        }],

        // 防止react被错误地标记为未使用（需在no-unused-vars定义时生效）
        'react/jsx-uses-react': 'error',

        // 在JSX中不允许使用未声明的变量
        'react/jsx-no-undef': 'error',

        // 防止JSX中使用的变量被错误地标记为未使用
        'react/jsx-uses-vars': 'error',

        // 强制使用PascalCase命名用户自定义的JSX组件，允许组件名全部为大写
        'react/jsx-pascal-case': ['error', {
            allowAllCaps: true,
            ignore: []
        }],

        // 使用ES6的类定义React组件，而不是 React.createClass 创建
        'react/prefer-es6-class': ['error', 'always'],

        // 强制无状态的React组件以纯函数的方式定义，忽略继承自 React.PureComponent 的组件。
        'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

        // 验证JSX中的标记关闭位置
        'react/jsx-closing-tag-location': 'error',
        
        // 禁止在内联JSX属性之间使用多个空格
        'react/jsx-props-no-multi-spaces': 'error',

        // 验证JSX开括号和闭括号内及周围的空格
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never'
        }],
        
        // 在JSX属性和表达式中禁止大括号内的空格，但允许多行JSX表达式
        'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
        
        // 在JSX中强制布尔属性表示法，当一个属性值为true时，不必显式的写出来
        'react/jsx-boolean-value': ['error', 'never', { always: [] }],
        
        // 防止没有子组件的组件使用额外的关闭标记
        'react/self-closing-comp': 'error',
        
        // 验证JSX中闭合标签的位置，必须与包含开始标签的行对齐
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        
        // 强制在render函数中返回值
        'react/require-render-return': 'error',

        // 禁止isMounted的使用。ismount是一种反模式，在使用ES6类时不可用
        'react/no-is-mounted': 2,
        
        // 按以下顺序书写
        'react/sort-comp': [1, {
            order: [
                'static-methods',
                'lifecycle',
                'everything-else',
                '/^render.+$/',
                'render'
            ]
        }],

        // 强制 Hooks 规则
        'react-hooks/rules-of-hooks': 'error',

        // 检查 effect 的依赖
        'react-hooks/exhaustive-deps': 'warn'
    }
}