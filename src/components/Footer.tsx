import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ujjwalg2611" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/ujjwal-gupta-5947b5321/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="mailto:ujjwalgupta2611@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
      </div>
      <p>Built by <a href="https://github.com/ujjwalg2611" target="_blank" rel="noreferrer">Ujjwal Gupta</a> · CSE @ NIT Jalandhar · © 2026</p>
    </footer>
  );
}

export default Footer;
