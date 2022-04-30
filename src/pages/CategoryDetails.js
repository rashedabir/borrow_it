import React from "react";
import image from "../assets/images/watch.jpg";
import products from "../assets/fakeData/products.json";
import { Link } from "react-router-dom";

export const CategoryDetails = () => {
  return (
    <div id="category_products">
      <div className="container">
        <div className="search_bar">
          <form action="">
            <input type="text" placeholder="What are you looking for?" />
            <button type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className="row">
          {products &&
            products.length > 0 &&
            products.map((item, i) => (
              <div className="col-lg-6" key={i}>
                <Link to={`/product-details/${i}`}>
                  <div className="item">
                    <div className="img">
                      <img src={image} alt="" />
                    </div>
                    <div className="text">
                      <h3>{item.name}</h3>
                      <p>
                        <i className="fa-solid fa-location-dot"></i>{" "}
                        {item.state},{item.city}
                      </p>
                      <h4 className="price">
                        {item.price} <span>Tk/day</span>
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
