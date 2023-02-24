import { atom } from 'recoil';

export const localHotelCategoryState = atom({
  key: 'localHotelCategoryState',
  default: '',
});

export const localHotelCurrentIdxState = atom({
  key: 'localHotelCurrentIdxState',
  default: 0,
});
