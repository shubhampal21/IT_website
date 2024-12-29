import React from 'react';
import './Events.css';

function Events() {
  const events = [
    {
      id: 1,
      title: 'Tech Symposium 2024',
      date: 'March 20, 2024',
      description: 'Join us for the annual Tech Symposium to explore the latest trends in technology.',
      link: '/events/tech-symposium'
    },
    {
      id: 2,
      title: 'Coding Bootcamp',
      date: 'April 15, 2024',
      description: 'An intensive 3-day coding bootcamp to sharpen your programming skills.',
      link: '/events/coding-bootcamp'
    },
    {
      id: 3,
      title: 'Hackathon 2024',
      date: 'May 10, 2024',
      description: 'A 24-hour hackathon where students compete to build innovative solutions.',
      link: '/events/hackathon'
    },
    // Add more events as needed
  ];

  return (
    <div className="events">
      <h1 className="events-title">Upcoming Events</h1>
      <div className="events-list">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h2 className="event-title">{event.title}</h2>
            <p className="event-date">{event.date}</p>
            <p className="event-description">{event.description}</p>
            <a href={event.link} className="event-link">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
