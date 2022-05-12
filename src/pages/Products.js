/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useQuery } from "../utils";
import { useProductActions } from "../_recoil/actions";
import { productAtom } from "../_recoil/state";

export const Products = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const products = useRecoilValue(productAtom);
  const productActions = useProductActions();

  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    if (search.length > 0) {
      navigate(`/products?name=${search}`);
    }
  };

  useEffect(() => {
    productActions.getProduct(query.get("name"));
  }, [query.get("name")]);

  return (
    <Fragment>
      <div id="category_products">
        <div className="container">
          <div className="search_bar">
            <form>
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                placeholder="What are you looking for?"
              />
              <button onClick={handleSubmit} type="button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className="row">
            {products &&
              products?.products?.length > 0 &&
              products?.products?.map((item, i) => (
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
    </Fragment>
  );
};

export default Products;
