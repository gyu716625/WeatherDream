'use strict';

const crypto = require('crypto');

const salt = process.env.SALT;
// console.log('salt',typeof salt)

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        // 비밀번호를 해싱해서 데이터베이스에 저장한다.
        beforeCreate: (data) => {
          const shasum = crypto.createHmac('sha512', salt);
          shasum.update(data.password);
          data.password = shasum.digest('hex');
        },
        // 데이터를 찾기 전에 들어온 데이터의 password를 해싱함수를 통해 검증할 수 있게 한다.
        beforeFind: (data) => {
          if (data.where.password) {
            const shasum = crypto.createHmac('sha512', salt);
            shasum.update(data.where.password);
            data.where.password = shasum.digest('hex');
          }
        },
      },
    },
  );

  // user는 많은 채팅을 가질 수 있다.
  users.associate = (models) => {
    users.hasMany(models.chatRooms, { foreignKey: 'user_id' });
  };
  return users;
};
