import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import {
  SkiObj,
  Banner,
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
  BannerContainer,
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
  const [pinCount, setPinCount] = useState(0);
  console.log(`now showing ${pinCount} locations`);
  // it would be cool to display how many pins are showing.
  //  (currentSkiObjects.length)
  // in useEffect for filtering skiInfo, call something to trigger banner?

  // context
  const [units, setUnits] = useState('metric');

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
            typeof obj.Region[0] !== 'undefined' ? obj.Region[0].name : 'null'
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
    setPinCount(pins.length);
  }, [currentRegion]);

  const AdjustUnits = () => {
    if (units === 'metric') setUnits('imperial');
    else if (units === 'imperial') setUnits('metric');
  };
  /*
  <BannerContainer>
  <Banner pinCount={pinCount} />
  </BannerContainer>
  */

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
        </RegBtnContainer>
        {showdropdown ? (
          <DDcontainer>
            {regions.map((region) => (
              <Button
                key={region}
                onClick={() => {
                  setCurrentRegion(region);
                  setShowdropdown(false);
                }}
              >
                <BtnText>{region}</BtnText>
              </Button>
            ))}
          </DDcontainer>
        ) : null}
        <SwContainer>
          <Sw>
            <Metric>{units === 'metric' ? 'Metric' : null}</Metric>
            <Switch onChange={AdjustUnits} />
            <Imperial>{units === 'imperial' ? 'Imperial' : null}</Imperial>
          </Sw>
        </SwContainer>
        <SocialContainer>
          <SocialBar />
        </SocialContainer>
      </ControlsContainer>

      <UnitsContext.Provider value={units}>
        {currentSkiObjects.map((obj: SkiObj) => (
          <Pin key={obj.SkiArea.name} {...obj} />
        ))}
      </UnitsContext.Provider>
    </ReactMapGL>
  );
};

/*
  <div className="linkfmt">
      <p>Location data courtesy of:&nbsp;</p>
      <a className="link" href="skimap.org">
          SkiMap.org
      </a>
  </div>
*/

export default Map;
