import { combineReducers } from "./combineReducers";
// import { configReducer } from "./config/config.reducer";
// import { mypageReducer } from "./mypage/mypage.reducer";
// import { userReducer } from "./user/user.reducer";

// export const initialState: AppState = {
//   user: {
//     hasSeenTutorial: false,
//     darkMode: false,
//     // isLoggedin: true,
//     isLoggedin: false,
//     loading: false,
//   },
//   config: {
//     isLoading: false,
//     isShowAlert: false,
//     alertMsg: undefined,
//   },
//   mypage: {
//     myMedicineList: [],
//   },
// };

export const reducers = combineReducers({
  // user: userReducer,
  // config: configReducer,
  // mypage: mypageReducer,
});

// export type AppState = ReturnType<typeof reducers>;
