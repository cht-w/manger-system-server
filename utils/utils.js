/**
 * 通用的工具函数封装
 */
const log4js = require('./log4j')
const CODE = {
  SUCCESS: 200,
  PARAM_ERROR: 10001, // 参数错误
  USER_ACCOUNT_ERROR: 20001, // 账号或者密码错误
  USER_LOGIN_ERROR: 30001, // 用户未登陆
  BUSINESS_ERROR: 40001, // 业务请求失败
  AUTH_ERROR: 50001, // 认证失败或者TOKEN过期
}
module.exports = {
  /**
   * 分页结构封装
   * @param {number} pageNum  
   * @param {number}   
   * @param {number}   
   * @returns 
   */
  pager ({ pageNum = 1, pageSize = 10 }) {
    // 将pageNum和pageSize转换成数字
    pageName *= 1
    pageSize *= 1
    // 获取下一页的索引值 举例：pageName=2,那么第二页的第一个索引值就是(2-1)*pageSize
    const skipIndex = (pageNum - 1) * pageSize
    return {
      page: {
        pageName,
        pageSize
      },
      skipIndex
    }
  },
  success (data = '', msg = '', code = CODE.SUCCESS) {
    log4js.debug(data)
    return { code, data, msg }
  },
  fail (msg = '', code = CODE.BUSINESS_ERROR) {
    log4js.debug(msg)
    return { code, msg }
  }
}