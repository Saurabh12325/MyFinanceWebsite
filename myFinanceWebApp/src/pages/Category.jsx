import React from 'react'
import Dashboard from '../components/Dashboard'
import { Plus, PlusCircle, PlusIcon, PlusSquareIcon } from 'lucide-react'
import { FaPlus } from 'react-icons/fa'
import { useUser } from '../hook/useUser'
import CategoryList from '../components/CategoryList'

function Category() {
    
    useUser();


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
