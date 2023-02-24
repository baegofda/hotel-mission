export interface IHomeResponse {
  is_curator: boolean;
  curator: TCurator | null;
  banners: TBanner[];
  earlyBird: TEarlyBird;
  catalogs: TCatalog[];
  feature_hotels: TFeatureHotel[];
  promotion: TPromotion;
  faqs: TFaq[];
}

export type TCurator = {
  curator_name: string;
};

export type TBanner = {
  depth: number | null;
  description: string | null;
  hotel_id: number | null;
  images: string;
  link: string;
  mobile_images: string | null;
  name: string;
  promotion: string | null;
  route: string;
  tab: null;
  tags: string[] | null;
  view: string;
};

export type TEarlyBird = {
  title: string;
  explanation: string;
  button: string;
  url: string;
  image: string;
};

export type TCatalog = {
  city: string;
  items: TCatalogItem[];
};

export interface TCatalogItem {
  hotel_id: number;
  first_image_position_y: string;
  image: string;
  name: string;
  description: string;
  tags?: string[];
  price: TPrice;
  timesale: TTimesale[];
  hash_tags?: string[];
}

export type TPrice = {
  is_price: boolean;
  price: TPriceItem[];
};

export type TPriceItem = {
  price: number;
  discount: number;
  sale_price: number;
};

export type TTimesale = {
  type: string;
  format: string;
  content: string | null;
  remaining: string;
  end_at: string;
};

export type TFeatureHotel = {
  name: string;
  items: TFeatureHotelItem[];
};

export type TFeatureHotelItem = {
  hotel_id: number;
  name: string;
  eng_name: string;
  first_image_position_y: string;
  image: string;
  address: string;
  rating: string;
  original_price: number | null;
  discount_price: number | null;
  percent: number | null;
};

export type TPromotion = {
  title: string;
  explanation: string;
  event: string;
  hotel_id: number | null;
  url: string;
  images: string;
  bg_color: string;
};

export type TFaq = {
  id: number;
  question: string;
  answer: string;
};
