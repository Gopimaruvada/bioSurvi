import { combineReducers } from "redux";
import  LoginReducer, {LoginReducername, LoginReducerState} from "../Features/Login/reducers/login.reducer"



export interface RootReducer {

    [LoginReducername] : LoginReducerState,
}

export const allReducers = {

    [LoginReducername] : LoginReducer,
};

export const RootReducer = combineReducers<RootReducer>(allReducers);
