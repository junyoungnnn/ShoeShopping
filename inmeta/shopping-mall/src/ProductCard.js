// ProductCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ brand, description, price, img }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/register-card");
  };

  return (
    <div className="product-card">
      <img src={img} alt={`${brand} 신발`} />
      <h2>{brand}</h2>
      <p>{description}</p>
      <p className="price">{price}</p>
      <button onClick={handleAddToCart}>담기</button>
    </div>
  );
};

export default ProductCard;
