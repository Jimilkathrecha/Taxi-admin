import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import {thunk} from "redux-thunk";
import localHourlyPackageReducer from "./reducers/localHourlyPackageReducer";
import tripReducer from "./reducers/tripReducer";
import stateReducer from "./reducers/stateReducer";
import cityReducer from "./reducers/cityReducer";
import destinationReducer from "./reducers/destinationReducer";
import airportReducer from "./reducers/airportReducer";

const rootReducer = combineReducers({
  airPortState: airportReducer,
  authState: authReducer,
  cityState: cityReducer,
  stateState: stateReducer,
  tripState:tripReducer,
  localHourlyPackageState: localHourlyPackageReducer,
  destinationState: destinationReducer,

});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(), applyMiddleware(thunk));

export default store;
