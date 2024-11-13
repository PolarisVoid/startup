const express = require('express');
const uuid = require('uuid');
const app = express();

// The service Port
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

/*--------------------------------------------------------------*/
/*                           Data                               */
/*--------------------------------------------------------------*/

const events = [{
    name: 'Event 1',
    startTime: "2024-11-12T09:00:00",
    endTime: "2024-11-12T10:00:00"
},{
    name: 'Event 2',
    startTime: "2024-11-13T11:00:00",
    endTime: "2024-11-13T12:00:00"
}];

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

apiRouter.get('/tasks', (req, res) => {
    res.send(events);
});

/*--------------------------------------------------------------*/
/*                  API Port Listening                          */
/*--------------------------------------------------------------*/

app.listen(port, () => {
    console.log(`Service listening on port ${port}`);
});