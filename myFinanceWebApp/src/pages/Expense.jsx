import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hook/useUser.jsx";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS, BASE_URL } from "../util/apiEndPoint.js";
import { toast } from "react-hot-toast";
import { Plus } from "lucide-react";
import ExpenseList from "../components/ExpenseList.jsx";
import ExpenseModal from "../components/ExpenseModal.jsx";
import ExpenseGraph from "../components/ExpenseGraph.jsx";

function Expense() {
  useUser();

  const [expenseData, setExpenseData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);

  const fetchExpenseDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosConfig.get(
        `${BASE_URL}${API_ENDPOINTS.GET_ALL_EXPENSES}`
      );
      if (response.status === 200) {
        setExpenseData(response.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch expenses");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axiosConfig.get(
        `${BASE_URL}${API_ENDPOINTS.GET_ALL_CATEGORIES}`
      );
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      toast.error("Failed to fetch categories");
    }
  };

  useEffect(() => {
    fetchExpenseDetails();
    fetchCategories();
  }, []);

  const handleDeleteExpense = async (id) => {
    if (!window.confirm("Are you sure you want to delete this expense?")) return;
    try {
      const response = await axiosConfig.delete(
        `${BASE_URL}${API_ENDPOINTS.DELETE_EXPENSE}/${id}`
      );
      if (response.status === 200) {
        toast.success(response.data.message || "Expense deleted successfully");
        fetchExpenseDetails();
      }
    } catch (error) {
      toast.error("Failed to delete expense");
    }
  };

  return (
    <div>
      <Dashboard activeMenu="Expense">
        <div className="my-5 mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Expense Management</h2>
            <button
              onClick={() => setOpenAddExpenseModal(true)}
              className="flex items-center gap-2 text-emerald-900 bg-emerald-50 px-4 py-2 rounded-lg hover:bg-emerald-100 transition"
            >
              <Plus size={24} />
              Add Expense
            </button>
          </div>
          <ExpenseGraph expenses={expenseData} />
          <ExpenseList expenses={expenseData} onDelete={handleDeleteExpense} />
        </div>
      </Dashboard>
      <ExpenseModal
        open={openAddExpenseModal}
        onClose={() => setOpenAddExpenseModal(false)}
        onSuccess={fetchExpenseDetails}
        categories={categories}
      />
    </div>
  );
}

export default Expense;
