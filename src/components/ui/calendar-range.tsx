import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange, Matcher } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { VariantProps } from "class-variance-authority";

interface ICalendarRangeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
  classes?: {
    button?: string;
    calendar?: string;
  };
  disabledDays?: Matcher | Matcher[];
  date?: DateRange;
  onDateChange?: (range: DateRange | undefined) => void;
}

export const CalendarRange = ({
  className,
  variant,
  size,
  classes,
  disabledDays,
  date,
  onDateChange,
}: ICalendarRangeProps) => {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            size={size}
            variant={variant || "ghost"}
            className={cn(
              "w-[300px] justify-start text-left font-normal text-muted-foreground",
              classes?.button
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={onDateChange}
            numberOfMonths={2}
            disabled={disabledDays}
            className={classes?.calendar}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
