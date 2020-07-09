module.exports = {
  get: (res, req) => {
    req.status(200).json({ message: 'successful!' });
  },
};
