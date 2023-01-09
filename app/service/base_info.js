const { Service } = require('egg')

class BaseService extends Service {
  getUserInfo({name}) {
    const userInfo = {
      name: `我的name是${name}`
    }
    return userInfo
  }

  async add({title, content}) {
    const { ctx } = this;
    const result = await ctx.helpModel.Abc.create({
      title,
      content,
      createTime: new Date(),
      updateTime: new Date()
    });
    return result
  }

  async getAll() {
    const { ctx } = this;
    const result = await ctx.helpModel.Abc.findAll();
    return { result }
  }

  async updateTodo({ id, title, content }) {
    const { ctx } = this;
    const result = await ctx.helpModel.Abc.update({
      title,
      content,
      updateTime: new Date()
    }, {
      where: {
        id
      }
    });
    return { result: "更新成功" }
  }

  async delTodo({ id }) {
    const { ctx } = this;
    await ctx.helpModel.Abc.destroy({
      where: {
        id
      }
    });
    return { result: "删除成功" }
  }
}
module.exports = BaseService;

