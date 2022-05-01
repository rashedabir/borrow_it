import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { categoryAtom } from "../../../_recoil/state";
import HomeLoading from "../HomeLoading";

export const BrowseByCategory = () => {
  const categories = useRecoilValue(categoryAtom);

  return (
    <section id="category">
      <div className="container">
        <h2>Browse items by category</h2>

        {categories && categories.length === 0 ? (
          <div className="row pt-5">
            {new Array(12).fill().map((item, i) => (
              <div className="col-lg-3 mb-3" key={i}>
                <HomeLoading />
              </div>
            ))}
          </div>
        ) : (
          <div className="details">
            <ul>
              {categories &&
                categories.length > 0 &&
                categories.map((item, i) => (
                  <li key={i}>
                    <Link to={`/category-details/${item?.slug}`}>
                      <img src={item?.image?.url} alt={item.name} />
                      <h3>{item.name}</h3>
                      <p>{item.totalProduct} ads</p>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseByCategory;
