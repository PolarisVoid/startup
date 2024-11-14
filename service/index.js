const express = require('express');
const uuid = require('uuid');
const path = require('path');
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
    startTime: "2024-11-13T11:30:00",
    endTime: "2024-11-13T12:00:00"
}];

const users = [{
    id: 1,
    userName: 'test',
    password: 'test'
}];

/*--------------------------------------------------------------*/
/*                        API Routes                            */
/*--------------------------------------------------------------*/

apiRouter.get('/tasks', (req, res) => {
    userEvents = events.filter(event => event.userId === req.headers['user']);
    res.send(events);
});

apiRouter.post('/task', (req, res) => {
    const task = req.body;
    task.id = uuid.v4();
    events.push(task);
    res.send(task);
});

apiRouter.get('/user/login', (req, res) => {
    const userName = req.headers['username'];
    const password = req.headers['password'];
    const user = users.find(user => user.userName === userName && user.password === password);
    if (user) {
        res.send({ "userid": user.id });
    } else {
        res.status(401).send({ error: 'Invalid username or password' });
    }
});

apiRouter.post('/user/create', (req, res) => {
    const { userName, password } = req.body;
    if (users.find(user => user.userName === userName && user.password === password)) {
        res.status(400).send({ error: 'User Already Exists' });
    } else {
        id = uuid.v4();
        users.push({ id, userName, password });
        res.send({ "user": id });
    }
});

/*--------------------------------------------------------------*/
/*                  API Port Listening                          */
/*--------------------------------------------------------------*/

app.listen(port, () => {
    console.log(`Service listening on port ${port}`);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });