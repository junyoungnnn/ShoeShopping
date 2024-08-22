import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CardRegistration.css";

const CardRegistration = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cvv, setCvv] = useState("");
  const [password1, setPassword1] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const cardData = {
      cardNumber,
      expiryDate,
      cardHolderName,
      cvv,
      password1,
    };
    localStorage.setItem("cardData", JSON.stringify(cardData));
    navigate("/cards"); // 카드 등록 후 카드 목록 페이지로 이동
  };

  return (
    <div className="card-registration-container">
      <div className="card-preview">
        <div className="card">
          <p>{cardNumber || "#### #### #### ####"}</p>
          <p>{cardHolderName || "NAME"}</p>
          <p>{expiryDate || "MM/YY"}</p>
        </div>
      </div>
      <input
        type="text"
        placeholder="카드 번호"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="만료일 (MM/YY)"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="카드 소유자 이름"
        value={cardHolderName}
        onChange={(e) => setCardHolderName(e.target.value)}
      />
      <input
        type="password"
        placeholder="보안 코드(CVC/CVV)"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <div className="password-input">
        <input
          type="password"
          placeholder="보안번호 두자리"
          maxLength="2"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <span className="password-placeholder">**</span>
      </div>
      <button onClick={handleSubmit}>작성 완료</button>
    </div>
  );
};

export default CardRegistration;
