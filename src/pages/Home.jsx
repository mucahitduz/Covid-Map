import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { useEffect, memo } from "react";
import { getCountry } from "../features/countrySlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import ReactTooltip from "react-tooltip";

import ".//../styles/App.css";

const Home = ({ setTooltipContent }) => {
  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  const handleClick = (geo) => () => {
    dispatch(getCountry(geo));
    navigate(`/${geo.name}`);
  };

  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    <div className="map" data-tip="" data-testid="geography">
      <div className="title">COVID-19 TRACKER WORLD MAP</div>
      <ComposableMap
        projectionConfig={{
          scale: 150,
        }}
      >
        <ZoomableGroup
          translateExtent={[
            [0, 0],
            [850, 650],
          ]}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={handleClick(geo.properties)}
                    onMouseEnter={() => {
                      setTooltipContent(`${geo.properties.name}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                ))}
                {geographies.map((geo) => {
                  const centroid = geoCentroid(geo);
                  return (
                    <g key={geo.rsmKey} geography={geo}>
                      <Marker coordinates={centroid}>
                        <text
                          className="text"
                          y="1"
                          fontSize={0.7}
                          textAnchor="middle"
                        >
                          {geo.properties.name}
                        </text>
                      </Marker>
                    </g>
                  );
                })}
              </>
            )}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(Home);
