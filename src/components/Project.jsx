import React from "react";
import '../assets/styles/Project.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Chip from '@mui/material/Chip';



const projects = [
  {
    name: "BioShield-UPI",
    tagline: "Multi-factor biometric fraud detection for UPI payments",
    desc: "Full-stack biometric authentication system combining behavioral keystroke dynamics with facial recognition (DeepFace/VGG-Face) to flag fraudulent UPI transactions before they clear.",
    bullets: [
      "Real-time keystroke dynamics engine extracting 6 biometric features per session, 85%+ recognition accuracy across 1,000+ auth events",
      "3-tier risk engine (ALLOW / OTP / BLOCK) with configurable thresholds — cut fraudulent attempts by 90%, unauthorized access by 95%",
      "JWT sessions, bcrypt hashing, REST APIs; migrated SQLite → PostgreSQL for production",
    ],
    stack: ["Python", "Flask", "DeepFace", "SQLAlchemy", "PostgreSQL", "JWT"],
    status: "Completed",
    github: "https://github.com/ujjwalg2611/Bioshield-UPI",
    live: null,
  },
  {
    name: "Wanderly",
    tagline: "Real-time collaborative travel itinerary planner",
    desc: "Full-stack MERN travel planner with an AI recommendation engine and live multi-user editing — built so a group can plan a trip together without ten versions of the same spreadsheet.",
    bullets: [
      "AI-powered recommendation engine generating day-wise morning/afternoon/evening plans from destination, budget, and interests",
      "Real-time collaborative editing via Socket.io rooms — multiple users co-plan itineraries with live sync",
      "Social layer (follow system, activity feed, likes/comments) plus expense tracking with Recharts visualization",
      "JWT auth with bcrypt, 10+ route REST API spanning trips, itineraries, expenses, social, and recommendations",
    ],
    stack: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "JWT", "Tailwind"],
    status: "Completed",
    github: "https://github.com/ujjwalg2611/wanderly-travel-planner",
    live: null,
  },
  {
    name: "Dijkstra Visualizer",
    tagline: "Interactive shortest-path algorithm visualizer",
    desc: "A grid-based visualization platform for Dijkstra's algorithm — built to make graph traversal something you can watch happen, not just read about.",
    bullets: [
      "Weighted adjacency matrix with priority-queue optimization for shortest-path computation",
      "Optimized React rendering pipeline — 40% animation performance improvement across grids up to 50×20 nodes",
      "Configurable obstacle placement with real-time step-by-step execution, 35% faster pathfinding than naive BFS",
      "Adopted by 200+ learners for DSA study; stats bar surfaces visited nodes, path length, execution time",
    ],
    stack: ["React.js", "JavaScript", "Graph Algorithms", "Data Structures"],
    status: "Completed",
    github: "https://github.com/ujjwalg2611/Dijkstra-Visualizer",
    live: "https://dijkstra-visualizer-delta.vercel.app/",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project project-card-ujjwal" key={p.name}>
            <div className="project-terminal-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-name">{p.name}</span>
            </div>
            <div className="project-body">
              <h2>{p.name}</h2>
              <p className="project-tagline">{p.tagline}</p>
              <p>{p.desc}</p>
              <ul className="project-bullets">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <Chip key={s} label={s} size="small" className="chip" style={{ margin: '2px' }} />
                ))}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <GitHubIcon style={{ fontSize: '1.1rem', marginRight: '4px' }} /> View Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <LaunchIcon style={{ fontSize: '1.1rem', marginRight: '4px' }} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
