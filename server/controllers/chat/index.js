// 모듈 밖에서 선언하니깐 signin이나 up에서 되면 lint들이 안되서 일단 off시켜놨습니다.
const insertDB = (objMsg, chatRooms) => {
  // 클라이언트가 보내준 정보 데이터 베이스로 insert
  console.log(objMsg);
  const { context, country, user_id, weather } = objMsg;

  chatRooms
    .create({
      context: context,
      country: country,
      user_id: user_id,
      weather: weather,
      mypage: 0,
      chat_like: 0,
      chat_unlike: 0,
    })
    .then((result) => {
      console.log(result.get({ plain: true }));
    });
};

module.exports = {
  // 소켓 통신 시작
  participation: (req, res) => {
    const { chatRooms } = require('../../models');
    const { users } = require('../../models');

    console.log('params', req.params);
    // req.params.user_id
    const sess = req.session;
    if (!sess.username) {
      users
        .findOne({
          where: { id: req.params.user_id },
        })
        .then((data) => {
          // console.log(data);
          sess.username = data.username;
        });
    }

    const { io } = require('../../app');
    res.sendFile(__dirname + '/index.html');

    io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });

      socket.on('chat message', (msg) => {
        const objMsg = JSON.parse(msg);
        console.log('message: \n' + objMsg.context);

        insertDB(objMsg, chatRooms);

        const sendmsg = { username: sess.username, context: objMsg.context };

        io.emit('chat message', JSON.stringify(sendmsg));
      });
    });
  },
};
