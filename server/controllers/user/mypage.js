const { users } = require('../../models');
const { chatRooms } = require('../../models');
const e = require('express');

module.exports = {
  info: {
    get: (req, res) => {
      console.log(req.params);

      const sess = req.session; // 세션 기능 구현

      // 세션에 담겨있는 값이 일치하면 동작하도록 구현
      if(sess.isLogined === true && sess.userId === req.params)
      {
        users
        .findOne({
          where: {
            id: Number(req.params.userId),
          },
        })
        .then((result) => {
          // db에 유저 id가 저장되어있지 않을 때,
          if (result === null) {
            res.status(404).json({ message: 'error' });
          } else {
            console.log(result.username);
            res.status(200).json({ username: result.username, email: result.email });
          }
        })
        .catch((err) => {
          res.status(404).json({ message: err });
        });
      }
      else
      {
        res.status(404).json({message: 'Not Found'});
      }      
    },
  },
  diary: {
    get: (req, res) => {
      console.log(req.params);
      if(sess.isLogined === true && sess.userId === req.params)
      {
        chatRooms
        .findAll({
          where: {
            user_id: Number(req.params.userId),
          },
          raw: true,
          attributes: ['id', 'context', 'country', 'chat_like', 'chat_unlike', 'weather', 'createdAt'],
        })
        .then((result) => {
          // console.log('result: \n', result);
          // 저장한 채팅이 없을 경우
          if (result.length === 0) {
            res.status(404).json({ message: 'There are no saved chats' });
          } else {
            res.status(200).json({ data: result });
          }
        })
        .catch((err) => {
          res.status(404).json({ message: err });
        });
      }
      else
      {
        res.status(404).json({message: 'Not Found'});
      }          
    },
  },
};
