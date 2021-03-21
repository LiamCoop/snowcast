import React from 'react';
import './Switch.css';

interface SwitchProps {
  onChange: () => void;
}

const Switch = ({ onChange }: SwitchProps) => (
  <label className="switch">
    <input type="checkbox" onChange={onChange} />
    <span className="slider"></span>
  </label>
);

export default Switch;
