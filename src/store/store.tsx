
  import { connectRouter, routerMiddleware } from "connected-react-router";
  import { reducer as toastrReducer } from "react-redux-toastr";
  import { applyMiddleware, combineReducers, compose, createStore } from "redux";
  import { combineEpics, createEpicMiddleware } from "redux-observable";
  import { persistReducer, persistStore } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  import thunk from "redux-thunk";
  import { ajax } from "rxjs/ajax";
  import { webSocket } from "rxjs/webSocket";
  import { createBrowserHistory } from 'history';

  import { allReducers } from "../Features/rootReducers";
import { LoginReducername } from "../../src/Features/Login/reducers/login.reducer"
  // This should also combine with any registered reducers,
  // currently the search-related dynamic reducers are created later on,
  // so we don't have them at this point in the code.
  // v3 reducer is not blacklisted
  const history = createBrowserHistory();
  const globalReducer = combineReducers({
    ...allReducers,
    router: connectRouter(history),
    toastr: toastrReducer
  });
  
  const blacklist = [
    LoginReducername,

    "router",
    "toastr"
  ];
  
  
 
  const config = {
    key: "root",
    storage,
    blacklist
  };
  
  const rootReducer = (state: any, action: { type: string; action: any }) => {
    return globalReducer(state, action);
  };
  
  export function configureStore(initialState: any) {
    const epicMiddleware = createEpicMiddleware({
      dependencies: { ajax$: ajax, ws$: () => webSocket }
    });
  
    // eslint-disable-next-line no-shadow
    const store = createStore(
      persistReducer(config, rootReducer),
      initialState, // initial state
      compose(
        applyMiddleware(
       
          thunk,
          epicMiddleware,
          routerMiddleware(history)
        ),
        
        // If you are using the devToolsExtension, you can add it here also
        typeof (window as any).__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
          ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
          : (f: any) => f
      )
    );
  
   
  
    // eslint-disable-next-line no-shadow
    const persistor = persistStore(store);
    const attachReducers = (store as any).attachReducers?.bind(store);
  
    // "redux-persist" integration
    (store as any).attachReducers = (...args: any) => {
      attachReducers(...args);
      persistor.persist();
    };
  
    return { store, persistor };
  }
  
  export const { store, persistor } = configureStore({});