import React from "react";
import "./Switch.css";

function Switch(props: { onChange: () => void }) {
    return (
        <label className="switch">
            <input type="checkbox" onChange={props.onChange} />
            <span className="slider"></span>
        </label>
    );
}

export default Switch;
