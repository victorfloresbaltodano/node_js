function errorsLog(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorsHandler(err, req, res, next) {

  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { errorsLog, errorsHandler }
