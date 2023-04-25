import { atom } from 'recoil';

const sessionStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = sessionStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: any, _: any, isReset: any) => {
      isReset
        ? sessionStorage.removeItem(key)
        : sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const userNicknameState = atom({
  key: 'userNicknameState',
  default: '',
  effects: [sessionStorageEffect('userNickname')],
});
