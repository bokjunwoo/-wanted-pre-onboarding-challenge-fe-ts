export interface IDetailInfo {
  _id: string;
  contentid: string;
  type: string;
  title: string;
  addr1: string;
  addr2: string;
  mapx: string;
  mapy: string;
  firstimage1: string;
  firstimage2: string;
  tel: string;
  view: number;
  star: {
    star: number;
    writeTime: string;
  }[];
  like: number;
}

export interface IListInfo {
  data: IItemInfo[];
  total: number;
}

export interface IReviewInfo {
  _id: string;
  contentid: string;
  title: string;
  nickname: string;
  userImage: string;
  content: string;
  star: number;
  time: Date;
}

export interface IReviewDelete {
  _id: string;
  user: string;
  region: string;
  time: Date;
}

export interface IReviewEdit {
  _id: string;
  user: string;
  text: string;
}

export interface IReviewAdd {
  user: string;
  text: string;
  star: number;
  region: string;
  id: string;
}

export interface IKoreaAPI {
  homepage: string;
  overview: string;
}

export interface ISignupResult {
  type: 'signup';
  success: boolean;
  message: string;
}

export interface ILoginResult {
  type: 'login';
  success: boolean;
  message: string;
  nickname: string;
}

export interface IKakaoLoginSuccess {
  id: number;
  connected_at: string;
  kakao_account: {
    email?: string;
    email_needs_agreement: boolean;
    has_email: boolean;
    is_email_valid?: boolean;
    is_email_verified?: boolean;
  };
}

export interface ILogoutResult {
  type: 'logout';
  success: boolean;
  message: string;
}

export interface IDetailLike {
  like: number;
  likeuser: string[];
}

export interface IDetailLikeInc {
  id: string;
  region: string;
  user: string;
}
