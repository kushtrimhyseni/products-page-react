import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/get-products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch products.");
      }
    };

    fetchProducts();
  }, []);

  function formatDate(dateString) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(dateString);
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  return (
    <div className="max-w-screen-lg mx-auto pt-11">
      <div className="flex justify-between items-center">
        <h1>Products</h1>
        <Link to="/" className="text-blue-700 underline">
          Go back to homepage
        </Link>
      </div>
      <ul className="grid grid-cols-3 gap-4 pt-10">
        {products?.map((product) => (
          <li
            key={product.product_id}
            className="bg-gray-200 rounded-md p-4 shadow-md"
          >
            <h2>{product.product_title}</h2>
            <p>{product.product_description}</p>
            <p>Price: ${product.product_price}</p>
            <p>Created at: {formatDate(product.product_created_date)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetProducts;
