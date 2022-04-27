import React from "react";
import image from "../assets/images/watch.jpg";

export const Dashboard = () => {
  return (
    <section id="post_part">
      <div className="container">
        <div className="item">
          <div className="row">
            <div className="col-lg-4">
              <h2>Account Holder Name</h2>
              <div className="add_post_btn">
                <a href="my_post_ad.html">Post your ad now!</a>
              </div>
            </div>

            <div className="col-lg-8">
              <h3>My Post</h3>
              <a href="product_details.html" className="post_item_link">
                <div className="post_item">
                  <div className="img">
                    <img src={image} alt="" />
                  </div>
                  <div className="text">
                    <h3>Diesel hand watch</h3>
                    <p>
                      <i className="fa-solid fa-location-dot"></i> Dhaka, Uttara
                    </p>
                    <h4 className="price">
                      150 <span>Tk/day</span>
                    </h4>
                  </div>
                  <div className="delete_btn">
                    <button>Delete Ad ??</button>
                  </div>
                </div>
              </a>
              <a href="product_details.html" className="post_item_link">
                <div className="post_item">
                  <div className="img">
                    <img src={image} alt="" />
                  </div>
                  <div className="text">
                    <h3>Diesel hand watch</h3>
                    <p>
                      <i className="fa-solid fa-location-dot"></i> Dhaka, Uttara
                    </p>
                    <h4 className="price">
                      150 <span>Tk/day</span>
                    </h4>
                  </div>
                  <div className="delete_btn">
                    <button>Delete Ad ??</button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
