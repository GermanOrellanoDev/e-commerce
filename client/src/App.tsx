import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
