/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import login from "../../../assets/images/add-login.png";
import view from "../../../assets/images/view .png";
import manage from "../../../assets/images/manage.png";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import useUserActions from "../../../_recoil/actions/auth.actions";

const init = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const SetNewPassword = () => {
  const userAction = useUserActions();
  const [loading, setLoading] = useState(false);

  // Validation schema
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current Password is required"),
    newPassword: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Passwords must match"
    ),
  });
  return (
    <div
      className="modal fade"
      id="new_pass_start"
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
            <p>Change Password to Manage Your Account.</p>
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
                    onSubmit={(values, action) => {
                      setLoading(true);
                      userAction.changePassword(values, action);
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
                        <Form action="#" id="rony">
                          <div className="form-floating mb-3">
                            <Field
                              type="password"
                              name="currentPassword"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput">
                              Enter Your Current Password
                            </label>
                            {errors?.currentPassword &&
                              touched?.currentPassword && (
                                <div className="invalid-feedback">
                                  {errors.currentPassword}
                                </div>
                              )}
                          </div>
                          <div className="form-floating mb-3">
                            <Field
                              type="password"
                              name="newPassword"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput">
                              Enter Your New Password
                            </label>
                            {errors?.newPassword && touched?.newPassword && (
                              <div className="invalid-feedback">
                                {errors.newPassword}
                              </div>
                            )}
                          </div>
                          <div className="form-floating mb-3">
                            <Field
                              type="password"
                              name="confirmPassword"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput">
                              Confirm New Password
                            </label>
                            {errors?.confirmPassword &&
                              touched?.confirmPassword && (
                                <div className="invalid-feedback">
                                  {errors.confirmPassword}
                                </div>
                              )}
                          </div>
                          <button
                            onClick={() => {
                              handleSubmit();
                            }}
                            disabled={loading}
                            type="button"
                          >
                            Update
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

export default SetNewPassword;
