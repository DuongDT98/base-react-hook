import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";

export default function BasePage() {
  // const { listUserLoginPermission } = useSelector(state => ({
  //   listUserLoginPermission: state.authReducer.listUserLoginPermission,
  // }), shallowEqual)

  return (
    <Suspense>
      <Switch>
        <Redirect from="/login" to="/" />
      </Switch>
    </Suspense>
  );
}
