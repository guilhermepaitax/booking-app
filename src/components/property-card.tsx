import { Link } from "react-router-dom";

import { IProperty } from "@/entities/property";
import { Skeleton } from "./ui/skeleton";
import { formatCurrency } from "@/lib/formatCurrency";

interface IPropertyCardProps {
  property: IProperty;
}

export const PropertyCardLoading = () => {
  return (
    <div className="w-full h-80 rounded-lg">
      <Skeleton className="h-44 w-full relative rounded-lg" />
      <Skeleton className="h-8 mt-4 w-1/2 relative rounded-md" />
      <Skeleton className="h-8 mt-2 w-2/3 relative rounded-md" />
    </div>
  );
};

export const PropertyCard = ({ property }: IPropertyCardProps) => {
  return (
    <Link to={`/book/${property.slug}`}>
      <div className="w-full h-80 rounded-lg overflow-hidden group cursor-pointer">
        <div className="h-44 w-full relative rounded-lg overflow-hidden">
          <img
            alt="property picture"
            src={property.picture_url}
            className="h-full w-full object-cover group-hover:scale-110 transition-all ease-linear duration-300"
          />
        </div>

        <div className="p-4 flex flex-col">
          <div className="text-sm flex items-center">
            <span className="font-semibold text-xl">
              {formatCurrency({ value: property.price_per_night })}
            </span>
            <span className="text-muted-foreground text-sm">/night</span>
          </div>
          <span className="font-semibold mt-2">{property.title}</span>
          <span className="text-sm text-muted-foreground mt-1">
            {property.location}
          </span>
        </div>
      </div>
    </Link>
  );
};
