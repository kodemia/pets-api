const { server, port } = require('./src/server')
const db = require('./src/lib/db')

db.connect()
  .then(() => {
    console.log('db connected')
    server.listen(port, () => {
      console.log(`server listening on port ${port}`)
    })
  })
  .catch(error => {
    console.error('Error: ', error)
  })
