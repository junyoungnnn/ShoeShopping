import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CardList.css";

const CardList = () => {
  const [cardData, setCardData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCardData = localStorage.getItem("cardData");
    if (storedCardData) {
      setCardData(JSON.parse(storedCardData));
    }
  }, []);

  const handleAddNewCard = () => {
    navigate("/register-card");
  };

  return (
    <div className="card-list-container">
      <h1>보유카드</h1>
      {cardData ? (
        <div className="saved-card">
          <div className="card">
            <p>{cardData.cardNumber}</p>
            <p>{cardData.cardHolderName}</p>
            <p>{cardData.expiryDate}</p>
          </div>
          <button className="use-card-button">이 카드로 결제하기</button>
        </div>
      ) : (
        <p>등록된 카드가 없습니다.</p>
      )}
      <div className="add-new-card" onClick={handleAddNewCard}>
        <div className="add-card-icon">+</div>
      </div>
    </div>
  );
};

export default CardList;
