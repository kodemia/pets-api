const { server, port } = require('./src/server')

server.listen(port, () => {
  console.log(`server listening on port ${port}`)
})