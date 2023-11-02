import { IProperty } from "./property";

export interface IBooking {
  id: string;
  id_property: string;
  start_date: Date;
  end_date: Date;
  total_price: number;
  guests_count: number;
  property?: IProperty;
}
