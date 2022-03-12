/** @format */

export type Difficulty = "normal" | "expert" | "master";

export type Mode = "time" | "words" | "quote" | "zen" | "custom";

export type Mode2<M extends Mode> = keyof PersonalBests[M];

export interface Query {
  [key: string]: string | number | undefined;
}


export type HttpClientMethod = <T>(path: string, options: HttpClientOptions) => Promise<ApiResponse<T>>;

export interface HttpClient {
  get: HttpClientMethod;
  post: HttpClientMethod;
  patch: HttpClientMethod;
  put: HttpClientMethod;
  delete: HttpClientMethod;
}

export interface HttpClientOptions {
  query: Query;
}

export interface PersonalBest {
  acc: number;
  consistency: number;
  difficulty: Difficulty;
  lazyMode: boolean;
  language: string;
  punctuation: boolean;
  raw: number;
  wpm: number;
  timestamp: number;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}

export interface PersonalBests {
  time: {
    [key: number]: PersonalBest[];
  };
  words: {
    [key: number]: PersonalBest[];
  };
  quote: {
    [quote: string]: PersonalBest[]
  };
  custom: {
    custom: PersonalBest[]
  };
  zen: {
    zen: PersonalBest[];
  };
}

export interface LeaderboardEntry {
  _id: string;
  timestamp: number;
  wpm: number;
  consistency: number;
  punctuation: boolean;
  acc: number;
  raw: number;
  name: string;
  rank: number;
}
