/** @format */

import { FetchClient } from "../client/fetch-client";

import type { Mode, Mode2, LeaderboardEntry } from "../types";

export class LeaderboardsEndpoint {
  private fetchClient: FetchClient;

  public constructor(fetchClient: FetchClient) {
    this.fetchClient = fetchClient;
  }

  /** Gets global leaderboard data */
  public get<M extends Mode>(
    language: string,
    mode: M,
    mode2: Mode2<M>,
    skip?: number,
    limit?: number
  ): Promise<LeaderboardEntry[] | undefined> {
    return this.fetchClient.get("leaderboards", {
      params: { language, mode, mode2: <string>mode2, skip, limit }
    });
  }

  /** Gets your entry from the leaderboard */
  public getRank<M extends Mode>(
    language: string,
    mode: M,
    mode2: Mode2<M>
  ): Promise<LeaderboardEntry | undefined> {
    return this.fetchClient.get("leaderboards/rank", {
      params: { language, mode, mode2: <string>mode2 }
    });
  }
}
