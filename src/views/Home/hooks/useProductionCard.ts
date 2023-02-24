import { IProductionCard } from '../types';
import { TCatalogItem } from '@/api/types/home';

const useProductionCard = (item: TCatalogItem) => {
  const { price: priceDto, timesale, tags, name, star, type } = item;
  const { price: priceItems, is_coupon } = priceDto;
  const hasPrice = priceItems.length > 0;
  const { price: originPrice, min_night, min_night_discount, min_night_sale_price } = priceItems[0] ?? [];
  const originTotalPrice = min_night * originPrice;
  const saleTotalPrice = min_night * min_night_sale_price;

  const price = {
    is_coupon,
    min_night_discount,
    min_night_sale_price,
    originTotalPrice,
    saleTotalPrice,
    hasPrice,
  };

  const productionProps = {
    tags,
    name,
    star,
    type,
    timesale,
    price,
  } as IProductionCard;

  return { productionProps };
};

export default useProductionCard;
