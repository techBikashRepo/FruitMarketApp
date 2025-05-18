import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card m-3 custom-card">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top card_image"
      />
      <div className="card-body">
        <h3 className="card-title m-1">{product.name}</h3>
        <button className="btn btn-warning w-100 mt-3">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
