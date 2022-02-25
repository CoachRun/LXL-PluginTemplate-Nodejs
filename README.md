# LXL-PluginTemplate-Nodejs

English | [简体中文](README_zh-cn.md)

### Github Use The Template
1. Create own repo
2. Select this template
3. Create your awesome plugin
4. have some problem?

[LiteLoaderBDS Website](https://www.litebds.com/)
[LiteLoaderBDS Repo](https://github.com/LiteLDev/LiteLoaderBDS)
[Report Issue](https://github.com/CoachRun/LXL-PluginTemplate-Nodejs/issues)

### Template User Manual

1. `npm install` download dependence by [npm](https://nodejs.org/)
2. modify project info in `package.json`
3. write awesome code in `/src/` folder
4. `npm run dev` or `yarn dev` build **Development** distribute in `/dist/`
5. Debugger
6. `npm run build` or `yarn build` build **Release** distribute in `/dist/`

### distribute filename

- name: Project Name in package.json
- version: Project Version in package.json
- git_version: git current ref hash (if Exist, Optical)
- dist_tag: DEV or PROD

`${name}[${version}+${git_version}](${dist_tag}).js`


### How to real-time debug plugin? (Futures)
**Not Support current version**

1. Type `v8debug` by keyboard at Server Command
2. Wait for server debug message response
3. Open Debugger Windows (**chromium** based Browser)  
Search or address bar, Type `chrome://inspect`  
4. soon
