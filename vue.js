module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
    'shared-node-browser': true
  },
  extends: ['eslint-config-airbnb-base'].map(require.resolve),
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'vue-eslint-parser',
  plugins: [
    'vue',
  ],
  rules: {
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 'warn',
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 'warn',
    // 不允许从同一路径多次 import
    'no-duplicate-imports': 'error',
    // 要求使用箭头函数作为回调
    'prefer-arrow-callback': 'warn',
    // 强制 rest 参数中， ... 与参数名之间不能存在空格
    'rest-spread-spacing': 'warn',
    // 禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': 'warn',
    //强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': 'warn',
    // 此规则旨在标记使用let关键字声明的变量，但在初始分配后从未重新分配变量。
    'prefer-const': 'off',
    // 在数组和对象中，使用解构代替成员表达式访问属性
    'prefer-destructuring': 'off',
    // --fix: ES6 支持二进制、八进制及十六进制的直接使用，禁止 parseInt() 对他们的转换
    'prefer-numeric-literals': 'off',
    // Disallow comparisons to negative zero
    'no-compare-neg-zero': 'error',
    // disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // Disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 'off',
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',
    // Disallow await inside of loops
    'no-await-in-loop': 'off',
    // disallow use of console
    'no-console': 'warn',
    // disallow control characters in regular expressions
    'no-control-regex': 'off',
    // disallow a duplicate case label.
    'no-duplicate-case': 'error',
    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'off',
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 'error',
    // 此规则禁止使用不必要的分号
    'no-extra-semi': 'error',
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',
    // 这个规则不允许直接在Object.prototype对象实例上调用某些方法
    'no-prototype-builtins': 'off',
    // Disallow characters which are made with multiple code points in character class syntax
    'no-template-curly-in-string': 'off',
    // disallow return/throw/break/continue inside finally blocks
    'no-unsafe-finally': 'off',
    // disallow comparisons with the value NaN
    'use-isnan': 'off',
    // disallow using an async function as a Promise executor
    'no-async-promise-executor': 'off',
    // 这条规则不允许混淆多行表达式，换行符看起来像是结束语句，但不是。
    'no-unexpected-multiline': 'error',
    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'off',

    // enforces return statements in callbacks of array's methods
    'array-callback-return': 'off',
    // 当在代码块中用var声明变量，并在代码块外使用时报错
    'block-scoped-var': 'off',
    // 该规则旨在标记不使用的类方法this
    'class-methods-use-this': 'off',
    // require return statements to either always or never specify values
    'consistent-return': 'off',
    // 此规则旨在强制执行成员表达式中的换行符一致性。此规则防止在成员表达式中围绕点使用混合换行符。
    'dot-location': 'off',
    // 在进行比较时，必须使用全等 === 和完全不等 !==
    'eqeqeq': 'off',
    //  make sure for-in loops have an if statement
    'guard-for-in': 'warn',
    // enforce a maximum number of classes per file
    'max-classes-per-file': 'off',
    // 禁止使用 arguments.caller 和 arguments.callee
    'no-caller': 'warn',
    // disallow empty functions, except for standalone funcs/arrows
    'no-empty-function': 'warn',
    // 此规则旨在标记解构结构对象和数组中的任何空模式，因此，只要遇到问题就会报告问题
    'no-empty-pattern': 'off',
    // 不允许直接修改内建对象的原型
    'no-extend-native': 'off',
    // disallow unnecessary function binding
    'no-extra-bind': 'off',
    //  disallow Unnecessary Labels
    'no-extra-label': 'off',
    //  disallow fallthrough of case statements 
    'no-fallthrough': 'off',
    //  此规则旨在消除浮点小数点，并在数值有小数点但在其之前或之后缺少数字时发出警告。
    'no-floating-decimal': 'off',
    // disallow use of eval()-like methods
    'no-implied-eval': 'off',
    // disallow usage of __iterator__ property
    'no-iterator': 'off',
    // disallow unnecessary nested blocks
    'no-lone-blocks': 'off',
    // disallow use of multiple spaces
    'no-multi-spaces': 'warn',
    // 多行字符串要相加，而不是用链接符
    'no-multi-str': 'warn',
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'off',
    // disallow use of new operator for Function object
    'no-new-func': 'off',
    // 这个规则不允许使用八进制文字。
    'no-octal': 'off',
    //  这个规则不允许字符串文字中的八进制转义序列
    'no-octal-escape': 'off',
    //  这个规则旨在防止由功能参数的修改或重新分配引起的意外行为
    'no-param-reassign': 'off',
    //  disallow certain object properties
    'no-restricted-properties': 'off',
    //  disallow use of assignment in return statement
    'no-return-assign': 'off',
    //  disallow redundant `return await`
    'no-return-await': 'off',
    //  disallow self assignment
    'no-script-url': 'off',
    //  通过 throw 语句抛出的对象必须是 Error 对象本身或者通过 Error 对象定义的对象
    'no-throw-literal': 'warn',
    //  disallow usage of expressions in statement position
    'no-unused-expressions': 'off',
    //  disallow unused labels
    'no-unused-labels': 'off',
    //  Disallow unnecessary catch clauses
    'no-useless-catch': 'off',
    //  disallow redundant return; keywords
    'no-useless-return': 'off',
    //  disallow use of void operator
    'no-void': 'off',
    //  require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 'off',
    //  require use of the second argument for parseInt()
    'radix': 'off',
    //  requires to declare all vars on top of their containing scope
    'vars-on-top': 'off',
    //  require or disallow Yoda conditions
    'yoda': 'off',
    //  require all requires be top-level
    'global-require': 'off',
    //  disallow use of the Buffer() constructor
    'no-buffer-constructor': 'off',
    //  disallow string concatenation with __dirname and __filename
    'no-path-concat': 'off',
    //  disallow use of new operator with the require function
    'no-new-require': 'off',
    //  babel inserts `'use strict';` for us
    strict: 'off',
    //  disallow labels that share a name with a variable
    'no-label-var': 'off',
    //  disallow specific globals
    'no-restricted-globals': 'off',
    //  disallow declaration of variables already declared in the outer scope
    'no-shadow': 'off',
    //  disallow use of undefined when initializing variables
    'no-undef-init': 'off',

    // 在 in 操作符左边的操作项不能用 ! 例如这样写不对的：if ( !a in b) { // dosomething }
    'no-negated-in-lhs': 'error',
    // 检查块语句大括号的最大可嵌套深度
    'max-depth': 'error',
    // 一个函数的最大嵌套
    'max-nested-callbacks': 'error',
    //  一个函数最大语句数
    'max-statements': 'error',
    // 用来控制函数的复杂度，{} 大括号对数不能超过 20 对
    'complexity': 'warn',
    // 不能使用看起来像除法的正则表达式
    'no-div-regex': 'error',
    //  在 if else 语句中，如果 else 语句中只含有一个 return 语句，那么完全可以不使用 else 语句，直接 return
    'no-else-return': 'warn',
    //  保证了在逻辑表达式、条件表达式、申明语句、数组元素、对象属性、sequences、函数参数中不使用超过一个的空白符
    'no-multi-spaces': 'warn',
    //  禁止使用不被修改的循环条件
    'no-unmodified-loop-condition': 'error',
    //  尽量不使用否定表达式
    'no-negated-condition': 'warn',
    //  避免使用没有意义的 call() 和 apply()
    'no-useless-call': 'error',

    // style
    // require or disallow the Unicode Byte Order Mark
    'unicode-bom': 'off',
    // Require or disallow spacing between template tags and their literals
    'template-tag-spacing': 'off',
    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': 'off',
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': 'off',
    // 数组前后不能带空格
    'array-bracket-spacing': 'warn',
    // enforce spacing inside single-line blocks
    'block-spacing': 'off',
    // 逗号前禁止有空格, 逗号后必须有空格
    'comma-spacing': 'warn',
    // disallow padding inside computed properties
    'computed-property-spacing': 'off',
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 'off',
    // require function expressions to have a name
    'func-names': 'off',
    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': 'off',
    //  Enforce the location of arrow function bodies with implicit returns
    'implicit-arrow-linebreak': 'off',
    // 对象键值对的冒号前禁止有空格, 冒号后必须有空格
    'key-spacing': 'warn',
    // require a space before & after certain keywords
    'keyword-spacing': 'off',
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 'off',
    // require or disallow an empty line between class members
    'lines-between-class-members': 'off',
    // require or disallow newlines around directives
    'lines-around-directive': 'off',
    // require a capital letter for constructors
    'new-cap': 'off',
    // enforces new line after each method call in the chain to make it
    'newline-per-chained-call': 'off',
    // disallow use of bitwise operators
    'no-bitwise': 'off',
    // disallow use of the continue statement
    'no-continue': 'off',
    // disallow if as the only statement in an else block
    'no-lonely-if': 'off',
    // disallow un-paren'd mixes of different operators
    'no-mixed-operators': 'off',
    // disallow use of chained assignment expressions
    'no-multi-assign': 'off',
    // disallow nested ternary expressions
    'no-nested-ternary': 'off',
    // disallow use of the Object constructor
    'no-new-object': 'off',
    // disallow use of unary operators, ++ and --
    'no-plusplus': 'off',
    // disallow certain syntax forms
    'no-restricted-syntax': 'off',
    // disallow space between function identifier and application
    'no-spaced-func': 'off',
    // disallow tab characters entirely
    'no-tabs': 'off',
    //  disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'off',
    //  disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 'off',
    // disallow whitespace before properties
    'no-whitespace-before-property': 'off',
    //  enforce the location of single-line statements
    'nonblock-statement-body-position': 'off',
    //  require padding inside curly braces
    'object-curly-spacing': 'off',
    //  enforce line breaks between braces
    'object-curly-newline': 'off',
    //  enforce "same line" or "multiple line" on object properties
    'object-property-newline': 'off',
    //  allow just one var statement per function
    'one-var': 'off',
    //  require a newline around variable declaration
    'one-var-declaration-per-line': 'off',
    //  Requires operator at the beginning of the line in multiline statements
    'operator-linebreak': 'off',
    //  require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 'off',
    //  disallow padding within blocks
    'padded-blocks': 'off',
    //  Prefer use of an object spread over Object.assign
    'prefer-object-spread': 'off',
    //  Enforce location of semicolons
    'semi-style': 'off',
    //  require or disallow space before blocks
    'space-before-blocks': 'off',
    //  require spaces around operators
    'space-infix-ops': 'off',
    //  Require or disallow spaces before/after unary operators
    'space-unary-ops': 'off',
    // 禁止在 function 的左括号之前使用空格
    'space-before-function-paren': 'warn',
    // 禁止在圆括号内使用空格, ( 左括号右边和右括号左边 )
    'space-in-parens': 'warn',
    // 单引用
    'quotes': [1, "single"], 
    // 该规则用来规定分号前后是否加空格，默认配置为「分号后面加空格，前面不加空格」
    "semi-spacing": [1, {"before": false, "after": true}],
    // vue
    // 定义了的 jsx element 必须使用
	'vue/jsx-uses-vars': 'error',	 
    // 计算属性禁止包含异步方法
	'vue/no-async-in-computed-properties': 'error',
    // 禁用重复的字段名称
	'vue/no-dupe-keys': 'error',	
    // 禁用重复属性
	'vue/no-duplicate-attributes': 'error',	
    // 禁止出现语法错误	 
	'vue/no-parsing-error': 'error',
    // 禁止覆盖保留字
	'vue/no-reserved-keys': 'error',	 
    // 组件的 data 属性的值必须是一个函数
	'vue/no-shared-component-data': 'error',
    // 禁止在计算属性中对属性修改
	'vue/no-side-effects-in-computed-properties': 'error',
    // 禁止 <template> 使用 key 属性
	'vue/no-template-key': 'error',		 
    //  禁止在 <textarea> 中出现 {{message}}
	'vue/no-textarea-mustache': 'error',
    //  禁止注册模板内未使用的组件	 
	'vue/no-unused-components': 'error',
    // v-for中变量必须被使用
	'vue/no-unused-vars': 'error',
    // 禁止在与v-for相同的元素上使用v-if	 
	'vue/no-use-v-if-with-v-for': 'error',	 
    //  <component> 必须有 v-bind:is
	'vue/require-component-is': 'error',
    //  要求prop类型是构造函数，而不能是字符串 
    'vue/require-prop-type-constructor': 'error',
    // render 函数必须有返回值		 
	'vue/require-render-return': 'error',
    // v-for 指令的元素必须有 v-bind:key 
	'vue/require-v-for-key': 'error',
    // prop 的默认值必须匹配它的类型	 
	'vue/require-valid-default-prop': 'error',
    // 计算属性必须有返回值	
	'vue/return-in-computed-property': 'error',	
    // 在v-on上强制使用精确修饰符	 
	'vue/use-v-on-exact': 'error',	 
    //  template 的根节点必须合法
	'vue/valid-template-root': 'error',	
    // 	v-bind 指令必须合法		 
	'vue/valid-v-bind': 'error',
    //  v-cloak 指令必须合法		 
	'vue/valid-v-cloak': 'error',	
    //  v-else-if 指令必须合法		 
   'vue/valid-v-else-if': 'error',	
    //  v-else 指令必须合法	 
	'vue/valid-v-else': 'error',	
    //  v-for 指令必须合法 
	'vue/valid-v-for': 'error',	
    //  v-html 指令必须合法 
	'vue/valid-v-html': 'error',
    //  v-if 指令必须合法			 
	'vue/valid-v-if': 'error',	
    //  v-model 指令必须合法		 
	'vue/valid-v-model': 'error',
    //  v-on 指令必须合法		 
	'vue/valid-v-on': 'error',
    // v-once 指令必须合法			 
	'vue/valid-v-once': 'error',			
    // v-pre 指令必须合法
	'vue/valid-v-pre': 'error',	 
    // v-show 指令必须合法
	'vue/valid-v-show': 'error',	 
    // v-text 指令必须合法
	'vue/valid-v-text': 'error',
	'vue/attribute-hyphenation': 'warn',	 
	'vue/html-closing-bracket-newline': 'warn',	 
	'vue/html-closing-bracket-spacing': 'warn',	 
	'vue/html-end-tags': 'warn',
	'vue/html-indent': 'warn',	 
	'vue/html-quotes': 'warn',	 
	'vue/html-self-closing': 'warn',	 
	'vue/multiline-html-element-content-newline': 'warn',	 
	'vue/mustache-interpolation-spacing': 'warn',	 
	'vue/no-multi-spaces': 'warn', 	 
	'vue/no-spaces-around-equal-signs-in-attribute': 'warn',	 
	'vue/no-template-shadow': 'warn',	 
	'vue/prop-name-casing': 'warn',		 
	'vue/v-bind-style': 'warn',		 
	'vue/v-on-style': 'warn',	 
	'vue/this-in-template': 'warn',		 
	'vue/max-attributes-per-line': 'off',	 
	'vue/name-property-casing': 'off',	 
	'vue/require-default-prop': 'off',	 
	'vue/require-prop-types': 'off',	 
	'vue/singleline-html-element-content-newline': 'off'
  },
};
