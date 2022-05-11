import React, { useState } from "react";
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
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [verify, setVerify] = useState(false);
  const [newPass, setNewPass] = useState(false);

  return (
    <div>
      <Navbar setLogin={setLogin} setRegister={setRegister} />
      <Registration register={register} setRegister={setRegister} />
      <Login login={login} setLogin={setLogin} setForgot={setForgot} />
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
