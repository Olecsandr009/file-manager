import { FC } from "react";
import Sidebar from "../../layout/sidebar/Sidebar";
import Header from "../../layout/header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.scss"

interface ILayout {}

const Layout:FC<ILayout> = ({}) => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="layout__content">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout