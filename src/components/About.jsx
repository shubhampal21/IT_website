import React from 'react'
import './About.css'

function About() {
  return (
    <div>
      <section className="about-department-section">
      <div className="container">
        <div className="titles-container">
          <h1>About Department</h1>
        </div>

        <div className="department-description">
          <p>
            The Department of Information Technology at Ramniranjan Jhunjhunwala College, Ghatkopar, Mumbai, was established in 2007. 
            The Department offers both undergraduate (B.Sc. IT) and postgraduate (M.Sc. IT) programmes. 
            The M.Sc. IT programme was introduced in the year 2016.
          </p>
        </div>

        <div className="in-charge-section">
          <h2>In-Charge</h2>
          <ul>
            <li><strong>Ms. Archana Bhide</strong> (In Charge – UG)</li>
            <li><strong>Ms. Bharti Bhole</strong> (In Charge – PG)</li>
          </ul>
        </div>
      </div>
    </section>
       {/* Infrastructure Section 
       <section className="infrastructure-container">
        <div className="titles-container">
          <h1 className="infrastructure-title">Infrastructure</h1>
        </div>
        <div className="infrastructure-box">
          <div className="infrastructure-item">
            <h2>Library</h2>
            <p>There is a separate Library for Information Technology. The students have access to the Central Library as well as the Departmental Library. More than 1200 books are available in the departmental library.</p>
          </div>
          <div className="infrastructure-item">
            <h2>Computer Lab</h2>
            <p>135 Desktop Computers with latest configurations are available for students to work on programming, research, and various IT-related activities.</p>
          </div>
          <div className="infrastructure-item">
            <h2>Internet Connection</h2>
            <p>High-speed internet connection is available across the department, ensuring seamless access to online resources and learning platforms.</p>
          </div>
          <div className="infrastructure-item">
            <h2>Facilities</h2>
            <p>Modern facilities for students to practice and develop skills in a conducive environment.</p>
          </div>
          <div className="infrastructure-item">
            <h2>Instruments</h2>
            <p>The department is equipped with the latest instruments and tools to support learning and research.</p>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default About
