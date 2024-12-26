const express = require('express')
const app = express()
const PORT = 3000

const requestLogger = (req, res, next) => {
  console.log(`${new Date().toISOString()}: ${req.method} ${req.url}`)
  next()
}

app.use(requestLogger)

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the middleware example!</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>')
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
