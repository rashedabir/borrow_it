/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/devApi";

export const CategoryDetails = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    await API.get(`/api/product/${slug}?limit=16&title[regex]=${search}`).then(
      (res) => {
        if (res.status === 200) {
          setProducts(res.data);
          setLoading(false);
        }
      }
    );
  };

  useEffect(() => {
    if (slug) {
      getProducts();
    }
  }, [slug]);

  return (
    <Fragment>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div id="category_products">
          <div className="container">
            <div className="search_bar">
              <form action="">
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  value={search}
                  onBlur={getProducts}
                  type="text"
                  placeholder="What are you looking for?"
                />
                <button onClick={getProducts} type="button">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div className="row">
              {products &&
                products.length > 0 &&
                products.map((item, i) => (
                  <div className="col-lg-6" key={i}>
                    <Link to={`/product-details/${item?._id}`}>
                      <div className="item">
                        <div className="img">
                          <img src={item?.images[0].url} alt={item?.title} />
                        </div>
                        <div className="text">
                          <h3>{item?.title}</h3>
                          <p>
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            {item?.division}
                            {item?.state && ","} {item?.state}
                          </p>
                          <h4 className="price">
                            {item?.price} <span>Tk/day</span>
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CategoryDetails;
