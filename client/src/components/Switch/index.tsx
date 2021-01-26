import React, { useContext } from "react";
import { UnitsContext } from "../../contexts";
import "./Switch.css";

export function Switch() {
    const { units, setUnits } = useContext(UnitsContext);
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
        </label>
    );
}
