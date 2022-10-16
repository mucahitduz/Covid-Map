import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "../features/countrySlice";
import createSagaMiddleware from "@redux-saga/core";
import countrySaga from "../sagas/countrySaga";
import { useDispatch, useSelector } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    country: countrySlice,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(countrySaga);

export default store;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
