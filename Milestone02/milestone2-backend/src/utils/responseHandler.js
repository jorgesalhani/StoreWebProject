const responseHandler = (handler) => {
  return async function (req, res, ...params) {
    try {
      const result = await handler(req)
      return res.status(200).json(result)
    } catch (err) {
      const { status, message } = err
      return res.status(status || 500).send(message || 'Internal Server Error')
    }
  }
}

module.exports = responseHandler
