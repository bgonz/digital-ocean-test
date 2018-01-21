const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World - Digital Ocean!'))

app.listen(3000, () => console.log('Example Digital Ocean app listening on port 3000!'))