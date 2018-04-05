module.exports = {
    // 指定校验的ECMAScript的版本及特性
    parserOptions: {
        ecmaVersion: 7, // ECMAScript版本，7为ES7
        sourceType: 'module', //默认script，如果代码是ECMAScript模块，设置为module
        ecmaFeatures: {
            // 使用额外的语言特性
            jsx: true // 启用JSX
        }
    },
    // 当访问未定义的变量时，no-undef 规则将发出警告
    // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
    env: {
        es6: true,
        node: true,
        browser: true
    },
    // 当访问未定义的变量时，no-undef 规则将发出警告
    // 脚本在执行期间访问的额外的全局变量
    globals: {
        document: true,
        navigator: true,
        window: true,
        node: true
    },
    settings: {
        'import/ignore': ['node_modules']
    },
    // extends: ['eslint:recommended', 'plugin:react/recommended'],
    // 使用第三方airbnb开发配置合集
    // "extends": "airbnb",
    // eslint-config-airbnb包括了以下3个插件
    // "plugins": [
    //   "react",
    //   "jsx-a11y",
    //   "import"
    // ],
    // 定义自己的规则
    rules: {
        'comma-dangle': ['error', 'never'], // 要求或禁止末尾逗号：不允许逗号
        indent: ['error', 4], // JavaScript代码强制使用一致的缩进：4格缩进
        // 强制数组方法的回调函数中有 return 语句
        'array-callback-return': 1,
        // 强制把变量的使用限制在其定义的作用域范围内
        'block-scoped-var': 1,
        // 要求 return 语句要么总是指定返回的值，要么不指定
        'consistent-return': 1,
        // 强制所有控制语句使用一致的括号风格
        curly: [2, 'all'],
        // switch 语句强制 default 分支
        'default-case': 2,
        // 使用 === 替代 == allow-null允许null和undefined==
        eqeqeq: [2, 'allow-null'],
        // 禁用 alert、confirm 和 prompt
        'no-alert': 1,
        // 禁用 arguments.caller 或 arguments.callee
        'no-caller': 2,
        // 禁止除法操作符显式的出现在正则表达式开始的位置
        'no-div-regex': 2,
        // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
        'no-empty-function': 2,
        // 禁止使用空解构模式no-empty-pattern
        'no-empty-pattern': 2,
        // 禁止在没有类型检查操作符的情况下与 null 进行比较
        'no-eq-null': 1,
        // 禁用 eval()
        'no-eval': 2,
        // 禁止扩展原生类型
        'no-extend-native': 2,
        // 禁止不必要的 .bind() 调用
        'no-extra-bind': 2,
        // 禁用不必要的标签
        'no-extra-label:': 0,
        // 禁止 case 语句落空
        'no-fallthrough': 2,
        // 禁止数字字面量中使用前导和末尾小数点
        'no-floating-decimal': 2,
        // 禁止使用短符号进行类型转换(!!fOO)
        'no-implicit-coercion': 1,
        // 禁止 this 关键字出现在类和类对象之外
        'no-invalid-this': 1,
        // 禁用 __iterator__ 属性
        'no-iterator': 2,
        // 禁用标签语句
        'no-labels': 2,
        // 禁用不必要的嵌套块
        'no-lone-blocks': 2,
        // 禁止在循环中出现 function 声明和表达式
        'no-loop-func': 1,
        // 禁止使用多个空格
        'no-multi-spaces': 1,
        // 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
        'no-multi-str': 2,
        // 禁止对原生对象赋值
        'no-native-reassign': 2,
        // 禁止在非赋值或条件语句中使用 new 操作符
        'no-new': 2,
        // 禁止对 Function 对象使用 new 操作符
        'no-new-func': 1,
        // 禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-new-wrappers': 2,
        // 禁用八进制字面量
        'no-octal': 2,
        // 禁止在字符串中使用八进制转义序列
        'no-octal-escape': 2,
        // 禁用 __proto__ 属性
        'no-proto': 2,
        // 禁止使用 var 多次声明同一变量
        'no-redeclare': 2,
        // 禁用逗号操作符
        'no-sequences': 2,
        // 禁止抛出非异常字面量
        'no-throw-literal': 2,
        // 禁用一成不变的循环条件
        'no-unmodified-loop-condition': 2,
        // 禁用未使用过的标签
        'no-unused-labels': 2,
        // 禁止不必要的 .call() 和 .apply()
        'no-useless-call': 2,
        // 禁止不必要的字符串字面量或模板字面量的连接
        'no-useless-concat': 2,
        // 禁用不必要的转义字符
        'no-useless-escape': 1,
        // 禁用 with 语句
        'no-with': 2,
        // 强制在parseInt()使用基数参数
        radix: 2,
        // 要求所有的 var 声明出现在它们所在的作用域顶部
        'vars-on-top': 1,
        // 要求 IIFE 使用括号括起来
        'wrap-iife': [2, 'any'],
        // 要求或禁止 “Yoda” 条件
        yoda: [2, 'never'],
        // 要求或禁止使用严格模式指令
        strict: 0,
        'no-dupe-keys': 2, //在创建对象字面量时不允许键重复
        'no-duplicate-case': 2, //switch中的case标签不能重复
        'no-dupe-args': 2, //函数参数不能重复

  
    }
}
