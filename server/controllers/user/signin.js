// model과 controller를 연결하는 엔드포인트
const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // 유저가 로그인을 요청했을 때, 요청한 데이터를 데이터베이스에서 확인한다.
    const { email, password } = req.body;
    console.log('check!');
    // req.session data를 확인 (생성 또는 기존 session이 존재하면 가져온다)
    const sess = req.session; // 세션 기능 구현
    console.log(sess.id);
    // sequalize를 이용해서 데이터베이스에서 사용자가 있는지, 비밀번호는 맞는지 찾는다.
    users
      .findOne({
        where: {
          email,
          password, // 암호화를 적용시키면 암호화된 password가 들어가야 한다.
        },
      })
      .then((result) => {
        if (result === null) { // 데이터베이스에서 유저를 찾지 못했다면
          res.status(404).json({ message: 'unvalid user' });
        } else {
          // 데이터베이스에 유저가 존재한다면
          // 찾은 유저 id값을 session userid 값에 매핑해주는 작업 필요(세션 기능 구현)
          // res.cookie('isLogin', true, {
          //   maxAge: 60*60*1000,
          //   httpOnly: false,
          //   path:'http://localhost/3000',
          //   });
          // 로그인에 성공했다면 res.redirect로 페이지 이동을 응답을 해줘도 된다.(클라이언트와 맞춰보기)
          console.log('sucesssful signin');
          res.status(200).json({
            id: result.id,
            isLogin: true,
          });
        }
      })
      .catch((err) => {
        res.status(404).json({ message: err });
      });
  },

};
