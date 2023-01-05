const { Service } = require('egg')

class BaseService extends Service {
  getUserInfo({name}) {
    const userInfo = {
      name: `我的name是${name}`
    }
    return userInfo
  }
}
module.exports = BaseService;

