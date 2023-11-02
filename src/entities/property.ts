type DateRange = {
  from: Date;
  to: Date;
};

export interface IProperty {
  id: string;
  title: string;
  description: string;
  price_per_night: number;
  picture_url: string;
  location: string;
  slug: string;
  bedrooms: number;
  bathrooms: number;
  max_guests: number;
  square_area: string;
  disabled_days?: DateRange[];
}
