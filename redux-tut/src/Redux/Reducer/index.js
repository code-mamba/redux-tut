import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
	counterReducer,
	authReducer
})
export default allReducer