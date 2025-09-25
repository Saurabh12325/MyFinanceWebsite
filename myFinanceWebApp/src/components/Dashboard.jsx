import { useContext } from "react"
import MenuBar from "./MenuBar"
import { AppContext } from "../Context/AppContext"

const Dashboard = () => {
    const {user} = useContext(AppContext)
    return (    
        <div>
            <MenuBar/>

        </div>
    )
}
export default Dashboard