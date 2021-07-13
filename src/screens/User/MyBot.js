import React from "react";

const MyBot = () => {
  return (
    <>
      {/* <!------------------ Content -------------------> */}
      <div className="main withdrawals-page bot-page">
        <div className="container-fluid">
          <div className="row body-area mb-4">
            <div className="col-md-12 col-lg-12 col-xl-4">
              <div
                className="box"
                style={{background:"none", boxShadow: "none", padding:"0px"}}
              >
                <div className="accordion custom-accordion" id="accordionExample">
                  <div className="card">
                    <div className="accordion-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Select the capital
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="total-capital">
                          <h2>Total Capital</h2>
                        </div>
                        <div className="custom">
                          <h2>Custom</h2>
                        </div>
                        <div className="slidecontainer">
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value="50"
                            className="slider"
                            id="myRange"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="min-arbitrage">
                      <div className="box">
                        <h2>Minimum Arbitrage</h2>
                        <div className="slidecontainer">
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value="50"
                            className="slider"
                            id="myRange"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="box">
                      <div className="operation-detail-title">
                        <h2>Details of the operation (Bot)</h2>
                      </div>
                      <div className="row details-of-operation">
                        <div className="col-6">
                          <h2 className="theme-accent heading-one">Bot profit</h2>
                          <div>
                            <span>BTC 0.000058619</span>
                          </div>
                          <div>
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <h2 className="theme-accent">
                            {" "}
                            Amount of operations performed
                          </h2>
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-8">
              <div className="withdrawals operations">
                <div className="box buy">
                  <div className="table-title">
                    <h2 className="mb-4">List of operation (Bot)</h2>
                  </div>
                  <div className="row withdrawal-table">
                    <div className="col-md-12 col-lg-12 col-xl-12">
                      <div className="row">
                        <div className="col">
                          <h2 className="theme-accent">Trade</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Value</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Value of sale</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Value of purchase</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Arbitration</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Status</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Date</h2>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className=" col">
                          <div className="currency">
                            <span>Binance</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-sale">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-purchase">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="percentage-change">
                            <span>
                              <i className="fal fa-chevron-circle-up success pr-2"></i>
                              1,92%
                            </span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="date">
                            <span>10/28/12, 12:30</span>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className=" col">
                          <div className="currency">
                            <span>Binance</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-sale">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-purchase">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="percentage-change">
                            <span>
                              <i className="fal fa-chevron-circle-up success pr-2"></i>
                              1,92%
                            </span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="date">
                            <span>10/28/12, 12:30</span>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className=" col">
                          <div className="currency">
                            <span>Binance</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-sale">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-purchase">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="percentage-change">
                            <span>
                              <i className="fal fa-chevron-circle-up success pr-2"></i>
                              1,92%
                            </span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="date">
                            <span>10/28/12, 12:30</span>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className=" col">
                          <div className="currency">
                            <span>Binance</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-sale">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-purchase">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="percentage-change">
                            <span>
                              <i className="fal fa-chevron-circle-up success pr-2"></i>
                              1,92%
                            </span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="date">
                            <span>10/28/12, 12:30</span>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className=" col">
                          <div className="currency">
                            <span>Binance</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-sale">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-purchase">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="percentage-change">
                            <span>
                              <i className="fal fa-chevron-circle-up success pr-2"></i>
                              1,92%
                            </span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="success">In progress</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="date">
                            <span>10/28/12, 12:30</span>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className=" col">
                          <div className="currency">
                            <span>Binance</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-sale">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-purchase">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="percentage-change">
                            <span>
                              <i className="fal fa-chevron-circle-up success pr-2"></i>
                              1,92%
                            </span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="date">
                            <span>10/28/12, 12:30</span>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className=" col">
                          <div className="currency">
                            <span>Binance</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value">
                            <span>BTC 0.08671492</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-sale">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="value-of-purchase">
                            <span>$ 59,216,80</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="percentage-change">
                            <span>
                              <i className="fal fa-chevron-circle-up success pr-2"></i>
                              1,92%
                            </span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="date">
                            <span>10/28/12, 12:30</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              {/* <!-- <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        Launch demo modal
                    </button> --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!------------------ Content -------------------> */}
      {/* <!-- Button trigger modal --> */}
      {/* <!-- Modal --> */}
      <div
        className="modal  modal-three fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content text-center">
            <div className="">
              <h1 className="modal-title theme-accent" id="exampleModalLongTitle">
                Сonfirm the operation?
              </h1>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  {" "}
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
                </span>
              </button>
            </div>
            <div className="modal-body"></div>
            <div className="custom-modal-footer">
              <button type="button" className="btn custom-btn">
                Confirm
              </button>
              <button
                type="button"
                className="btn custom-btn cancel-btn"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBot;
