import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar/>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;