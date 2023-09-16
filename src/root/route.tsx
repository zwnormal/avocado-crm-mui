import {Outlet} from "react-router-dom";
import TopNavBar from "../components/TopNavBar.tsx";

export default function Root() {
    return (
        <>
            <TopNavBar></TopNavBar>
            <div>
                <Outlet />
            </div>
        </>
    );
}
