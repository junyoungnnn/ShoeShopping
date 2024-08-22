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

  // 모든 입력값이 채워졌는지 확인하는 함수
  const isFormValid = () => {
    return (
      cardNumber.length === 16 &&
      expiryDate.length === 4 &&
      cardHolderName.length > 0 &&
      cvv.length === 3 &&
      password1.length === 2
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      const cardData = {
        cardNumber,
        expiryDate,
        cardHolderName,
        cvv,
        password1,
      };
      localStorage.setItem("cardData", JSON.stringify(cardData));
      navigate("/cards"); // 카드 등록 후 카드 목록 페이지로 이동
    } else {
      alert("모든 필드를 정확히 입력해 주세요.");
    }
  };

  // 숫자 입력만 허용하는 핸들러
  const handleNumericInput = (e, setter, maxLength) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= maxLength) {
      setter(value);
    }
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
          onChange={(e) => handleNumericInput(e, setCardNumber, 16)}
        />
        <label>만료일 (MM/YY)</label>
        <input
          type="text"
          placeholder="만료일 (MM/YY)"
          value={expiryDate}
          onChange={(e) => handleNumericInput(e, setExpiryDate, 4)}
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
          onChange={(e) => handleNumericInput(e, setCvv, 3)}
        />
        <label>보안번호</label>
        <div className="password-input">
          <input
            type="password"
            placeholder="보안번호 두자리"
            value={password1}
            onChange={(e) => handleNumericInput(e, setPassword1, 2)}
          />
          <span className="password-placeholder">**</span>
        </div>
        <button onClick={handleSubmit}>작성 완료</button>
      </div>
    </div>
  );
};

export default CardRegistration;
