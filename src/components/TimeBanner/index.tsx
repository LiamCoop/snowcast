import React from 'react';
import { ConditionsObj, Icon } from '../';
import { BannerBtn } from './style';

function TimeBanner(props: {
  time: ConditionsObj;
  active: boolean;
  onClick: () => void;
  units: string;
}) {
  return (
    <BannerBtn
      style={props.active ? { opacity: 0.3 } : { opacity: 1 }}
      onClick={props.onClick}
    >
      <p>
        {props.time.dt_txt.split(' ')[1].split(':')[0]}h
        {props.time.dt_txt.split(' ')[1].split(':')[1]}
      </p>
      <Icon icID={props.time.weather[0].icon} imgHeight={'35vw'} />
      <p>
        {Math.round(
          (props.time.main.temp_min - props.time.main.temp_max) / 2 +
            props.time.main.temp_max
        )}{' '}
        &deg;{props.units === 'metric' ? 'C' : 'F'}
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
      {
        <p>
          Snow:{' '}
          {props.time.snow
            ? Math.round(props.time.snow?.['3h'] * 100) / 10
            : '0'}
          mm
        </p>
      }
    </BannerBtn>
  );
}

export default TimeBanner;
