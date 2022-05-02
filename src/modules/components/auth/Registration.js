/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useUserActions } from "../../../_recoil/actions";
import login from "../../../assets/images/add-login.png";
import view from "../../../assets/images/view .png";
import manage from "../../../assets/images/manage.png";

const init = {
  name: "",
  email: "",
  password: "",
  rePassword: "",
};

export const Registration = () => {
  const userAction = useUserActions();
  const [loading, setLoading] = useState(false);

  // Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    rePassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" id="login_modal">
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
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-5">
                <ul>
                  <li>
                    <img src={login} alt="" />
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
                      userAction.registation(values);
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
                              type="text"
                              className="form-control"
                              id="validationCustom01"
                              name="name"
                              placeholder="Name"
                              autoComplete="off"
                            />
                            {errors?.name && touched?.name && (
                              <div className="invalid-feedback">
                                {errors.name}
                              </div>
                            )}
                            <label htmlFor="floatingInput">Name</label>
                          </div>

                          <div className="form-floating mb-3">
                            <Field
                              type="email"
                              name="email"
                              className="form-control"
                              id="floatingInput"
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
                            {errors?.password && touched?.password && (
                              <div className="invalid-feedback">
                                {errors.password}
                              </div>
                            )}
                            <label htmlFor="floatingPassword">Password</label>
                          </div>
                          <div className="form-floating">
                            <Field
                              type="password"
                              name="rePassword"
                              className="form-control"
                              id="floatingPassword"
                              placeholder="Password"
                              autoComplete="off"
                            />
                            {errors?.rePassword && touched?.rePassword && (
                              <div className="invalid-feedback">
                                {errors.rePassword}
                              </div>
                            )}
                            <label htmlFor="floatingPassword">
                              Confirm password
                            </label>
                          </div>
                          <button
                            onClick={() => {
                              handleSubmit();
                            }}
                            type="button"
                            disabled={loading}
                          >
                            Sign up
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
    </div>
  );
};

export default Registration;
