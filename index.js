const express = require('express')
const app = express()
const port = 3000




app.get('/', (req, res) => res.sendFile(__dirname + '/src/todoList.html'))




app.listen(port, () => console.log(`Starting on port ${port}`))
