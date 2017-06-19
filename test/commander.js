#!/usr/bin/env node

let program = require('commander');

program
  .version('0.0.1')
  .command('netstat', '打印Linux中网络系统的状态信息')
  .command('search [query]', 'search with optional query')
  .command('list', 'list packages installed')
  .command('publish', 'publish the package')
  .parse(process.argv);
