import React from "react";
import {
  Footer,
  ForgotPassword,
  Login,
  Navbar,
  Registration,
  SetNewPassword,
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
      <SetNewPassword />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
