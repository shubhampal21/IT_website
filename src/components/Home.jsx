import React from 'react';
import './Home.css';

function Home() {
  const announcements = [
    "🎉 FY Admission 2025: Registration is now open! Apply soon! 🎉",
    "🌟 Campus 2024 Record: Breaking new milestones in placements and achievements! 🌟",
    "📚 PYQS for 3rd Semester: Available now in the resources section! 📚"
  ];

  return (
    <div className="container">
      {/* IT Department Section */}
      <section className="it-department-section">
        <div className="titles-container">
          <h1 className="it-department-title">🌟Welcome To IT Department🌟</h1>
        </div>
        <div className="it-department-box">
          <img
            src="/assets/aboutDepart.png"
            alt="IT Department team working together"
            className="it-department-image"
            loading="lazy"
          />
          <div className="it-department-text-content">
            <p className="it-department-description">
            We are excited to have you as part of our vibrant community of aspiring technologists. Our department offers a wealth of resources, dedicated faculty, and cutting-edge programs to help you thrive in the world of Information Technology. Whether you're here to develop new skills, explore innovative technologies, or prepare for a successful career, we are here to support you every step of the way. We look forward to seeing you grow and succeed as you embark on this exciting journey with us!
             
            </p>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="announcement-container">
        <div className="titles-container">
          <h1 className="announcement-title">Announcement 📢</h1>
        </div>
        <div className="announcement-box">
          <div className="announcement-text">
            {announcements.map((announcement, index) => (
              <div key={index} className="announcement-item">
                {announcement}
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default Home;
