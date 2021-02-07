

module.exports = (req, res, data, msg) => {
  req.response = {
    error: null,
    code: 'success',
    data,
    message: msg ? msg : null
  };
  res.status(200).send(req.response);
};
