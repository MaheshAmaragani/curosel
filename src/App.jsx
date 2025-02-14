import React from 'react';
import ImageCarousel from './ImageCarousel';
import './App.css';

const imageUrls = [
  "course_1.jpg",
  "course_2.jpg",
  "course_3.jpg"
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