import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./modules/layout/MainLayout";
import {
  CategoryDetails,
  CreateEditPost,
  Dashboard,
  Home,
  Privacy,
  ProductDetails,
  SafetyTips,
  Terms,
} from "./pages";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms-&-condition" element={<Terms />} />
            <Route path="/privacy-&-policy" element={<Privacy />} />
            <Route path="/stay-safety" element={<SafetyTips />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-post" element={<CreateEditPost />} />
            <Route
              path="/product-details/:product_id"
              element={<ProductDetails />}
            />
            <Route
              path="/category-details/:category_id"
              element={<CategoryDetails />}
            />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
