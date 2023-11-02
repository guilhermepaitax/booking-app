import { IProperty } from "@/entities/property";
import properties from "@/lib/properties";
import bookings from "@/lib/bookings";

interface IGetBySlugResponse {
  data: IProperty | undefined;
}

export const getBySlug = async (slug: string): Promise<IGetBySlugResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return {
      data: undefined,
    };
  }

  const disabled_days = bookings
    .filter((b) => b.id_property === property?.id)
    .map((b) => ({ from: b.start_date, to: b.end_date }));

  return {
    data: { ...property, disabled_days },
  };
};
