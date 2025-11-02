import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS, BASE_URL } from "../util/apiEndPoint";


function CategoryModal({ open, onClose, onSuccess, selectedCategory }) {
  const [name, setName] = useState("");
  const [type, setType] = useState(""); // ✅ new state for type
  const [loading, setLoading] = useState(false);

  // ✅ Fill data if editing
  useEffect(() => {
    if (selectedCategory) {
      setName(selectedCategory.name || "");
      setType(selectedCategory.type || ""); // prefill existing type
    } else {
      setName("");
      setType("");
    }
  }, [selectedCategory]);

  // ✅ Add or Update category
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Category name is required");
      return;
    }
    if (!type.trim()) {
      toast.error("Please select a category type");
      return;
    }

    setLoading(true);
    try {
      if (selectedCategory) {
        // 🔹 Update category
        const response = await axiosConfig.put(
          `${BASE_URL}${API_ENDPOINTS.UPDATE_CATEGORY}/${selectedCategory.id}`,
          { name, type }
        );
        if (response.status === 200) {
          toast.success("Category updated successfully");
          onSuccess();
          onClose();
        }
      } else {
        // 🔹 Add category
        const response = await axiosConfig.post(
          `${BASE_URL}${API_ENDPOINTS.ADD_CATEGORY}`,
          { name, type }
        );
        if (response.status === 200 || response.status === 201) {
          toast.success("Category added successfully");
          onSuccess();
          onClose();
        }
      }
    } catch (error) {
      console.log("Error saving category:", error);
      toast.error("Failed to save category");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <X size={22} />
        </button>

        <h2 className="text-xl font-semibold mb-4">
          {selectedCategory ? "Edit Category" : "Add Category"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
        
          <div>
  
            <label className="block text-gray-700 font-medium mb-2">
              Category Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Enter category name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* ✅ Category Type Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category Type
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          {/* ✅ Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              {loading
                ? "Saving..."
                : selectedCategory
                ? "Update"
                : "Add Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CategoryModal;
