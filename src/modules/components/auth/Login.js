import { Field, Form, Formik } from "formik";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import * as Yup from "yup";
import loginimg from "../../../assets/images/add-login.png";
import manage from "../../../assets/images/manage.png";
import view from "../../../assets/images/view .png";
import API from "../../../utils/devApi";

const init = {
  name: "",
  email: "",
  password: "",
  rePassword: "",
};

export const Login = ({ login, setLogin, setForgot, setActiveAccount }) => {
  // const userAction = useUserActions();
  const [loading, setLoading] = useState(false);

  const handleClose = () => setLogin(false);

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 6 chars minimum."),
  });

  // login action
  const loginHandle = async (payload) => {
    await API.post("/user/login", payload)
      .then((res) => {
        if (res.status === 200) {
          const { accessToken } = res.data;
          toast.success("Wellcome");
          localStorage.setItem("token", accessToken);
          window.location.href = "/dashboard";
        }
      })
      .catch((error) => {
        if (error.response.data.msg === "Token Sent") {
          Cookies.set("email", payload.email);
          setLogin(false);
          setActiveAccount(true);
        } else {
          toast.error(error.response.data.msg);
        }
      });
  };

  return (
    <Modal
      className="modal fade"
      size="lg"
      id="staticLogin"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      show={login}
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
              onClick={handleClose}
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
                  <Formik
                    initialValues={init}
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      setLoading(true);
                      loginHandle(values);
                      setLoading(false);
                    }}
                  >
                    {({
                      handleSubmit,
                      setFieldValue,
                      values,
                      errors,
                      touched,
                    }) => {
                      return (
                        <Form id="rony" className="needs-validation">
                          <div className="form-floating mb-3">
                            <Field
                              type="email"
                              className="form-control"
                              id="floatingInput"
                              name="email"
                              placeholder="name@example.com"
                              autoComplete="off"
                            />
                            <label htmlFor="floatingInput">Email</label>
                            {errors?.email && touched?.email && (
                              <div className="invalid-feedback">
                                {errors.email}
                              </div>
                            )}
                          </div>
                          <div className="form-floating mb-3">
                            <Field
                              type="password"
                              name="password"
                              className="form-control"
                              id="floatingPassword"
                              placeholder="Password"
                              autoComplete="off"
                            />
                            <label htmlFor="floatingPassword">Password</label>
                            {errors?.password && touched?.password && (
                              <div className="invalid-feedback">
                                {errors.password}
                              </div>
                            )}
                          </div>
                          <button
                            className="me-2"
                            disabled={loading}
                            onClick={() => {
                              handleSubmit();
                            }}
                            type="button"
                          >
                            login
                          </button>

                          <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#staticForgot"
                            className="ms-2"
                            disabled={loading}
                            onClick={() => {
                              setLogin(false);
                              setForgot(true);
                            }}
                          >
                            Forgot password?
                          </button>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
