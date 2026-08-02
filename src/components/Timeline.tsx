import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTrophy, faCode, faBriefcase } from '@fortawesome/free-solid-svg-icons';
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
            <h4 className="vertical-timeline-element-subtitle">NIT Jalandhar · CGPA 8.07/10</h4>
            <p>
              Dr B R Ambedkar National Institute of Technology Jalandhar. Core coursework: DSA, OOP, DBMS, OS, Computer Networks, Algorithms.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jul 2026"
            iconStyle={{ background: '#0071ce', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Advanced Software Engineering Job Simulation</h3>
            <h4 className="vertical-timeline-element-subtitle">Walmart USA (Forage) · Certificate</h4>
            <p>
              Designed a normalized relational database ER diagram (supertype/subtype product hierarchy, crow's-foot notation) for a large-scale inventory and shipment tracking system. Built a Python ETL pipeline reconciling three CSV sources with competing schemas into a SQLite shipping database, populating 45+ products and 150+ shipment records.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jul 2026"
            iconStyle={{ background: '#86BC25', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analytics Job Simulation</h3>
            <h4 className="vertical-timeline-element-subtitle">Deloitte Australia (Forage) · Certificate</h4>
            <p>
              Completed a forensic technology and data analytics case simulation, cleaning and analyzing large transactional datasets to identify irregularities and trends. Built interactive Tableau dashboards and authored a structured data analysis memo to communicate findings for a simulated client engagement.
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
