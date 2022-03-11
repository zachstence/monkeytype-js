/** @format */

declare namespace MonkeyTypes {
  type Mode = "time" | "words" | "quote" | "zen" | "custom";

  type Mode2<M extends Mode> = keyof PersonalBests[M];

  interface Params {
    [key: string]: string | number | undefined;
  }

  interface FetchOptions {
    apeKey: string;
    params: Params;
  }

  interface PersonalBests {
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

  interface LeaderboardEntry {
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
}
