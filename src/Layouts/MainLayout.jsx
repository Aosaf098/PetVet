import Navbar from "@/Components/Navigation/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
    <div className="h-dvh border-4 border-solid border-blue-500">
        <Navbar />
    </div>
    <Outlet />
    </>
  )
}

export default MainLayout
