
var merge = require('./merge')
const express = require('express');
var bodyParser = require('body-parser')
const port = 3000;
const hostname= "0.0.0.0"


const app = express();
app.use(bodyParser.json())

app.get('/', (req, res)=> res.send("Hello World"));
app.post('/merge_callback', merge.mergeEvent)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
