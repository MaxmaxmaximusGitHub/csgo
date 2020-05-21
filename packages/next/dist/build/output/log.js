"use strict";exports.__esModule=true;exports.wait=wait;exports.error=error;exports.warn=warn;exports.ready=ready;exports.info=info;exports.event=event;var _chalk=_interopRequireDefault(require("next/dist/compiled/chalk"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const prefixes={wait:_chalk.default.cyan('wait')+'  -',error:_chalk.default.red('error')+' -',warn:_chalk.default.yellow('warn')+'  -',ready:_chalk.default.green('ready')+' -',info:_chalk.default.cyan('info')+'  -',event:_chalk.default.magenta('event')+' -'};function wait(...message){// console.log(prefixes.wait, ...message)
}function error(...message){console.log(prefixes.error,...message);}function warn(...message){// console.log(prefixes.warn, ...message)
}function ready(...message){// console.log(prefixes.ready, ...message)
}function info(...message){// console.log(prefixes.info, ...message)
}function event(...message){// console.log(prefixes.event, ...message)
}