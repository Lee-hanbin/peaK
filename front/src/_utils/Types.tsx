export type Idoldata = {
  myTotaldata: number;
  dataLst: Array<number>;
  dataAvg: Array<number>;
};

export type RankListType = {
  idol: string;
  rank: number;
  score: number;
  diff: number;
};
export type RankData = {
  rank: number;
  score: number;
};
export type WeeklyRankingType = {
  current: RankData;
  rankWeek: RankData[];
};

export type IdolListsType = {
  idols: string[];
};

export type TrendNewsListType = {
  link: string;
  press: string;
  summary: string;
  thumbnailLink: string;
  title: string;
};

export type TrendYoutubeListType = {
  url: string;
  thumbnail: string;
  title: string;
};

export interface IdolInterest {
  idols: MyIdolDetail[];
}

export interface MyIdolDetail {
  idol: string;
  value: number;
  interestScore: number;
  interestAverage: number;
  comments: Array<Comment> | boolean[];
}

export interface Comment {
  nickname?: string;
  content: string;
  datetime: string;
}

export interface IdolSns {
  idol: string;
  snsLink: SnsLink;
  interest: boolean;
}

export interface SnsLink {
  instagram: string;
  youtube: string;
  twitter: string;
}

/** 디테일 페이지 아이돌 채팅목록 타입*/
export interface Comments {
  comments: Comment[];
}

/** Store에 저장할 userinfo 타입 */
export interface UserInfo {
  userId: string;
  nickname: string;
  TOKEN: string;
}

/** 긍부정 주간 리스트 타입 */
export interface PosNeg {
  pos: number;
  neg: number;
}

/** 키워드 뉴스 데이터 타입 */
export interface News {
  newsList: KeyWord[];
  wordCounter: WordCounterType[];
}

export interface KeyWord {
  news: {
    keyword: string;
    newsList: NewsType[];
  };
}

export interface NewsType {
  press: string;
  title: string;
  summary: string;
  link: string;
  thumbnailLink: string;
}

export interface WordCounterType {
  keyword: string;
  wordCounter: Record<string, number>;
}

export interface WordData {
  text: string;
  value: number;
}
