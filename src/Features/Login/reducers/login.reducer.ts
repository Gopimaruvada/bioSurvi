// reducer.js
import createReducer from '../../../store/createReducer';
import { loader, updateResponse  } from '../actions/login.actions';
import { Loading_Login, Login_Response } from '../login.types';

export interface LoginReducerState {
    loading: boolean,
    data? : any[],
  };

export const initialState : LoginReducerState = {
    loading: false,
    data : undefined,
}

const handleLoginDetails = (state: any, payload: any) => {
    return{
        ...state,
datloading: payload.loading
    }
  }


  const handleResponse = (state:any, payload:any) => {
    console.log(payload)
    return{
        ...state,
data: payload.buildLogs
    }
  }

const LoginReducer = createReducer(initialState, {
    [Loading_Login]: handleLoginDetails,
    [Login_Response]: handleResponse,
})



export const LoginReducername = "login"
export default LoginReducer;
