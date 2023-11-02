import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { getAllBookings } from "@/store/slices/bookingSlice";
import { useAppSelector } from "./useAppSelector";

export const useGetAllBookings = () => {
  const dispatch = useAppDispatch();

  const { isLoading, data, count } = useAppSelector((state) => state.booking);

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  return { isLoading, data, count };
};
