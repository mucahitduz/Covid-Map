import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { sagaActions } from "../sagas/actions";
import { Ring } from "@uiball/loaders";
import moment from "moment";

import "../styles/Country.css";

const Country = () => {
  const { name } = useParams();
  const dispatch = useAppDispatch();
  const countryData = useAppSelector((state) => state.country.data);

  const data = countryData.data;

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_COUNTRY, name });
  }, [dispatch, name]);

  return (
    <div data-testid="data">
      {data ? (
        <section>
          <div className="container">
            <div className="data data-title">
              <h2>
                COVID-19 CASES <br /> in <br />
                {data.location === "Global" ? (
                  <div className="error">
                    There was an error fetching data. Showing Global Cases
                  </div>
                ) : (
                  data.location
                )}
              </h2>
            </div>
            <div className="cols">
              <div className="country-data">
                <div className="data data-country">
                  <h4>Country</h4> {data.location}
                </div>
                <div className="data data-confirmed">
                  <h4>Confirmed</h4> {data.confirmed.toLocaleString("en")}
                </div>
                <div className="data data-deaths">
                  <h4>Deaths</h4> {data.deaths.toLocaleString("en")}
                </div>
                <div className="data data-recovered">
                  <h4>Recovered</h4>{" "}
                  {data.recovered == null ? (
                    <p>No data</p>
                  ) : (
                    data.recovered.toLocaleString("en")
                  )}
                </div>
                <div className="data data-time">
                  <h4>Last Checked</h4>{" "}
                  {moment(data.lastChecked).format("DD.MM.YYYY, HH:mm")}
                </div>
                <div className="data data-time">
                  <h4>Last Reported</h4>{" "}
                  {moment(data.lastReported).format("DD.MM.YYYY, HH:mm")}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="loader">
            <Ring size={40} lineWeight={5} speed={2} color="white" />
          </div>
        </section>
      )}
    </div>
  );
};

export default Country;
