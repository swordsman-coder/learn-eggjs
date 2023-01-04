const { Controller } = require('egg')
class BaseController extends Controller {
  async index() {
    this.ctx.body = {
      data: "hello it's me"
    }
  }
}

module.exports = BaseController
  