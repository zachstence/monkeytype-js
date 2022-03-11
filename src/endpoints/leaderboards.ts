/** @format */

import { FetchClient } from "../client/fetch-client";
import { MonkeytypeClient } from "../client/monkeytype-client";

export class LeaderboardsEndpoint {
  private _apeKey: string;
  private fetchClient: FetchClient;

  public constructor(fetchClient: FetchClient, apeKey: string) {
    this.fetchClient = fetchClient;
    this._apeKey = apeKey;
  }

  /** Gets global leaderboard data */
  public get<M extends MonkeyTypes.Mode>(
    language: string,
    mode: M,
    mode2: MonkeyTypes.Mode2<M>,
    skip?: number,
    limit?: number
  ): Promise<MonkeyTypes.LeaderboardEntry[] | undefined> {
    return this.fetchClient.get("leaderboards", {
      apeKey: this._apeKey,
      params: { language, mode, mode2: <string>mode2, skip, limit }
    });
  }

  /** Gets your entry from the leaderboard */
  public getRank<M extends MonkeyTypes.Mode>(
    language: string,
    mode: M,
    mode2: MonkeyTypes.Mode2<M>
  ): Promise<MonkeyTypes.LeaderboardEntry | undefined> {
    return this.fetchClient.get("leaderboards/rank", {
      apeKey: this._apeKey,
      params: { language, mode, mode2: <string>mode2 }
    });
  }
}
