import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        
     <div className="navbar bg-gray-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <h2 className="btn btn-ghost text-2xl font-bold">Gadget Shop</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex gap-2 items-center">
    <Link to="/login">
    <button className="btn bg-gray-700 border-gray-900 text-white px-4 rounded-md">
        Login
     </button>
    </Link>
     <Link to="/register">
     <button className="btn bg-gray-600 border-gray-900 text-white px-4 rounded-md">
        Register
     </button>
     </Link>
    </div>
  </div>
</div>
        
    );
};

export default Navbar;