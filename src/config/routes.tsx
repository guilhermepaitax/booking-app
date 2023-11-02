import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/components/layouts/main-layout";
import { HomePage } from "@/app/home-page";
import { BookingsPage } from "@/app/bookings-page";
import { BookPage } from "@/app/book-page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/book/:slug",
        element: <BookPage />,
      },
      {
        path: "/bookings",
        element: <BookingsPage />,
      },
    ],
  },
]);
