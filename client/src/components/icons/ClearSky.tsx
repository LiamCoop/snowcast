import React from 'react';

export function ClearSky(hgt:string) {
  return (
    <img
      src="http://openweathermap.org/img/wn/00d@2x.png"
      alt="ClearSky"
      height={hgt}
    />
  );
}
