/** @format */

import { FetchClient } from "../client/fetch-client";

import type { Mode, Mode2, PersonalBests } from "../types";

export class UsersEndpoint {
  private _apeKey: string;
  private fetchClient: FetchClient;

  public constructor(fetchClient: FetchClient, apeKey: string) {
    this.fetchClient = fetchClient;
    this._apeKey = apeKey;
  }

  /** Gets your own personal bests */
  public getPersonalBests<M extends Mode>(
    mode: M,
    mode2: Mode2<M>
  ): Promise<PersonalBests | undefined> {
    return this.fetchClient.get("users/personalBests", {
      apeKey: this._apeKey,
      params: { mode, mode2: <string>mode2 }
    });
  }
}
