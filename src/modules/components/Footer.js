import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Fragment>
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="item">
                <a className="main_logo" href="!#">
                  Borrow it
                </a>
                <p>
                  Lorem ipsum dolor quis adipisci, similique quod atque dolore
                  voluptate! Atque odio, ipsam debitis earum, fuga qui
                  repudiandae sequi asperiores nostrum velit nam.
                </p>
              </div>
            </div>
            <div className="col-lg-3 link">
              <h3>Follow Borrow it</h3>

              <ul>
                <li>
                  <a href="!#" target="_blank">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="!#" target="_blank">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="!#" target="_blank">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="!#" target="_blank">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 link">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="!#">About Us</a>
                </li>
                <li>
                  <Link to={"/privacy-&-policy"}>Privacy & Policy</Link>
                </li>
                <li>
                  <Link to={"/terms-&-condition"}>Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 contact link">
              <h3>Contact</h3>
              <a href="tel:01629341869">
                <i className="fa-solid fa-phone"></i> 01629341969
              </a>
              <a href="tel:01629341869">
                <i className="fa-solid fa-phone"></i> 01629341869
              </a>
              <a href="mailto:abir@m4yours.com">
                <i className="fa-solid fa-envelope-circle-check"></i>
                abir@m4yours.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="copyright">
        {/*<p>
          Copyright © <a href="!#">Borrow it</a>
        </p>*/}
        <p>
          Developed by © <a href="!#">Rashed Abir</a>
        </p>
      </section>
    </Fragment>
  );
};

export default Footer;
