import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import { Plus, PlusCircle, PlusIcon, PlusSquareIcon } from 'lucide-react'
import { FaPlus } from 'react-icons/fa'
import { useUser } from '../hook/useUser'
import CategoryList from '../components/CategoryList'

function Category() {
     useUser();
     const[loading,setLoading]=useState(false);
     const[categoryData,setCategoryData]=useState([]);
     const [openAddCategoryModal ,setOpenCategoryModal]=useState(false);
     const [selectedCategory,setSelectedCategory]=useState(null);

     const fetchCategoriesDetails = async()=>{
        if(loading) return;
        setLoading(true);
        try{

        }catch(error){
            console.log("Error fetching categories",error);
        }finally{
            setLoading(false);
        }
     }


    return (
        <div>
             <Dashboard activeMenu="Category">
              <div className='my-5 mx-auto '>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>Add Categories</h2>
                    
                   <button className='flex items-center gap-2 text-emerald-900 bg-emerald-50'>
                   <Plus size={30}/>
                   Add Category
                  </button>
                </div>
                <CategoryList/>
               </div>
              
            </Dashboard>
        </div>
    )
}

export default Category
