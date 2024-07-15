# 🤖 你的代码工具箱-瑞士军刀

> 概述：开箱即可用的vue指令和工具函数。
> 说明：vue3-directive-tools 是一个方便在 Vue 3 + Ts 项目中快速使用的 directive、tool 的 npm 插件。它允许您轻松地在项目中添加多种功能，它采用 Ts 方式开发，与 Vue3 更加搭配。

# 🌍 1、安装

```javascript
npm install vue3-directive-tools
```

**说明：**

> 此工具库是基于 Element-plus、Sass、Node、Ts，请您在安装以上依赖后使用此辅助库，它可帮您快速开发功能、您只需使用 v-xx="" ；

## 🛹 2、使用方法

简介苍白，请您移步-》👉
[查看使用文档](https://huo-zai-feng-lang-li.github.io/vue3-tools-docs/vue3-directive-tools.html)
<br/>
[查看更新文档](https://huo-zai-feng-lang-li.github.io/vue3-tools-docs/UpdateLog/vue3-directive-tools.html)

- 更多功能正在逐步开发中 ^_^

## 📝 package.json 描述

```javascript
  "scripts": {
    /*
     "-w" 表示实时监视文件的更改并重新编译
     "-p" 参数指定了使用 `tsconfig.json` 文件中的配置来编译 TypeScript 文件。
     这个配置文件中(tsconfig.json)可能包含了一些特定的编译选项，比如` module`、`target` 等，这些选项会影响编译的结果。
     编译结果是通过tsconfig.json "module": "ES6"
    */
    "tsc": "tsc -W -p tsconfig.json",
    /*
      "-w" 表示实时监视文件的更改并重新编译，"–outDir lib" 表示将编译结果输出到lib目录下，
      "src/directive/index.ts" 表示要编译的`入口文件是src/directive/index.ts。`
      没有指定使用 `tsconfig.json` 文件，所以 TypeScript 编译器会使用`默认的配置来编译` TypeScript 文件。
      这个默认的配置可能和 tsconfig.json 文件中的配置不同，所以编译的结果也会不同。
      当你运行 tsc 命令而没有指定 -p 或 --project 参数时，TypeScript 编译器会使用一组默认的编译选项。这些默认的编译选项包括：
        - "target": "ES3"：默认的目标 ECMAScript 版本是 ES3。
        - "module": "CommonJS"：默认的模块系统是 CommonJS。
        - "strict": false"：默认不启用所有的严格类型检查选项。
        - "noEmit": false"：默认会生成输出文件。
        这只是默认编译选项的一部分，完整的列表可以在 TypeScript [官方文档](https://www.typescriptlang.org/zh/tsconfig#module) 中找到。
        需要注意的是，这些默认的编译选项可能不适合所有的项目，所以通常我们会在 tsconfig.json 文件中指定自己的编译选项，以覆盖默认的编译选项。
    */
    "tsc:default": "tsc -w --outDir lib src/directive/index.ts"
  },
```
