import { useContext } from "react"
import MenuBar from "./MenuBar"
import { AppContext } from "../Context/AppContext"
import SideBar from "./SideBar"

const Dashboard = () => {
    const {user} = useContext(AppContext)
    return (    
        <div>
            <MenuBar/>
            {user && (
              
              <div className="flex">
                <div className="max-[1080px]:hidden">
                     <SideBar/>
                  
                </div>
                <div className="grow mx-5">
                    right side bar
                </div>
              </div>
            )}

        </div>
    )
}
export default Dashboard