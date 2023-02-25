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

const Booking = () => {
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
          <button>التفاصيل</button>
        </>
      ),
      sortable: true,
    },
  ];
  return (
    <div>
      <SideBar />
      <div>
        <DataTable columns={columns} data={demoData} direction="rtl" />
      </div>
    </div>
  );
};

export default Booking;
