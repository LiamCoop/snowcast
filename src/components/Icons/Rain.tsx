import React from 'react';

export function Rain(hgt: string) {
  return (
    <img
      src="http://openweathermap.org/img/wn/10d@2x.png"
      alt="Rain"
      height={hgt}
    />
  );
}
