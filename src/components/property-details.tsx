import { useAppSelector } from "@/hooks/useAppSelector";
import { Bath, BedDouble, LandPlot, MapPin, Users } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const PropertyDetailsLoading = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-80" />
      </div>

      <Skeleton className="h-96 w-full mt-5 rounded-xl" />
      <Skeleton className="h-8 w-full mt-8 rounded-xl" />
    </div>
  );
};

export const PropertyDetails = () => {
  const property = useAppSelector((state) => state.property.selectedProperty);
  const isLoading = useAppSelector((state) => state.property.isLoading);

  if (isLoading) {
    return <PropertyDetailsLoading />;
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col gap-2">
        <span className="text-3xl font-bold">{property?.title}</span>
        <span className="text-muted-foreground text-lg flex gap-2 items-center">
          <MapPin className="h-4 w-4" />
          {property?.location}
        </span>
      </div>

      <img
        alt="property picture"
        className="h-96 w-full object-contain bg-accent mt-5 rounded-xl border"
        src={property?.picture_url}
      />

      <p className="text-base mt-8">{property?.description}</p>

      <div className="w-full gap-10 px-8 py-6 mt-8 border rounded-md flex flex-wrap items-center">
        <div className="text-muted-foreground flex flex-col gap-2">
          <span className="font-semibold mb-2">Bedrooms</span>
          <div className="flex items-center gap-2">
            <BedDouble className="h-5 w-5" />
            <span className="text-sm text-foreground font-medium">
              {property?.bedrooms}
            </span>
          </div>
        </div>
        <div className="text-muted-foreground flex flex-col gap-2">
          <span className="font-semibold mb-2">Bathrooms</span>
          <div className="flex items-center gap-2">
            <Bath className="h-5 w-5" />
            <span className="text-sm text-foreground font-medium">
              {property?.bathrooms}
            </span>
          </div>
        </div>
        <div className="text-muted-foreground flex flex-col gap-2">
          <span className="font-semibold mb-2">Square Area</span>
          <div className="flex items-center gap-3">
            <LandPlot className="h-5 w-5" />
            <span className="text-sm text-foreground font-medium">
              {property?.square_area}
            </span>
          </div>
        </div>
        <div className="text-muted-foreground flex flex-col gap-2">
          <span className="font-semibold mb-2">Max Guests</span>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5" />
            <span className="text-sm text-foreground font-medium">
              {property?.max_guests}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
