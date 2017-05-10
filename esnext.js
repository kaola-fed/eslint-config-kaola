module.exports = {
    extends: ['./index.js'],
    env: {
        es6: true,
        node: true,
        browser: true,
        commonjs: true,
        'shared-node-browser': true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    rules: {
        // Node
        // 禁止调用 require 时使用 new 操作符
        'no-new-require': [2],

        // ES6
        // --fix: 要求箭头函数体使用大括号
        'arrow-body-style': ['error', 'as-needed'],

        // --fix: 要求箭头函数的参数使用圆括号
        'arrow-parens': ['error', 'as-needed', {
            // 如果函数体在一个指令块中（被花括号括起来）要求使用圆括号把参数括起来
            requireForBlockBody: true
        }],

        // --fix: 强制箭头函数的箭头前后使用一致的空格
        'arrow-spacing': ['warn', {
            before: true,
            after: true
        }],

        // 要求在构造函数中有 super() 的调用
        'constructor-super': 'error',

        // --fix: 强制 generator 函数中 * 号周围使用一致的空格
        'generator-star-spacing': ['warn', {
            before: true,
            after: false
        }],

        // 禁止修改类声明的变量
        'no-class-assign': 'error',

        // 在可能与数值对比造成混淆处禁用箭头函数，allowParens 为 true 时放宽规则，接受使用圆括号预防混淆
        'no-confusing-arrow': ['error', {
            allowParens: true
        }],

        // 禁止修改 const 声明的变量
        'no-const-assign': 'error',

        // 禁止类成员中出现重复的名称
        'no-dupe-class-members': 'error',

        // 不允许从同一路径多次 import
        'no-duplicate-imports': ['error', {
            includeExports: false
        }],

        // 禁止调用 Symbol 使用 new 操作符
        'no-new-symbol': 'error',

        // 禁止引入限制 import 的资源
        'no-restricted-imports': 'off',

        // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
        'no-this-before-super': 'error',

        // --fix: 禁止对象上不必要的属性计算
        'no-useless-computed-key': 'error',

        // 禁用不必要的构造函数
        'no-useless-constructor': 'error',

        // --fix: 禁止在 import、export 和解构中进行不必要的重命名
        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false
        }],

        // --fix: 要求使用 let 或 const，禁止使用 var
        'no-var': 'error',

        // --fix: 要求对象字面量中方法和属性使用简写语法
        // @TODO: 'always' => 'consistent-as-needed'：保证对象字面量的简写或非简写一致性，但尽可能的全部使用简写
        'object-shorthand': ['error', 'always', {
            // 忽略构造函数，允许不简写
            ignoreConstructors: false,
            // 忽略字符串字面量属性，允许不简写
            avoidQuotes: true
        }],

        // --fix: 要求使用箭头函数作为回调
        'prefer-arrow-callback': ['warn', {
            allowNamedFunctions: false,
            allowUnboundThis: true
        }],

        // --fix: 要求使用 const 声明那些声明后不再被修改的变量
        // TODO: enable
        'prefer-const': ['off', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true
        }],

        // 在数组和对象中，使用解构代替成员表达式访问属性
        // TODO: enable
        'prefer-destructuring': ['off', {
            array: true,
            object: true
        }, {
            enforceForRenamedProperties: false
        }],

        // --fix: ES6 支持二进制、八进制及十六进制的直接使用，禁止 parseInt() 对他们的转换
        // @TODO: enable
        'prefer-numeric-literals': 'off',

        // 使用 rest 参数获取多余参数，而不是使用 arguments 对象
        'prefer-rest-params': 'error',

        // --fix: 要求使用扩展运算符而非 .apply()
        'prefer-spread': 'error',

        // --fix: 要求使用模板字面量而非字符串连接
        'prefer-template': 'error',

        // 要求 generator 函数内有 yield
        'require-yield': 'error',

        // --fix: 强制 rest 参数中， ... 与参数名之间不能存在空格
        'rest-spread-spacing': ['warn', 'never'],

        // 强制模块内的 import 排序
        'sort-imports': ['off', {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        }],

        // 使用 Symbol 时强制输入描述，如：Symbol(description)
        'symbol-description': 'error',

        // --fix: 禁止模板字符串中的嵌入表达式周围空格的使用
        'template-curly-spacing': 'warn',

        // --fix: 强制在 yield* 表达式中 * 周围使用空格
        'yield-star-spacing': ['warn', 'before']
    }
};