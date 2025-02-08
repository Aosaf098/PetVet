import Navbar from "@/Components/Navigation/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
    <div className="h-dvh font-poppins">
        <Navbar />
    </div>
    <Outlet />
    </>
  )
}

export default MainLayout
