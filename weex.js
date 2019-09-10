module.exports = {
    plugins: [
        'no-for-of-loops',
        'no-methods',
        'promise',
        'import'
    ],
    rules: {
        // es6: error in ios8-
        "no-for-of-loops/no-for-of-loops": "error", // 禁用for-of，ios8之下会崩溃，而加上runtime性价比太低

        // 禁用，ios8之下会崩溃，而加上runtime性价比太低
        "no-methods/no-includes": [ "error", {"errMsg": "includes会让weex在ios8之下崩溃，加上runtime又太大...so，暂时勿用！"}],
        
        // 禁用Object.entries，ios8之下会崩溃，而加上runtime性价比太低
        "no-methods/no-entries": ["error", {"errMsg": "Object.entries会让weex在ios8之下崩溃，加上runtime又太大...so，请暂时勿用！"}],
        
        // 禁用Number.isInteger，ios8之下会崩溃，而加上runtime性价比太低
        "no-methods/no-isInteger": ["error", {"errMsg": "Number.isInteger会让weex在ios8之下崩溃，加上runtime又太大...so，请暂时勿用！"}],
        
        // promise: error ------------------------
        "promise/param-names": "error", // newPromise时，函数命名上只允许 resolve 和 reject

        // 未return的promise需要加上catch，eg: promise中直接reject了
        "promise/catch-or-return": "warn",

        // promise里边不要写 callback 回调函数
        "promise/no-callback-in-promise": "error",

        // 静态函数不可以new，如 Promise.all 不可写成 new Promise.all,类似的 race，resolve，reject也不行
        "promise/no-new-statics": "error",

        // 回调中不允许出现promise
        "promise/no-promise-in-callback": "error",

        // finally中不可以return
        "promise/no-return-in-finally": "error",

        // 警告多余的包裹，eg: p.then(() => {return Promise.resolve(123)}); 而应该直接return结果
        "promise/no-return-wrap": "warn",

        // 嵌套时报警
        "promise/no-nesting": "warn",

        // then，resolve，reject，catch，finally等函数的入参检查
        "promise/valid-params": "warn",

        // 不可以import package.json中没有的包
        "import/no-extraneous-dependencies": "warn",

        // import语句之后要换行，除非下一行的也是import
        "import/newline-after-import": "warn",

        // 直接import之后的名字要和包中export default一致
        "import/no-named-as-default": "warn",

        // 没有必要的冗余路径
        "import/no-useless-path-segments": "warn"
    }
}