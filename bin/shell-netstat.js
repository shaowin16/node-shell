#!/usr/bin/env node
'use strict'

let program = require('commander');
console.log(345)

program
    .option('-a, --all', '列出所有端口')
    .option('-n, --numeric', '拒绝显示别名，能显示数字的全部转化成数字(使用ip展示不使用域名)')
    .option('-p,--programs', '显示建立相关链接的程序名')
    .option('-t,--tcp', '仅显示tcp相关选项')
    .option('-u,--udp', '仅显示udp相关选项')
    .parse(process.argv);

if (program.all) console.log('列出所有端口')
if (program.numeric) console.log('使用ip展示不使用域名')
