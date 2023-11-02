import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="shadow-sm w-full h-20 border-b">
      <div className="container flex flex-1 items-center h-full justify-between">
        <Link to="/" className="font-black">
          Booking App
        </Link>
        <Button asChild>
          <Link to="/bookings">My bookings</Link>
        </Button>
      </div>
    </header>
  );
};
