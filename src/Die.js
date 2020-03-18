import React from 'react';
import './Die.css';
import { convertNumToString } from './utils/numberHelper';

const Die = ({ face, rolling }) => {
  return (
    <i
      className={`Die fas fa-dice-${convertNumToString(face)} ${rolling &&
        'rolling'}`}
    ></i>
  );
};

export default Die;
