import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { createBoook } from "@/store/slices/bookingSlice";

import { useToast } from "@/components/ui/use-toast";
import { IBookData } from "./useBookProperty";
import { useAppDispatch } from "./useAppDispatch";

export const useCreateBook = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCreate = useCallback(
    async (data: IBookData) => {
      try {
        await dispatch(createBoook({ data })).unwrap();
        toast({ variant: "default", title: "Success book!" });
        navigate("/bookings");
      } catch (error) {
        toast({ variant: "destructive", title: "Error book!" });
      }
    },
    [dispatch, toast, navigate]
  );

  return {
    handleCreate,
  };
};
