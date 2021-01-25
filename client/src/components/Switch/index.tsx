import React from "react";
import "./Switch.css";

export function Switch() {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
        </label>
    );
}
