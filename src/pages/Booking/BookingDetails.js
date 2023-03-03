import React from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../component/Bars/SideBar";

const demoData = [
  {
    name: "Mohammed",
    phoneNumber: "0123456789",
    email: "moh@gmail.com",
    weddingDate: "1/2/2022",
    createdAt: "1/1/2022",
  },
  {
    name: "Mohammed",
    phoneNumber: "0123456789",
    email: "moh@gmail.com",
    weddingDate: "1/2/2022",
    createdAt: "1/1/2022",
  },
  {
    name: "Mohammed",
    phoneNumber: "0123456789",
    email: "moh@gmail.com",
    weddingDate: "1/2/2022",
    createdAt: "1/1/2022",
  },
];

const BookingDetails = () => {
  const columns = [
    {
      name: "الإسم",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "رقم الهاتف",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "البريد الالكتروني",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "تاريخ الزفاف",
      selector: (row) => row.weddingDate,
      sortable: true,
    },
    {
      name: "تاريخ الطلب",
      selector: (row) => row.createdAt,
      sortable: true,
    },
    {
      name: "الإجراءات",
      selector: (row) => (
        <>
          <button className="btn btn-primary rounded-0 ms-1">القبول</button>
          <button className=" btn btn-danger rounded-0">الرفض</button>
        </>
      ),
      sortable: true,
    },
  ];
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
      <div className="table">
        <DataTable columns={columns} data={demoData} direction="rtl" />
      </div>
      </div>
      </div>
    </>
  );
};

export default BookingDetails;