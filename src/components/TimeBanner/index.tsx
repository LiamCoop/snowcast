import React from 'react';
import Icon from '../Icons';
import { ConditionsObj } from '../types';
import { BannerBtn, Text } from './style';

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
    <Text>{time.dt_txt.split(' ')[1].split(':')[0]}h</Text>
    <Icon icID={time.weather[0].icon} imgHeight={'35vw'} />
    <Text>
      {`${Math.round(
        (time.main.temp_min - time.main.temp_max) / 2 + time.main.temp_max
      )}°${units === 'metric' ? 'C' : 'F'}`}
    </Text>
    <Text>
      {`❄️ ${time.snow ? Math.round(time.snow?.['3h'] * 10) / 10 : '0'}mm`}
    </Text>
  </BannerBtn>
);

export default TimeBanner;
