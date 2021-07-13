import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!------------------ header -------------------> */}
      <header>
        <div className="top-nav">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 col-lg-2 col-xl-2 col align-self-center">
                <div className="d-flex align-items-center">
                  <div className="hamburger-icon-wrap d-block d-sm-block d-md-block d-lg-none d-xl-none pr-2">
                    <span>
                      <img
                        className="hamburger-icon"
                        src="assets/icons/menu-icon.png"
                      />
                    </span>
                  </div>
                  <div className="dashboard-logo">
                    <Link to="/">
                      <img src="assets/icons/db-logo.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 col-xl-7  col d-none d-sm-none d-md-block">
                <div className="stats">
                  <button className="btn custom-btn d-flex align-items-center">
                    Withdrawal
                  </button>
                  <ul className="">
                    <li>
                      Average Arbitration{" "}
                      <i className="fal fa-chevron-circle-up success"></i>
                      <span className="success">+1.80 %</span>
                    </li>
                    <li>
                      BTC:$59.883,30{" "}
                      <i className="fal fa-chevron-circle-up danger"></i>
                      <span className="danger">-1.80 %</span>
                    </li>
                    <li>
                      Refferal Link:botgle.com/username
                      <img
                        src="assets/icons/copy.png"
                        alt=""
                        className="pl-2 copy-to-clipboard"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 col align-self-center">
                <div className="d-flex align-items-center nav-side-items">
                  <div className="d-flex switch-wrap">
                    <label className="switch mb-0">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                    <span className="pl-2 grey-text">BOT</span>
                  </div>
                  <div className="year-select-wrap nav-icons-spacing d-none d-sm-none d-md-block">
                    <select name="" id="" className="year-select  grey-text">
                      <option value="">This Year</option>
                      <option value="">This Year</option>
                      <option value="">This Year</option>
                    </select>
                  </div>
                  <div className="notification-icon nav-icons-spacing d-none d-sm-none d-md-block">
                    <img src="assets/icons/Notification.png" alt="" />
                  </div>
                  <div className="country-avatar nav-icons-spacing">
                    <img src="assets/icons/country.png" alt="" />
                  </div>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <div className="profile-image mr-1">
                      <img src="assets/images/profile-image.jpg" alt="" />
                    </div>
                    <div className="profile-dropdown">
                      <div className="dropdown">
                        <a
                          className=" dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-chevron-down"></i>
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!------------------ End header -------------------> */}
    </>
  );
};

export default Header;
