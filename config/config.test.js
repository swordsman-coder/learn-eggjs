
module.exports = appInfo => {
  const config = {}
  config.keys = appInfo.name + '_1672833991623_8554';
  config.cdn = {
    AK: 'test',
    SK: 'test',
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
