import React from "react";
import ProductForm from "../components/AddProductForm";
import { Link } from "react-router-dom";
const AddProduct = () => {
  return (
    <div>
      <Link to="/" className="text-blue-700 underline mt-4">
        Go back to homepage
      </Link>
      <ProductForm />
    </div>
  );
};

export default AddProduct;
