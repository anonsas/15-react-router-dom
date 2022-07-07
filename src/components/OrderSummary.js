import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSummary() {
  let navigate = useNavigate();

  return (
    <div>
      <h3>Your order is complete!</h3>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default OrderSummary;
