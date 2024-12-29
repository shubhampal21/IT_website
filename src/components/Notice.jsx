import React, { useState, useEffect } from 'react';
import './NoticePage.css';

function NoticePage() {
  // Sample notices data
  const notices = [
    {
      id: 1,
      title: 'B.Sc IT Admissions 2024',
      description: 'The admission process for the B.Sc IT program is now open. Please visit the admissions page for details.',
      date: '2024-11-01',
    },
    {
      id: 2,
      title: 'Semester Exam Schedule',
      description: 'The semester exam schedule has been released. Check the exam dates and timings here.',
      date: '2024-11-05',
    },
    {
      id: 3,
      title: 'Workshop on Web Development',
      description: 'Join us for a workshop on the latest web development trends and technologies. Register now!',
      date: '2024-11-10',
    },
    {
      id: 4,
      title: 'Results Announcement',
      description: 'The results for the previous semester are now available. Please check the results portal for more information.',
      date: '2024-11-15',
    },
    // More notices can be added here
  ];

  const [filteredNotices, setFilteredNotices] = useState(notices);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = notices.filter(
      (notice) =>
        notice.title.toLowerCase().includes(query) ||
        notice.description.toLowerCase().includes(query)
    );
    setFilteredNotices(filtered);
  };

  return (
    <div className="notice-container">
      <h1 className="notice-title">Notices</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Notices..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {/* Notice List */}
      <div className="notice-list">
        {filteredNotices.length === 0 ? (
          <p>No notices found.</p>
        ) : (
          filteredNotices.map((notice) => (
            <div key={notice.id} className="notice-card">
              <h3>{notice.title}</h3>
              <p>{notice.description}</p>
              <span className="notice-date">{notice.date}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NoticePage;
