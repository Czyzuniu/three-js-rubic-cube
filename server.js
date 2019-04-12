const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, 'node_modules/three')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
