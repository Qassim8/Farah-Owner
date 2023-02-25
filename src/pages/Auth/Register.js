    import React from "react";
    import "./Register.css";

    const Register = () => {
    return(
        <>
        <div className="register">
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <form action="" className="register-form text-center p-3" dir="rtl">
                <a href="login" className="position-absolute top-0 end-0 pt-5 pe-3">
                    <i className="fa-solid fa-arrow-left main-color"></i>
                </a>
                <div className="input px-2 d-flex pt-5">
                    <input type="text" name="full-name" className="form-control mx-2 my-2" placeholder="اسم الصالة"></input>
                    <input type="text" name="user-name" className="form-control mx-2 my-2" placeholder="اسم المالك"></input>
                </div>
                <div className="input px-2 d-flex">
                    <input type="email" name="email" className="form-control mx-2 my-2" placeholder="البريد الالكتروني"></input>
                    <input type="number" name="phone" className="form-control mx-2 my-2" placeholder="رقم الهاتف"></input>
                </div>
                <div className="input px-2 d-flex">
                    <input type="password" name="password" className="form-control mx-2 my-2" placeholder="كلمة السر" ></input>
                    <input type="password" name="password" className="form-control mx-2 my-2" placeholder="تأكيد كلمة السر"></input>
                </div>
                    <input type="submit" value="سجل" className="btn back-color text-light my-3 fw-bold rounded-0"></input>
                </form>
            </div>
        </div>
        </>
    )
    };
export default Register;