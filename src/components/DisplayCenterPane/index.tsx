import React, { useState, useEffect } from 'react';
import { ConditionsObj, Icon, TimeBanner } from '../';
import { TxtL, TxtM, Col, Banners, Row, Title } from './style';

interface DCprops {
  currentDay: Array<ConditionsObj>;
  city: string;
  skiAreaName: string;
  units: string;
}

const DisplayCenterPane = ({
  currentDay,
  city,
  skiAreaName,
  units,
}: DCprops) => {
  const [currentTime, setCurrentTime] = useState(currentDay[0]);
  const CorF = units === 'metric' ? 'C' : 'F';

  // currentDay may be less than 8 in length
  // if it is, we need to pad either before or after
  // depends on the value of currentDay[0].dt_txt.split(' ')[1]
  // console.log(currentDay[0].dt_txt.split(' ')[1]);
  let dailySnow = 0;
  currentDay.map((timeSlice) => {
    dailySnow += timeSlice.snow ? timeSlice.snow?.['3h'] : 0;
  });

  useEffect(() => {
    setCurrentTime(currentDay[0]);
  }, [currentDay]);

  return (
    <Col>
      <Title>{`${skiAreaName} in ${city} on ${
        currentTime.dt_txt.split(' ')[0]
      }`}</Title>
      <Row>
        <Col>
          <Col>
            <TxtL>{currentTime.dt_txt.split(' ')[1].split(':')[0]}h</TxtL>
            <Icon icID={currentTime.weather[0].icon} imgHeight={'100vh'} />
            <TxtM>Conditions: {currentTime.weather[0].description}</TxtM>
          </Col>
          <Row>
            <Col>
              <TxtL>{`${Math.round(currentTime.main.temp)}°${CorF}`}</TxtL>
              <TxtM>
                {`${Math.round(currentTime.main.temp_min)}° / 
                  ${Math.round(currentTime.main.temp_max)}°`}
              </TxtM>
            </Col>
            <Col>
              <TxtM>{`Precipitation: ${Math.round(
                currentTime.pop * 100
              )}%`}</TxtM>
              <TxtM>{`Humidity: ${Math.round(
                currentTime.main.humidity
              )}%`}</TxtM>
              <TxtM>{`Cloud: ${currentTime.clouds.all}%`}</TxtM>
              <TxtM>{`Vis: ${
                currentTime.visibility === 10000 ? '∞' : currentTime.visibility
              }m`}</TxtM>
            </Col>
          </Row>
          <Col>
            <TxtM>
              {`Windspeed, direction: ${Math.round(currentTime.wind.speed)} 
              ${units === 'metric' ? 'm/s' : 'mph'}, 
              ${Math.round(currentTime.wind.deg)}°`}
            </TxtM>
            {currentTime.rain ? (
              <TxtM>
                Rainfall for previous 3hrs:
                {Math.round(currentTime.rain['3h'])} mm
              </TxtM>
            ) : null}
            {currentTime.snow ? (
              <TxtM>
                Snowfall over previous 3hrs: ~
                {Math.round(currentTime.snow['3h'])} mm
              </TxtM>
            ) : null}
          </Col>
        </Col>
        <Banners>
          <TxtM>3 Hour Intervals</TxtM>
          {currentDay.map((timeSlice) => {
            return (
              <TimeBanner
                onClick={() => setCurrentTime(timeSlice)}
                time={timeSlice}
                active={currentTime.dt_txt === timeSlice.dt_txt}
                key={timeSlice.dt_txt}
                units={units}
              />
            );
          })}
        </Banners>
      </Row>
    </Col>
  );
};

export default DisplayCenterPane;
