import bookings from "@/lib/bookings";

type IDeleteResponse = boolean;

export const cancel = async (id: string): Promise<IDeleteResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 50));

  const bookIndex = bookings.findIndex((b) => b.id === id);

  if (bookIndex === -1) {
    throw new Error("Book not found!");
  }

  bookings.splice(bookIndex, 1);

  return true;
};
