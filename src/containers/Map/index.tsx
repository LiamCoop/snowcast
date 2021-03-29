import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import {
  SkiObj,
  Banner,
  Dropdown,
  RegionsButton,
  SocialBar,
  Switch,
} from '../../components';
import { Pin } from '..';
import { UnitsContext } from '../../contexts';
import {
  Button,
  ControlsContainer,
  DDcontainer,
  SwContainer,
  RegBtnContainer,
  BtnText,
  LinkFmt,
  Txt,
  Link,
  SocialContainer,
  Sw,
  Metric,
  Imperial,
} from './style';

const skiInfo = require('../../SkiInfo.json');

const Map = () => {
  const [regions, setRegions] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [currentSkiObjects, setCurrentSkiObjects] = useState([]);
  const [showdropdown, setShowdropdown] = useState(false);

  // context
  const [units, setUnits] = useState('metric');

  const [viewport, setViewport] = useState({
    latitude: 45.0,
    longitude: -106.0,
    zoom: 3,
  });
  // get names of all regions with valid ski locations
  // there's for sure a better way to do this,
  // only occurs only on first page load ~O(n^4)
  useEffect(() => {
    setRegions(
      Array.from(
        new Set(
          skiInfo.flatMap((obj: SkiObj) =>
            obj.Region[0]?.name ? [obj.Region[0]?.name] : []
          )
        )
      )
    );
  }, []);

  // filter skiInfo down to only the one in the selected region (currentRegion)
  // occurs on currentRegion update
  useEffect(() => {
    const pins = skiInfo.filter(
      (obj: SkiObj) => obj.Region[0]?.name === currentRegion
    );
    setCurrentSkiObjects(pins);
  }, [currentRegion]);

  // onClick of the banner should change viewport to
  // average of all the locations showing
  const adjustVP = () => {
    if (currentSkiObjects.length == 0) return;
    let lat = 0;
    let lng = 0;
    currentSkiObjects.map((ob: SkiObj) => {
      lat += Number(ob.SkiArea.geo_lat);
      lng += Number(ob.SkiArea.geo_lng);
    });
    lat = lat / currentSkiObjects.length;
    lng = lng / currentSkiObjects.length;
    setViewport({
      latitude: lat,
      longitude: lng,
      zoom: 3,
    });
  };

  const regionCallback = (dt: any) => {
    setCurrentRegion(dt);
  };

  const dropdownCallback = (dt: any) => {
    setShowdropdown(dt);
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      width="100%"
      height="100vh"
      onViewportChange={(viewport: any) => setViewport(viewport)}
    >
      <ControlsContainer>
        <RegBtnContainer>
          <RegionsButton onClick={() => setShowdropdown(!showdropdown)} />
          <Banner onClick={adjustVP} pinCount={currentSkiObjects.length} />
        </RegBtnContainer>
        {showdropdown ? (
          <DDcontainer>
            <Dropdown setRegion={regionCallback} setShow={dropdownCallback} />
          </DDcontainer>
        ) : null}
        <SwContainer>
          <Sw>
            <Metric>{units === 'metric' ? 'Metric' : null}</Metric>
            <Switch
              onChange={() =>
                setUnits(units === 'metric' ? 'imperial' : 'metric')
              }
            />
            <Imperial>{units === 'imperial' ? 'Imperial' : null}</Imperial>
          </Sw>
        </SwContainer>
        <SocialContainer>
          <SocialBar />
        </SocialContainer>
        <LinkFmt>
          <Txt>Data supplied by&nbsp;</Txt>
          <Link href="https://www.skimap.org" target="_blank">
            SkiMap
          </Link>
          <Txt>&nbsp;and&nbsp;</Txt>
          <Link href="https://openweathermap.org" target="_blank">
            OpenWeatherMap
          </Link>
        </LinkFmt>
      </ControlsContainer>
      <UnitsContext.Provider value={units}>
        {currentSkiObjects.map((obj: SkiObj) => (
          <Pin key={obj.SkiArea.name} {...obj} />
        ))}
      </UnitsContext.Provider>
    </ReactMapGL>
  );
};

export default Map;
