// import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import UserPage from "./pages/Admin/UserPage";
import CategoryPage from "./pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/Admin/Categories/UpdateCategoryPage";
import CreatecategoryPage from "./pages/Admin/Categories/CreatecategoryPage";
import CreateProductPage from "./pages/Admin/Products/CreateProductPage";
import UpdateProductPage from "./pages/Admin/Products/UpdateProductPage";
import ProductPage from "./pages/Admin/Products/ProductPage";
import CouponPage from "./pages/Admin/Coupons/CouponPage";
import CreateCouponPage from "./pages/Admin/Coupons/CreateCouponPage";
import UpdateCouponPage from "./pages/Admin/Coupons/UpdateCouponPage";
import Success from "./pages/Success";
import OrderPage from "./pages/Admin/OrderPage";
import DashboardPage from "./pages/Admin/DashboardPage";


import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/success" element={<Success />} />

      <Route path="/admin/*">
      <Route index element={<DashboardPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="categories/create" element={<CreatecategoryPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
        <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
        <Route path="orders" element={<OrderPage />} />
      </Route>
    </Routes>
  );
}
export default App;