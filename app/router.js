module.exports = app => {
  const { router, controller } = app;
  router.get('/hello', controller.base.index);
  router.get('/getInfo', controller.base.getInfo);
  router.get('/getUser/:name', controller.base.getUser);
  router.post('/uploadImg', controller.qiniu.upload);
  router.post('/addTodo', controller.base.addTodo);
  router.get('/getAllTodo', controller.base.getAllTodo);
  router.post('/updateTodo', controller.base.updateTodo);
  router.post('/delTodo', controller.base.delTodo);
};
