
const user = require('../usecases/user')

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers
    if (!authorization) throw new Error('authorization header not present')
    console.log('headers: ', authorization)
    const jwtDecoded = user.verifyJwt(authorization)
    console.log('jwtDecoded: ', jwtDecoded)

    next()
  } catch (error) {
    res.status(401)
    res.json({
      success: false,
      message: 'token required',
      errror: 'authorization header required'
    })
  }
}

module.exports = auth
