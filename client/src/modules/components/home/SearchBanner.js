import React, { useState } from "react";
import location from "../../../assets/fakeData/state.json";

export const SearchBanner = () => {
  const [cities, setCities] = useState({});
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

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
                      {location &&
                        location.length > 0 &&
                        location.map((item, i) => (
                          <button
                            key={i}
                            className={i === 0 ? "nav-link" : "nav-link"}
                            id={`${item.stateName}-tab`}
                            data-bs-toggle="pill"
                            data-bs-target={`#${item.stateName}`}
                            type="button"
                            role="tab"
                            aria-controls={item.stateName}
                            aria-selected="true"
                            onClick={() => {
                              setSelectedCity("");
                              setCities(item);
                              setSelectedState(item.stateName);
                            }}
                          >
                            {item.stateName}{" "}
                            <i className="fa-solid fa-angle-right"></i>
                          </button>
                        ))}
                      <p className="divisions">
                        Divisions <i className="fa-solid fa-angle-down"></i>
                      </p>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_9"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_9"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_9"
                        aria-selected="false"
                      >
                        Dhaka Division{" "}
                        <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_10"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_10"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_10"
                        aria-selected="false"
                      >
                        Chattogram Division
                        <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_11"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_11"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_11"
                        aria-selected="false"
                      >
                        Sylhet Division
                        <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_12"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_12"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_12"
                        aria-selected="false"
                      >
                        Khulna Division{" "}
                        <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_13"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_13"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_13"
                        aria-selected="false"
                      >
                        Rajshahi Division
                        <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_14"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_14"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_14"
                        aria-selected="false"
                      >
                        Rangpur Division{" "}
                        <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_15"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_15"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_15"
                        aria-selected="false"
                      >
                        Barishal Division
                        <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_16"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_16"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_16"
                        aria-selected="false"
                      >
                        Mymensingh Division
                        <i className="fa-solid fa-angle-right"></i>
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    {cities && Object.keys(cities).length > 0 && (
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
                            <li>All of {selectedState}</li>
                            {cities.cities &&
                              cities.cities.length > 0 &&
                              cities.cities.map((item, i, row) => (
                                <li
                                  key={i}
                                  onClick={() => {
                                    setSelectedCity(item.cityName);
                                  }}
                                >
                                  {item.cityName}
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
          <form action="">
            <input type="text" placeholder="What are you looking for?" />
            <button>
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
