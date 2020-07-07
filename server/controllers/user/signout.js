module.exports = {
  get: (req, res) => {
    req.session.destroy((err) => {
      console.log(err);
      // 세션이 삭제된 후 행동하는 콜백함수 넣어주기
      res.clearCookie('isLogined', { path: '/' });
      res.status(200).end(); // 기존 세션 삭제, 새로운 세션 아이디 발급, 응답
      // 로그아웃 되면 클라이언트에서 다시 홈 로그인 화면에 갈 수 있도록 하는 응답(클라이언트와 상의)
    });
  },
};
