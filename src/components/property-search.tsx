import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CalendarRange } from "./ui/calendar-range";
import { Label } from "./ui/label";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getAllProperties } from "@/store/slices/propertySlice";

export const PropertySearch = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const handleSearch = () => {
    dispatch(getAllProperties({ date, search }));
  };

  return (
    <div>
      <div className="py-3 px-5 w-fit bg-background rounded-t-md border border-b-0 shadow-sm">
        <span className="text-xs font-semibold text-muted-foreground">
          Search properties
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center p-4 bg-background rounded-tl-none rounded-md border drop-shadow-xl md:divide-x md:space-x-2">
        <div className="group w-full md:w-auto">
          <Label
            htmlFor="location"
            className="text-xs font-semibold px-3 text-muted-foreground group-focus-within:text-foreground"
          >
            Place
          </Label>
          <Input
            id="location"
            value={search}
            placeholder="Find location"
            onChange={(e) => setSearch(e.target.value)}
            className="border-0 focus-visible:ring-transparent"
          />
        </div>

        <div className="group w-full md:w-auto">
          <Label
            htmlFor="date"
            className="text-xs font-semibold px-3 text-muted-foreground group-focus-within:text-foreground"
          >
            When
          </Label>
          <CalendarRange onDateChange={setDate} date={date} />
        </div>

        <div className="md:pl-5 mt-4 md:mt-0 h-full w-full md:w-auto">
          <Button size="lg" className="w-full md:w-auto" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
