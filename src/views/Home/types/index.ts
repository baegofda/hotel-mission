import { TCatalogItem, TPrice, TPriceItem } from '@/api/types/home';

export type TThumbnail = Pick<TCatalogItem, 'events' | 'image' | 'timesale' | 'subway_station'>;

export type TCartalogPrice = Pick<TPrice, 'is_coupon' | 'is_price'> &
  Pick<TPriceItem, 'min_night_discount' | 'min_night_sale_price'> & { originTotalPrice: number; saleTotalPrice: number; hasPrice: boolean };

export interface IProductionCard extends Pick<TCatalogItem, 'tags' | 'name' | 'star' | 'type' | 'timesale'> {
  price: TCartalogPrice;
}
