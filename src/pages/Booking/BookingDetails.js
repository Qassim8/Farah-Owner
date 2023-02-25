import React from "react";
import SideBar from "../../component/Bars/SideBar";

const BookingDetails = () => {
  return (
    <>
      <SideBar />
      <div className="booking" dir="rtl">
        <div className="container p-5">
          <p className="py-3 text-black-50">الطلبات الواردة</p>
          <div className="important-info p-3 mb-5 position-relative">
            <p>
              من هذه الصفحة ستشاهد جميع الطلبات المرسلة لك عن طريق نموذج التواصل
              الخاص بك في موقعنا. مشاهدة هذه الطلبات والرد عليها يعبر عن اهتمامك
              بالزبائن ويرفع عدد الراغبين بالتعامل معك فلا تتأخر بالرد عليهم
              انهم بإنتظارك.!
            </p>
          </div>
          <div className="order-info">
            <form className="order-form p-3">
              <div className="row">
                <div className="col-md-4">
                  <label className="pb-3">اسم المرسل</label>
                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder="اسم صاحب الحجز"
                  ></input>
                  <label className="pt-4 pb-3">تاريخ الزفاف</label>
                  <input type="date" className="form-control w-100"></input>
                </div>
                <div className="col-md-4">
                  <label className="pb-3">رقم المرسل</label>
                  <input
                    type="number"
                    className="form-control w-100"
                    placeholder="رقم الهاتف الخاص به"
                  ></input>
                  <label className="pt-4 pb-3">تاريخ طلب الحجز</label>
                  <input type="date" className="form-control w-100"></input>
                </div>
                <div className="col-md-4">
                  <label className="pb-3">البريد الالكتروني</label>
                  <input
                    type="email"
                    className="form-control w-100"
                    placeholder="البريد الالكتروني"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetails;
