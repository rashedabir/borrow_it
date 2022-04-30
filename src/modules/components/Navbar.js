import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      id="main_menu"
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <div className="container">
        <Link className="navbar-brand main_logo" to={"/"}>
          Borrow it
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/privacy-&-policy"
                href="privacy_policy.html"
              >
                Privacy
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>
          </ul>

          <div
            className="menu_btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-user-plus"></i> sign up
          </div>
          <div
            className="menu_btn menu_btn2"
            data-bs-toggle="modal"
            data-bs-target="#staticLogin"
          >
            <i className="fa-solid fa-right-to-bracket"></i> Log in
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
