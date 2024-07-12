import { combineReducers, configureStore } from "@reduxjs/toolkit"
import fetchUserReducer from "../reducers/fetchUserReducer"
import fetchClientReducer from "../reducers/fetchClientReducer"

const rootReducer = combineReducers({
  user: fetchUserReducer,
  clients: fetchClientReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
