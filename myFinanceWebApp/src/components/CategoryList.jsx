import React from 'react';
import { Edit2, Layers2, Pencil, Trash2 } from 'lucide-react'; // Optional icons for edit/delete

const CategoryList = ({ categories, onEditList, onDeleteList }) => {
  return (
    <div className="card p-4  shadow-xl ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">Category Sources</h4>
      </div>

      {/* If no categories */}
      {categories.length === 0 ? (
        <p className="text-gray-500">
          No categories added yet. Add some to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border p-4 rounded-lg shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-400"
            >
              {/* Icon Section */}
              <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full">
                {category.icon ? (
                  <span className='text-2xl'>
                   <img
                    src={category.icon}
                    alt={category.name}
                    className="w-5 h-5 "
                  />
                  </span>
                
                ) : (
                  <Layers2 size={24} className='text-purple-800' />
                )}
              </div>

              {/* Category Name */}
              <div className="flex-1 ml-4">
                <h5 className="font-semibold">{category.name}</h5>
                <p className="text-sm text-gray-500">{category.type}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => onEditList(category)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => onDeleteList(category.id)}
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

export default CategoryList;
