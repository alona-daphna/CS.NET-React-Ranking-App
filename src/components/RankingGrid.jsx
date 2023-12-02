import React, { useEffect, useState } from 'react';

export const RankingGrid = ({ items, imgArr }) => {
  const tiers = [
    { displayText: 'S', color: 'rgb(255, 127, 127)' },
    { displayText: 'A', color: 'rgb(255, 191, 127)' },
    { displayText: 'B', color: 'rgb(255, 223, 127)' },
    { displayText: 'C', color: 'rgb(255, 255, 127)' },
    { displayText: 'D', color: 'rgb(191, 255, 127)' },
  ];

  const handleDrop = (e) => {
    e.preventDefault();
    const imageURL = e.dataTransfer.getData('imageURL');

    console.log(imageURL);
  };

  return (
    <div className="tier-container">
      {tiers.map((tier, index) => (
        <div className="tier-row">
          <div
            className="tier-label"
            contentEditable={true}
            style={{ background: tier.color }}
          >
            <span>{tier.displayText}</span>
          </div>
          <div
            className="tier-sort"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          ></div>
        </div>
      ))}
    </div>
  );
};
