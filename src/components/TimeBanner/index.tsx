import React from 'react';
import { ConditionsObj, Icon } from '../';
import { BannerBtn } from './style';

interface TimeBannerProps {
  time: ConditionsObj;
  active: boolean;
  onClick: () => void;
  units: string;
}

const TimeBanner = ({ time, active, onClick, units }: TimeBannerProps) => {
  return (
    <BannerBtn
      style={active ? { opacity: 0.3 } : { opacity: 1 }}
      onClick={onClick}
    >
      <p>
        {time.dt_txt.split(' ')[1].split(':')[0]}h
        {time.dt_txt.split(' ')[1].split(':')[1]}
      </p>
      <Icon icID={time.weather[0].icon} imgHeight={'35vw'} />
      <p>
        {Math.round(
          (time.main.temp_min - time.main.temp_max) / 2 + time.main.temp_max
        )}{' '}
        &deg;{units === 'metric' ? 'C' : 'F'}
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
      {
        <p>
          Snow: {time.snow ? Math.round(time.snow?.['3h'] * 100) / 10 : '0'}
          mm
        </p>
      }
    </BannerBtn>
  );
};

export default TimeBanner;
