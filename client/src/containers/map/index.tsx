import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { SkiObj, RegionsButton, SocialBar, Switch } from "../../components";
import { Pin } from "../";
import { UnitsContext } from "../../contexts";
import "./Map.css";

const skiInfo = require("../../SkiInfo.json");

export function Map() {
    const [regions, setRegions] = useState([]);
    const [currentRegion, setCurrentRegion] = useState();
    const [currentSkiObjects, setCurrentSkiObjects] = useState([]);
    const [showdropdown, setShowdropdown] = useState(false);

    //contexte
    const [units, setUnits] = useState("metric");

    const [viewport, setViewport] = useState({
        latitude: 45.0,
        longitude: -106.0,
        zoom: 3,
    });

    // display the names of all regions containing ski locations
    // occurs on first page load
    useEffect(() => {
        setRegions(
            Array.from(
                new Set(
                    skiInfo.map((obj: SkiObj) =>
                        typeof obj.Region[0] !== "undefined"
                            ? obj.Region[0].name
                            : "null"
                    )
                )
            )
        );
    }, []);

    // filter skiInfo down to only the one in the selected region (currentRegion)
    // occurs on currentRegion update
    useEffect(() => {
        setCurrentSkiObjects(
            skiInfo.filter((obj: SkiObj) => {
                if (
                    typeof obj.Region[0] === "undefined" ||
                    obj.SkiArea.geo_lat == null ||
                    obj.SkiArea.geo_lng == null
                )
                    return false;
                return obj.Region[0].name === currentRegion;
            })
        );
    }, [currentRegion]);

    const AdjustUnits = () => {
        if (units === "metric") {
            setUnits("imperial");
        } else if (units === "imperial") {
            setUnits("metric");
        }
    };

    //Need overlay grid to orient things to top left and top right?
    return (
        <ReactMapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
            onViewportChange={(viewport) => setViewport(viewport)}
        >
            <RegionsButton onClick={() => setShowdropdown(!showdropdown)} />
            <div>
                {showdropdown
                    ? regions.map((region) => (
                          <button
                              className="button"
                              key={region}
                              onClick={() => {
                                  setCurrentRegion(region);
                                  setShowdropdown(false);
                              }}
                          >
                              {region}
                          </button>
                      ))
                    : null}
            </div>
            <UnitsContext.Provider value={units}>
                {currentSkiObjects.map((obj: SkiObj) => (
                    <Pin key={obj.SkiArea.name} {...obj} />
                ))}
            </UnitsContext.Provider>
            <div className="sw">
                <p id="metric">{units === "metric" ? "Metric" : null}</p>
                <Switch onChange={AdjustUnits} />
                <p id="imperial">{units === "imperial" ? "Imperial" : null}</p>
            </div>
        </ReactMapGL>
    );
}
