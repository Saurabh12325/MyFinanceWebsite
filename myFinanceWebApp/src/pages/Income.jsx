import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import { useUser } from "../hook/useUser.jsx";
import axiosConfig from '../util/axiosConfig.jsx';
import { API_ENDPOINTS, BASE_URL } from '../util/apiEndPoint.js';
import { toast } from 'react-hot-toast';
import IncomeList from '../components/IncomeList.jsx';

function Income() {
  useUser();

  const [incomeData, setIncomeData] = useState([]); 
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const fetchIncomeDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosConfig.get(`${BASE_URL}${API_ENDPOINTS.GET_ALL_INCOMES}`);
      if (response.status === 200) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch income details:', error);
      toast.error(error.response?.data?.message || "Failed to fetch income details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncomeDetails();
  }, []);

  return (
    <Dashboard activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div>
            {/* overview for income with line chart */}
          </div>
          <IncomeList
            transactions={incomeData}
            onDelete={(id) => console.log("Deleting the income", id)}
          />
        </div>
      </div>
    </Dashboard>
  );
}

export default Income;
