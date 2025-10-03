import { useContext } from "react"
import MenuBar from "./MenuBar"
import { AppContext } from "../Context/AppContext"
import SideBar from "./SideBar"

const Dashboard = ({children,activeMenu}) => {
  const {user} = useContext(AppContext)
  
    return (    
        <div>
            <MenuBar activeMenu={activeMenu}/>
        {user &&  
         <div className="flex">
                <div className="max-[1080px]:hidden">
                     <SideBar activeMenu={activeMenu}/>
                  
                </div>
                <div className="grow mx-5">
                   {children}
                </div>
              </div>}
              
           
          

        </div>
    )
}
export default Dashboard