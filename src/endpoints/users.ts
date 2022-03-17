/** @format */

import type { ApiResponse, HttpClient, Mode, Mode2, PersonalBests } from "../types";

const BASE_PATH = "/users";

export class UsersEndpoints {
  private httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /** Gets your own personal bests */
  public async getPersonalBests<M extends Mode>(
    mode: M,
    mode2?: Mode2<M>,
  ): Promise<ApiResponse<PersonalBests[M]>> {
    const query = {
      mode,
      ...(mode2 !== undefined && { mode2: <string>mode2 }),
    };

    return this.httpClient.get(`${BASE_PATH}/personalBests`, { query });
  }
}
