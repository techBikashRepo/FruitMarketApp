import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProduct = ({ product, onSave }) => {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [preview, setPreview] = useState(product?.image || "");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    // Here you would send formData to the backend
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    if (onSave) onSave(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
          Edit Product
        </h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Product Name
            </label>
            <input
              name="name"
              type="text"
              defaultValue={product?.name || ""}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              placeholder="e.g. Mango"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Price
            </label>
            <input
              name="price"
              type="number"
              min="0"
              step="0.01"
              defaultValue={product?.price || ""}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              placeholder="e.g. 10.99"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Select Image
            </label>
            <input
              name="image"
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleImageChange}
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 h-24 rounded shadow border mx-auto"
              />
            )}
          </div>
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded transition border border-gray-300"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
          {success && (
            <div className="text-green-600 text-center font-medium mt-2">
              Product updated!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
