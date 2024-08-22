import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

  const maskedCardNumber = cardNumber
    ? `${cardNumber.slice(0, 8)} **** ****`
    : "#### #### #### ####";

  return (
    <div className="card-registration-container">
      <header className="header">
        <h1>카드 등록</h1>
        <Link to="/" className="home-button">
          Home
        </Link>
      </header>
      <div className="form-container">
        <div className="card-preview">
          <div className="card">
            <p className="card-number">{maskedCardNumber}</p>
            <p className="card-holder">{cardHolderName || "NAME"}</p>
            <p className="card-expiry">{expiryDate || "MM/YY"}</p>
          </div>
        </div>
        <label>카드번호</label>
        <input
          type="text"
          placeholder="카드 번호"
          value={cardNumber}
          maxLength={16}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <label>만료일 (MM/YY)</label>
        <input
          type="text"
          placeholder="만료일 (MM/YY)"
          value={expiryDate}
          maxLength={4}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <label>카드 소유자 이름</label>
        <input
          type="text"
          placeholder="카드 소유자 이름"
          value={cardHolderName}
          onChange={(e) => setCardHolderName(e.target.value)}
        />
        <label>보안 코드(CVC/CVV)</label>
        <input
          type="password"
          placeholder="보안 코드(CVC/CVV)"
          value={cvv}
          maxLength={3}
          onChange={(e) => setCvv(e.target.value)}
        />
        <label>보안번호</label>
        <div className="password-input">
          <input
            type="password"
            placeholder="보안번호 두자리"
            maxLength={2}
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          <span className="password-placeholder">**</span>
        </div>
        <button onClick={handleSubmit}>작성 완료</button>
      </div>
    </div>
  );
};

export default CardRegistration;
