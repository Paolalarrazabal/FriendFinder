const express = require('express');
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 8080;
const path = require("path")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/app/css"));


require('./app/routing/apiRoutes')(app); 
require('./app/routing/htmlRoutes')(app); 

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
    });


