import { ISearchDataInfo } from '@/pages/api/api';
import { atom } from 'recoil';

type DateItem = {
  date: string;
  list: ISearchDataInfo[];
};

export type DateObject = {
  nickname: string;
  region: string;
  plan: DateItem[];
};

export const planListState = atom<DateObject>({
  key: 'planListState',
  default: {
    nickname: '',
    region: '',
    plan: [],
  },
});
