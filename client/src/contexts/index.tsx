import React from "react";

export enum Unit {
    Metric = "metric",
    Imperial = "imperial",
}

export const UnitsContext = React.createContext({ Units: Unit.Metric });
