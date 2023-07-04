import { atom } from 'recoil';

type ListItem = {
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

export const selectedDatesState = atom<DateObject>({
  key: 'selectedDatesState',
  default: {
    nickname: '',
    region: '',
    plan: [],
  },
});
