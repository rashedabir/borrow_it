import Cookies from "js-cookie";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import API from "../../../utils/devApi";
import { swalError } from "../../../utils/swal";
import loginimg from "../../../assets/images/add-login.png";
import view from "../../../assets/images/view .png";
import manage from "../../../assets/images/manage.png";
import { toast } from "react-toastify";

export const ActiveAccount = ({ activeAccount, setActiveAccount }) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const email = Cookies.get("email");

  const handleClose = () => {
    setActiveAccount(false);
    Cookies.remove("email");
  };

  const handleSubmit = async () => {
    setLoading(true);
    await API.post("/user/account-active", {
      token: parseInt(token),
      email: email,
    })
      .then((res) => {
        if (res.status === 200) {
          const { accessToken } = res.data;
          setLoading(false);
          setActiveAccount(false);
          Cookies.remove("email");
          toast.success("Wellcome");
          localStorage.setItem("token", accessToken);
          window.location.href = "/dashboard";
        }
      })
      .catch((error) => {
        swalError(error.response.data.msg);
        setLoading(false);
      });
    setLoading(false);
  };

  return (
    <Modal
      size="lg"
      show={activeAccount}
      className="modal fade"
      id="vefirify_pass_code"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      onHide={handleClose}
    >
      <div id="login_modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>
              Welcome to <span>Borrow it</span>
            </h3>
            <p>Log in to manage your account.</p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                Cookies.set("email", "");
                setActiveAccount(false);
              }}
              disabled={loading}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-5">
                <ul>
                  <li>
                    <img src={loginimg} alt="" />
                    Start posting your own ads.
                  </li>
                  <li>
                    <img src={view} alt="" />
                    Mark ads as favorite and view them later.
                  </li>
                  <li>
                    <img src={manage} alt="" />
                    View and manage your ads at your convenience.
                  </li>
                </ul>
              </div>
              <div className="col-lg-7">
                <div id="reg_input">
                  <form action="#" id="rony">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => {
                          setToken(e.target.value);
                        }}
                      />
                      <label htmlFor="floatingInput">Enter Your Code</label>
                    </div>

                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#set_forgot_password"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ActiveAccount;
