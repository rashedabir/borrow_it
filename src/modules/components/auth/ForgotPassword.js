import React, { useState } from "react";
import { toast } from "react-toastify";
import API from "../../../utils/devApi";
import Cookies from "js-cookie";
import { Modal } from "react-bootstrap";
import loginimg from "../../../assets/images/add-login.png";
import view from "../../../assets/images/view .png";
import manage from "../../../assets/images/manage.png";

export const ForgotPassword = ({ setForgot, forgot, setVerify }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setForgot(false);
    Cookies.remove("email");
  };

  const handleSubmit = async () => {
    setLoading(true);
    await API.patch("/user/generate-token", {
      email: email,
    })
      .then((res) => {
        if (res.status === 200) {
          Cookies.set("email", email);
          setForgot(false);
          setVerify(true);
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
        setLoading(false);
      });
    setLoading(false);
  };

  return (
    <Modal
      show={forgot}
      className="modal fade"
      id="staticForgot"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      onHide={handleClose}
      size="lg"
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
              onClick={handleClose}
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
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        value={email}
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email</label>
                    </div>

                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#vefirify_pass_code"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      Submit
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

export default ForgotPassword;
