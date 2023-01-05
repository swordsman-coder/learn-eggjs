const { Controller } = require('egg')
class QiniuController extends Controller {
  upload () {
    const { ctx, service } = this
    const info = service.qiniu.upload()
    ctx.body = info
  }
}

module.exports = QiniuController
  