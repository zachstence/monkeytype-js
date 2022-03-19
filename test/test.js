/** @format */

const { MonkeytypeClient } = require("../dist/index.js");

const { apeKey } = require("./config.json");

const { writeFileSync } = require("fs");

const client = new MonkeytypeClient(apeKey);

// TODO Add proper unit testing

(async () => {
  const [pbTime, pbTime60, lb, lbRank] = await Promise.all([
    client.users.getPersonalBests("time"),
    client.users.getPersonalBests("time", "60"),
    client.leaderboards.get("english", "time", "60"),
    client.leaderboards.getRank("english", "time", "60"),
  ]);

  writeFileSync("./test/test.json", JSON.stringify({ pbTime, pbTime60, lb, lbRank }, null, 2));
})();
