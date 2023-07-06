import { atom } from 'recoil';

export type ListItem = {
  title: string;
  addr: string;
  mapX: string;
  mapY: string;
};

type DateItem = {
  date: string;
  list: ListItem[];
};

type DateObject = {
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
