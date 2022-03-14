/**
 * 日志存储
 * @author haotianChen
 */

const log4js = require('log4js')

// 定义levels变量
const levels = {
    "trace": log4js.levels.TRACE,
    "debug": log4js.levels.DEBUG,
    "info": log4js.levels.INFO,
    "warn": log4js.levels.WARN,
    "error": log4js.levels.ERROR,
    "fatal": log4js.levels.FATAL
}
// log4js的配置
log4js.configure({
    // 追加器
    appenders: {
        console: { type: 'console' },
        info: {
            type: 'file',
            filename: 'logs/all-logs.log'
        },
        error: {
            type: 'dateFile',
            filename: 'logs/log',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true // 设置文件名称为 filename + pattern的组合

        }
    },
    // 分类
    categories: {
        default: { appenders: [ 'console' ], level: 'debug'},
        error: {
            appenders: [ 'error', 'console' ],
            level: 'error'
        },
        info: {
            appenders: [ 'info', 'console'],
            level: 'info'
        }
    }
})
/**
 * 日志输出 level为debug
 * @param {string} content 
 */
exports.debug = (content)=> {
    const logger = log4js.getLogger()
    logger.level = levels.debug
    logger.debug(content)
}

/**
 * 日志输出 level为error
 * @param {string} content 
 */
 exports.error = (content)=> {
    const logger = log4js.getLogger('error')
    logger.level = levels.error
    logger.error(content)
}

/**
 * 日志输出 level为info
 * @param {string} content 
 */
 exports.info = (content)=> {
    const logger = log4js.getLogger('info')
    logger.level = levels.info
    logger.info(content)
}