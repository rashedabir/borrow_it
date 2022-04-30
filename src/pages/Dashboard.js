import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import image from "../assets/images/watch.jpg";
import { authAtom } from "../_recoil/state";
import API from "../utils/devApi";

export const Dashboard = () => {
  const profileInfo = useRecoilValue(authAtom);
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // get products
    const getProducts = async () => {
      await API.get("/user/product")
        .then((res) => {
          if (res.status === 200) {
            setProducts(res.data);
            console.log(res);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (token) {
      getProducts();
    }
  }, [token]);

  return (
    <section id="post_part">
      <div className="container">
        <div className="item">
          <div className="row">
            <div className="col-lg-4">
              <h2>{profileInfo?.name}</h2>
              <div className="add_post_btn">
                <Link to="/create-post">Post your ad now!</Link>
              </div>
            </div>

            <div className="col-lg-8">
              <h3>My Post</h3>
              {products &&
                products.length > 0 &&
                products.map((item, i) => (
                  <div className="post_item_link" key={i}>
                    <div className="post_item">
                      <div className="img">
                        <img src={image} alt="" />
                      </div>
                      <div className="text">
                        <h3>Diesel hand watch</h3>
                        <p>
                          <i className="fa-solid fa-location-dot"></i> Dhaka,
                          Uttara
                        </p>
                        <h4 className="price">
                          150 <span>Tk/day</span>
                        </h4>
                      </div>
                      <div className="delete_btn">
                        <button>Delete Ad ??</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
