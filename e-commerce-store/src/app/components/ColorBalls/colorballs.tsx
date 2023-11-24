// ColorBalls.js
import React, { useState } from 'react';

const ColorBalls = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  const styles = `
    .colorBallsContainer {
      display: flex;
    }

    .colorBall {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .blue {
      background-color: red;
    }

    .yellow {
      background-color: green;
    }

    .green {
      background-color: blue;
    }

    .selected {
      transform: scale(1.2);
   
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="colorBallsContainer">
        <div
          className={`colorBall blue ${selectedColor === 'blue' && 'selected'}`}
          onClick={() => handleClick('blue')}
        ></div>
        <div
          className={`colorBall yellow ${selectedColor === 'yellow' && 'selected'}`}
          onClick={() => handleClick('yellow')}
        ></div>
        <div
          className={`colorBall green ${selectedColor === 'green' && 'selected'}`}
          onClick={() => handleClick('green')}
        ></div>
      </div>
    </div>
  );
};

export default ColorBalls;
