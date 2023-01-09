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

  async addTodo () {
    const { ctx, service } = this
    const { title, content } = ctx.request.body;
    const result =  await service.baseInfo.add({
      title,
      content
    })
    ctx.body = result
  }

  async getAllTodo () {
    const { ctx, service } = this
    const result =  await service.baseInfo.getAll()
    ctx.body = result
  }

  async updateTodo () {
    const { ctx, service } = this
    const { title, content, id } = ctx.request.body;
    const result =  await service.baseInfo.updateTodo({ title, content, id })
    ctx.body = result
  }

  async delTodo () {
    const { ctx, service } = this
    const { id } = ctx.request.body;
    const result =  await service.baseInfo.delTodo({ id })
    ctx.body = result
  }
  
}

module.exports = BaseController
  