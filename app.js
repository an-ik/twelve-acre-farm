const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');