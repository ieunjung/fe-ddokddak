import { atom } from 'recoil';

export const openModalState = atom({ key: 'openModal', default: false });
export const modalState = atom({
  key: 'modal',
  default: {
    open: false,
    msg: '',
  },
});
