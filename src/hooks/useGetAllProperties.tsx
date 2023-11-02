import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { getAllProperties } from "@/store/slices/propertySlice";
import { useAppSelector } from "./useAppSelector";

export const useGetAllProperties = () => {
  const dispatch = useAppDispatch();

  const { isLoading, data, count } = useAppSelector((state) => state.property);

  useEffect(() => {
    dispatch(getAllProperties());
  }, [dispatch]);

  return { isLoading, data, count };
};
