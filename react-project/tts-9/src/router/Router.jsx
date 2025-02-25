import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../ui/pages/common/Home/Home";
import Footer from "../ui/component/Footer/Footer";
import Error404 from "../ui/pages/Error404/Error404";
import SignUp from "../ui/pages/common/SignUp/SignUp";
import Header from "../ui/component/Header/Header";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "../redux/app/store";
import Login from "../ui/pages/common/Login/Login";
import Dashboard from "../ui/pages/admin/Dashboard/Dashboard";
import Profile from "../ui/pages/common/Profile/Profile";
import Product from "../ui/pages/admin/Product/Product";
import MenShose from "../ui/pages/user/MenShose";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="" element={<Home />} />

            {/* --------Common--------- */}
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />

            {/* --------Admin-------- */}

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-product" element={<Product />} />

            {/* --------Error-------- */}
            <Route path="*" element={<Error404 />} />

            {/* --------User-------- */}
            <Route path="/men-shose" element={<MenShose />} />data
          </Routes>
          <Footer />
          <ToastContainer />
        </Provider>
      </BrowserRouter>
    </>
  );
}
