import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { listEntries, deleteEntries } from "./API";
import NewEntryForm from "./NewEntryForm";
import WitW from "./img/noBrassGradientWitW1.png";

import "./App.css";

/* eslint-disable */

const MapboxToken =
  "pk.eyJ1IjoicnNzaWJhamE4OCIsImEiOiJja2VtYnE5d2swNHI3MnpvejJ5Z2dvbTV2In0.O1sTV6k8TgV_jFVfFPpVbQ";

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [addEntry, setAddEntry] = useState(null);
  const [showPopup, setShowPopup] = useState({});
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 32.306826,
    longitude: -41.750677,
    zoom: 2.25,
  });

  const getEntries = async () => {
    const logEntries = await listEntries();
    setLogEntries(logEntries);
  };

  useEffect(() => {
    getEntries();
  }, []);

  const showAddMarkerPopup = (event) => {
    const [longitude, latitude] = event.lngLat;
    setAddEntry({
      latitude,
      longitude,
    });
  };

  return (
    <section className="mapSection">
      <div className="header">
        <div className="boxes">
          <div className="aboutTitle">About</div>This app serves as a personal
          travel log. An interactive journal of "Where in the World" I've been
          able to visit. Click the map markers for more details about my trip.
        </div>
        <img src={WitW} className="witwLogo" />
        <div className="boxes">
          <div className="aboutTitle">Try it Out!</div>If you'd like to add a
          travel log of your own, double-click the location and submit. If you
          don't want to leave it on the map, you can always delete your
          submission.
        </div>
      </div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MapboxToken}
        mapStyle="mapbox://styles/rssibaja88/ckerw92o53xjo19r8kg8z92kg"
        onViewportChange={setViewport}
        onDblClick={showAddMarkerPopup}
      >
        {logEntries.map((entry) => (
          <div className="mapGroup" key={entry._id}>
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
                    height: `${10 * viewport.zoom}px`,
                    width: `${10 * viewport.zoom}px`,
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
                dynamicPosition={true}
                sortByDepth={true}
                onClose={() => setShowPopup({})}
                anchor="top"
              >
                <div className="popCard">
                  <div className="floatbox">
                    <div className="longlat">
                      longitude: {entry.longitude} || latitude: {entry.latitude}
                    </div>
                  </div>
                  <div className="infoBox">
                    <div className="blockOne">
                      <h3 className="poptitle">{entry.title}</h3>
                      <img className="popPic" src={entry.image} />
                      <p className="popRating">Rating: {entry.rating}</p>
                    </div>
                    <div className="blockTwo">
                      <div className="entryTitle">About the Trip</div>
                      <p className="popDescription">{entry.description}</p>
                      <p className="popDate">
                        Date visted: {entry.visit_date.substring(0, 10)}
                      </p>
                      <button
                        className="deleteButton"
                        onClick={() => {
                          deleteEntries(entry._id);
                          getEntries();
                          //updates existing entries to reflect changes
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </Popup>
            ) : null}
          </div>
        ))}
        {addEntry ? (
          <>
            <Marker
              key={addEntry._id}
              latitude={addEntry.latitude}
              longitude={addEntry.longitude}
            >
              <div
                onClick={() =>
                  setShowPopup({
                    // ...showPopup,
                    [addEntry._id]: true,
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
                      fill="#3E4A81"
                    />
                    <path d="m32 1a21.023 21.023 0 0 0 -21 21c0 11.229 19.354 39.375 20.177 40.568a1 1 0 0 0 1.646 0c.823-1.193 20.177-29.339 20.177-40.568a21.023 21.023 0 0 0 -21-21zm0 59.218c-3.748-5.579-19-28.863-19-38.218a19 19 0 0 1 38 0c0 9.353-15.252 32.638-19 38.218z" />
                    <path d="m32 10a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10z" />
                  </g>
                </svg>
              </div>
            </Marker>
            <Popup
              latitude={addEntry.latitude}
              longitude={addEntry.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              sortByDepth={true}
              onClose={() => setAddEntry(null)}
              anchor="top"
            >
              <div className="popCard2">
                <NewEntryForm
                  onClose={() => {
                    setAddEntry(null);
                    getEntries();
                  }}
                  location={addEntry}
                />
              </div>
            </Popup>
          </>
        ) : null}
      </ReactMapGL>
    </section>
  );
};

export default App;
