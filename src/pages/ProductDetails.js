import React, { Fragment, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, useParams } from "react-router-dom";
import status from "../assets/images/project-status.png";
import taka from "../assets/images/taka.png";
import API from "../utils/devApi";

export const ProductDetails = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // get single product details
    const getDetails = async () => {
      setLoading(true);
      await API.get(`/api/product-details/${product_id}`).then((res) => {
        if (res.status === 200) {
          setProduct(res?.data);
          setLoading(false);
        }
      });
    };
    if (product_id) {
      getDetails();
    }
  }, [product_id]);

  return (
    <Fragment>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <section id="product_details">
          <div className="container">
            <div className="product_details_title">
              <h3>{product?.title}</h3>
              <p>
                <i className="fa-solid fa-location-dot"></i> {product?.division}
                {product?.state && ","} {product?.state}
              </p>
            </div>
            <div className="row">
              <div className="col-lg-8">
                {product?.images && (
                  <Carousel>
                    {product?.images &&
                      product?.images?.length > 0 &&
                      product?.images?.map((item, i) => (
                        <div className="item" key={i}>
                          <img src={item?.url} alt="" />
                        </div>
                      ))}
                  </Carousel>
                )}

                <div className="item_details_condition">
                  <div className="model_condition">
                    <p>
                      Condition: <span>{product?.condition}</span>
                    </p>
                    <p>
                      Model: <span>{product?.model}</span>
                    </p>
                    <p>
                      Authenticity: <span>{product?.authenticity}</span>
                    </p>
                  </div>

                  <div className="description">
                    <h3>description</h3>

                    <p>{product?.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="information">
                  <div className="pricing">
                    <h3>Product Rent</h3>
                    <ul>
                      <li>
                        <div className="img">
                          <img src={taka} alt="" />
                        </div>
                        <p>
                          Cost
                          <span> {product?.price} Tk/day</span>
                        </p>
                      </li>

                      <li>
                        <div className="img">
                          <img src={taka} alt="" />
                        </div>
                        <p>
                          Damage Waiver
                          <span> {product?.damageWaiver} Tk</span>
                        </p>
                      </li>

                      <li>
                        <div className="img">
                          <img src={status} alt="" />
                        </div>
                        <p>
                          Status
                          <span>Available</span>
                        </p>
                      </li>
                    </ul>

                    <ul className="call_seller">
                      <p>
                        <i className="fa-solid fa-phone"></i> Call Seller
                      </p>
                      <li>
                        <a href={`tel:0${product?.phone1}`}>
                          0{product?.phone1}
                        </a>
                      </li>
                      {product?.phone2 && (
                        <li>
                          <a href={`tel:0${product?.phone2}`}>
                            0{product?.phone2}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="Safety_tips">
                    <p>
                      <i className="fa-solid fa-lock"></i> Safety tips
                    </p>

                    <ul>
                      <li>Avoid offers that look unrealistic</li>
                      <li>Chat with seller to clarify item details</li>
                      <li>Meet in a safe & public place</li>
                      <li>Check the item before buying it</li>
                      <li>Don’t pay in advance</li>
                      <li className="link">
                        <Link to={"/stay-safety"}>See all safety tips</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default ProductDetails;
