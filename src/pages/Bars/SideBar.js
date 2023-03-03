import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const SideBar = () => {
  // const {location} = useLocation;
    return (
        <>
        <div className="side-bar" dir="rtl">
            <nav className="nav flex-column">
            <p className="h1 text-white mb-5">فرح</p>
            <Link className="nav-link active py-3" to="/">
            <FontAwesomeIcon icon={faCircleInfo} color="red"/>
                <p className="text-white fw-bold">المعلومات الاساسية</p>
            </Link>
            <Link className="nav-link py-3" to="/photos">
            <FontAwesomeIcon icon={faCircleInfo} className="fa-2x text-white"/>
                <p className="text-white fw-bold">الصور</p>
            </Link>
            <Link className="nav-link py-3" to="/booking">
            <FontAwesomeIcon icon={faCircleInfo} className="fa-2x text-white"/>
                <p className="text-white fw-bold">الطلبات</p>
            </Link>
            </nav>
        </div>
        </>
    );
};

export default SideBar;