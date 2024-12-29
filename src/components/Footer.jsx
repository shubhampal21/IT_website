import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>About IT Department</h4>
          <p>
            The IT Department of Ramniranjan Jhunjhunwala College (RJC) offers
            comprehensive programs in Information Technology, providing students
            with industry-relevant skills and career opportunities. Our courses
            include B.Sc. IT and M.Sc. IT.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/Timetable">Time - table</a></li>
            <li><a href="/Gallery">Gallery</a></li>
            <li><a href="/MentorMenti">Mentor Menti</a></li>
            <li><a href="/Academic">Academic</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Information</h4>
          <p>Ramniranjan Jhunjhunwala College, IT Department</p>
          <p>Email: itdepartment@rjcollege.edu.in</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: Ghatkopar, Mumbai, Maharashtra, India</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/school/rj-college/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/rjcollege/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.twitter.com/rjcollege/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RJC IT Department. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
