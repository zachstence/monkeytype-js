/** @format */

import fetch from "node-fetch";

import type { FetchOptions, Params } from "../types";

export class FetchClient {
  private _apeKey: string;
  private url: string;

  public constructor(url: string, apeKey: string) {
    this.url = url;
    this._apeKey = apeKey;
  }

  public async get(url: string, options: FetchOptions): Promise<any> {
    try {
      const params = this.paramsToString(options.params);

      const response = await fetch(`${this.url}/${url}${params}`, {
        method: "GET",
        headers: {
          Authorization: `ApeKey ${this._apeKey}`
        }
      });

      const json = await response.json();

      if (!json.data || (json.data && json.data.errorId))
        throw new Error(json.message);

      return json.data;
    } catch (error) {
      console.error(error);
    }
  }

  public async post(url: string, options: FetchOptions): Promise<any> {
    try {
      const params = this.paramsToString(options.params);

      const response = await fetch(`${this.url}/${url}${params}`, {
        method: "POST",
        headers: {
          Authorization: `ApeKey ${this._apeKey}`
        }
      });

      const json = await response.json();

      if (!json.data || (json.data && json.data.errorId))
        throw new Error(json.message);

      return json.data;
    } catch (error) {
      console.error(error);
    }
  }

  public async patch(url: string, options: FetchOptions): Promise<any> {
    try {
      const params = this.paramsToString(options.params);

      const response = await fetch(`${this.url}/${url}${params}`, {
        method: "PATCH",
        headers: {
          Authorization: `ApeKey ${this._apeKey}`
        }
      });

      const json = await response.json();

      if (!json.data || (json.data && json.data.errorId))
        throw new Error(json.message);

      return json.data;
    } catch (error) {
      console.error(error);
    }
  }

  public async put(url: string, options: FetchOptions): Promise<any> {
    try {
      const params = this.paramsToString(options.params);

      const response = await fetch(`${this.url}/${url}${params}`, {
        method: "PUT",
        headers: {
          Authorization: `ApeKey ${this._apeKey}`
        }
      });

      const json = await response.json();

      if (!json.data || (json.data && json.data.errorId))
        throw new Error(json.message);

      return json.data;
    } catch (error) {
      console.error(error);
    }
  }

  private paramsToString(params: Params): string {
    const entries = Object.entries(params);

    if (entries.length === 0) return "";

    return (
      "?" +
      entries
        .map(([paramName, paramValue]) => `${paramName}=${paramValue}`)
        .join("&")
    );
  }
}
