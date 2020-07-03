const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    const { email, password, username } = req.body;
    console.log(email);
    users
      .findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          username: username,
          password: password,
        },
      })
      .then(async ([user, created]) => {
        if (!created) {
          return res.status(409).json({ message: 'email exist' });
        }
        const data = await user.get({ plain: true });
        console.log(data);
        res.status(200).json({ message: 'successful' });
      });
  },

};
