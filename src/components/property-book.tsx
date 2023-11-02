import { Minus, Plus } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/formatCurrency";

import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { CalendarRange } from "./ui/calendar-range";

export interface IPropertyBookProps {
  date: DateRange | undefined;
  total: number | null;
  guests: number;
  maxGuests?: number;
  pricePerNight?: number;
  disabledDays?: DateRange[];
  handleAddGuests: () => void;
  handleChangeDate: (range: DateRange | undefined) => void;
  handleRemoveGuests: () => void;
  handleSubmit: () => void;
  className?: string;
}

export const PropertyBook = ({
  date,
  total,
  guests,
  maxGuests,
  pricePerNight,
  disabledDays,
  handleAddGuests,
  handleChangeDate,
  handleRemoveGuests,
  handleSubmit,
  className,
}: IPropertyBookProps) => {
  return (
    <div
      className={cn(
        "w-full lg:w-96 h-fit border rounded-xl lg:mt-24 pt-6 pb-10 px-6 md:px-8",
        className
      )}
    >
      <span className="text-muted-foreground text-sm font-medium">
        Book property
      </span>

      {!!pricePerNight && (
        <div className="text-sm flex items-center mt-2">
          <span className="font-semibold text-xl">
            {formatCurrency({ value: pricePerNight })}
          </span>
          <span className="text-muted-foreground text-sm font-medium">
            /night
          </span>
        </div>
      )}

      <div className="flex gap-3 flex-col mt-6">
        <Label>Guests</Label>
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="outline"
            className="rounded-full"
            onClick={handleRemoveGuests}
            disabled={guests <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="font-medium">{guests}</span>
          <Button
            variant="outline"
            className="rounded-full"
            size="sm"
            onClick={handleAddGuests}
            disabled={maxGuests ? guests >= maxGuests : false}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-3 flex-col mt-6">
        <Label htmlFor="date">Check-in / Check-out</Label>
        <CalendarRange
          size="lg"
          date={date}
          variant="outline"
          disabledDays={
            disabledDays
              ? [{ before: new Date() }, ...disabledDays]
              : { before: new Date() }
          }
          onDateChange={handleChangeDate}
          classes={{
            button: "w-full text-foreground whitespace-pre-wrap px-2 md:px-6",
          }}
        />
      </div>

      <Button className="w-full mt-10" size="lg" onClick={handleSubmit}>
        Submit
      </Button>

      {!!total && (
        <div className="mt-8 border-t flex items-baseline justify-between gap-3 pt-6">
          <span className="font-medium text-lg">Total</span>
          <span className="font-semibold text-xl">
            {formatCurrency({ value: total })}
          </span>
        </div>
      )}
    </div>
  );
};
