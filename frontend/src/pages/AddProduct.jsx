import React, { useState } from "react";
import { Header, Footer } from "../components/layout";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to the backend
    setSuccess(true);
    setName("");
    setPrice("");
    setImage("");
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Product Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g. Mango"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Price
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              placeholder="e.g. 10.99"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Select Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
          >
            Add Product
          </button>
          {success && (
            <div className="text-green-600 text-center font-medium mt-2">
              Product added!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
