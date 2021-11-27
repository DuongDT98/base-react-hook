// import { fetchApi } from "../../app/lib/api";
// import { Types } from "./types";
// import { message } from "antd";
// import { actionLoading } from "../home/actions";
// import axios from "axios";

// export const actionLogout = () => async () => {
//   try {
//     localStorage.removeItem("token");
//     window.location.assign("/login");
//     return;
//   } catch (error) {
//     alert(error || error?.message);
//   }
// };

// export const actionLogin = (payload) => async (dispatch, getState) => {
//   try {
//     console.log("payload", payload);
//     const response = axios.post(
//       "https://mcapi.yougo.vn/api/auth/login",
//       payload
//     );
//     console.log("response", response);
//     // if (response.code !== 200) {
//     //     dispatch(actionLoading(false))
//     //     return checkErrorCode(response?.code, response?.message)
//     // }
//     // const token = response?.data?.token || "102301840128390120";
//     // localStorage.setItem("token", token);
//     // // let listPermission = []

//     // // for (let item of response?.data?.list_permission) {
//     // //     if (item?.permission.length > 0) {
//     // //         listPermission = [...listPermission, ...item.permission.map(it => it.slug)]
//     // //     }
//     // // }

//     // await Promise.all([
//     //   dispatch(actionSaveInfoUser(response?.data?.user)),
//     //   // dispatch(actionSaveListUserLoginPermission(listPermission))
//     // ]);
//     // return response?.data?.user;
//   } catch (error) {}
// };

// export const actionLoginByToken = () => async (dispatch) => {
//   try {
//     const response = await fetchApi(`/admin/profile`, "get");
//     // if (response?.code !== 200) {
//     //     dispatch(actionLoading(false))
//     //     return checkErrorCode(response?.code, response?.message)
//     // }
//     const token = response?.data?.token || "102301840128390120";
//     localStorage.setItem("token", token);
//     // let listPermission = []

//     // for (let item of response?.data?.list_permission) {
//     //     if (item?.permission.length > 0) {
//     //         listPermission = [...listPermission, ...item.permission.map(it => it.slug)]
//     //     }
//     // }

//     await Promise.all([
//       dispatch(actionSaveInfoUser(response?.data?.user)),
//       // dispatch(actionSaveListUserLoginPermission(listPermission))
//     ]);
//     return response?.data?.user;
//   } catch (error) {
//     alert(error || error?.message);
//   }
// };

// export const actionSaveInfoUser = (payload) => ({
//   type: Types.SAVE_INFO_USER,
//   payload,
// });

// export const actionSaveListUserLoginPermission = (payload) => ({
//   type: Types.SAVE_LIST_USER_LOGIN_PERMISSION,
//   payload,
// });

// export const checkErrorCode = async (code, errorMessage) => {
//   switch (code) {
//     case 400: {
//       message.error(`${errorMessage || "Api error!"}`);
//       break;
//     }
//     case 401: {
//       message.error("Authen token is invalid!");
//       localStorage.removeItem("token");
//       window.location.assign("/login");
//       break;
//     }
//     default:
//       break;
//   }
// };
