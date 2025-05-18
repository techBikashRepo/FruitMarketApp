import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-2xl group border border-green-100">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-t-2xl border-b border-green-100"
      />
      {/* Card Body */}
      <div className="p-4 flex flex-col items-center">
        <h3
          className="text-lg font-bold text-green-800 mb-1 text-center truncate w-full"
          title={product.name}
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-3 w-full mb-2">
          <button
            className="backdrop-blur bg-blue-100/70 hover:bg-blue-200/80 p-2 rounded-full shadow transition"
            title="Edit"
            onClick={() => onEdit && onEdit(product)}
          >
            <FaEdit size={16} className="text-blue-600" />
          </button>
          <span className="inline-block bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full text-sm shadow">
            ₹{product.price}
          </span>
          <button
            className="backdrop-blur bg-red-100/70 hover:bg-red-200/80 p-2 rounded-full shadow transition"
            title="Delete"
            onClick={() => onDelete && onDelete(product)}
          >
            <FaTrash size={16} className="text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
