import instance from './config';
import { IMainResponse } from './types/main';

export const main = {
  getMainData: async () => {
    const { data } = await instance.get<IMainResponse>('/main');

    return data;
  },
};
