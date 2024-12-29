import React from 'react';
import './BScITPage.css';

function BScITPage() {
  return (
    <div className="program-page">
      <h1 className="program-title">B.Sc. Information Technology</h1>
      
      <section className="program-overview">
        <h2>Program Overview</h2>
        <p>The B.Sc. Information Technology program is designed to equip students with the skills required to thrive in the world of IT. This program covers a wide range of topics, including computer science, networking, software development, and web technologies.</p>
      </section>

      <section className="eligibility">
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>12th grade in Science with Mathematics as one of the subjects.</li>
          <li>Minimum 50% aggregate in the qualifying exam.</li>
        </ul>
      </section>

      <section className="curriculum">
        <h2>Curriculum</h2>
        <ul>
          <li>Semester 1: Introduction to Computer Science, Mathematics for IT</li>
          <li>Semester 2: Programming in C, Database Management</li>
          <li>Semester 3: Object-Oriented Programming, Web Development</li>
          <li>Semester 4: Data Structures, Operating Systems</li>
          <li>Semester 5: Software Engineering, Computer Networks</li>
          <li>Semester 6: Cloud Computing, Mobile App Development</li>
        </ul>
      </section>

      <section className="career-prospects">
        <h2>Career Prospects</h2>
        <p>Graduates can pursue careers in software development, system administration, web development, database management, and IT consulting.</p>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>For more information about the program, contact us at <strong>bscit@rjcollege.edu</strong>.</p>
      </section>
    </div>
  );
}

export default BScITPage;
