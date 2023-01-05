module.exports = app => {
  const { router, controller } = app;
  router.get('/hello', controller.base.index);
  router.get('/getInfo', controller.base.getInfo);
  router.get('/getUser/:name', controller.base.getUser);
  router.post('/uploadImg', controller.qiniu.upload);
};
