/** @format */

const { MonkeytypeClient } = require("../dist/index.js");

const { apeKey } = require("./config.json");

const client = new MonkeytypeClient(apeKey);

client.users.getPersonalBests("time", 15).then(console.log);