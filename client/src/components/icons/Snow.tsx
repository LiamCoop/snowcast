import React from 'react';

export function Snow(hgt:string) {
  return (
    <img
      src="http://openweathermap.org/img/wn/13d@2x.png"
      alt="Snow"
      height={hgt}
    />
  );
}
