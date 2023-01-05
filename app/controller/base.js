const { Controller } = require('egg')
class BaseController extends Controller {
  index() {
    this.ctx.body = {
      data: "hello it's me"
    }
  }

  getInfo () {
    const { ctx } = this
    console.log('ctx.query', ctx.query)
    ctx.body = {
      query: ctx.query
    }
  }

  getUser () {
    const { ctx, service } = this
    const { name } = ctx.params;
    const userInfo = service.baseInfo.getUserInfo({
      name
    })
    ctx.body = userInfo
  }
}

module.exports = BaseController
  