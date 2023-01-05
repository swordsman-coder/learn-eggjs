const { Service } = require('egg')

class QiniuService extends Service {
  upload() {
    const { app } = this;
    const { cdn } = app.config
    return {
      data: cdn
    }
  }
}
module.exports = QiniuService;

