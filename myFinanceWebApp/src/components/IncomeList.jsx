import React from "react";
import { Download, Mail } from "lucide-react";
import moment from "moment"; // ✅ added
import TransactionInfoCard from "./TransactionInfoCard.jsx";

const IncomeList = ({ transactions = [], onDelete }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income Source</h5>
        <div className="flex items-center justify-end gap-2">
          <button className="card-btn">
            <Mail size={15} className="text-base" /> Email
          </button>

          <button className="card-btn">
            <Download size={15} className="text-base" /> Download
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Display the incomes safely */}
        {Array.isArray(transactions) && transactions.length > 0 ? (
          transactions.map((income) => (
            <TransactionInfoCard
              key={income.id}
              title={income.name}
              icon={income.icon}
              date={moment(income.date).format("DD MMM YYYY")}
              amount={income.amount}
              type="income"
              onClick={() => onDelete(income.id)} 
            />
          ))
        ) : (
          <p className="text-gray-500 mt-4">No income records found.</p>
        )}
      </div>
    </div>
  );
};

export default IncomeList;
IncomeList.jsx