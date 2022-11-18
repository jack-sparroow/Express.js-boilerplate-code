module.exports.responseHandler = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};