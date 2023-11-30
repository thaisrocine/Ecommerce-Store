
import React, { useState } from 'react';

const SizeProduct = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  return (
    <div>
      <div>
        <button
          className={`sizeButton ${selectedSize === 'PP' && 'selected'}`}
          onClick={() => handleSizeClick('PP')}
        >
          PP
        </button>
        <button
          className={`sizeButton ${selectedSize === 'P' && 'selected'}`}
          onClick={() => handleSizeClick('P')}
        >
          P
        </button>
        <button
          className={`sizeButton ${selectedSize === 'M' && 'selected'}`}
          onClick={() => handleSizeClick('M')}
        >
          M
        </button>
        <button
          className={`sizeButton ${selectedSize === 'G' && 'selected'}`}
          onClick={() => handleSizeClick('G')}
        >
          G
        </button>
        <button
          className={`sizeButton ${selectedSize === 'GG' && 'selected'}`}
          onClick={() => handleSizeClick('GG')}
        >
          GG
        </button>
      </div>
      <style jsx>{`
        .sizeButton {
          padding: 8px;
          margin: 4px;
          cursor: pointer;
          border: 1px solid #ccc;
          background-color: #4C4C48;
        }

        .selected {
          background-color: #1F1F1F;
        }
      `}</style>
    </div>
  );
};

export default SizeProduct;
