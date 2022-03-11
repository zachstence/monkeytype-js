/** @format */

import { FetchClient } from "./fetch-client";
import { UsersEndpoint } from "../endpoints/users";
import { LeaderboardsEndpoint } from "../endpoints/leaderboards";

export class MonkeytypeClient {
  private url = "https://api.monkeytype.com";
  private fetchClient = new FetchClient(this.url);
  private _apeKey: string;
  public users: UsersEndpoint;
  public leaderboards: LeaderboardsEndpoint;

  public constructor(apeKey: string) {
    this._apeKey = apeKey;

    // endpoints
    this.users = new UsersEndpoint(this.fetchClient, this._apeKey);
    this.leaderboards = new LeaderboardsEndpoint(
      this.fetchClient,
      this._apeKey
    );
  }
}
