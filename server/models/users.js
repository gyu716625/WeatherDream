'use strict';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {},
  );

  // user는 많은 채팅을 가질 수 있다.
  users.associate = (models) => {
    users.hasMany(models.chatRooms, { foreignKey: 'user_id' });
  };
  return users;
};
