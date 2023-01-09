
module.exports = appInfo => {
  const config = {}
  config.keys = appInfo.name + '_1672833991623_8554';
  config.cdn = {
    AK: 'default',
    SK: 'default',
    BucketName: 'xxx-xxx',
    DoMain: 'https://xxx.xxx.com'
  }
  config.security = {
    csrf: {
      enable: false,
      headerName: 'token',
    },
  };
  config.sequelize = {
    datasources: [
      {
        delegate: 'model',
        baseDir: 'model',
        dialect: 'mysql',
        username: 'root',
        password: 'ab123456',
        database: 'me-blog',
        host: '127.0.0.1',
        port: 3306,
        timezone: '+08:00',
        define: {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
        },
        dialectOptions: {
          dateStrings: true,
          typeCast: true,
        },
        logging: false
      },
      {
        delegate: 'helpModel',
        baseDir: 'help_model',
        dialect: 'mysql',
        username: 'root',
        password: 'ab123456',
        database: 'me-help',
        host: '127.0.0.1',
        port: 3306,
        timezone: '+08:00',
        define: {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
        },
        logging: false
      }
    ]
  }
  return {
    ...config
  };
};
