import { useContext } from "react"
import MenuBar from "./MenuBar"
import { AppContext } from "../Context/AppContext"
import SideBar from "./SideBar"

const Dashboard = ({children}) => {
  
    return (    
        <div>
            <MenuBar/>
        
              
              <div className="flex">
                <div className="max-[1080px]:hidden">
                     <SideBar/>
                  
                </div>
                <div className="grow mx-5">
                   {children}
                </div>
              </div>
          

        </div>
    )
}
export default Dashboard