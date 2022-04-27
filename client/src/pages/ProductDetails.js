import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import status from "../assets/images/project-status.png";
import taka from "../assets/images/taka.png";
import image from "../assets/images/watch.jpg";
import image2 from "../assets/images/watch2.jpg";
import image3 from "../assets/images/watch3.jpg";
import image4 from "../assets/images/watch4.jpg";

export const ProductDetails = () => {
  return (
    <section id="product_details">
      <div className="container">
        <div className="product_details_title">
          <h3>Diesel hand watch</h3>
          <p>
            <i className="fa-solid fa-location-dot"></i> Dhaka, Uttara
          </p>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <Carousel>
              <div className="item">
                <img src={image} alt="" />
              </div>
              <div className="item">
                <img src={image2} alt="" />
              </div>
              <div className="item">
                <img src={image3} alt="" />
              </div>
              <div className="item">
                <img src={image4} alt="" />
              </div>
              <div className="item">
                <img src={image3} alt="" />
              </div>
            </Carousel>

            <div className="item_details_condition">
              <div className="model_condition">
                <p>
                  Condition: <span>Used</span>
                </p>
                <p>
                  Model: <span>lalala</span>
                </p>
                <p>
                  Authenticity: <span>Original</span>
                </p>
              </div>

              <div className="description">
                <h3>description</h3>

                <p>
                  আামাদের ঠিকানাঃ- Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Quae magnam mollitia sed deserunt earum
                  nesciunt et quidem consequatur eaque eligendi maxime ipsa
                  adipisci nam rerum, repudiandae accusamus modi delectus
                  incidunt! Quos libero, veritatis tenetur saepe placeat
                  molestias iste error, eos atque ipsam minus est dolores velit,
                  fugit iure natus odit obcaecati ut consectetur aliquid
                  voluptas doloremque cumque corrupti. Ipsa, neque distinctio
                  natus velit amet molestiae numquam harum laudantium modi aut
                  fuga voluptate ex iste totam facilis dolore optio a
                  consequatur quisquam accusamus. Sed eligendi neque possimus
                  blanditiis quibusdam natus itaque expedita autem doloribus
                  odit inventore laborum accusantium, tenetur vel fuga nostrum
                  esse recusandae soluta! Aspernatur, animi ducimus ab
                  voluptates minus et corrupti facere magni obcaecati cumque
                  soluta neque sequi suscipit inventore nobis, molestias
                  necessitatibus, voluptatum temporibus voluptatibus? Ea ipsa
                  dolorem quibusdam? Eligendi quia deserunt nostrum velit rem id
                  adipisci atque saepe assumenda cumque? Molestias placeat
                  impedit adipisci, vel non maiores iure facere, id mollitia
                  perspiciatis ipsa eum repellendus aspernatur blanditiis.
                  Praesentium rem tempore cumque dolorum consequatur magnam quod
                  laboriosam quisquam totam ullam quo perferendis amet alias
                  necessitatibus, ut molestiae quos hic ducimus! Voluptate
                  excepturi debitis, neque similique in quod magni natus animi
                  recusandae tenetur accusamus, molestias vero! Veritatis, animi
                  aliquid?
                </p>
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
                      <span> 150 Tk/day</span>
                    </p>
                  </li>

                  <li>
                    <div className="img">
                      <img src={taka} alt="" />
                    </div>
                    <p>
                      Damage Waiver
                      <span> 1500 Tk</span>
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
                    <a href="tel:01717246139">01717246139</a>
                  </li>
                  <li>
                    <a href="tel:01910175050">01910175050</a>
                  </li>
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
  );
};

export default ProductDetails;
