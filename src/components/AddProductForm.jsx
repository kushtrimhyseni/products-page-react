import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/add-product", {
        product_title: productTitle,
        product_description: productDescription,
        product_price: productPrice,
      });

      alert("Product added successfully.");
      setProductTitle("");
      setProductDescription("");
      setProductPrice("");
    } catch (error) {
      console.error(error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="max-w-screen-md mx-auto pt-11">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-4">Shto produkte</h1>
        <label>
          Titulli:
          <input
            className="bg-gray-50 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Titulli i produktit"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Pershkrimi:
          <textarea
            rows="4"
            className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Pershkrimi i produktit"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Cmimi:
          <input
            placeholder="Cmimi i produktit"
            className="bg-gray-50 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:ring-blue-500 focus:border-blue-500"
            type="number"
            step="0.01"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
        >
          Shto produkt
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
