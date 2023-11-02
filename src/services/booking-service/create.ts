import bookings from "@/lib/bookings";
import properties from "@/lib/properties";

import { IBooking } from "@/entities/booking";
import { calculateTotalPrice } from "@/lib/calculateTotalPrice";

type ICreateResponse = IBooking;

export interface ICreateRequest {
  data: {
    id_property: string;
    start_date: Date;
    end_date: Date;
    guests_count: number;
  };
}

export const create = async ({
  data,
}: ICreateRequest): Promise<ICreateResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 50));

  const property = properties.find((p) => p.id === data.id_property);

  if (!property) {
    throw new Error("Property not found!");
  }

  const total_price = calculateTotalPrice({
    endDate: data.end_date,
    startDate: data.start_date,
    valuePerNight: property.price_per_night,
  });

  const newBook = {
    ...data,
    total_price,
    id: crypto.randomUUID(),
  };

  bookings.push(newBook);

  return newBook;
};
