import { useQuery } from '@tanstack/react-query';
import { home } from '@/api/index';

export const useGetHomeData = () => {
  return useQuery(['home'], home.getHomeData);
};
