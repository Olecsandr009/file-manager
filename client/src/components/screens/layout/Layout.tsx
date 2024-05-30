import { FC } from "react";
import Sidebar from "../../layout/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.scss"

interface ILayout {}

const Layout:FC<ILayout> = ({}) => {
    return (
        <div className="layout">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Layout