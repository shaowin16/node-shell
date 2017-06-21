'use strict';

let ALL_PARAMS = [
    'a',
    't',
    'u',
    'n',
    'l',
    'p',
    'r',
    'e',
    's',
    'c'
]

let USAGE = `
说明: 打印Linux中网络系统的状态信息，可让你得知整个Linux系统的网络情况
要求:Linux
用法:shell netstat [选项]
选项:
  -a,--all            显示所有的网络连接
  -e,--extend         显示扩展信息，例如uid等
  -l,--listening      仅列出有在 Listen (监听) 的服務状态
  -n,--numeric        拒绝显示别名，能显示数字的全部转化成数字(直接使用ip地址，而不通过域名服务器)
  -p,--programs       显示PID/进程名称
  -r,--route          显示路由表信息
  -s,--statistice     显示网络工作信息统计表
  -t,--tcp            仅显示TCP传输协议的连接状况
  -u,--udp            仅显示UDP传输协议的连接状况
`

function showUsage(opt) {
    return console.log(USAGE)
}

function NetStat(argv) {
  
}

//shell netstat -a
//输出命令拥有的参数，参数的作用，用法的例子
//可以执行shell命令
module.exports = showUsage;
