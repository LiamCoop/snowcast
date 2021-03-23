import React from 'react';

interface IconProps {
  icID: string;
  imgHeight: string;
}

const Icon = ({ icID, imgHeight }: IconProps): JSX.Element => (
  <img
    src={`http://openweathermap.org/img/wn/${icID}@2x.png`}
    alt="icon"
    height={imgHeight}
  />
);

export default Icon;
