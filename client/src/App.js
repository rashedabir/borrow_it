import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Footer,
  ForgotPassword,
  Login,
  Navbar,
  Registration,
  VarifyPassword,
} from "./modules/components";
import { CategoryDetails, Home, Privacy, ProductDetails, Terms } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Registration />
        <Login />
        <ForgotPassword />
        <VarifyPassword />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-&-condition" element={<Terms />} />
          <Route path="/privacy-&-policy" element={<Privacy />} />
          <Route
            path="/product-details/:product_id"
            element={<ProductDetails />}
          />
          <Route
            path="/category-details/:category_id"
            element={<CategoryDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
