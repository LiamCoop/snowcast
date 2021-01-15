import React from 'react';

export function Clouds(hgt:string) {
  return (
    <img
      src="http://openweathermap.org/img/wn/02d@2x.png"
      alt="Clouds"
      height={hgt}
    />
  );
}
