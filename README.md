## 

### 一、项目准备

#### 1.1、初始化项目

```sh
# 创建项目并进入目录
mdkir fe-engineering && cd $_

# 创建 独立模式
lerna init --independent

# 增加包
lerna create @tokeyjerry/sdk-cli
```

#### 1.2、提交配置

- 规范提交
- 生成日志

```sh
npm i -D commitizen
npm i -D cz-lerna-changelog
```
在 package.json 中添加：

```git
  "scripts": {
    "c": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-lerna-changelog"
    }
  },
```

- commitlint 校验提交信息
- husky 指定校验的时机（husky 继承了 Git 下所有的钩子，在触发钩子的时候，husky 可以阻止不合法的 commit、push 等）

```sh
npm i -D @commitlint/cli @commitlint/config-conventional
npm i -D husky
```

在工程下添加 commitlint.config.js 文件，为commitlint 指定相应的规范：

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

在 package.json 下添加如下配置：

> "commit-msg" 是 git 提交时校验提交信息的钩子，当触发时便会使用 commitlit 来校验。安装配置完成后，想通过 git commit 或者其它第三方工具提交时，只要提交信息不符合规范就无法提交。从而约束开发者使用 npm run c 来提交。

```git
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

