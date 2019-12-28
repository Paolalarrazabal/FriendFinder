const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;
const path = require("path")


require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app); 

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
    });


