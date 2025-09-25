import { useContext } from "react"
import MenuBar from "./MenuBar"
import { AppContext } from "../Context/AppContext"

const Dashboard = () => {
    const {user} = useContext(AppContext)
    return (    
        <div>
            <MenuBar/>
            {user && (
              
              <div className="flex">
                <div className="max-[1080px]:hidden">
                     left side bar
                     
                </div>
                <div>
                    right side bar
                </div>
              </div>
            )}

        </div>
    )
}
export default Dashboard