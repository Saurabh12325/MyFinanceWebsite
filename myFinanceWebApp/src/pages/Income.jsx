import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hook/useUser.jsx";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS, BASE_URL } from "../util/apiEndPoint.js";
import { toast } from "react-hot-toast";
import { Plus } from "lucide-react";
import IncomeList from "../components/IncomeList.jsx";
import IncomeModal from "../components/IncomeModal.jsx";
import IncomeGraph from "../components/IncomeGraph.jsx"; // ✅ Graph Component

function Income() {
  useUser();

  const [incomeData, setIncomeData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  // ✅ Fetch all income records
  const fetchIncomeDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosConfig.get(
        `${BASE_URL}${API_ENDPOINTS.GET_ALL_INCOMES}`
      );
      if (response.status === 200) {
        console.log("Incomes fetched successfully");
        setIncomeData(response.data);
      }
    } catch (error) {
      console.error("Error fetching incomes:", error);
      toast.error(error.response?.data?.message || "Failed to fetch incomes");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch category list for dropdown
  const fetchCategories = async () => {
    try {
      const response = await axiosConfig.get(
        `${BASE_URL}${API_ENDPOINTS.GET_ALL_CATEGORIES}`
      );
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to fetch categories");
    }
  };

  useEffect(() => {
    fetchIncomeDetails();
    fetchCategories();
  }, []);

  // ✅ Delete Income
  const handleDeleteIncome = async (id) => {
    if (!window.confirm("Are you sure you want to delete this income?")) return;
    try {
      const response = await axiosConfig.delete(
        `${BASE_URL}${API_ENDPOINTS.DELETE_INCOME}/${id}`
      );
      if (response.status === 200) {
        toast.success(response.data.message || "Income deleted successfully");
        fetchIncomeDetails();
      }
    } catch (error) {
      console.log("Error deleting income:", error);
      toast.error("Failed to delete income");
    }
  };

  return (
    <div>
      <Dashboard activeMenu="Income">
        <div className="my-5 mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Income Management</h2>

            <button
              onClick={() => setOpenAddIncomeModal(true)}
              className="flex items-center gap-2 text-emerald-900 bg-emerald-50 px-4 py-2 rounded-lg hover:bg-emerald-100 transition"
            >
              <Plus size={24} />
              Add Income
            </button>
          </div>

          {/* ✅ Graph Analysis */}
          <IncomeGraph incomes={incomeData} />

          {/* ✅ Income List (Card UI like CategoryList) */}
          <IncomeList incomes={incomeData} onDelete={handleDeleteIncome} />
        </div>
      </Dashboard>

      {/* ✅ Add Income Modal */}
      <IncomeModal
        open={openAddIncomeModal}
        onClose={() => setOpenAddIncomeModal(false)}
        onSuccess={fetchIncomeDetails}
        categories={categories}
      />
    </div>
  );
}

export default Income;
