import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import axiosConfig from "../util/axiosConfig";
import { BASE_URL, API_ENDPOINTS } from "../util/apiEndPoint";
import toast from "react-hot-toast";

function IncomeModal({ open, onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (open) {
      fetchCategories();
    }
  }, [open]);

  const fetchCategories = async () => {
    try {
      const response = await axiosConfig.get(
        `${BASE_URL}${API_ENDPOINTS.GET_ALL_CATEGORIES}`
      );
      setCategories(response.data);
    } catch (error) {
      toast.error("Failed to load categories");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    // ✅ Allow today and past, block future
    if (selectedDate > today) {
      toast.error("You cannot add future income!");
      return;
    }

    try {
      const data = { name, categoryId, amount, date };
      const response = await axiosConfig.post(
        `${BASE_URL}${API_ENDPOINTS.ADD_INCOME}`,
        data
      );
      toast.success("Income added successfully!");
      onSuccess();
      onClose();
    } catch (error) {
      toast.error("Failed to add income");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-xl shadow-lg w-[400px] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Income</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Income Source */}
          <input
            type="text"
            placeholder="Income Source"
            className="border p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Category Dropdown */}
          <select
            className="border p-2 rounded-md"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Amount */}
          <input
            type="number"
            placeholder="Amount"
            className="border p-2 rounded-md"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          {/* Date */}
          <input
            type="date"
            className="border p-2 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            max={new Date().toISOString().split("T")[0]} // blocks future date in picker
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Add Income
          </button>
        </form>
      </div>
    </div>
  );
}

export default IncomeModal;
