import express = require('express');
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000, function() {
    console.log('server started, listening on port 3000');
});
