import React from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
    const {location} = useLocation;
    return(
        <>
        <div className="side-bar" dir="rtl">
            <nav className="nav flex-column">
                <p className="h1 text-white mb-5">فرح</p>
                <Link className="nav-link active py-3" to="/hallinfo">
                    <i className="fa-solid fa-circle-info fa-3x text-light"></i>
                    <p className="text-white fw-bold">المعلومات الاساسية</p>
                </Link>
                <Link className="nav-link py-3" to="/photos">
                    <faCircleInfo className="fa-2x text-white"/>
                    <p className="text-white fw-bold">الصور</p>
                </Link>
                <Link className="nav-link py-3" to="/booking">
                    <faCircleInfo className="fa-2x text-white"/>
                    <p className="text-white fw-bold">الطلبات</p>
                </Link>
            </nav>
        </div>
        </>
    )
}

export default SideBar;