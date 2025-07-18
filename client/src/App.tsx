import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import OrdersPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import VerifyPage from "./pages/Verify";
import Navbar from "./components/common/Navbar";
import { Toaster } from "sonner";
import { useProducts } from "./hooks/useProducts";

const App: React.FC = () => {
  const { products, loading, filterByName } = useProducts();

  return (
    <>
      <Router>
        <Navbar onSearch={filterByName} />
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route
            path="/products"
            element={<ProductsPage products={products} loading={loading} />}
          />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify" element={<VerifyPage />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
