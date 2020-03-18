import React, { useState } from 'react';
import Die from './Die';
import './RollDice.css';

const RollDice = () => {
  const DIE_FACES = [1, 2, 3, 4, 5, 6];

  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const getRandomElement = () =>
    DIE_FACES[Math.floor(Math.random() * DIE_FACES.length)];

  const roll = () => {
    setIsRolling(true);
    setDice1(getRandomElement());
    setDice2(getRandomElement());
    // wait one second, then set rolling to false

    setTimeout(() => setIsRolling(false), 1000);
  };

  return (
    <div className='RollDice'>
      <div className='RollDice-container'>
        <Die face={dice1} rolling={isRolling} />
        <Die face={dice2} rolling={isRolling} />
      </div>

      <button onClick={roll} disabled={isRolling}>
        {isRolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  );
};

export default RollDice;
