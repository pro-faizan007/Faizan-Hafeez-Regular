import React from "react";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

function CardM({
  value: { card_name, card_price, card_duration, card_expiry, src },
}) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/cart");
  };

  return (
    <div className="card-div">
      <h1 className="name">{card_name}</h1>
      <h2 className="price">{card_price}</h2>
      <h3 className="duration">{card_duration}</h3>
      <h4 className="expiry">{card_expiry}</h4>
      <button className="btn" onClick={onClick}>
        add to cart
      </button>

      <img src={src} alt="image" />
    </div>
  );
}
export default CardM;
