/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import BasePage from "./BasePage";
import { actionLoginByToken } from "../redux/auth/actions";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
// import LandingPage from "./pages/landing-page/LandingPage";

export function Routes() {
  const dispatch = useDispatch();
  const { infoUser } = useSelector(
    (state) => ({
      infoUser: state.authReducer.infoUser,
    }),
    shallowEqual
  );

  const token = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("token")) {
        await dispatch(actionLoginByToken());
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Switch>
        {infoUser || token ? (
          <Layout>
            <BasePage />
          </Layout>
        ) : (
          // <Switch>
          //   <Route path="/landing-page" component={LandingPage} />
          //   <Redirect to="/landing-page" />
          // </Switch>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Redirect to="/login" />
          </Switch>
        )}
      </Switch>
    </>
  );
}
