import { login } from "../../API/api";
import { Loading_Login, Login_Response } from "../login.types";







export const loader = (loading: boolean) => ({
  type: Loading_Login,
  payload: {
    loading
  }
});





export const loadBuildlogs = (repoid:any, appid:any) => async (dispatch : any) => {

  dispatch(loader(true));

  try {
    const BuildLogsData = await login(repoid, appid);
    dispatch(updateResponse(BuildLogsData));
  } catch (err) {
alert("error")
    dispatch(loader(false));

    return;
  }

  dispatch(loader(false));
};


export const updateResponse = (res:any) => {
  return {
    type: Login_Response,
    payload: {
      buildLogs: res
    }
  };
};