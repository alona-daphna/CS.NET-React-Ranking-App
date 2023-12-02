import React, { useEffect } from 'react';

export const ImageCarousel = ({ imageUrls }) => {
  const handleDragStart = (e, imageURL) => {
    e.dataTransfer.setData('imageURL', imageURL);
  };

  return (
    <div className="image-carousel">
      {imageUrls.map((url) => (
        <div className="unranked-cell">
          <div
            className="img"
            draggable={true}
            onDragStart={(e) => handleDragStart(e, url)}
            style={{
              backgroundImage: `url('${url}')`,
            }}
          />
        </div>
      ))}
    </div>
  );
};
