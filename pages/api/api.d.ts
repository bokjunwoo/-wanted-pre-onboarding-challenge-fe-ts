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
  region?: string;
}

export interface IListInfo {
  data: IDetailInfo[];
  total: number;
}

export interface ISearchInfo {
  data: IDetailInfo[];
  currentPage: number;
  totalPage: number;
}

export interface IReviewInfo {
  _id: string;
  contentid: string;
  region: string;
  title: string;
  nickname: string;
  userImage: string;
  content: string;
  star: number;
  time: Date;
  reviewImage: string[];
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
  image: string[];
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

export interface ISearchData {
  region: string;
  search: string;
  page?: number;
}

export interface ISearchDataInfo {
  id: Date;
  title: string;
  star: {
    star: number;
  }[];
  addr1: string;
  like: number;
  mapx: string;
  mapy: string;
}

export interface IPlanDelete {
  _id: string;
  user: string;
}

export interface IUserImageSave {
  user: string;
  image: string;
}
