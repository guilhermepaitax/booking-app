import { DateRange } from "react-day-picker";

import { IProperty } from "@/entities/property";
import properties from "@/lib/properties";
import bookings from "@/lib/bookings";
import { areIntervalsOverlapping } from "date-fns";

interface IGetAllResponse {
  data: IProperty[];
  count: number;
}

interface IFilters {
  search?: string;
  date?: DateRange;
}

export const getAll = async (
  filters?: IFilters | void
): Promise<IGetAllResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const data = properties.map((property) => {
    const disabled_days = bookings
      .filter((b) => b.id_property === property?.id)
      .map((b) => ({ from: b.start_date, to: b.end_date }));

    return {
      ...property,
      disabled_days,
    };
  });

  if (filters) {
    const filterProperties = data.filter((property) => {
      if (
        filters.search &&
        !property.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !property.location.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      if (filters.date?.from) {
        const propertyOverlapping = property.disabled_days.find((disabled) => {
          return areIntervalsOverlapping(
            {
              start: filters.date?.from!,
              end: filters.date?.to || filters.date?.from!,
            },
            { start: disabled.from, end: disabled.to }
          );
        });

        return !propertyOverlapping;
      }

      return true;
    });

    return {
      data: filterProperties,
      count: filterProperties.length,
    };
  }

  return {
    data,
    count: data.length,
  };
};
