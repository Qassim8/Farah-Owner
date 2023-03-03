import React from "react";
import SideBar from "../../component/Bars/SideBar";

const Photos = () => {
  return (
    <>
      <SideBar />
      <div className="photos" dir="rtl">
        <div className="container p-5">
          <p className="py-3 text-black-50">إضافة الصور</p>
          <div className="important-info p-3 mb-5 position-relative">
            <p>
              اختيارك الصور الواضحه التي تعبر عن الخدمات التي تقدمها بشكل مناسب
              هو الوسيلة الاهم لعرض اعمالك والطريقة الاسرع لزيادة عدد زوار صفحتك
              على موقعنا
            </p>
            <p>ولضمان افضل النتائج الرجاء التقييد بالشروط التالية :</p>
            <ol>
              <li>اضف على الاقل 5 صور توضح نشاط شركتك.</li>
              <li>اختار صور بدقة متوسطة الجودة لتسهيل عملية تحميل معرضك.</li>
              <li>
                {" "}
                يجب الا تحتوي الصور على اي معلومات اتصال (هاتف - بريد الكتروني)
                ولا مشكلة في اضافة شعار صالتك.
              </li>
            </ol>
          </div>
          <div className="add-photo d-flex p-3">
            <input type="file" className="open"></input>
            <label htmlFor="file" className="py-2 px-3 back-green text-white">اختر الصور</label>
            <button className="btn py-2 mx-3 back-color text-white rounded-0">
              اضافة الصور
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
