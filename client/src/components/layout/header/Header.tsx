import { FC } from "react";
import Search from "./search/Search";
import "./Header.scss"
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Avatar } from "@mui/material";

const Header:FC<{}> = ({}) => {
    return (
        <div className="header">
            <Search />

            <div className="header__right">
                <div className="header__buttons">
                    <Link className="header__button" to={""} >
                        <IoMdNotificationsOutline />
                    </Link>
                    <Link className="header__button" to={""} >
                        <IoSettingsOutline />
                    </Link>
                </div>
                <Link className="header__user" to={""}>
                    <Avatar alt="Kirkov Oleksandr" src="./ava.jpg" />
                    <span>Kirkov Oleksandr</span>
                </Link>
            </div>
        </div>
    )
}

export default Header