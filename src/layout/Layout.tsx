import { ReactNode } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/SideBar";

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            {/* <Footer /> */}
        </>
    )
}

export default Layout;