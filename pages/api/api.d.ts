import exp from 'constants';

export interface IItemInfo {
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
  writeTime: string;
  contentid: string;
  title: string;
  nickName: string;
  userImage: string;
  content: string;
  star: number;
  dateFull: string;
  image: string;
}

export interface IKoreaAPI {
  homepage: string;
  overview: string;
}

export interface ISignResult {
  type: 'signup' | 'login'
  success: boolean;
  message: string;
}