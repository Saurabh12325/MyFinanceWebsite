import React from "react";
import { Layers2, Trash2 } from "lucide-react"; // Icons for income cards

const IncomeList = ({ incomes, onDelete }) => {
  return (
    <div className="card p-4 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">Income Records</h4>
      </div>

      {/* If no incomes */}
      {incomes.length === 0 ? (
        <p className="text-gray-500">
          No income records added yet. Add some to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {incomes.map((income) => (
            <div
              key={income._id || income.id}
              className="border p-4 rounded-lg shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-all duration-200"
            >
              {/* Icon Section */}
              <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full">
                <Layers2 size={24} className="text-emerald-700" />
              </div>

              {/* Income Info */}
              <div className="flex-1 ml-4">
                <h5 className="font-semibold text-gray-900">{income.name}</h5>
                <p className="text-sm text-gray-500">
                  Category ID: {income.categoryId}
                </p>
                <p className="text-sm font-medium text-emerald-700">
                  ₹{income.amount}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => onDelete(income.id || income._id)}
                  className="text-red-500 hover:text-red-700"
                  title="Delete"
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
