import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const EMAIL = "ujjwalgupta2611@gmail.com";

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleSend = (e: any) => {
    e.preventDefault();
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const body = `From: ${name} (${email})\n\n${message}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Have an internship opportunity, project idea, or just want to talk competitive programming? Let's connect!</p>
          
          <div className="contact-info-row">
            <a href={`mailto:${EMAIL}`} className="contact-info-item">
              <EmailIcon /> {EMAIL}
            </a>
            <a href="tel:+919719564851" className="contact-info-item">
              <PhoneIcon /> +91-9719564851
            </a>
            <a href="https://github.com/ujjwalg2611" target="_blank" rel="noreferrer" className="contact-info-item">
              <GitHubIcon /> ujjwalg2611
            </a>
            <a href="https://www.linkedin.com/in/ujjwal-gupta-5947b5321/" target="_blank" rel="noreferrer" className="contact-info-item">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={handleSend}
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              label="Subject"
              placeholder="Internship Opportunity / Collaboration"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="body-form"
              style={{ marginBottom: '16px' }}
            />
            <TextField
              required
              label="Message"
              placeholder="Tell me more about the opportunity or what you'd like to discuss"
              multiline
              rows={8}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '12px' }}>
              Opens your email client with this message pre-filled — nothing is sent through a third party.
            </p>
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSend}>
              Send Message
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
