import React from "react";
import "./Switch.css";

export function Switch(props: { onChange: () => void }) {
    return (
        <label className="switch">
            <input type="checkbox" onChange={props.onChange} />
            <span className="slider"></span>
        </label>
    );
}
