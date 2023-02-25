import { atom } from 'recoil';

export interface IModalState {
  open: boolean;
  title: string;
  msg: string;
}

export const modalState = atom({
  key: 'modal',
  default: {
    open: false,
    title: '',
    msg: '',
  } as IModalState,
});
