import React from "react";
import { Link } from "react-router-dom";
// import AdminSidebar from "../../components/AdminSidebar";

const Landing = () => {
  return (
    <div className="home-content-wrapper ">
      <div className="container-fluid">
        <div className="row">
          {/* <AdminSidebar /> */}
          {/* <!------------------ Content -------------------> */}
          {/* <!-- <div className="w3-overlay" onClick="w3_close()" style="cursor:pointer" id="myOverlay"></div> --> */}
          <div className="main home-content admin-db admin-main-bot">
            <div className="container-fluid">
              <div className="row body-area">
                <div className="col-md-6 col-lg-5 col-xl-6 box-margin">
                  <div className="main-profile-avatar-wrap">
                    <div className="d-flex align-item-center">
                      <img src="assets/images/profile-image.jpg" alt="" />
                      <Link to="/dashboard">

                      <h1 className="mb-0">
                        Good Morning ADMIN
                        <br />
                        <span>Here are your stats for Today, 17 May 2021</span>
                      </h1>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7 col-xl-2 align-self-bottom text-right">
                  <div className="date-time-select-wrapper">
                    <span>showing for:</span>
                    <select name="" id="" className="date-select grey-text">
                      <option value="">28 Oct - 04 Dec 2021</option>
                      <option value="">28 Oct - 04 Dec 2021</option>
                      <option value="">28 Oct - 04 Dec 2021</option>
                      <option value="">28 Oct - 04 Dec 2021</option>
                      <option value="">28 Oct - 04 Dec 2021</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-xl-4 box-margin">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box mt-0">
                        <div className="row align-items-center">
                          <div className="col">
                            <div className="balance">
                              <h2>Balance</h2>
                              <span className="grey-text">$9,003.02</span>
                              <i className="fal fa-chevron-circle-up success"></i>
                              <span className="success percentage-change">
                                +1.80 %
                              </span>
                            </div>
                          </div>
                          <div className="col text-right">
                            <span className="theme-accent btc-value">
                              BTC 0.20825000
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-3 box-margin  first-row-box">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box">
                        <div className="row align-items-center">
                          <div className="col-md-8 col-lg-7 col-xl-9 col-8">
                            <div className="botgle-bot">
                              <div>
                                <h2 className="pb-3">Botgle BOT</h2>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-4 col-lg-5 col-xl-3 col-4 text-right"
                            style={{ alignSelf: "start" }}
                          >
                            <label className="switch">
                              <input type="checkbox" />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <form action="" className="botgle-bot-form">
                              <div className="form-row">
                                <div className="form-group col-md-6 col-lg-4 col-xl-4">
                                  <label for="inputEmail4">
                                    Define percentage
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail4"
                                  />
                                </div>
                                <div className="form-group col-md-6 col-lg-4 col-xl-4">
                                  <label for="inputPassword4">
                                    Define time frame
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword4"
                                  />
                                </div>
                                <div className="form-group col-md-12 col-lg-2 col-xl-2">
                                  <button className="btn custom-btn">OK</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="total-available">
                              <p className="mb-0 pt-3">
                                <span>Botgle BOT parameters</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-3 box-margin first-row-box">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box">
                        <div className="row align-items-center">
                          <div className="col">
                            <div className="balance total-balance">
                              <div>
                                <h2 className="pb-3">Botgle BOT Profit</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <span className="theme-accent btc-value">
                              15.883433 BTC
                            </span>
                            <div className="dollar-value">
                              <span className="grey-text">$ 230,107.67</span>
                            </div>
                            <div className="total-available">
                              <p className="mb-0 pt-3">
                                <span>Deposits made by users</span>
                              </p>
                            </div>
                          </div>
                          <div className="col text-right">
                            <div className="circled-percentage">
                              <span className="success percentage-change">
                                +12.3%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-3 box-margin   first-row-box">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box">
                        <div className="row align-items-center">
                          <div className="col">
                            <div className="balance">
                              <div>
                                <h2 className="pb-3">User deposits</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <span className="theme-accent btc-value">
                              6.342234 BTC
                            </span>
                            <div className="dollar-value">
                              <span className="grey-text">$ 230,107.67</span>
                            </div>
                            <div className="total-available">
                              <p className="mb-0 pt-3">
                                <span>Deposits made by users</span>
                              </p>
                            </div>
                          </div>

                          <div className="col text-right">
                            <div className="circled-percentage">
                              <span className="success percentage-change">
                                +12.3%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-3 box-margin first-row-box">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box">
                        <div className="row align-items-center">
                          <div className="col">
                            <div className="balance user-withdrawals">
                              <div>
                                <h2 className="pb-3">Users' Withdrawals</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <span className="theme-accent btc-value">
                              1.342234 BTC
                            </span>
                            <div className="dollar-value">
                              <span className="grey-text">$ 48,698.67</span>
                            </div>
                            <div className="total-available">
                              <p className="mb-0 pt-3">
                                <span>Withdrawals made by users</span>
                              </p>
                            </div>
                          </div>
                          <div className="col text-right">
                            <div className="circled-percentage danger-circled">
                              <span className="danger percentage-change">
                                -10,5%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12 col-xl-12 order-md-1 order-1">
                  <div className="withdrawals operations">
                    <div className="box buy">
                      <div className="row align-items-center">
                        <div className="col-md-5 col-lg-3 col-xl-2">
                          <div className="table-title">
                            <h2>Live operations - Botgle BOT</h2>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3">
                          <div className="input-wrapper">
                            <i className="fas fa-search"></i>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search..."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row withdrawal-table">
                        <div className="col-md-12 col-lg-12 col-xl-12">
                          <div className="row header-row">
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">User</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">ID trade</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">Operation Type</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">Value BTC</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">% Profit</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">Profit BTC</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">Increase</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">Decrease</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">Balance</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">Status</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">Destination</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">Date</h2>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <h2 className="theme-accent">Hash</h2>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col">
                              <div className="user">
                                <span>Potroloco999</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="id-trade">
                                <span>7DIKWE29</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="operation-type">
                                <span>Withdrawal</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="value">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit">
                                <span></span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit-btc">
                                <span></span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="increase">
                                <span></span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="decrease">
                                <span className="danger">2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="balance">
                                <span>0.151562</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="status">
                                <span className="danger">Executed</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="destination">
                                <span>External Wallet</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="date">
                                <span>06/15/21, 05:32</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="hash">
                                <button className="btn custom-btn">
                                  Details
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col">
                              <div className="user">
                                <span>Potroloco999</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="id-trade">
                                <span>7DIKWE29</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="operation-type">
                                <span>Withdrawal</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="value">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit">
                                <span className="success">1.22%</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit-btc">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="increase">
                                <span className="success">2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="decrease">
                                <span className="danger"></span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="balance">
                                <span>0.151562</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="status">
                                <span className="danger">Executed</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="destination">
                                <span>External Wallet</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="date">
                                <span>06/15/21, 05:32</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="hash">
                                <button className="btn custom-btn">
                                  Details
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col">
                              <div className="user">
                                <span>Potroloco999</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="id-trade">
                                <span>7DIKWE29</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="operation-type">
                                <span>Withdrawal</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="value">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit-btc">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="increase">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="decrease">
                                <span className="danger">2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="balance">
                                <span>0.151562</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="status">
                                <span className="danger">Executed</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="destination">
                                <span>External Wallet</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="date">
                                <span>06/15/21, 05:32</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="hash">
                                <button className="btn custom-btn">
                                  Details
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col">
                              <div className="user">
                                <span>Potroloco999</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="id-trade">
                                <span>7DIKWE29</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="operation-type">
                                <span>Withdrawal</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="value">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit">
                                <span className="success">1.22%</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit-btc">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="increase">
                                <span className="success">2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="decrease">
                                <span className="danger"></span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="balance">
                                <span>0.151562</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="status">
                                <span className="danger">Executed</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="destination">
                                <span>External Wallet</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="date">
                                <span>06/15/21, 05:32</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="hash">
                                <button className="btn custom-btn">
                                  Details
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col">
                              <div className="user">
                                <span>Potroloco999</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="id-trade">
                                <span>7DIKWE29</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="operation-type">
                                <span>Withdrawal</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="value">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit-btc">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="increase">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="decrease">
                                <span className="danger">2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="balance">
                                <span>0.151562</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="status">
                                <span className="danger">Executed</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="destination">
                                <span>External Wallet</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="date">
                                <span>06/15/21, 05:32</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="hash">
                                <button className="btn custom-btn">
                                  Details
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col">
                              <div className="user">
                                <span>Potroloco999</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="id-trade">
                                <span>7DIKWE29</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="operation-type">
                                <span>Withdrawal</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="value">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit">
                                <span className="success">1.22%</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit-btc">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="increase">
                                <span className="success">2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="decrease">
                                <span className="danger"></span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="balance">
                                <span>0.151562</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="status">
                                <span className="danger">Executed</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="destination">
                                <span>External Wallet</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="date">
                                <span>06/15/21, 05:32</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="hash">
                                <button className="btn custom-btn">
                                  Details
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col">
                              <div className="user">
                                <span>Potroloco999</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="id-trade">
                                <span>7DIKWE29</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="operation-type">
                                <span>Withdrawal</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="value">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit-btc">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="increase">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="decrease">
                                <span className="danger">2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="balance">
                                <span>0.151562</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="status">
                                <span className="danger">Executed</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="destination">
                                <span>External Wallet</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="date">
                                <span>06/15/21, 05:32</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="hash">
                                <button className="btn custom-btn">
                                  Details
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col">
                              <div className="user">
                                <span>Potroloco999</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="id-trade">
                                <span>7DIKWE29</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="operation-type">
                                <span>Withdrawal</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="value">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit">
                                <span className="success">1.22%</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit-btc">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="increase">
                                <span className="success">2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="decrease">
                                <span className="danger"></span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="balance">
                                <span>0.151562</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="status">
                                <span className="danger">Executed</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="destination">
                                <span>External Wallet</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="date">
                                <span>06/15/21, 05:32</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="hash">
                                <button className="btn custom-btn">
                                  Details
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col">
                              <div className="user">
                                <span>Potroloco999</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="id-trade">
                                <span>7DIKWE29</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="operation-type">
                                <span>Withdrawal</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="value">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="profit-btc">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="increase">
                                <span>2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="decrease">
                                <span className="danger">2.000000</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="balance">
                                <span>0.151562</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="status">
                                <span className="danger">Executed</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="destination">
                                <span>External Wallet</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="date">
                                <span>06/15/21, 05:32</span>
                              </div>
                            </div>
                            <div className="col">
                              <div className="hash">
                                <button className="btn custom-btn">
                                  Details
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <nav aria-label="Page navigation example">
                                <ul
                                  className="pagination"
                                  style={{ justifyContent: "center" }}
                                >
                                  <li className="page-item">
                                    <a
                                      className="page-link"
                                      href="#"
                                      aria-label="Previous"
                                    >
                                      <span aria-hidden="true">
                                        <i className="fas fa-chevron-double-left"></i>
                                      </span>
                                      <span aria-hidden="true">
                                        <i className="fas fa-chevron-left"></i>
                                      </span>
                                      <span className="sr-only">Previous</span>
                                    </a>
                                  </li>
                                  <li className="page-item active">
                                    <a className="page-link" href="#">
                                      1
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a className="page-link" href="#">
                                      2
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a className="page-link" href="#">
                                      3
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link"
                                      href="#"
                                      aria-label="Next"
                                    >
                                      <span aria-hidden="true">
                                        <i className="fas fa-chevron-right"></i>
                                      </span>
                                      <span aria-hidden="true">
                                        <i className="fas fa-chevron-double-right"></i>
                                      </span>
                                      <span className="sr-only">Next</span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!------------------ Content -------------------> */}
          {/* <!-- Modal --> */}
          <div
            className="modal modal-one fade"
            id="modalone"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content text-center">
                <div className="">
                  <h1 className="modal-title" id="exampleModalLongTitle">
                    Run Trade
                  </h1>
                  <div>
                    <p>
                      Balance: <span className="balance">0.20825000</span> BTC
                    </p>
                  </div>
                </div>
                <div className="modal-body">
                  <h2 className="pb-3">Huobi Global</h2>
                  <h3 className="buy">
                    <span className="success">$ 36,673.17</span>
                  </h3>
                  <div className="modal-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                    >
                      <path
                        d="M29.0001 33.3331C29.6247 33.954 30.4695 34.3024 31.3501 34.3024C32.2307 34.3024 33.0756 33.954 33.7001 33.3331C34.321 32.7086 34.6694 31.8638 34.6694 30.9831C34.6694 30.1025 34.321 29.2577 33.7001 28.6331L12.8001 7.63314C12.1724 7.00546 11.3211 6.65283 10.4335 6.65283C9.54578 6.65283 8.69447 7.00546 8.06679 7.63314C7.43911 8.26082 7.08648 9.11213 7.08648 9.9998C7.08648 10.8875 7.43911 11.7388 8.06679 12.3665L29.0001 33.3331ZM70.0001 46.6665C69.1161 46.6665 68.2682 47.0177 67.6431 47.6428C67.018 48.2679 66.6668 49.1157 66.6668 49.9998V61.9665L51.4668 46.6665C50.8303 46.0299 49.967 45.6724 49.0668 45.6724C48.1666 45.6724 47.3033 46.0299 46.6668 46.6665C46.0303 47.303 45.6727 48.1663 45.6727 49.0665C45.6727 49.9666 46.0303 50.8299 46.6668 51.4665L61.9668 66.6665H50.0001C49.1161 66.6665 48.2682 67.0177 47.6431 67.6428C47.018 68.2679 46.6668 69.1157 46.6668 69.9998C46.6668 70.8839 47.018 71.7317 47.6431 72.3568C48.2682 72.9819 49.1161 73.3331 50.0001 73.3331H70.0001C70.4357 73.3279 70.8661 73.2373 71.2668 73.0665C72.0813 72.7282 72.7285 72.081 73.0668 71.2665C73.2376 70.8657 73.3282 70.4354 73.3335 69.9998V49.9998C73.3335 49.1157 72.9823 48.2679 72.3571 47.6428C71.732 47.0177 70.8842 46.6665 70.0001 46.6665ZM73.0668 8.73314C72.7285 7.91864 72.0813 7.27139 71.2668 6.93314C70.8661 6.76233 70.4357 6.67174 70.0001 6.66647H50.0001C49.1161 6.66647 48.2682 7.01766 47.6431 7.64278C47.018 8.2679 46.6668 9.11575 46.6668 9.9998C46.6668 10.8839 47.018 11.7317 47.6431 12.3568C48.2682 12.9819 49.1161 13.3331 50.0001 13.3331H61.9668L7.63346 67.6331C7.32103 67.943 7.07305 68.3117 6.90382 68.7179C6.73459 69.1241 6.64746 69.5598 6.64746 69.9998C6.64746 70.4398 6.73459 70.8755 6.90382 71.2817C7.07305 71.6879 7.32103 72.0566 7.63346 72.3665C7.94333 72.6789 8.312 72.9269 8.7182 73.0961C9.1244 73.2653 9.56008 73.3525 10.0001 73.3525C10.4402 73.3525 10.8758 73.2653 11.282 73.0961C11.6882 72.9269 12.0569 72.6789 12.3668 72.3665L66.6668 18.0331V29.9998C66.6668 30.8839 67.018 31.7317 67.6431 32.3568C68.2682 32.9819 69.1161 33.3331 70.0001 33.3331C70.8842 33.3331 71.732 32.9819 72.3571 32.3568C72.9823 31.7317 73.3335 30.8839 73.3335 29.9998V9.9998C73.3282 9.56421 73.2376 9.13388 73.0668 8.73314Z"
                        fill="#54358E"
                      />
                    </svg>
                  </div>
                  <h2>Currency</h2>
                  <h3 className="sell">
                    <span className="danger">$ 37,373.54</span>
                  </h3>
                  <div className="percentage-change">
                    <h3>
                      <span className="success">+ 1.91%</span>
                    </h3>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>
                        <span className="success">Your profit (50%)</span>
                      </p>
                      <p className="d-none d-sm-none d-md-block">
                        <span>Referral Network (15%)</span>
                      </p>
                      <p>
                        <span>Botgle Profit (35%)</span>
                      </p>
                    </div>
                    <div className="col">
                      <p>
                        <span className="success your-profit">
                          0.0019324995 BTC
                        </span>
                      </p>
                      <p className="d-none d-sm-none d-md-block refferal-network">
                        <span>0.00057974985 BTC</span>
                      </p>
                      <p className="botgle-profit">
                        <span>0.00135274965 BTC</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modal-custom-footer text-center">
                  <button
                    type="button"
                    className="btn  custom-btn cancel-btn"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn custom-btn">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
