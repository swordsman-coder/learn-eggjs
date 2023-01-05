
module.exports = appInfo => {
  const config = {}
  config.keys = appInfo.name + '_1672833991623_8554';
  config.cdn = {
    AK: 'prod',
    SK: 'prod',
    BucketName: 'xxx-xxx',
    DoMain: 'https://xxx.xxx.com'
  }
  config.security = {
    csrf: {
      enable: true,
      headerName: 'token',
    },
  };
  return {
    ...config
  };
};
