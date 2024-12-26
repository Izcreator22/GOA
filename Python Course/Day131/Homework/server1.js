const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ]
  res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' },
      ]
    const user = users.find(user => user.id === userId)

    if(user){
        res.json(user)
    }else {
        res.status(404).send('User not found')
    }
})

app.post('/api/users', (req, res) => {
  const newUser = req.body;
    console.log(newUser);
    if(newUser.id && newUser.name && newUser.email){
        res.status(201).json(newUser)
    }else{
      res.status(400).send("Invalid data supplied.")
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
