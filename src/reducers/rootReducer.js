import { combineReducers } from "redux";

import usersReducer from "./usersReducer";

// can rename how data is displayed in the store here
// by providing a key to refer to the reducer
export default combineReducers({
  usersData: usersReducer,
});
