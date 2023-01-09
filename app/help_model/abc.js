'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "id",
      field: "id"
    },
    title: {
      type: DataTypes.STRING(255),
      comment: "标题",
      field: "title"
    },
    content: {
      type: DataTypes.TEXT,
      comment: "内容",
      field: "content"
    },
    createTime: {
      type: DataTypes.DATE,
      field: "create_time"
    },
    updateTime: {
      type: DataTypes.DATE,
      field: "update_time"
    }
  };
  const options = {
    timestamps: false,
    freezeTableName: true
  };
  return app.helpModel.define("todo_list", attributes, options);
};
