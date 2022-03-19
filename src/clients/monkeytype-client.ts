import { FetchClient } from "./fetch-client";
import { UsersEndpoints } from "../endpoints/users";
import { LeaderboardsEndpoints } from "../endpoints/leaderboards";
import { HttpClient } from "../types";

export class MonkeytypeClient {
  private url = "https://api.monkeytype.com";
  public users: UsersEndpoints;
  public leaderboards: LeaderboardsEndpoints;
  private httpClient: HttpClient;

  public constructor(apeKey: string) {
    this.httpClient = new FetchClient(this.url, apeKey);

    // endpoints
    this.users = new UsersEndpoints(this.httpClient);
    this.leaderboards = new LeaderboardsEndpoints(this.httpClient);
  }
}
