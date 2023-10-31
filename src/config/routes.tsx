import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/components/layouts/main-layout";
import { HomePage } from "@/app/home-page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
