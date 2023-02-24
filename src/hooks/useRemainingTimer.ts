import dayjs from 'dayjs';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { getRemainingTime } from '@/utils/dayjs';

const useRemainingTimer = (targetDate: dayjs.ConfigType, format?: string, delay?: 1000) => {
  const [remainingTime, setRemainingTime] = useState('');

  useIsomorphicLayoutEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    timer = setInterval(() => setRemainingTime(getRemainingTime(targetDate, format)), delay);

    return () => {
      timer && clearInterval(timer);
    };
  }, []);

  return { remainingTime };
};

export default useRemainingTimer;
