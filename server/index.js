const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()

app.prepare().then(() => {
  server.get('*', (req, res) => {
    return handle(req, res)
  })
})

const PORT = process.env.PORT || 3000
server.use(handle).listen(PORT, (err) => {
  if (err) throw err
  console.log(`Server ready on port ${PORT}`);
})
