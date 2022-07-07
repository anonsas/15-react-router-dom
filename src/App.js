import React from 'react';
import './App.css';
import {
  Navbar,
  Home,
  About,
  OrderSummary,
  Products,
  Jackets,
  Shoes,
  Users,
  User,
  NotFound,
} from './components/index';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />

        <Route path="products" element={<Products />}>
          <Route index element={<Jackets />} />
          <Route path="jackets" element={<Jackets />} />
          <Route path="shoes" element={<Shoes />} />
        </Route>

        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<User />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
