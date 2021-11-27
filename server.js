const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.resolve(__dirname, './build')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve('./build/index.html'))
})

app.listen(6789)
console.log('listen 6789')
