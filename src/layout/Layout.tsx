import { ReactNode, useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/SideBar";

function Layout({ children }: { children: ReactNode }) {
    const [sidebar, setSidebar] = useState<boolean>(false)

    function handleSidebar(){
        setSidebar(!sidebar)
    }

    return (
        <>
            <Header handleSidebar={handleSidebar}/>
            <Sidebar setSidebar={sidebar}/>
            {children}
        </>
    )
}

export default Layout;