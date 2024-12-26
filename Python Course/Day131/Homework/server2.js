const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'))
})

app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;
  res.send(`<h1>Thank you, ${name}!</h1><p>Your email is: ${email}</p>`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
