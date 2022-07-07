import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  let navigate = useNavigate();

  return (
    <div>
      <h2>About</h2>

      <button onClick={() => navigate('/order-summary')}>Confirm your order</button>
    </div>
  );
}

export default About;
