import React from 'react';
import ImageCarousel from './ImageCarousel';
import './App.css';

const imageUrls = [
  "./src/assets/course_1.jpg",
  "./src/assets/course_2.jpg",
  "./src/assets/course_3.jpg"
];

function App() {
  return (
    <div className="App">
      <h1 className="title">Image Carousel Component</h1>
      <ImageCarousel images={imageUrls} />
    </div>
  );
}

export default App;