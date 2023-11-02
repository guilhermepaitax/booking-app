import { differenceInDays, startOfDay } from "date-fns";

interface ICalculateTotalPriceProps {
  startDate: Date;
  endDate?: Date;
  valuePerNight: number;
}

export const calculateTotalPrice = ({
  endDate,
  startDate,
  valuePerNight,
}: ICalculateTotalPriceProps) => {
  const days = differenceInDays(
    startOfDay(endDate || startDate),
    startOfDay(startDate)
  );

  return valuePerNight * (days + 1);
};
