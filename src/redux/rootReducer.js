// import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
// import homeReducer from "./home/reducer"

// import feedbackReducer from "./feedback/reducer"
// import userClientReducer from "./userClient/reducer"
// import policyReducer from "./policy/reducer"
// import categoryReducer from "./category/reducer"
// import roleAndPermissionReducer from "./roleAndPermission/reducer"
// import transactionReducer from "./transaction/reducer"
// import settingReducer from "./setting/reducer"
// import userManagementReducer from "./user_management/reducer"
// import dashboardReducer from "./dashboard/reducer"
// import historyReducer from "./history/reducer"

export const rootReducer = combineReducers({
  authReducer: authReducer,
  // homeReducer: homeReducer,

  // feedbackReducer,
  // userClientReducer,
  // policyReducer,
  // categoryReducer,
  // roleAndPermissionReducer,
  // transactionReducer,
  // settingReducer,
  // userManagementReducer,
  // dashboardReducer,
  // historyReducer
});

export function* rootSaga() {}
