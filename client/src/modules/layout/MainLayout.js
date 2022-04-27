import React from "react";
import {
  Footer,
  ForgotPassword,
  Login,
  Navbar,
  Registration,
  VarifyPassword,
} from "../components";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Registration />
      <Login />
      <ForgotPassword />
      <VarifyPassword />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
