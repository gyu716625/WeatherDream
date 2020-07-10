module.exports = {
  get: (req, res) => {
    res.status(200).json({ message: 'access get baseurl' });
  },
};
