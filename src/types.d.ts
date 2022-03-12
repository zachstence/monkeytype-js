/** @format */

export type Difficulty = "normal" | "expert" | "master";

export type Mode = "time" | "words" | "quote" | "zen" | "custom";

export type Mode2<M extends Mode> = keyof PersonalBests[M];

export type test = Mode2<"time">;

export interface Params {
  [key: string]: string | number | undefined;
}

export interface FetchOptions {
  // apeKey: string;
  params: Params;
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

export interface PersonalBests {
  time: {
    [key: number]: PersonalBest[];
  };
  words: {
    [key: number]: PersonalBest[];
  };
  quote: { [quote: string]: PersonalBest[] };
  custom: { custom: PersonalBest[] };
  zen: {
    zen: PersonalBest[];
  };
}

export interface LeaderboardEntry {
  _id: string;
  difficulty: string;
  timestamp: number;
  language: string;
  wpm: number;
  consistency: number | "-";
  punctuation: boolean;
  acc: number;
  raw: number;
  uid?: string;
  name: string;
  discordId?: string;
  rank: number;
  count?: number;
  hidden?: boolean;
}
