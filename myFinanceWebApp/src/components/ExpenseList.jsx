import React from "react";
import { Download, Mail, Layers2, Trash2 } from "lucide-react";
import * as XLSX from "xlsx";
import axios from "axios";

const ExpenseList = ({ expenses = [], onDelete }) => {
  const downloadExcel = () => {
    if (expenses.length === 0) return;
    const worksheet = XLSX.utils.json_to_sheet(
      expenses.map((e) => ({
        Name: e.name,
        CategoryID: e.categoryId,
        Amount: e.amount,
        Date: e.date,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");
    XLSX.writeFile(workbook, "expense_records.xlsx");
  };

  const sendEmail = async () => {
    if (expenses.length === 0) return;
    const worksheet = XLSX.utils.json_to_sheet(
      expenses.map((e) => ({
        Name: e.name,
        CategoryID: e.categoryId,
        Amount: e.amount,
        Date: e.date,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");
    const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
    const file = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const formData = new FormData();
    formData.append("file", file, "expense_records.xlsx");
    await axios.post("http://localhost:8080/api/email/sendExcel", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <div className="card p-4 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">Expense Records</h4>
        <div className="flex items-center gap-2">
          <button onClick={sendEmail} className="card-btn flex items-center gap-1">
            <Mail size={15} /> Email
          </button>
          <button onClick={downloadExcel} className="card-btn flex items-center gap-1">
            <Download size={15} /> Download
          </button>
        </div>
      </div>

      {expenses.length === 0 ? (
        <p className="text-gray-500">No expense records added yet. Add some to get started!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {expenses.map((expense) => (
            <div
              key={expense._id || expense.id}
              className="border p-4 rounded-lg shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-all duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full">
                <Layers2 size={24} className="text-red-700" />
              </div>
              <div className="flex-1 ml-4">
                <h5 className="font-semibold text-gray-900">{expense.name}</h5>
                <p className="text-sm text-gray-500">Category ID: {expense.categoryId}</p>
                <p className="text-sm font-medium text-red-700">₹{expense.amount}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onDelete(expense.id || expense._id)}
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

export default ExpenseList;
