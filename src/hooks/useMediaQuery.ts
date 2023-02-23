import { useCallback, useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { breakPoints, mediaQuerys } from '@/styles/media';

const useMediaQuery = (breakpoint: (typeof breakPoints)[number]) => {
  const width = mediaQuerys[breakpoint] ?? 0;
  const [isRange, setIsRange] = useState(false);

  const handleMedia = useCallback((e: MediaQueryListEvent) => {
    setIsRange(e.matches);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(`(min-width:${width}px)`);

    if (media.matches) setIsRange(true);

    media.addEventListener('change', handleMedia);

    return () => media.removeEventListener('change', handleMedia);
  }, [width, handleMedia]);

  return { isRange };
};

export default useMediaQuery;
