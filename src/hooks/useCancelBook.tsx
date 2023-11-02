import { useCallback } from "react";

import { deleteBoook } from "@/store/slices/bookingSlice";

import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch } from "./useAppDispatch";

export const useCancelBook = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();

  const handleCancel = useCallback(
    async (id: string) => {
      try {
        console.log(id);
        await dispatch(deleteBoook(id)).unwrap();
        toast({ variant: "default", title: "Success cancel!" });
      } catch (error) {
        toast({ variant: "destructive", title: "Error cancel!" });
      }
    },
    [dispatch, toast]
  );

  return { handleCancel };
};
