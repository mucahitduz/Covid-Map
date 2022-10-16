import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { sagaActions } from "./actions";
import { getCountryData } from "../features/countrySlice";

export function* workGetCountry(name) {
  const options = {
    method: "GET",
    url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
    params: { country: `${name.name}` },
    headers: {
      "X-RapidAPI-Key": "cfb1ce87f8msh74e95a424b866f8p10d7f6jsn5f3a2b32bc93",
      "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    },
  };

  const getData = async () => {
    try {
      const res = await axios.request(options);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const country = yield call(getData);
  yield put(getCountryData(country));
  console.log(country);
}

export default function* rootSaga() {
  yield takeLatest(sagaActions.FETCH_COUNTRY, workGetCountry);
}
