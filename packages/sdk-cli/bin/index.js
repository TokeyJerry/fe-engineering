#!/usr/bin/env node

'use strict'

// 请求 commander 库
const program = require('commander')
const { version } = require('../package.json')

// 从 package.json 文件中请求 version 字段的值，-v和--version是参数
program
  .version(version, '-v, --version')

// 解析命令行参数
program.parse(process.argv)

