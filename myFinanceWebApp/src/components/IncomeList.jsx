import React from "react";
import { Download, Mail, Layers2, Trash2 } from "lucide-react";
import * as XLSX from "xlsx";
import axios from "axios";

const IncomeList = ({ incomes = [], onDelete }) => {
  const downloadExcel = () => {
    if (incomes.length === 0) return;
    const worksheet = XLSX.utils.json_to_sheet(
      incomes.map((i) => ({
        Name: i.name,
        CategoryID: i.categoryId,
        Amount: i.amount,
        Date: i.date,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Incomes");
    XLSX.writeFile(workbook, "income_records.xlsx");
  };

  const sendEmail = async () => {
    if (incomes.length === 0) return;
    const worksheet = XLSX.utils.json_to_sheet(
      incomes.map((i) => ({
        Name: i.name,
        CategoryID: i.categoryId,
        Amount: i.amount,
        Date: i.date, 
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Incomes");
    const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
    const file = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const formData = new FormData();
    formData.append("file", file, "income_records.xlsx");
    await axios.post("http://localhost:8080/api/email/sendExcel", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <div className="card p-4 shadow-xl border mt-2.5 rounded-md ">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">Income Records</h4>
        <div className="flex items-center gap-2">
          <button onClick={sendEmail} className="flex items-center font-bold gap-2 text-black-900 bg-emerald-50 px-4 py-2 mt-1 border rounded-lg hover:bg-emerald-100 transition">
            <Mail size={15} /> Email
          </button>
          <button onClick={downloadExcel} className="flex items-center font-bold gap-2 text-black-900 bg-emerald-50 px-4 py-2 mt-1 border rounded-lg hover:bg-emerald-100 transition">
            <Download size={15} /> Download
          </button>
        </div>
      </div>

      {incomes.length === 0 ? (
        <p className="text-gray-500">No income records added yet. Add some to get started!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {incomes.map((income) => (
            <div
              key={income._id || income.id}
              className="border p-4 rounded-lg shadow-sm flex justify-between items-center cursor-pointer bg-white"
            >
              <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full">
                <Layers2 size={24} className="text-emerald-700" />
              </div>
              <div className="flex-1 ml-4">
                <h5 className="font-semibold text-gray-900">{income.name}</h5>
                <p className="text-sm text-gray-500">Category ID: {income.categoryId}</p>
                <p className="text-sm font-medium text-emerald-700">₹{income.amount}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onDelete(income.id || income._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IncomeList;
