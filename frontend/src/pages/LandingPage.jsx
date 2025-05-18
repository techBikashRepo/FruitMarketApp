import React from "react";
import { ProductCard } from "../components/product";
import { useNavigate } from "react-router-dom";
import { EditProduct } from "./index";

const products = [
  {
    id: 1,
    name: "Apples",
    image: "../assets/apples.jpg",
    price: 2.99,
  },
  {
    id: 2,
    name: "Oranges",
    image: "../assets/orange.jpg",
    price: 3.49,
  },
  {
    id: 3,
    name: "Pineapple",
    image: "../assets/pineapple.jpg",
    price: 4.99,
  },
  {
    id: 4,
    name: "Bananas",
    image: "../assets/bananas.jpg",
    price: 1.99,
  },
];

const LandingPage = () => {
  const [editProduct, setEditProduct] = React.useState(null);
  const hasProducts = products && products.length > 0;
  const navigate = useNavigate();

  const handleEdit = (product) => {
    navigate(`/edit-product/${product.id}`, { state: { product } });
  };

  const handleEditSave = (formData) => {
    // Here you would update the product in backend or state
    setEditProduct(null);
    // Optionally show a toast or reload products
  };

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-green-50 to-green-200 pb-10">
      <div className="max-w-7xl mx-auto pt-10 px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-2 drop-shadow-lg">
            Welcome to Fruit Market
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium mb-4">
            Fresh, Juicy, and Handpicked Fruits for You
          </p>
        </div>
        {editProduct ? (
          <EditProduct product={editProduct} onSave={handleEditSave} />
        ) : hasProducts ? (
          <div
            id="products"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-3"
          >
            {products.map((product) => (
              <div
                className="hover:scale-105 transition-transform duration-200"
                key={product.id}
              >
                <ProductCard product={product} onEdit={handleEdit} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-2xl font-semibold text-gray-500 mb-6">
              No Products Available
            </div>
            <a
              href="/add-product"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full shadow transition"
            >
              Add Product
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
