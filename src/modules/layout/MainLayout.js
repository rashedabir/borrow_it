import React, { useState } from "react";
import {
  ActiveAccount,
  Footer,
  ForgotPassword,
  Login,
  Navbar,
  Registration,
  SetNewPassword,
  VarifyPassword,
} from "../components";

const MainLayout = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [verify, setVerify] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [activeAccount, setActiveAccount] = useState(false);

  return (
    <div>
      <Navbar setLogin={setLogin} setRegister={setRegister} />
      <Registration
        setActiveAccount={setActiveAccount}
        register={register}
        setRegister={setRegister}
      />
      <Login
        setActiveAccount={setActiveAccount}
        login={login}
        setLogin={setLogin}
        setForgot={setForgot}
      />
      <ForgotPassword
        forgot={forgot}
        setForgot={setForgot}
        setVerify={setVerify}
      />
      <VarifyPassword
        verify={verify}
        setVerify={setVerify}
        setNewPass={setNewPass}
      />
      <ActiveAccount
        activeAccount={activeAccount}
        setActiveAccount={setActiveAccount}
      />
      <SetNewPassword
        setNewPass={setNewPass}
        newPass={newPass}
        setLogin={setLogin}
      />

      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
