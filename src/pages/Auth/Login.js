import React from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const navigate= useNavigate()
  return(
    <>
    <div className="login">
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <form action="" method="POST" className="login-form text-center p-4" dir="rtl">
              <p className="fs-5 fw-bold ">تسجيل دخول</p>
                <input type="email" name="email" className="form-control mx-2 mb-3 mt-5" placeholder="البريد الالكتروني"></input>
                <input type="password" name="password" className="form-control mx-2" placeholder="كلمة السر" ></input>
              <input type="submit" value="دخول" onClick={()=> navigate("/hallinfo")} className="btn back-color text-light mt-3 mb-2 px-4 fw-bold rounded-0"></input>
              <p className="fw-bold mb-2">او</p>
              <a href="./Register" className="main-color pt-0">سجل </a>
            </form>
        </div>
    </div>
    </>
  );
};

export default Login;
