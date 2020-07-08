'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('chatRooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      context: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      chat_like: {
        type: Sequelize.INTEGER,
      },
      chat_unlike: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      mypage: {
        type: Sequelize.BOOLEAN,
      },
      weather: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('chatRooms');
  },
};
