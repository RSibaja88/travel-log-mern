import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { listEntries } from "./API";
import "./App.css";

/* eslint-disable */

const MapboxToken =
  "pk.eyJ1IjoicnNzaWJhamE4OCIsImEiOiJja2VtYnE5d2swNHI3MnpvejJ5Z2dvbTV2In0.O1sTV6k8TgV_jFVfFPpVbQ";

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 34.901973,
    longitude: -45.608356,
    zoom: 2.55,
  });

  const getEntries = async () => {
    const logEntries = await listEntries();
    setLogEntries(logEntries);
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <section className="mapSection">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MapboxToken}
        mapStyle="mapbox://styles/rssibaja88/ckerw92o53xjo19r8kg8z92kg"
        onViewportChange={setViewport}
      >
        {logEntries.map((entry) => (
          <div className="mapGroup">
            <Marker
              key={entry._id}
              latitude={entry.latitude}
              longitude={entry.longitude}
            >
              <div
                onClick={() =>
                  setShowPopup({
                    // ...showPopup,
                    [entry._id]: true,
                  })
                }
              >
                <svg
                  className="marker"
                  style={{
                    height: `${8 * viewport.zoom}px`,
                    width: `${8 * viewport.zoom}px`,
                  }}
                  height="20"
                  viewBox="0 0 64 64"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Place_holder" data-name="Place holder">
                    <path
                      d="m32 2a19.994 19.994 0 0 0 -20 20c0 11.05 20 40 20 40s20-28.95 20-40a19.994 19.994 0 0 0 -20-20zm0 31a11 11 0 1 1 11-11 10.994 10.994 0 0 1 -11 11z"
                      fill="#DAA520"
                    />
                    <path d="m32 1a21.023 21.023 0 0 0 -21 21c0 11.229 19.354 39.375 20.177 40.568a1 1 0 0 0 1.646 0c.823-1.193 20.177-29.339 20.177-40.568a21.023 21.023 0 0 0 -21-21zm0 59.218c-3.748-5.579-19-28.863-19-38.218a19 19 0 0 1 38 0c0 9.353-15.252 32.638-19 38.218z" />
                    <path d="m32 10a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10z" />
                  </g>
                </svg>
              </div>
            </Marker>
            {showPopup[entry._id] ? (
              <Popup
                latitude={entry.latitude}
                longitude={entry.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() =>
                  setShowPopup({
                    ...showPopup,
                    [entry._id]: false,
                  })
                }
                anchor="top"
              >
                <div className="popCard">
                  <h3 className="poptitle">{entry.title}</h3>
                  <img className="popPic" src={entry.image} />
                  <p className="popRating">Rating: {entry.rating}</p>
                  <p className="popDescription">{entry.description}</p>
                  <p className="popRating">
                    Date visted: {entry.visit_date.substring(0, 10)}
                  </p>
                </div>
              </Popup>
            ) : null}
          </div>
        ))}
      </ReactMapGL>
    </section>
  );
};

export default App;
