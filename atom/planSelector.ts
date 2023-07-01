import { atom } from 'recoil';

type PlanItem = {
  title: string;
  addr: string;
  mapX: number;
  mapY: number;
};

export type PlanData = {
  date: string;
  list: PlanItem[];
  region: string;
  nickname: string;
};

export const selectedDatesState = atom<PlanData[]>({
  key: 'selectedDatesState',
  default: [],
});
