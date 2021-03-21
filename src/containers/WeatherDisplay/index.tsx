import React, { useState, useContext } from 'react';
import {
  //components
  DisplayCenterPane,
  DayButton,
  //Typescript interfaces
  WeatherObj,
} from '../../components';
import { UnitsContext } from '../../contexts';
import { Card, Col, DayButtonContainer } from './style';

import './WeatherDisplay.css';

function WeatherDisplay(props: { weather: WeatherObj; skiAreaName: string }) {
  //each day is 8, 3-hour sections

  const [currentDay, setCurrentDay] = useState(props.weather.list.slice(0, 8));
  const units = useContext(UnitsContext);

  return (
    <Card>
      <Col>
        <DisplayCenterPane
          currentDay={currentDay}
          city={props.weather.city.name}
          skiAreaName={props.skiAreaName}
          units={units}
        />
        <DayButtonContainer>
          <DayButton
            active={currentDay[0].dt_txt === props.weather.list[0].dt_txt}
            day={props.weather.list.slice(0, 8)}
            onClick={() => setCurrentDay(props.weather.list.slice(0, 8))}
            units={units}
          />
          <DayButton
            active={currentDay[0].dt_txt === props.weather.list[8].dt_txt}
            day={props.weather.list.slice(8, 16)}
            onClick={() => setCurrentDay(props.weather.list.slice(8, 16))}
            units={units}
          />
          <DayButton
            active={currentDay[0].dt_txt === props.weather.list[16].dt_txt}
            day={props.weather.list.slice(16, 24)}
            onClick={() => setCurrentDay(props.weather.list.slice(16, 24))}
            units={units}
          />
          <DayButton
            active={currentDay[0].dt_txt === props.weather.list[24].dt_txt}
            day={props.weather.list.slice(24, 32)}
            onClick={() => setCurrentDay(props.weather.list.slice(24, 32))}
            units={units}
          />
          <DayButton
            active={currentDay[0].dt_txt === props.weather.list[32].dt_txt}
            day={props.weather.list.slice(32)}
            onClick={() => setCurrentDay(props.weather.list.slice(32, 40))}
            units={units}
          />
        </DayButtonContainer>
        {/*
          <div className="linkfmt">
              <p>Location data courtesy of:&nbsp;</p>
              <a className="link" href="skimap.org">
                  SkiMap.org
              </a>
          </div>
        */}
      </Col>
    </Card>
  );
}

/*days.map((day) => {
  return (
    <DayButton
      active={currentDay.dateTime === day.list[0].dt_txt}
      units={units}
      day={day}
      onClick={() => setCurrentDay(day)}
      key={day.list[0].dt_txt}
    />
  );
})*/
export default WeatherDisplay;
