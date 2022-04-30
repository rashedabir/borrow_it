import React from "react";
import categories from "../../../assets/fakeData/categories.json";
import image from "../../../assets/images/wristwatch.png";
import { Link } from "react-router-dom";

export const BrowseByCategory = () => {
  return (
    <section id="category">
      <div className="container">
        <h2>Browse items by category</h2>

        <div className="details">
          <ul>
            {categories &&
              categories.length > 0 &&
              categories.map((item, i) => (
                <li key={i}>
                  <Link to={`/category-details/${i}`}>
                    <img src={image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.total} ads</p>
                  </Link>
                </li>
              ))}

            {/*<li>
              <a href="!#">
                <img src="images/clothing.png" alt="" />
                <h3>Clothing</h3>
                <p>80,138 ads</p>
              </a>
            </li>
            <li>
              <a href="!#">
                <img src="images/electronics.png" alt="" />
                <h3>Electronics</h3>
                <p>66,157 ads</p>
              </a>
            </li>
            <li>
              <a href="!#">
                <img src="images/home-and-living" alt="" />
                <h3>Furniture</h3>
                <p>30,188 ads</p>
              </a>
            </li>
            <li>
              <a href="!#">
                <img src="images/Vehicles.png" alt="" />
                <h3>Vehicles</h3>
                <p>10,858 ads</p>
              </a>
            </li>
            <li>
              <a href="!#">
                <img src="images/smart-tv.png" alt="" />
                <h3>TV/Television</h3>
                <p>10,858 ads</p>
              </a>
            </li>

            <li>
              <a href="!#">
                <img src="images/music.png" alt="" />
                <h3>Music</h3>
                <p>10,858 ads</p>
              </a>
            </li>

            <li>
              <a href="!#">
                <img src="images/books.png" alt="" />
                <h3>Books</h3>
                <p>01,858 ads</p>
              </a>
            </li>

            <li>
              <a href="!#">
                <img src="images/wedding-ring.png" alt="" />
                <h3>Wedding</h3>
                <p>01,858 ads</p>
              </a>
            </li>

            <li>
              <a href="!#">
                <img src="images/event.png" alt="" />
                <h3>Events</h3>
                <p>01,858 ads</p>
              </a>
            </li>

            <li>
              <a href="!#">
                <img src="images/laptop.png" alt="" />
                <h3>Laptop</h3>
                <p>01,858 ads</p>
              </a>
            </li>

            <li>
              <a href="!#">
                <img src="images/gaming.png" alt="" />
                <h3>Gaming</h3>
                <p>01,858 ads</p>
              </a>
            </li>

            <li>
              <a href="!#">
                <img src="images/barbecue.png" alt="" />
                <h3>Cooking</h3>
                <p>01,858 ads</p>
              </a>
            </li>*/}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
