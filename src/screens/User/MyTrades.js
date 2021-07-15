import React from "react";

const MyTrades = () => {
  return (
    <>
      <div className="main my-trades">
        <div className="container-fluid">
          <div className="row body-area mb-4">
            <div className="col-md-12 col-lg-12 col-xl-10">
              <div className="mytrade-content">
                <div className="box buy">
                  <h1>My Trades</h1>
                  <div className="desc">
                    <p>Choose the best arbitration for you</p>
                  </div>
                  <div className="row mytrade-table">
                    <div className="col-md-12 col-lg-12 col-xl-12">
                      <div className="row">
                        <div className="col-md-3 col">
                          <h2 className="theme-accent">Trade</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Arbitrage</h2>
                        </div>
                        <div className="col-md-2 col">
                          <h2 className="theme-accent">Profit</h2>
                        </div>
                        <div className="col">
                          <h2 className="theme-accent">Status</h2>
                        </div>
                        <div className="col-md-3 col">
                          <h2 className="theme-accent">Time</h2>
                        </div>
                        <div className="col"></div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Huobi Global - Huobi Global</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="success">In process</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span>Remaining time: 00:05:45</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span
                              className="theme-accent"
                              data-toggle="modal"
                              data-target="#modaltwo"
                            >
                              Details
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Bitfinex - Bitso</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Bitso - Currency</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Bitstamp - Bittrex</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Bittrex - FTX</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Currency - Kraken</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>FTX - Bitso</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Huobi Global - Currency</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Kraken - Kucoin</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Kucoin - Huobi Global</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>OkCoin - Currency</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Poloniex - Huobi Global</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>OKEX - Currency</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Coinbase - Binance</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>HitBtc - Huobi Global</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col">
                          <div className="currency">
                            <span>Bitpanda - Binance</span>
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
                        <div className="col-md-2 col">
                          <div className="profit">
                            <span>BTC 0.00000706</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="status">
                            <span className="danger">Executed</span>
                          </div>
                        </div>
                        <div className="col-md-3 col">
                          <div className="time">
                            <span></span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="details">
                            <span className="theme-accent">Details</span>
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
    </>
  );
};

export default MyTrades;
