/** @format */

import { FetchClient } from "./fetch-client";
import { UsersEndpoint } from "../endpoints/users";
import { LeaderboardsEndpoint } from "../endpoints/leaderboards";

export class MonkeytypeClient {
  private url = "https://api.monkeytype.com";
  private _apeKey: string;
  public users: UsersEndpoint;
  public leaderboards: LeaderboardsEndpoint;
  private fetchClient: FetchClient;

  public constructor(apeKey: string) {
    this._apeKey = apeKey;
    this.fetchClient = new FetchClient(this.url, this._apeKey);

    // endpoints
    this.users = new UsersEndpoint(this.fetchClient);
    this.leaderboards = new LeaderboardsEndpoint(this.fetchClient);
  }
}
