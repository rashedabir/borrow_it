/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import MainLayout from "./modules/layout/MainLayout";
import {
  CategoryDetails,
  CreateEditPost,
  Dashboard,
  Home,
  NotFound,
  Privacy,
  ProductDetails,
  SafetyTips,
  Terms,
} from "./pages";
import { useUserActions } from "./_recoil/actions";
import { authAtom } from "./_recoil/state";
import "./App.css";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  const userAction = useUserActions();
  const profileInfo = useRecoilValue(authAtom);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      userAction.getProfile();
    }
  }, [token]);

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-&-condition" element={<Terms />} />
          <Route path="/privacy-&-policy" element={<Privacy />} />
          <Route path="/stay-safety" element={<SafetyTips />} />
          <Route
            path="/dashboard"
            element={profileInfo ? <Dashboard /> : <NotFound />}
          />
          <Route
            path="/create-post"
            element={profileInfo ? <CreateEditPost /> : <NotFound />}
          />
          <Route
            path="/product-details/:product_id"
            element={<ProductDetails />}
          />
          <Route path="/category-details/:slug" element={<CategoryDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
