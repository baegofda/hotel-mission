import { useQuery } from '@tanstack/react-query';
import { main } from '@/api/index';

export const useGetMainData = () => {
  return useQuery(['main'], main.getMainData);
};
