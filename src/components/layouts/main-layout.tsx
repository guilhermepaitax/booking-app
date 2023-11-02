import { Outlet } from "react-router-dom";

import { Header } from "../header";
import { Toaster } from "../ui/toaster";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Toaster />
      <Outlet />
    </div>
  );
};
