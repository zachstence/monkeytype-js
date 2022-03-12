/** @format */

import type { Mode, LeaderboardEntry, Mode2, HttpClient, ApiResponse } from "../types";

const BASE_PATH = "/leaderboards"

export class LeaderboardsEndpoints {
  private httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /** Gets global leaderboard data */
  public async get<M extends Mode>(
    language: string,
    mode: M,
    mode2: Mode2<M>,
    skip?: number,
    limit?: number
  ): Promise<ApiResponse<LeaderboardEntry[]>> {
    const query = {
      language,
      mode,
      mode2: <string>mode2,
      skip: skip === undefined ? 0: skip,
      limit: limit === undefined ? 50: limit,
    };

    return this.httpClient.get(BASE_PATH, { query });
  }

  /**
   * Gets your qualifying leaderboard entry from the specified leaderboard
   * @param language The leaderboard's language
   * @param mode The leaderboard's primary mode
   * @param mode2 The leaderboard's secondary mode
   * @returns Your qualifying leaderboard entry from the specified leaderboard
   */
  public async getRank<M extends Mode>(
    language: string,
    mode: M,
    mode2: Mode2<M>
  ): Promise<ApiResponse<LeaderboardEntry>> {
    const query = {
      language,
      mode,
      mode2: <string>mode2,
    };

    return this.httpClient.get(`${BASE_PATH}/rank`, { query });
  }
}
