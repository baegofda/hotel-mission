import { TThumbnail } from '../types';
import { TCatalogItem } from '@/api/types/home';

const useThumbnail = (item: TCatalogItem) => {
  const { events, subway_station, image, timesale } = item;

  const thumbnailProps = {
    events,
    subway_station,
    image,
    timesale,
  } as TThumbnail;

  return { thumbnailProps };
};

export default useThumbnail;
