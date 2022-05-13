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

function boomErrorsHandler(err, req, res, next) {
  if(err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { errorsLog, errorsHandler, boomErrorsHandler }
