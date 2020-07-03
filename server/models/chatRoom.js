'use strict';

module.exports = (sequelize, DataTypes) => {
  const chatRoom = sequelize.define(
    'chatRoom',
    {
      context: DataTypes.STRING,
      country: DataTypes.STRING,
      chat_like: DataTypes.INTEGER,
      chat_unlike: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      mypage: DataTypes.BOOLEAN,
      wether: DataTypes.STRING,
    },
    {}
  );

  // 많은 채팅을 가질 수 있음
  chatRoom.associate = function(models) {
      chatRoom.hasMany(models.users)
  };
  return chatRoom;
};
