import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black via-black  to-emerald-500  text-white p-4 shadow-md">
      <ul className="flex space-x-6">
        <li>
          <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
        </li>
        <li>
          <Link to="/income" className="hover:text-yellow-300">Income</Link>
        </li>
        <li>
          <Link to="/expense" className="hover:text-yellow-300">Expense</Link>
        </li>
        <li>
          <Link to="/filter" className="hover:text-yellow-300">Filter</Link>
        </li>
        <li>
          <Link to="/category" className="hover:text-yellow-300">Category</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-yellow-300">Login</Link>
        </li>
        <li>
          <Link to="/signUp" className="hover:text-yellow-300">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
