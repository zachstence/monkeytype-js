/** @format */

import { MonkeytypeClient } from "../src/index";

import { apeKey } from "./config.json";

const client = new MonkeytypeClient(apeKey);

client.users.getPersonalBests("time", 15).then(console.log);
