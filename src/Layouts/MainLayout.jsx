import Navbar from "@/Components/Navigation/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="h-dvh font-poppins">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
