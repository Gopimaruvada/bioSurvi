import { buildQueries } from "@testing-library/react";
import { login } from "../../API/api";
import { Loading_Login, Login_Response } from "../login.types";


import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';





export const loader = (loading: boolean) => ({
  type: Loading_Login,
  payload: {
    loading
  }
});




export const loadBuildlogs = (repoid: string, appid: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(loader(true)); // Start loading

    // Assuming that login returns an Observable as in your previous code
    const BuildLogsData = await login(repoid, appid).toPromise(); // Convert the Observable to a Promise
console.log(BuildLogsData?.response)



    dispatch(updateResponse(BuildLogsData)); // Dispatch the successful response
  
    dispatch(loader(false)); 
  } catch (err) {
    console.error(err); 
    dispatch(loader(false)); 

    
  }
};


export const updateResponse = (res:any) => {
  console.log(res.response)
  return {
    type: Login_Response,
    payload: {
      buildLogs: res.response
    }
  };
};