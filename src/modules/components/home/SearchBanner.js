import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../utils/devApi";
import { useCategoryActions } from "../../../_recoil/actions";

export const SearchBanner = () => {
  const navigate = useNavigate();
  const categoryActions = useCategoryActions();
  const [cities, setCities] = useState({});
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [division, setDivision] = useState([]);

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      navigate(`/products?name=${search}`);
    }
  };

  // fetch state
  const getState = async (id) => {
    await API.get(`/api/district/${id}`).then((res) => {
      if (res.status === 200) {
        const { data } = res;

        setCities(() =>
          data.map((item) => {
            return {
              value: item.id,
              label: item.name,
            };
          })
        );
      }
    });
  };

  useEffect(() => {
    // fetch division
    const getDivision = async () => {
      await API.get("/api/division").then((res) => {
        if (res.status === 200) {
          const { data } = res;
          setDivision(() =>
            data.map((item) => {
              return {
                value: item.id,
                label: item.name,
              };
            })
          );
        }
      });
    };

    // callback
    getDivision();
  }, []);

  return (
    <section id="banner_start">
      <div className="container">
        <div className="text">
          <h1>
            Borrow it <span>for your needs</span>
          </h1>
        </div>

        <div className="location_track_button">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-location-dot"></i>
            <span>
              {selectedState || selectedCity
                ? ` ${selectedState}${selectedCity ? ", " + selectedCity : ""}`
                : " All of Bangladesh"}
            </span>
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          data-bs-keyboard="false"
          data-bs-backdrop="static"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div id="location_modal" className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="row">
                  <div className="col-lg-6">
                    <h3>Select City or Division</h3>
                    <p>
                      {selectedState || selectedCity
                        ? `${selectedState}${
                            selectedCity ? ", " + selectedCity : ""
                          }`
                        : "All of Bangladesh"}
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <h3>
                      {selectedState &&
                        `Select a local area within ${selectedState}`}
                    </h3>
                    {selectedState && <p>Popular areas</p>}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6 district_name_btn">
                    <div
                      className="nav flex-column nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      {division &&
                        division.length > 0 &&
                        division.map((item, i) => (
                          <button
                            key={i}
                            className={i === 0 ? "nav-link" : "nav-link"}
                            id={`${item.label}-tab`}
                            data-bs-toggle="pill"
                            data-bs-target={`#${item.label}`}
                            type="button"
                            role="tab"
                            aria-controls={item.label}
                            aria-selected="true"
                            onClick={async () => {
                              setSelectedCity("");
                              setCities([]);
                              await getState(item.value);
                              setSelectedState(item.label);
                              categoryActions.getCategory(item.label, false);
                            }}
                          >
                            {item.label}{" "}
                            <i className="fa-solid fa-angle-right"></i>
                          </button>
                        ))}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    {cities && cities.length > 0 && (
                      <div
                        className="tab-content popular_arieas"
                        id="v-pills-tabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id={cities.stateName}
                          role="tabpanel"
                          aria-labelledby={`${cities.stateName}-tab`}
                        >
                          <ul>
                            {cities &&
                              cities.length > 0 &&
                              cities.map((item, i, row) => (
                                <li
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                  key={i}
                                  onClick={() => {
                                    setSelectedCity(item.label);
                                    categoryActions.getCategory(
                                      selectedState,
                                      item.label
                                    );
                                  }}
                                >
                                  {item.label}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="serach_bar">
          <form>
            <input
              type="text"
              // onBlur={handleSubmit}
              // value={products?.search ?? ""}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="What are you looking for?"
            />
            <button onClick={handleSubmit}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <div className="banner_arrw_shpae">
          <img src="images/22-dasg.svg" alt="" />
        </div>

        <div className="social_icon">
          <a href="!#" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="!#" target="_blank">
            {" "}
            <i className="fa-brands fa-twitter"></i>{" "}
          </a>
          <a href="!#" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SearchBanner;
