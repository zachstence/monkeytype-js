import fetch from "node-fetch";

import { stringifyQuery } from "../util";

import type { ApiResponse, HttpClientOptions, HttpClient } from "../types";

export class FetchClient implements HttpClient {
  private apeKey: string;
  private baseUrl: string;

  public constructor(baseUrl: string, apeKey: string) {
    this.baseUrl = baseUrl;
    this.apeKey = apeKey;
  }

  private async makeRequest<T>(
    path: string,
    method: string,
    options: HttpClientOptions,
  ): Promise<any> {
    try {
      const params = stringifyQuery(options.query);

      const response = await fetch(`${this.baseUrl}${path}${params}`, {
        method,
        headers: {
          Authorization: `ApeKey ${this.apeKey}`,
        },
      });

      const apiResponse: ApiResponse<T> = await response.json();

      return apiResponse;
    } catch (error) {
      console.error(error);
    }
  }

  public async get<T>(url: string, options: HttpClientOptions): Promise<ApiResponse<T>> {
    return await this.makeRequest<T>(url, "GET", options);
  }

  public async post<T>(url: string, options: HttpClientOptions): Promise<ApiResponse<T>> {
    return await this.makeRequest<T>(url, "POST", options);
  }

  public async patch<T>(url: string, options: HttpClientOptions): Promise<ApiResponse<T>> {
    return await this.makeRequest<T>(url, "PATCH", options);
  }

  public async put<T>(url: string, options: HttpClientOptions): Promise<ApiResponse<T>> {
    return await this.makeRequest<T>(url, "PUT", options);
  }

  public async delete<T>(url: string, options: HttpClientOptions): Promise<ApiResponse<T>> {
    return await this.makeRequest<T>(url, "DELETE", options);
  }
}
