import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { Plus } from "lucide-react";
import { useUser } from "../hook/useUser";
import CategoryList from "../components/CategoryList";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS, BASE_URL } from "../util/apiEndPoint";
import toast from "react-hot-toast";
import CategoryModal from "../components/CategoryModal";

function Category() {
  useUser();

  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [openAddCategoryModal, setOpenCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ✅ Fetch all categories
  const fetchCategoriesDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosConfig.get(API_ENDPOINTS.GET_ALL_CATEGORIES);
      if (response.status === 200) {
        console.log("Categories fetched successfully");
        setCategoryData(response.data);
      }
    } catch (error) {
      console.log("Error fetching categories", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoriesDetails();
  }, []);

  // ✅ Edit Category
  const handleEditCategory = (category) => {
    console.log("Edit category clicked:", category);
    setSelectedCategory(category);
    setOpenCategoryModal(true);
  };

  // ✅ Delete Category
  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      const response = await axiosConfig.delete(
        `${BASE_URL}${API_ENDPOINTS.DELETE_CATEGORY}/${id}`
      );
      if (response.status === 200) {
        toast.success(response.data.message || "Category deleted successfully");
        fetchCategoriesDetails();
      }
    } catch (error) {
      console.log("Error deleting category", error);
      toast.error("Failed to delete category");
    }
  };

  return (
    <div>
      <Dashboard activeMenu="Category">
        <div className="my-5 mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Add Categories</h2>

            <button
              onClick={() => {
                setSelectedCategory(null);
                setOpenCategoryModal(true);
              }}
              className="flex items-center gap-2 text-emerald-900 bg-emerald-50 px-4 py-2 rounded-lg hover:bg-emerald-100"
            >
              <Plus size={24} />
              Add Category
            </button>
          </div>

          {/* ✅ Category List */}
          <CategoryList
            categories={categoryData}
            onEditList={handleEditCategory}
            onDeleteList={handleDeleteCategory}
          />
        </div>
      </Dashboard>

      {/* ✅ Add/Edit Category Modal */}
      <CategoryModal
        open={openAddCategoryModal}
        onClose={() => setOpenCategoryModal(false)}
        onSuccess={fetchCategoriesDetails}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default Category;
