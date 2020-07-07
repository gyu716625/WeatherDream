module.exports = {
  // 소켓 통신 시작
  participation: (req, res) => {
    const { io } = require('../../app');
    res.sendFile(__dirname + '/index.html');

    io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });

      socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });
    });
  },
};
