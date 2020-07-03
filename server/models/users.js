'use strict';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );

  //join같은 관계를 정의할 때, 사용
  users.associate = function(models) {
      users.belongsTo(models.chatRoom)
  };
  return users;
};
