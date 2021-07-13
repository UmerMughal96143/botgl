import React from "react";

const WalletWithdrawals = () => {
  return (
    <>
      {/* <!------------------ Content -------------------> */}
      <div className="main withdrawals-page wallet-n-withdrawals">
        <div className="container-fluid">
          <div className="row body-area mb-4">
            <div className="col-md-6 col-lg-5 col-xl-6 box-margin">
              <div className="main-profile-avatar-wrap">
                <div className="d-flex align-item-center">
                  <img src="assets/images/profile-image.jpg" alt="" />
                  <h1 className="mb-0">
                    Good Morning ADMIN
                    <br />
                    <span>Here are your stats for Today, 17 May 2021</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 col-xl-2 align-self-bottom text-right">
              <div>
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
            <div className="col-md-12 col-lg-12 col-xl-4 ">
              <div className="row box-margin">
                <div className="col-md-12">
                  <div className="box">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <div className="bitcoin-wallet">
                          <h2>Main Wallet (Botgle BOT)</h2>
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
              <div className="box">
                <h1 className="mb-0">Withdrawals</h1>
                <div className="row">
                  <div className="col">
                    <div className="balance total-balance">
                      <h2 className="theme-accent">Total Balance</h2>
                      <p className="mb-0">
                        <span>BTC 0.00001101</span>
                      </p>
                    </div>
                  </div>
                </div>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-12 col-lg-6 col-xl-6 mt-4">
                      <label for="inputEmail4">Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Amount to withdraw in Bitcoin"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="inputAddress">Your Wallet</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your wallet address"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputAddress">2FA code (app)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter 2FA Google Authenticator code"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6 sms-validation">
                      <label for="smsvalidation">2FA SMS Validation</label>
                      <div className="request-code">
                        <a href="#" className="form-control">
                          Request Code
                        </a>
                      </div>
                    </div>
                    <div className="form-group col-md-6 email-validation">
                      <label for="emailvalidation">2FA Email Validation</label>
                      <div className="request-code">
                        <a href="#" className="form-control">
                          Request Code
                        </a>
                      </div>
                    </div>
                    <p className="mb-0 desc">
                      We will send a validation code to your phone and email
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn custom-btn">
                        Request Withdrawal
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-12 col-lg-12 col-xl-8">
              <div className="withdrawals">
                <div className="box buy">
                  <div className="table-title">
                    <h2 className="mb-4">
                      List of withdrawals from main wallet (Botgle BOT)
                    </h2>
                  </div>
                  <div className="row withdrawal-table">
                    <div className="col-md-12 col-lg-12 col-xl-12">
                      <div className="row">
                        <div className="col">
                          <h2 className="theme-accent">Value</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Fee</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Amount</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Status</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Date</h2>
                        </div>
                        <div className="col"></div>
                      </div>
                      <div className="row align-items-center">
                        <div className=" col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="fee">
                            <span>0,0019000000</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="amount">
                            <span>$ 52216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="success">Paid</span>
                          </div>
                        </div>
                        <div className=" col">
                          <div className="date">
                            <span>8/9/21, 12:33</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <button className="btn custom-btn">Blockchain</button>
                          </div>
                        </div>
                      </div>
                      <div className="row  align-items-center">
                        <div className=" col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="fee">
                            <span>0,0019000000</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="amount">
                            <span>$ 52216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="success pending">Pending</span>
                          </div>
                        </div>
                        <div className=" col">
                          <div className="date">
                            <span>8/9/21, 12:33</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <button className="btn custom-btn">Blockchain</button>
                          </div>
                        </div>
                      </div>
                      <div className="row  align-items-center">
                        <div className=" col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="fee">
                            <span>0,0019000000</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="amount">
                            <span>$ 52216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Canceled</span>
                          </div>
                        </div>
                        <div className=" col">
                          <div className="date">
                            <span>8/9/21, 12:33</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <button className="btn custom-btn">Blockchain</button>
                          </div>
                        </div>
                      </div>
                      <div className="row  align-items-center">
                        <div className=" col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="fee">
                            <span>0,0019000000</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="amount">
                            <span>$ 52216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="success">Paid</span>
                          </div>
                        </div>
                        <div className=" col">
                          <div className="date">
                            <span>8/9/21, 12:33</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <button className="btn custom-btn">Blockchain</button>
                          </div>
                        </div>
                      </div>
                      <div className="row  align-items-center">
                        <div className=" col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="fee">
                            <span>0,0019000000</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="amount">
                            <span>$ 52216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="success">Paid</span>
                          </div>
                        </div>
                        <div className=" col">
                          <div className="date">
                            <span>8/9/21, 12:33</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <button className="btn custom-btn">Blockchain</button>
                          </div>
                        </div>
                      </div>
                      <div className="row  align-items-center">
                        <div className=" col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="fee">
                            <span>0,0019000000</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="amount">
                            <span>$ 52216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="success">Paid</span>
                          </div>
                        </div>
                        <div className=" col">
                          <div className="date">
                            <span>8/9/21, 12:33</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <button className="btn custom-btn">Blockchain</button>
                          </div>
                        </div>
                      </div>
                      <div className="row  align-items-center">
                        <div className=" col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="fee">
                            <span>0,0019000000</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="amount">
                            <span>$ 52216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="success">Paid</span>
                          </div>
                        </div>
                        <div className=" col">
                          <div className="date">
                            <span>8/9/21, 12:33</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <button className="btn custom-btn">Blockchain</button>
                          </div>
                        </div>
                      </div>
                      <div className="row  align-items-center">
                        <div className=" col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="fee">
                            <span>0,0019000000</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="amount">
                            <span>$ 52216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="success">Paid</span>
                          </div>
                        </div>
                        <div className=" col">
                          <div className="date">
                            <span>8/9/21, 12:33</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <button className="btn custom-btn">Blockchain</button>
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
      </div>

      {/* <!------------------ Content -------------------> */}
      {/* <!-- Modal --> */}
      <div
        className="modal modal-two fade"
        id="modaltwo"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="">
              <h1>Details of the operation</h1>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M19.324 3.93954L13.2641 10.0001L19.324 16.0603C20.2254 16.962 20.2254 18.4227 19.324 19.3244C18.8736 19.7748 18.2832 20.0001 17.693 20.0001C17.1018 20.0001 16.5113 19.7751 16.0613 19.3244L10 13.2635L3.93929 19.3244C3.48897 19.7747 2.89845 20.0001 2.30775 20.0001C1.71722 20.0001 1.1271 19.7751 0.676379 19.3244C-0.225 18.423 -0.225 16.9623 0.676379 16.0602L6.7361 10L0.676034 3.93954C-0.225345 3.03816 -0.225345 1.57714 0.676034 0.675762C1.57724 -0.224928 3.0374 -0.224928 3.93895 0.675762L9.99999 6.73628L16.0606 0.675762C16.9623 -0.224928 18.4226 -0.224928 19.3237 0.675762C20.2254 1.57714 20.2254 3.03816 19.324 3.93954Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="20" height="20.0001" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-2 col-6 order-md-1 order-1 pl-0">
                  <h2 className="theme-accent">Value</h2>
                  <span>BTC 0.08671492</span>
                </div>
                <div className="col-md-4 col-6 order-md-2 order-3">
                  <h2 className="theme-accent">Percentage of arbitrage</h2>
                  <span>1,69 %</span>
                </div>
                <div className="col-md-4 col-6 order-md-3 order-2">
                  <h2 className="theme-accent">User's profit in BTC</h2>
                  <span>BTC 0.000058619</span>
                </div>
                <div className="col-md-2 col-6 order-md-4 order-4">
                  <h2 className="theme-accent">Status</h2>
                  <span>Execute</span>
                </div>
              </div>
              <div className="row buying-selling-stat">
                <div className="col-2 col-md-3 pl-0">
                  <div className="pt-4">
                    <h2>
                      <span>Price</span>
                    </h2>
                  </div>
                  <div>
                    <h2>
                      <span>Value</span>
                    </h2>
                  </div>
                  <div>
                    <h2>
                      <span>Free</span>
                    </h2>
                  </div>
                </div>
                <div className="col col-md-4">
                  <h2 className="success">Buying Price</h2>
                  <div>
                    <span className="buying-price">$ 8,004,43</span>
                  </div>
                  <div>
                    <span className="buying-price">$ 5,029,85</span>
                  </div>
                  <div>
                    <span className="buying-price">0,26 %</span>
                  </div>
                </div>
                <div className="col  col-md-4">
                  <h2 className="danger">Selling Price</h2>
                  <div>
                    <span className="selling-price">$ 59,216,80</span>
                  </div>
                  <div>
                    <span className="selling-price">$ 5,135,15</span>
                  </div>
                  <div>
                    <span className="selling-price">0,10 %</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-custom-footer text-center">
              <button className="btn custom-btn">Blockchain</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletWithdrawals;
