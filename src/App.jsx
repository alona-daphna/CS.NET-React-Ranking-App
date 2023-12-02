import { useEffect, useState } from 'react';
import './App.css';
import { RankingGrid } from './components/RankingGrid.jsx';
import { ImageCarousel } from './components/ImageCarousel.jsx';

function App() {
  const [imageUrls, setImageUrls] = useState([]);

  const handleImageUpload = async (e) => {
    const files = e.target.files;

    const results = await Promise.all(
      [...files].map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(file);
        });
      })
    );

    setImageUrls((prevImages) => [...prevImages, ...results]);
  };

  const handleResetGrid = () => {};

  return (
    <div id="App">
      <a className="nav-item">Manga Ranking</a>
      <h1 id="tabelLabel">Anime Ranking</h1>
      <RankingGrid />
      <ImageCarousel imageUrls={imageUrls} />
      <input onChange={handleImageUpload} type="file" name="" id="" multiple />
      <button className="primary-btn" onClick={handleResetGrid}>
        Reset
      </button>
    </div>
  );
}

export default App;
