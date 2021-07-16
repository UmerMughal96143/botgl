import React, { Fragment, Suspense, lazy } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation, withRouter } from "react-router-dom";
import UserSidebar from "./components/UserSidebar";
const AdminSidebar = lazy(() => import("./components/AdminSidebar"));
const Footer = lazy(() => import("./components/Footer"));
const Header = lazy(() => import("./components/Header"));
const Bot = lazy(() => import("./screens/Admin/Bot"));
const Dashboard = lazy(() => import("./screens/Admin/Dashboard"));
const Arbitration = lazy(() => import("./screens/Admin/Arbitration"));
const WalletWithdrawals = lazy(() => import("./screens/Admin/WalletWithdrawals"));
const RunTrade = lazy(() => import("./screens/User/RunTrade"));
const Mybot = lazy(() => import("./screens/User/MyBot"));
const Home = lazy(() => import("./screens/User/Home"));
const ReferralLink = lazy(() => import("./screens/User/ReferralLink"));
const Withdrawals = lazy(() => import("./screens/User/Withdrawals"));
const MyTrades = lazy(() => import("./screens/User/MyTrades"));
const Transfers = lazy(() => import("./screens/User/Transfers"));

const Routes = withRouter(({location}) => {
    const [pathname , setPathName] = useState(null)
    console.log(location)
    useEffect(() => {
        if(location.pathname){
            setPathName(location.pathname)
        }
    },[location.pathname])
    return (
      <Fragment>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
          { location.pathname == "/bot" ||
            location.pathname == "/arbitration" ||
            location.pathname == "/walletwithdrawals" ||
            location.pathname == "/dashboard" ?  <AdminSidebar /> : (
              <UserSidebar/> 
          )}
            <Header />
             
            {/* {location.pathname == "/dashboard"  ? <AdminSidebar/> : null } */}
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/bot" component={Bot} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/arbitration" component={Arbitration} />
                  <Route path="/walletwithdrawals" component={WalletWithdrawals} />
                  <Route path="/runtrade" component={RunTrade} />
                  <Route path="/mybot" component={Mybot} />
                  <Route path="/referrallink" component={ReferralLink} />
                  <Route path="/withdrawals" component={Withdrawals} />
                  <Route path="/mytrades" component={MyTrades} />
                  <Route path="/transfers" component={Transfers} />
              </Switch>
            <Footer />
          </Suspense>
        </Router>
      </Fragment>
    );
  })

export default Routes;
