import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { useCreateBook } from "@/hooks/useCreateBook";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useBookProperty } from "@/hooks/useBookProperty";
import { getPropertyBySlug } from "@/store/slices/propertySlice";

import { Button } from "@/components/ui/button";
import { PropertyBook } from "@/components/property-book";
import { PropertyDetails } from "@/components/property-details";

export const BookPage = () => {
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const { handleCreate } = useCreateBook();
  const bookProperty = useBookProperty({ onSubmit: handleCreate });

  useEffect(() => {
    if (slug) {
      dispatch(getPropertyBySlug(slug));
    }
  }, [slug, dispatch]);

  return (
    <div className="container pt-10 pb-14">
      <Button variant="secondary" asChild>
        <Link to="/">
          <ChevronLeft />
          <span>Back to Home</span>
        </Link>
      </Button>

      <div className="w-full gap-10 flex flex-col lg:flex-row mt-10">
        <PropertyDetails />
        <PropertyBook {...bookProperty} />
      </div>
    </div>
  );
};
