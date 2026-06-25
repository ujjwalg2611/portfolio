import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const languages = [
  "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL", "C", "Dart", "HTML5", "CSS3"
];

const frameworks = [
  "React.js", "Node.js", "Express.js", "Next.js", "Django", "FastAPI", "Spring Boot", "Flutter", "Flask", "Streamlit"
];

const databases = [
  "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase", "SQLAlchemy", "REST APIs"
];

const tools = [
  "Git", "GitHub", "Postman", "VS Code", "Android Studio", "Jupyter", "Linux/Bash", "Docker"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Skills & Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faCode as any} size="3x" />
            <h3>Languages</h3>
            <p>Proficient in C++ for competitive programming (DSA, graphs, DP), Java and Python for backend systems, and JavaScript/TypeScript for full-stack web development.</p>
            <div className="flex-chips">
              <span className="chip-title">Languages:</span>
              {languages.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact as any} size="3x" />
            <h3>Frameworks & Libraries</h3>
            <p>Built full-stack systems with React/Node/Express (MERN), backend APIs with Flask and FastAPI, mobile apps with Flutter, and ML dashboards with Streamlit.</p>
            <div className="flex-chips">
              <span className="chip-title">Frameworks:</span>
              {frameworks.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase as any} size="3x" />
            <h3>Databases & Tools</h3>
            <p>Experience with relational (MySQL, PostgreSQL, SQLite) and NoSQL (MongoDB, Firebase) databases. Comfortable with REST API design, ORM (SQLAlchemy), and DevOps tools like Docker and Git.</p>
            <div className="flex-chips">
              <span className="chip-title">Databases:</span>
              {databases.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
              <span className="chip-title" style={{ marginTop: '6px' }}>Tools:</span>
              {tools.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
