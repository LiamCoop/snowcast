import React from 'react';
import { ConditionsObj, Icon } from '../';
import { BannerBtn, Time, Temp, Snow } from './style';

interface TimeBannerProps {
  time: ConditionsObj;
  active: boolean;
  onClick: () => void;
  units: string;
}

const TimeBanner = ({ time, active, onClick, units }: TimeBannerProps) => (
  <BannerBtn
    style={active ? { opacity: 0.3 } : { opacity: 1 }}
    onClick={onClick}
  >
    <Time>{time.dt_txt.split(' ')[1].split(':')[0]}h</Time>
    <Icon icID={time.weather[0].icon} imgHeight={'35vw'} />
    <Temp>
      {`${Math.round(
        (time.main.temp_min - time.main.temp_max) / 2 + time.main.temp_max
      )}°${units === 'metric' ? 'C' : 'F'}`}
    </Temp>
    <Snow>
      {`Snow: ${time.snow ? Math.round(time.snow?.['3h'] * 10) / 10 : '0'}mm`}
    </Snow>
  </BannerBtn>
);

export default TimeBanner;
