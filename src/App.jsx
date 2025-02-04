import { Redirect, Router } from "@reach/router";
import {
  getAuthUserTokens,
  disableNavigationForRoute,
} from "@topcoder/micro-frontends-navbar-app";
import Sidebar from "components/Sidebar";
import React, { useLayoutEffect, useState } from "react";
import { menuItems } from "./constants";
import IntakeForm from "./IntakeForm";
import Home from "./routes/Home";
import MyWork from "./routes/MyWork";
import Profile from "./routes/Profile";
import WorkItems from "./routes/WorkItems";
import Layout from "components/Layout";
import { ScrollToTop } from "./ScrollToTop";

import "react-responsive-modal/styles.css";

import styles from "./styles/main.module.scss";

const sidebar = <Sidebar menus={menuItems} />;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useLayoutEffect(() => {
    const checkIsLoggedIn = async () => {
      const { tokenV3 } = await getAuthUserTokens();
      setIsLoggedIn(!!tokenV3);
    };
    disableNavigationForRoute("/self-service/*");
    checkIsLoggedIn();
    document.documentElement.style.setProperty("--navbarHeight", "80px");
    return () => {
      // --navbarHeight must be set to its default value,
      // removeProperty won't work
      document.documentElement.style.setProperty("--navbarHeight", "60px");
    };
  }, []);

  if (isLoggedIn == null) {
    return null;
  }

  return (
    <div className={styles["topcoder-micro-frontends-self-service-app"]}>
      <Router primary={false}>
        <ScrollToTop path="/">
          <IntakeForm path="/self-service/*" />
          {isLoggedIn && (
            <>
              <Layout
                path="/self-service/dashboard"
                sidebar={sidebar}
                PageComponent={MyWork}
              />
              <Layout
                path="/self-service/work-items/:workItemId"
                sidebar={sidebar}
                PageComponent={WorkItems}
              />
              <Redirect noThrow from="/self-service/*" to="/self-service" />
            </>
          )}
          <Profile path="/self-service/profile" />
          <Home path="/self-service" />
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
