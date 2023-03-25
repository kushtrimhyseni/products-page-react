import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            Melhoreapostasesportive
          </div>
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/" className="text-white font-semibold" exact>
                Home
              </Link>
            </li>
            <li>
              <Link to="/newproduct" className="text-white font-semibold">
                Add Product
              </Link>
            </li>
            <li>
              <Link to="/allproducts" className="text-white font-semibold">
                All Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
