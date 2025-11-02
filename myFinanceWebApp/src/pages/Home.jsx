import React, { useEffect, useState, useContext } from "react";
import axiosConfig from "../util/axiosConfig";
import { AppContext } from "../Context/AppContext";
import MenuBar from "../components/MenuBar";
import SideBar from "../components/SideBar";
import { API_ENDPOINTS, BASE_URL } from "../util/apiEndPoint";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

function Home() {
  const { user } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const COLORS = ["#00C49F", "#FF0002"];

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axiosConfig.get(
          `${BASE_URL}${API_ENDPOINTS.GET_ALL_DASHBOARD}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setDashboardData(res.data);
      } catch (error) {
        console.error("Error fetching dashboard:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, [user]);

  if (loading) return <p className="text-center mt-10">Loading dashboard...</p>;
  if (!dashboardData)
    return <p className="text-center mt-10 text-red-500">No data available.</p>;

  const {
    totalBalance,
    totalExpense,
    recent5Expenses,
    recent5Income,
    recentTransaction,
  } = dashboardData;

  const pieData = [
    {
      name: "Total Income",
      value: recent5Income.reduce((sum, i) => sum + i.amount, 0),
    },
    {
      name: "Total Expense",
      value: recent5Expenses.reduce((sum, e) => sum + e.amount, 0),
    },
  ];

  const incomeTransactions = recentTransaction.filter((t) => t.type === "income");
  const expenseTransactions = recentTransaction.filter((t) => t.type === "expense");

  return (
    <div>
      <MenuBar activeMenu="Dashboard" />

      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            <SideBar activeMenu="Dashboard" />
          </div>

          <div className="grow mx-5 mt-5">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-green-100 p-4 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-green-700">Total Balance</h2>
                <p className="text-2xl font-bold text-green-900">
                  ₹{totalBalance.toLocaleString()}
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-blue-700">Total Income</h2>
                <p className="text-2xl font-bold text-blue-900">
                  ₹
                  {recent5Income
                    .reduce((sum, income) => sum + income.amount, 0)
                    .toLocaleString()}
                </p>
              </div>

              <div className="bg-red-100 p-4 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-red-700">Total Expense</h2>
                <p className="text-2xl font-bold text-red-900">
                  ₹
                  {recent5Expenses
                    .reduce((sum, expense) => sum + expense.amount, 0)
                    .toLocaleString()}
                </p>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow-md ">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 text-center">
                Income vs Expense Distribution
              </h3>
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer >
                  <PieChart >
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/* Income Transactions */}
              <div className="bg-green-50 p-5 rounded-xl shadow-md h-[400px] overflow-y-auto border-2">
                <h3 className="text-xl font-semibold mb-3 text-green-700">
                  Recent Incomes
                </h3>
                {incomeTransactions.length === 0 ? (
                  <p className="text-gray-500">No income transactions</p>
                ) : (
                  incomeTransactions.map((t) => (
                    <div
                      key={t.id}
                      className="flex justify-between items-center bg-white border border-green-100 rounded-lg p-3 mb-3 shadow-sm hover:shadow-md transition"
                    >
                      <div>
                        <p className="font-semibold text-green-700">{t.name}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(t.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <ArrowUpRight className="text-green-600 w-5 h-5" />
                        <p className="text-green-700 font-bold">
                          ₹{t.amount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Expense Transactions */}
              <div className="bg-red-50 p-5 rounded-xl shadow-md h-[400px] overflow-y-auto border-2 ">
                <h3 className="text-xl font-semibold mb-3 text-red-700 ">
                  Recent Expenses
                </h3>
                {expenseTransactions.length === 0 ? (
                  <p className="text-gray-500">No expense transactions</p>
                ) : (
                  expenseTransactions.map((t) => (
                    <div
                      key={t.id}
                      className="flex justify-between items-center bg-white border border-red-100 rounded-lg p-3 mb-3 shadow-sm hover:shadow-md transition"
                    >
                      <div>
                        <p className="font-semibold text-red-700">{t.name}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(t.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <ArrowDownRight className="text-red-600 w-5 h-5" />
                        <p className="text-red-700 font-bold">
                          ₹{t.amount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
