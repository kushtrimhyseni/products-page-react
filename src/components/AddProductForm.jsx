import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_title", productTitle);
    formData.append("product_description", productDescription);
    formData.append("product_price", productPrice);
    if (productImage) {
      formData.append("product_image", productImage);
    }

    try {
      await axios.post(
        "http://localhost:3001/api/products/add-product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product added successfully.");
      setProductTitle("");
      setProductDescription("");
      setProductPrice("");
      setProductImage(null);
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
        <label>
          Foto:
          <input
            className="bg-gray-50 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:ring-blue-500 focus:border-blue-500"
            type="file"
            onChange={(e) => setProductImage(e.target.files[0])}
            accept="image/*"
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
