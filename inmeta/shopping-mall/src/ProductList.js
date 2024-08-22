import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./ProductList.css";

const products = [
  {
    id: 1,
    brand: "브랜드A",
    description: "편안하며 착용감이 좋은 신발",
    price: "35,000원",
    img: `${process.env.PUBLIC_URL}/shoe1.png`,
  },
  {
    id: 2,
    brand: "브랜드A",
    description: "밝은 컬러가 매력적인 신발",
    price: "25,000원",
    img: `${process.env.PUBLIC_URL}/shoe2.png`,
  },
  {
    id: 3,
    brand: "브랜드B",
    description: "편안하며 착용감이 좋은 신발",
    price: "35,000원",
    img: `${process.env.PUBLIC_URL}/shoe3.png`,
  },
  {
    id: 4,
    brand: "브랜드B",
    description: "밝은 컬러가 매력적인 신발",
    price: "35,000원",
    img: `${process.env.PUBLIC_URL}/shoe4.png`,
  },
  {
    id: 5,
    brand: "브랜드C",
    description: "편안하며 착용감이 좋은 신발",
    price: "35,000원",
    img: `${process.env.PUBLIC_URL}/shoe5.png`,
  },
  {
    id: 6,
    brand: "브랜드C",
    description: "밝은 컬러가 매력적인 신발",
    price: "35,000원",
    img: `${process.env.PUBLIC_URL}/shoe6.png`,
  },
];

const ProductList = () => {
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="product-list">
      <div className="header">
        <h1>신발 상품 목록</h1>
        <button className="cart-button" onClick={handleCartClick}>
          장바구니로 이동
        </button>
      </div>
      <p>현재 {products.length}개의 상품이 있습니다.</p>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.description} />
            <h2>{product.brand}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button onClick={() => addItemToCart(product)}>담기</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
