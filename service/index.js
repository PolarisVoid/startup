const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();
const DB = require('./database.js');

// The service Port
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Cookie parsing using built-in middleware
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

/*--------------------------------------------------------------*/
/*                        API Routes                            */
/*--------------------------------------------------------------*/

apiRouter.get('/tasks', async (req, res) => {
    const events = await DB.getEvents(req.headers.userid)
    res.send(events);
});

apiRouter.post('/task', (req, res) => {
    if (!req.body.name || !req.body.startTime || !req.body.endTime) {
        res.status(400).send({ error: 'Missing required fields' });
        return;
    }
    var event = {
        userID: req.body.userid,
        name: req.body.name,
        startTime: req.body.startTime,
        endTime: req.body.endTime
    }
    event = DB.createEvent(event);
    res.send(event);
});

apiRouter.post('/user/create', async (req, res) => {
    if (await DB.getUser(req.body.username)) {
      res.status(409).send({ error: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.username, req.body.password);
  
      res.send({
        id: user._id,
      });
    }
  });
  
  // GetAuth token for the provided credentials
  apiRouter.get('/user/login', async (req, res) => {
    const user = await DB.getUser(req.headers.username);
    if (user) {
      if (await bcrypt.compare(req.headers.password, user.password)) {
        res.send({ id: user._id });
        return;
      }
    }
    res.status(401).send({ error: 'Unauthorized' });
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