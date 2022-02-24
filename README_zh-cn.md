# LXL-PluginTemplate-Nodejs

[English](README.md) | 简体中文

### Github 使用当前模板
1. 创建自己的项目
2. 选择此作为项目模板
3. 开始创造出awesome插件
4. 有其他疑惑？

[反馈问题](https://github.com/Coash_Run/LXL-PluginTemplate-Nodejs/issues)

### 模板使用手册

1. `npm install` 通过 [npm](https://nodejs.org/) 完成依赖
2. 修改项目信息，在项目 `package.json` 中完成修改
3. 在 `/src/` 文件夹里完成，awesome的代码
4. `npm run dev` 或者 `yarn dev`，将会生成 **开发版** 插件，并存放在 `/dist/` 目录
5. 进行插件调试
6. `npm run build` 或者 `yarn build`，将会生成 **正式版** 插件，并存放在 `/dist/` 目录


### 发行版本命名

- name: 在 package.json 里的 name 字段
- version: 在 package.json 里的 version 字段
- git_version: 当前 Git 的版本 (如果存在就生成，没有就没有)
- dist_tag: DEV（开发版） 或 PROD（正式版）

`${name}[${version}+${git_version}](${dist_tag}).js`


### 如何进行实时调试? (未来功能)
**当前版本不支持调试**

1. 在服务端控制台输入 `v8debug` 指令
2. 等待服务器进入调试状态
3. 打开调试控制台 (**chromium** 内核浏览器)  
在地址栏里，输入 `chrome://inspect`  
4. 待续
