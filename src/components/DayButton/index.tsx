import React from 'react';

import { DayObj, ConditionsObj, Icon } from '../';
import { Button, TxtSm, TxtMd } from './style';
// import './DayButton.css';

function GetIcon(array: Array<ConditionsObj>): string {
  const map = array.reduce(
    (acc: Map<string, number>, e: ConditionsObj) =>
      acc.set(e.weather[0].icon, (acc.get(e.weather[0].icon) || 0) + 1),
    new Map()
  );
  const maxi = Math.max(...Array.from(map.values()));
  let icon = '';
  map.forEach((val: number, obj: string) => {
    if (val == maxi) icon = obj;
  });
  return icon;
}

interface DayButtonProps {
  day: Array<ConditionsObj>;
  onClick: () => void;
  active: boolean;
  units: string;
}

const DayButton = ({ day, onClick, active, units }: DayButtonProps) => {
  let temp = 0;
  let daySnow = 0;

  day.map((time) => {
    daySnow += time.snow ? time.snow?.['3h'] : 0;
    temp += time.main.temp;
  });
  temp = Math.round(temp / 8);

  return (
    <Button style={{ opacity: active ? 0.3 : 1 }} onClick={onClick}>
      <TxtMd>{`${day[0].dt_txt.split(' ')[0]}`}</TxtMd>
      <TxtSm>{`${temp}° ${units === 'metric' ? 'C' : 'F'}`}</TxtSm>
      <Icon icID={GetIcon(day)} imgHeight="50vh" />
      <TxtSm>Snow: {Math.round(daySnow)}mm</TxtSm>
    </Button>
  );
};

export default DayButton;
