import { Coins, Filter, LayoutDashboard, List, Wallet } from "lucide-react";

export const SIDE_BAR_DATA = [
{
    id:"01",
    label:"Dashboard",
    icon:LayoutDashboard,
    path:"/root/dashboard"
},
{
    id:"02",
    label:"Category",
    icon:List,
    path:"/root/category"
},
{
    id:"03",
    label:"Income",
    icon:Wallet,
    path:"/root/income"
},
{
    id:"04",
    label:"Expense",
    icon:Coins,
    path:"/root/expense"
},
{
    id:"05",
    label:"Filter",
    icon:Filter,
    path:"/root/filter"
},
]