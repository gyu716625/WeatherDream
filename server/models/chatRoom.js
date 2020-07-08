'use strict';

module.exports = (sequelize, DataTypes) => {
  const chatRooms = sequelize.define(
    'chatRooms',
    {
      context: DataTypes.STRING,
      country: DataTypes.STRING,
      chat_like: DataTypes.INTEGER,
      chat_unlike: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      mypage: DataTypes.BOOLEAN,
      weather: DataTypes.STRING,
    },
    {},
  );

  // 채팅은 하나당 하나의 아이디만 가질 수 있다.
  chatRooms.associate = (models) => {
    chatRooms.belongsTo(models.users, { foreignKey: 'user_id' });
  };
  return chatRooms;
};
