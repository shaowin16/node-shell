#!/usr/bin/env node

/**
 *author:shaowin
 *date:2017-06-20
 *desc:linux命令的学习
 **/

'use strict';

const ALL_COMMAND = [
    'help',
    'netstat'
]
//shell netstat --help
let argv = require('minimist')(process.argv.slice(2));
console.log(argv); //如：

let cmds = argv._;

//获取命令,如netstat
let firstCommand = cmds.shift();
console.log(firstCommand);

if (ALL_COMMAND.indexOf(firstCommand) === -1) {
    if (!!firstCommand) console.log(`${firstCommand} command not found!`); //非null/undefined/0/""值
    firstCommand = 'help';
}

let executor = require(`../lib/${firstCommand}.js`)
executor(argv);
