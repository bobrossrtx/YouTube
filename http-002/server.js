const express = require('express');     // Importing express
const app = express();                  // Creating the server
const settings = {
    host: 'localhost',                  // The host
    port: 5500                          // The port we listen to
}

app.set('view engine', 'pug')
app.listen(settings.port, (err) => {    // We listen on the port
    if (err) {                          //inside of the settings object
        console.error(err);
        return;                         // if we get an error, 
    }                                   // we return out of the function
    console.log(                        // Logging that the server is 
                                        // being served at http://host:port
        `Listening at http://${settings.host}:${settings.port}`)
})
app.get('/', (req, res) => {            // We make a get request to /
    res.render('index');                // We render ./views/index.
})