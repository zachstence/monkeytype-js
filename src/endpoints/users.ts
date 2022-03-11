/** @format */

import { FetchClient } from "../client/fetch-client";

export class UsersEndpoint {
  private _apeKey: string;
  private fetchClient: FetchClient;

  public constructor(fetchClient: FetchClient, apeKey: string) {
    this.fetchClient = fetchClient;
    this._apeKey = apeKey;
  }

  /** Gets your own personal bests */
  public getPersonalBests<M extends MonkeyTypes.Mode>(
    mode: M,
    mode2: MonkeyTypes.Mode2<M>
  ): Promise<MonkeyTypes.PersonalBests | undefined> {
    return this.fetchClient.get("users/personalBests", {
      apeKey: this._apeKey,
      params: { mode, mode2: <string>mode2 }
    });
  }
}
