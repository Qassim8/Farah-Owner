import React from "react";
import SideBar from "../Bars/SideBar";

const HallInfo = () => {
  return(
    <>
    <SideBar/>
      <div className="hallinfo" dir="rtl">
        <div className="container p-5">
          <p className="text-black-50 p-2"> المعلومات الاساسية ومعلومات التواصل</p>
          <form className="info-form p-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input px-2">
                        <p className="">اسم الصالة</p>
                        <input type="text" name="hall-name" className="form-control my-2 w-100" placeholder="اسم الصالة"></input>
                        <label>اسم المالك</label>
                        <input type="text" name="owner-name" className="form-control my-2 w-100" placeholder="اسم المالك"></input>
                        <p className="">البريد الالكتروني</p>
                        <input type="email" name="hall-email" className="form-control my-2 w-100" placeholder="البريد الالكتروني"></input>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input px-2">
                          <p className="">الموقع الالكتروني</p>
                          <input type="text" name="hall-email" className="form-control my-2 w-100" placeholder="ادخل روابط التواصل الاجتماعي"></input>
                          <label>رقم الهاتف</label>
                          <input type="number" name="hall-phone" className="form-control my-2 w-100" placeholder="رقم الهاتف"></input>
                          <label>سعر الحجز</label>
                          <input type="number" name="hall-phone" className="form-control my-2 w-100" placeholder="يقصد هنا 50%من المبلغ الكلي"></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input px-2">
                        <p className="">خدمات الصالة الاساسية</p>
                        <textarea className="form-control px-3 w-100"></textarea>
                      </div>
                    </div>
                  </div>
                  <input type="submit" value="حفظ" className="btn py-2 px-3 my-3 me-2 back-color fw-bold text-white rounded-0"/>
          </form>
        </div>
      </div>
    </>
  )

};

export default HallInfo;
