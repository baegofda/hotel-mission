import instance from './config';
import { IHomeResponse } from './types/home';

export const home = {
  getHomeData: async () => {
    const { data } = await instance.get<IHomeResponse>('/main');

    return data;
  },
};
