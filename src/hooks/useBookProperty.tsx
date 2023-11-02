import { useCallback, useMemo, useState } from "react";
import { areIntervalsOverlapping } from "date-fns";
import { DateRange } from "react-day-picker";

import { useAppSelector } from "./useAppSelector";
import { calculateTotalPrice } from "@/lib/calculateTotalPrice";

import { useToast } from "@/components/ui/use-toast";
import { IPropertyBookProps } from "@/components/property-book";

export interface IBookData {
  end_date: Date;
  start_date: Date;
  id_property: string;
  guests_count: number;
}

interface IUseBookPropertyProps {
  onSubmit: (data: IBookData) => void;
  defaultValues?: {
    guests?: number;
    date?: DateRange;
  };
  ignoreOverlappings?: {
    from?: Date;
    to?: Date;
  };
}

export const useBookProperty = ({
  onSubmit,
  defaultValues,
  ignoreOverlappings,
}: IUseBookPropertyProps): IPropertyBookProps => {
  const { toast } = useToast();

  const [guests, setGuests] = useState<number>(defaultValues?.guests ?? 1);
  const [date, setDate] = useState<DateRange | undefined>(
    defaultValues?.date ?? {
      from: undefined,
      to: undefined,
    }
  );

  const selectedProperty = useAppSelector(
    (state) => state.property.selectedProperty
  );

  const disabledDays = selectedProperty?.disabled_days?.filter((d) => {
    if (ignoreOverlappings) {
      return (
        d.from !== ignoreOverlappings.from && d.to !== ignoreOverlappings.to
      );
    }

    return true;
  });

  const total = useMemo(() => {
    if (!date?.from || !selectedProperty?.price_per_night) {
      return null;
    }

    return calculateTotalPrice({
      startDate: date.from,
      endDate: date.to,
      valuePerNight: selectedProperty?.price_per_night,
    });
  }, [date, selectedProperty?.price_per_night]);

  const handleAddGuests = useCallback(() => {
    if (selectedProperty?.max_guests) {
      setGuests((state) => state + 1);
    }
  }, [selectedProperty]);

  const handleRemoveGuests = useCallback(() => {
    setGuests((state) => state - 1);
  }, []);

  const handleChangeDate = useCallback(
    (range: DateRange | undefined) => {
      if (!range || !disabledDays?.length) {
        setDate(range);
      }

      const isOverlapping = disabledDays?.find((disabled) => {
        return areIntervalsOverlapping(
          {
            start: range?.from!,
            end: range?.to || range?.from!,
          },
          { start: disabled.from, end: disabled.to }
        );
      });

      if (!isOverlapping) {
        setDate(range);
      }
    },
    [disabledDays]
  );

  const handleSubmit = useCallback(() => {
    if (!selectedProperty) {
      toast({
        title: "Property not found.",
        variant: "destructive",
      });

      return;
    }

    if (!date?.from) {
      toast({
        title: "Please select a valid date.",
        variant: "destructive",
      });

      return;
    }

    if (guests > selectedProperty.max_guests || guests < 1) {
      toast({
        title: "Please select a valid guests amount.",
        variant: "destructive",
      });

      return;
    }

    const data = {
      guests_count: guests,
      start_date: date.from,
      end_date: date.to || date.from,
      id_property: selectedProperty?.id,
    };

    onSubmit(data);
  }, [onSubmit, selectedProperty, date, guests, toast]);

  return {
    total,
    date,
    guests,
    handleSubmit,
    handleAddGuests,
    handleChangeDate,
    handleRemoveGuests,
    disabledDays: disabledDays,
    maxGuests: selectedProperty?.max_guests,
    pricePerNight: selectedProperty?.price_per_night,
  };
};
