import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h3>Our products to choose:</h3>
      <nav>
        <Link to="jackets">Jackets</Link>
        <Link to="shoes">Shoes</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Products;
