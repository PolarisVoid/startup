const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const config = require("./dbConfig.json");

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db("pivot");
const userCollection = db.collection("users");
const eventCollection = db.collection("events");

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(
    `Unable to connect to database with ${url} because ${ex.message}`
  );
  process.exit(1);
});

/*--------------------------------------------------------------*/
/*                       Endpoints                              */
/*--------------------------------------------------------------*/
function getUser(username) {
  return userCollection.findOne({ username: username });
}

async function getEvents(userID) {
  const cursor = eventCollection.find({ userID: userID });
  items = await cursor.toArray();
  const itemsDict = {};
  items.forEach((item) => {
    // Assume each item has a unique `id` or `name` field for keying
    itemsDict[item._id] = item;
  });
  return itemsDict;
}

async function createUser(username, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    userID: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function createEvent(event) {
  const newEvent = {
    ...event,
    eventID: uuid.v4(),
  };
  await eventCollection.insertOne(newEvent);

  return newEvent;
}

/*--------------------------------------------------------------*/
/*                       Export                                 */
/*--------------------------------------------------------------*/
module.exports = {
  getUser,
  createUser,
  getEvents,
  createEvent,
};
