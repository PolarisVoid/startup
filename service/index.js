const express = require('express');
const uuid = require('uuid');
const app = express();

// Data


// The service Port
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

/*--------------------------------------------------------------*/
/*                        API Routes                            */
/*--------------------------------------------------------------*/

apiRouter.get('/test', (req, res) => {
    res.send({html:'<h1>Hello Get</h1>'});
});

apiRouter.post('/test', (req, res) => {
    console.log(req.body);
    res.send({html:'<h1>Hello POST</h1>'});
});
/*--------------------------------------------------------------*/
/*                  API Port Listening                          */
/*--------------------------------------------------------------*/

app.listen(port, () => {
    console.log(`Service listening on port ${port}`);
});