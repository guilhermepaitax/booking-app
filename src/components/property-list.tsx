import { useGetAllProperties } from "@/hooks/useGetAllProperties";

import { PropertyCard, PropertyCardLoading } from "./property-card";

export const PropertyList = () => {
  const { isLoading, data, count } = useGetAllProperties();

  return (
    <section className="container py-20">
      <p className="font-bold text-2xl">Properties List</p>

      {!count && !isLoading && (
        <p className="text-lg mt-10">No properties found.</p>
      )}

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
        {isLoading && !count && (
          <>
            <PropertyCardLoading />
            <PropertyCardLoading />
            <PropertyCardLoading />
            <PropertyCardLoading />
          </>
        )}

        {data?.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};
