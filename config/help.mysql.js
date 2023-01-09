module.exports = {
    dbOptions: {
      database: 'me-help',
      username: 'root',
      password: 'ab123456',
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      logging: false,
      define: {
        underscored: false,
        freezeTableName: false,
        charset: 'utf8mb4',
        timezone: '+00:00',
        dialectOptions: {
          collate: 'utf8mb4_general_ci',
        },
        timestamps: false,
      },
    },
    options: {
      type: 'egg',
      camelCase: true,
      fileNameCamelCase: true,
      dir: 'app/model_help',
      tables: null,
      emptyDir: false,
      skipTables: null,
      tsNoCheck: false,
    },
  };
  