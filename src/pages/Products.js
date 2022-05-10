/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useProductActions } from "../_recoil/actions";
import { productAtom } from "../_recoil/state";

export const Products = () => {
  const products = useRecoilValue(productAtom);
  const setProduct = useSetRecoilState(productAtom);
  const productActions = useProductActions();

  useEffect(() => {
    productActions.getProduct();
  }, []);

  return (
    <Fragment>
      <div id="category_products">
        <div className="container">
          <div className="search_bar">
            <form action="">
              <input
                value={products?.search ?? ""}
                onChange={(e) => {
                  setProduct((prev) => ({
                    ...prev,
                    search: e.target.value,
                  }));
                }}
                type="text"
                placeholder="What are you looking for?"
              />
              <button
                onClick={() => {
                  productActions.getProduct();
                }}
                type="button"
              >
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
