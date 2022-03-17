/** @format */

const { MonkeytypeClient } = require("../dist/index.js");

const { apeKey } = require("./config.json");

const client = new MonkeytypeClient(apeKey);

// TODO Add proper unit testing
client.users.getPersonalBests("time").then(console.log);
client.users.getPersonalBests("time", "60").then(console.log);
client.leaderboards.get("english", "time", "60").then(console.log);
client.leaderboards.getRank("english", "time", "60").then(console.log);
