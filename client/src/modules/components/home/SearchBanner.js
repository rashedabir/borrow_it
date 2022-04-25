import React from "react";

export const SearchBanner = () => {
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
            <span>All of Bangladesh</span>
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
                    <p>All of Bangladesh</p>
                  </div>
                  <div className="col-lg-6">
                    <h3>Select a local area within Dhaka</h3>
                    <p>Popular areas</p>
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
                      <button
                        className="nav-link active"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        Dhaka <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        Chattogram <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        Sylhet <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_4"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_4"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_4"
                        aria-selected="false"
                      >
                        Khulna <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_5"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_5"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_5"
                        aria-selected="false"
                      >
                        Barishal <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_6"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_6"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_6"
                        aria-selected="false"
                      >
                        Rajshahi <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_7"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_7"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_7"
                        aria-selected="false"
                      >
                        Rangpur <i className="fa-solid fa-angle-right"></i>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab_8"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings_8"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings_8"
                        aria-selected="false"
                      >
                        Mymensingh <i className="fa-solid fa-angle-right"></i>
                      </button>
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
                    <div
                      className="tab-content popular_arieas"
                      id="v-pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        <ul>
                          <li>All of Dhaka</li>
                          <li>Dhanmondi</li>
                          <li>Mohammadpur</li>
                          <li>Mirpur</li>
                          <li>Uttara</li>
                          <li>Savar</li>
                          <p>Select other areas (A-Z)</p>
                          <select>
                            <option value="">ami 1</option>
                            <option value="">ami 2</option>
                            <option value="">ami 3</option>
                            <option value="">ami 4</option>
                          </select>
                        </ul>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        2
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                      >
                        3
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_4"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_4"
                      >
                        4
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_5"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_5"
                      >
                        5
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_6"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_6"
                      >
                        6
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_7"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_7"
                      >
                        7
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_8"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_8"
                      >
                        8
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_9"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_9"
                      >
                        9
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_10"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_10"
                      >
                        10
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_11"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_11"
                      >
                        11
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_12"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_12"
                      >
                        12
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_13"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_13"
                      >
                        3
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_14"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_14"
                      >
                        14
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_15"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_15"
                      >
                        15
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings_16"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab_16"
                      >
                        16
                      </div>
                    </div>
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
