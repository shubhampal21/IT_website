import React, { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery() {
  const events = [
    {
      id: 1,
      name: 'Tech Symposium 2024',
      description: 'An annual tech symposium featuring guest speakers, workshops, and exhibitions.',
      images: [
        { src: '/assets/aboutDepart.png', caption: 'Opening Ceremony' },
        { src: '/images/symposium2.jpg', caption: 'Keynote Speaker' },
        { src: '/images/symposium3.jpg', caption: 'Networking Event' },
        { src: '/images/symposium4.jpg', caption: 'Workshop' },
      ],
    },
    {
      id: 2,
      name: 'Coding Bootcamp',
      description: 'An intensive coding bootcamp to enhance programming skills in various tech stacks.',
      images: [
        { src: '/images/bootcamp1.jpg', caption: 'Bootcamp Day 1' },
        { src: '/images/bootcamp2.jpg', caption: 'Workshop on React' },
        { src: '/images/bootcamp3.jpg', caption: 'Teamwork in Action' },
        { src: '/images/bootcamp4.jpg', caption: 'Bootcamp Graduation' },
      ],
    },
    // Add more events here
  ];

  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Auto-slide the images every 5 seconds
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [activeEventIndex]);

  const nextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === events[activeEventIndex].images.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0
        ? events[activeEventIndex].images.length - 1
        : prevIndex - 1
    );
  };

  const handleEventChange = (index) => {
    setActiveEventIndex(index);
    setActiveImageIndex(0); // Reset image slider when event changes
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>

      {/* Event Grid */}
      <div className="event-grid">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => handleEventChange(index)}
          >
            <img src={event.images[0].src} alt={event.name} className="event-image" />
            <div className="event-info">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Slider for Active Event */}
      <div className="image-slider-container">
        <div className="slider-navigation">
          <button className="prev-button" onClick={prevImage}>
            &#10094;
          </button>
          <div className="slider-images">
            <img
              src={events[activeEventIndex].images[activeImageIndex].src}
              alt="Event"
              className="slider-image"
            />
            <p className="image-caption">
              {events[activeEventIndex].images[activeImageIndex].caption}
            </p>
          </div>
          <button className="next-button" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
