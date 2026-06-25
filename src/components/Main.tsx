import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/photo.jpg" alt="Ujjwal Gupta" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ujjwalg2611" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/ujjwal-gupta-5947b5321/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="mailto:ujjwalgupta2611@gmail.com"><EmailIcon /></a>
          </div>
          <h1>Ujjwal Gupta</h1>
          <p>Full Stack Engineer & Competitive Programmer</p>
          <p style={{ fontSize: '0.95rem', marginTop: '8px', opacity: 0.75 }}>
            CSE undergrad at NIT Jalandhar
          </p>
          <p style={{ fontSize: '0.9rem', marginTop: '6px', opacity: 0.7 }}>
            ujjwalgupta2611@gmail.com
          </p>
          <div className="mobile_social_icons">
            <a href="https://github.com/ujjwalg2611" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/ujjwal-gupta-5947b5321/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="mailto:ujjwalgupta2611@gmail.com"><EmailIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
