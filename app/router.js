module.exports = app => {
  const { router, controller } = app;
  router.get('/hello', controller.base.index);
};
