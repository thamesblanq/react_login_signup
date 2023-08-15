import Header from "./Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-green-400 flex flex-col items-center"> 
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout