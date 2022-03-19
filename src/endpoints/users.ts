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
    const mode2String = mode2?.toString();

    const query: { mode: typeof mode; mode2?: typeof mode2String } = {
      mode,
    };

    if (mode2String !== undefined) {
      query.mode2 = mode2String;
    }

    return this.httpClient.get(`${BASE_PATH}/personalBests`, { query });
  }
}
