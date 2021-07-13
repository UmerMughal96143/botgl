import React from "react";

const Home = () => {
  return (
    <>
      {/* <!------------------ Content -------------------> */}
      {/* <!-- <div className="w3-overlay" onclick="w3_close()" style="cursor:pointer" id="myOverlay"></div> --> */}
      <div className="main home-content">
        <div className="container-fluid">
          <div className="row body-area">
            <div className="col-md-6 col-lg-8 col-xl-8 box-margin">
              <div className="main-profile-avatar-wrap">
                <div className="d-flex align-item-center">
                  <img src="assets/images/profile-image.jpg" alt="" />
                  <h1 className="mb-0">
                    Good Morning Oguz
                    <br />
                    <span>Here are your stats for Today, 17 May 2021</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 box-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="box mt-0 first-row-box">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="balance">
                          <h2>Balance</h2>
                          <span className="grey-text">$9,003.02</span>
                          <i className="fal fa-chevron-circle-up success"></i>
                          <span className="success percentage-change">+1.80 %</span>
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
            <div className="col-md-12 col-lg-4 col-xl-3 box-margin d-none d-sm-none d-md-block">
              <div className="row">
                <div className="col-md-12">
                  <div className="box">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="balance total-balance">
                          <h2 className="pb-3">Total Balance</h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <span className="theme-accent btc-value"> 0.00234 BTC</span>
                        <div className="dollar-value">
                          <span className="grey-text">$108,29</span>
                        </div>
                        <div className="total-available">
                          <p className="mb-0 pt-3">
                            <span>Total Availabel in your account</span>
                          </p>
                        </div>
                      </div>
                      <div className="col text-right">
                        <div className="circled-percentage">
                          <span className="success percentage-change">+12.3%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 col-xl-3 box-margin d-none d-sm-none d-md-block">
              <div className="row">
                <div className="col-md-12">
                  <div className="box">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="balance total-balance">
                          <div>
                            <h2 className="pb-3">
                              In Progress
                              <span className="remaining-time grey-text">
                                Remaining time 00:00:00
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <span className="theme-accent btc-value"> 0.00234 BTC</span>
                        <div className="dollar-value">
                          <span className="grey-text">$108,29</span>
                        </div>
                        <div className="total-available">
                          <p className="mb-0 pt-3">
                            <span>Total Availabel in Progress</span>
                          </p>
                        </div>
                      </div>
                      <div className="col text-right">
                        <div className="circled-percentage">
                          <span className="success percentage-change">+12.3%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 col-xl-6 box-margin d-none d-sm-none d-md-block">
              <div className="row">
                <div className="col-md-12">
                  <div className="box">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="bitcoin-wallet">
                          <h2>Your Bitcoin Wallet</h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="code">
                          <span className="theme-accent btc-value ">
                            23232GH32HF2H51J54GF8JUJ151
                          </span>
                        </div>
                        <div className="d-flex align-item-center">
                          <div className="copy-to-clipboard">
                            <img
                              src="assets/icons/copy.png"
                              alt=""
                              className="mr-4"
                            />
                          </div>
                          <span className="px-4">Copy</span>
                          <span className="theme-accent clipboard-message">
                            Copied to Clipboard
                          </span>
                        </div>
                      </div>
                      <div className="col text-right">
                        <div className="qr-code text-right">
                          <img src="assets/images/qr.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-7 box-margin order-md-1 order-1 d-none d-sm-none d-md-block">
              <div className="box best-operation">
                <h2> The Best Operation right now</h2>
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <div className="col">
                        <select name="" id="" className="btc-dropdown theme-accent">
                          <option value="">BTC</option>
                          <option value="">BTC</option>
                          <option value="">BTc</option>
                        </select>
                      </div>
                      <div className="col text-center">
                        <span className="badge badge-pill badge-success">Buy</span>
                        <div className="buy-value">
                          <h3 className="mb-0">$36,673.17</h3>
                        </div>
                        <div className="desc btc-to-dollar">
                          <span>1BTC=36,673.17</span>
                        </div>
                      </div>
                      <div className="col text-right d-none d-sm-none d-md-block">
                        <i className="fas fa-ellipsis-h grey-text"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                    >
                      <defs>
                        {/* <style>
                                            .a {
                                                fill: #54358e;
                                            }

                                            .b {
                                                fill: #fff;
                                            }
                                        </style> */}
                      </defs>
                      <g transform="translate(-665.652 -2304.223)">
                        <rect
                          className="a"
                          width="45"
                          height="45"
                          rx="19"
                          transform="translate(665.652 2304.223)"
                        />
                        <g transform="translate(2507.561 2207.424)">
                          <path
                            className="b"
                            d="M-1628.63,118.289q-.006-.031-.014-.063c0-.009,0-.018-.006-.027a11.36,11.36,0,0,0-1.256-4.207,11.384,11.384,0,0,0-4.733-4.793,11.7,11.7,0,0,0-3.509-1.212.783.783,0,0,0-.617.123.777.777,0,0,0-.309.543l-.019.132c-.047.335-.092.652-.152.968a.855.855,0,0,0,.116.671.885.885,0,0,0,.6.347,7.636,7.636,0,0,1,2.869,1.063,8.442,8.442,0,0,1,4.15,8.683,8.115,8.115,0,0,1-3.321,5.678c0-.8,0-1.622,0-2.429a.855.855,0,0,0-.238-.637.831.831,0,0,0-.632-.219c-.343.011-.7.011-1.062,0a.835.835,0,0,0-.636.221.84.84,0,0,0-.24.631c0,1.681,0,3.446,0,5.4a.834.834,0,0,0,.231.616.828.828,0,0,0,.609.23h0c1.817,0,3.64,0,5.418,0h0a.847.847,0,0,0,.634-.24.829.829,0,0,0,.221-.629c-.007-.226-.005-.452,0-.69,0-.117,0-.234,0-.352,0-.619-.276-.9-.889-.9h-.346a11.565,11.565,0,0,0,2.843-5.262c.106-.434.168-.867.229-1.286.018-.123.036-.246.054-.368l.007-.046v-1.886Z"
                            transform="translate(-179.327 0)"
                          />
                          <path
                            className="b"
                            d="M-1820.943,136.9a8.231,8.231,0,0,1-4.281-2.1,8.426,8.426,0,0,1-2.768-7.523,8.3,8.3,0,0,1,3.327-5.786q0,.7,0,1.4v.931a.9.9,0,0,0,.226.718.927.927,0,0,0,.714.213l.312,0c.236,0,.459,0,.682,0a.825.825,0,0,0,.631-.217.858.858,0,0,0,.24-.639c-.005-1.714-.005-3.529,0-5.4a.831.831,0,0,0-.229-.615.822.822,0,0,0-.613-.229c-1.837,0-3.66,0-5.418,0h0a.82.82,0,0,0-.611.235.833.833,0,0,0-.222.629c.005.227,0,.463,0,.691q0,.167,0,.334a.9.9,0,0,0,.226.709.918.918,0,0,0,.7.211h.309a11.358,11.358,0,0,0-2.024,2.95,11.267,11.267,0,0,0-1.015,6.572,11.258,11.258,0,0,0,2.887,6.113,11.449,11.449,0,0,0,6.542,3.575.959.959,0,0,0,.171.016.75.75,0,0,0,.443-.138.783.783,0,0,0,.313-.542q.018-.123.036-.247c.043-.3.084-.578.137-.86a.851.851,0,0,0-.117-.663A.894.894,0,0,0-1820.943,136.9Z"
                            transform="translate(0 -9.076)"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <div className="col">
                        <select name="" id="" className="btc-dropdown theme-accent">
                          <option value="">BTC</option>
                          <option value="">BTC</option>
                          <option value="">BTc</option>
                        </select>
                      </div>
                      <div className="col text-center">
                        <span className="badge badge-pill badge-danger">Sell</span>
                        <div className="sale-value">
                          <h3 className="mb-0">$37,373.54</h3>
                        </div>
                        <div className="desc btc-to-dollar">
                          <span>1BTC=36,673.17</span>
                        </div>
                      </div>
                      <div className="col text-right d-none d-sm-none d-md-block">
                        <i className="fas fa-ellipsis-h grey-text"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col ">
                    <div className="d-flex align-items-center your-profit">
                      <span className="pr-3 grey-text">Your Profit:</span>
                      <span className="mr-3 badge badge-pill badge-success profit-badge">
                        +1.91%
                      </span>
                      <span className="grey-text your-profit-btc">
                        (0.123456789 BTC)
                      </span>
                    </div>
                  </div>
                  <div className="col text-right">
                    <button
                      className="btn custom-btn"
                      data-toggle="modal"
                      data-target="#modalone"
                    >
                      Run Trade
                    </button>
                  </div>
                </div>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width:"70%"}}
                  >
                    <span className="sr-only">70% Complete</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-12 col-xl-7 box-margin order-md-1 order-1 d-block d-sm-block d-md-none">
              <div className="box best-operation">
                <div className="row">
                  <div className="col-9">
                    <h2> The Best Operation right now</h2>
                  </div>
                  <div className="col">
                    <select name="" id="" className="btc-dropdown theme-accent">
                      <option value="">BTC</option>
                      <option value="">BTC</option>
                      <option value="">BTc</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <div className="col-8 text-center pr-0">
                        <div className="buy-value">
                          <h3 className="mb-0">$ 48,982.32</h3>
                        </div>
                      </div>
                      <div className="col text-left">
                        <span className="badge badge-pill badge-success">Buy</span>
                      </div>
                      <div className="col text-center">
                        <div className="desc btc-to-dollar">
                          <span>1BTC=36,673.17</span>
                        </div>
                      </div>

                      <div className="col text-right d-none d-sm-none d-md-block">
                        <i className="fas fa-ellipsis-h grey-text"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-2 d-block d-sm-block d-md-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                >
                  <defs>
                    {/* <style>
                                    .a {
                                        fill: #54358e;
                                    }

                                    .b {
                                        fill: #fff;
                                    }
                                </style> */}
                  </defs>
                  <g transform="translate(-665.652 -2304.223)">
                    <rect
                      className="a"
                      width="45"
                      height="45"
                      rx="19"
                      transform="translate(665.652 2304.223)"
                    />
                    <g transform="translate(2507.561 2207.424)">
                      <path
                        className="b"
                        d="M-1628.63,118.289q-.006-.031-.014-.063c0-.009,0-.018-.006-.027a11.36,11.36,0,0,0-1.256-4.207,11.384,11.384,0,0,0-4.733-4.793,11.7,11.7,0,0,0-3.509-1.212.783.783,0,0,0-.617.123.777.777,0,0,0-.309.543l-.019.132c-.047.335-.092.652-.152.968a.855.855,0,0,0,.116.671.885.885,0,0,0,.6.347,7.636,7.636,0,0,1,2.869,1.063,8.442,8.442,0,0,1,4.15,8.683,8.115,8.115,0,0,1-3.321,5.678c0-.8,0-1.622,0-2.429a.855.855,0,0,0-.238-.637.831.831,0,0,0-.632-.219c-.343.011-.7.011-1.062,0a.835.835,0,0,0-.636.221.84.84,0,0,0-.24.631c0,1.681,0,3.446,0,5.4a.834.834,0,0,0,.231.616.828.828,0,0,0,.609.23h0c1.817,0,3.64,0,5.418,0h0a.847.847,0,0,0,.634-.24.829.829,0,0,0,.221-.629c-.007-.226-.005-.452,0-.69,0-.117,0-.234,0-.352,0-.619-.276-.9-.889-.9h-.346a11.565,11.565,0,0,0,2.843-5.262c.106-.434.168-.867.229-1.286.018-.123.036-.246.054-.368l.007-.046v-1.886Z"
                        transform="translate(-179.327 0)"
                      />
                      <path
                        className="b"
                        d="M-1820.943,136.9a8.231,8.231,0,0,1-4.281-2.1,8.426,8.426,0,0,1-2.768-7.523,8.3,8.3,0,0,1,3.327-5.786q0,.7,0,1.4v.931a.9.9,0,0,0,.226.718.927.927,0,0,0,.714.213l.312,0c.236,0,.459,0,.682,0a.825.825,0,0,0,.631-.217.858.858,0,0,0,.24-.639c-.005-1.714-.005-3.529,0-5.4a.831.831,0,0,0-.229-.615.822.822,0,0,0-.613-.229c-1.837,0-3.66,0-5.418,0h0a.82.82,0,0,0-.611.235.833.833,0,0,0-.222.629c.005.227,0,.463,0,.691q0,.167,0,.334a.9.9,0,0,0,.226.709.918.918,0,0,0,.7.211h.309a11.358,11.358,0,0,0-2.024,2.95,11.267,11.267,0,0,0-1.015,6.572,11.258,11.258,0,0,0,2.887,6.113,11.449,11.449,0,0,0,6.542,3.575.959.959,0,0,0,.171.016.75.75,0,0,0,.443-.138.783.783,0,0,0,.313-.542q.018-.123.036-.247c.043-.3.084-.578.137-.86a.851.851,0,0,0-.117-.663A.894.894,0,0,0-1820.943,136.9Z"
                        transform="translate(0 -9.076)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="box best-operation">
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-8 text-center pr-0">
                      <div className="buy-value">
                        <h3 className="mb-0">$ 48,982.32</h3>
                      </div>
                    </div>
                    <div className="col text-left">
                      <span className="badge badge-pill badge-danger">Sell</span>
                    </div>
                    <div className="col-12 text-center">
                      <div className="desc btc-to-dollar">
                        <span>1BTC=36,673.17</span>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        className="btn custom-btn"
                        data-toggle="modal"
                        data-target="#modalone"
                      >
                        Run Trade
                      </button>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="d-flex align-items-center your-profit">
                          <span className="pr-3 grey-text">Your Profit:</span>
                          <span className="mr-3 badge badge-danger">-0,34%</span>
                          <span className="grey-text your-profit-btc">
                            (0.123456789 BTC)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{width:"70%"}}
                          >
                            <span className="sr-only">70% Complete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-5 box-margin order-md-2 order-4">
              <div className="row h-100">
                <div className="col-md-12 col-lg-6 col-xl-6 order-md-12 ">
                  <div className="box top-five-exchange-buy">
                    <div className="row">
                      <div className="col">
                        <div className="balance">
                          <div>
                            <h2 className="mb-0 card-sm-heading-space">
                              Top 5 Exchange buy
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col text-right">
                        <i className="fas fa-ellipsis-h grey-text"></i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <img src="assets/images/exchange-buy.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6 order-md-12 d-none d-sm-none d-md-block">
                  <div className="box capital-n-profit ">
                    <div className="row ">
                      <div className="col">
                        <div className="">
                          <div>
                            <h2 className="card-sm-heading-space">
                              Capital and Profit
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col text-right">
                        <select name="" id="">
                          <option value="">Last Week</option>
                          <option value="">Last Week</option>
                          <option value="">Last Week</option>
                          <option value="">Last Week</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <img src="assets/images/capital-profit.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-7 box-margin order-md-3 order-2">
              <div className="box transactions">
                <div className="row">
                  <div className="col">
                    <h2 className="pb-3">Transactions</h2>
                    <span className="chart-desc">Chart Profit vs withdrawals</span>
                  </div>
                  <div className="col text-right">
                    <i className="fas fa-ellipsis-h grey-text"></i>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img src="assets/images/line-chart.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-5 order-md-4 order-3">
              <div className="row">
                <div className="col-md-12 col-lg-6 col-xl-6 box-margin">
                  <div className="box top-five-exchange-sell">
                    <div className="row">
                      <div className="col">
                        <div className="balance">
                          <div>
                            <h2 className="card-sm-heading-space">
                              Top 5 Exchange Sell
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="col text-right">
                        <i className="fas fa-ellipsis-h grey-text"></i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <img src="assets/images/exchange-sell.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6 box-margin">
                  <div className="box profit-today">
                    <div className="row">
                      <div className="col">
                        <div>
                          <h2 className="pb-3">Your Profit Today</h2>
                          <h3 className="mb-0">Earnings</h3>
                          <span className="chart-desc">Total Expense</span>
                        </div>
                      </div>
                      <div className="col text-right profit-amount">
                        <i className="fas fa-ellipsis-h grey-text"></i>
                        <h3 className="mb-0 earnings">$5,078.78</h3>
                        <span className="chart-desc">
                          Profit is 68% more
                          <br /> than the last month
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <img src="assets/images/earnings.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 col-xl-6 d-block d-sm-block d-md-none box-margin">
                  <div className="box financial-movements">
                    <div className="row">
                      <div className="col">
                        <div>
                          <h2 className="pb-3">Financial Movements </h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h2 className="mb-0">
                          <span>Deposited BTC</span>
                        </h2>
                        <span>0.12345678 BTC</span>
                      </div>
                      <div className="col">
                        <h2 className="mb-0">
                          <span>Arbitration Earnings</span>
                        </h2>
                        <span>0.12345678 BTC</span>
                        <span className="success">+35%</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h2 className="mb-0">
                          <span>Transfers Received</span>
                        </h2>
                        <span>0.12345678 BTC</span>
                        <span className="success">+5%</span>
                      </div>
                      <div className="col">
                        <h2 className="mb-0">
                          <span>Arbitration Earnings</span>
                        </h2>
                        <span>0.12345678 BTC</span>
                        <span className="danger">-3%</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h2 className="mb-0">
                          <span>Network Bonus</span>
                        </h2>
                        <span>0.12345678 BTC</span>
                        <span className="success">+22%</span>
                      </div>
                      <div className="col">
                        <h2 className="mb-0">
                          <span>Arbitration Earnings</span>
                        </h2>
                        <span>0.12345678 BTC</span>
                        <span className="danger">-35%</span>
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
                    <span className="success your-profit">0.0019324995 BTC</span>
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
    </>
  );
};

export default Home;
