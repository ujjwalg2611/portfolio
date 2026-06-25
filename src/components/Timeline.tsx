import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTrophy, faCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & Milestones</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2024 – May 2028"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech — Computer Science & Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">NIT Jalandhar · CGPA 8.03/10</h4>
            <p>
              Dr B R Ambedkar National Institute of Technology Jalandhar. Core coursework: DSA, OOP, DBMS, OS, Computer Networks, Algorithms.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2026"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Selected Participant — Devcation Delhi 2026</h3>
            <h4 className="vertical-timeline-element-subtitle">GDG on Campus, IGDTUW × IIT Delhi</h4>
            <p>
              Selected for the Google Developer Groups hackathon organized by GDG on Campus at IGDTUW in collaboration with IIT Delhi.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <h3 className="vertical-timeline-element-title">JEE Advanced 2024 Qualifier</h3>
            <h4 className="vertical-timeline-element-subtitle">Top 0.9% — 1.2M Candidates</h4>
            <p>
              Cleared JEE Mains 2024 in the top 0.9% among 1.2 million candidates and qualified for JEE Advanced 2024 — India's most competitive engineering entrance exam.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2021 – Feb 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <h3 className="vertical-timeline-element-title">SOF IMO — Gold Medal of Excellence</h3>
            <h4 className="vertical-timeline-element-subtitle">Science Olympiad Foundation</h4>
            <p>
              Awarded the Gold Medal of Excellence at School Level in the International Mathematics Olympiad by the Science Olympiad Foundation.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
