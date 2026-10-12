import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

const jobs = [
  {
    date: "Mar 2026 - Present",
    title: "Software Engineer",
    place: "KLAIRE, Paris (internship, then part-time)",
    text: "Built the document processing pipeline behind an AI assistant for notaries and kept improving its speed and reliability. Debugged and hardened its LLM agents in production, ran storage and data migrations while the product stayed live, built multi-tenant data isolation and set up monitoring and alerting.",
  },
  {
    date: "Oct 2025 - Mar 2026",
    title: "Full-stack Software Engineer Intern",
    place: "inStorify (remote)",
    text: "Designed and built a centralised sales and billing system that replaced monthly Excel work: one-click Stripe invoicing, payment status synced by webhook and brand payouts with PDF statements, taking monthly processing from about three days to ten minutes. Also built automated emails, returns, a help desk and dashboards.",
  },
  {
    date: "Jan 2023 - Jun 2023",
    title: "Optical Engineer, MSc Thesis",
    place: "Tobii, Stockholm, Sweden",
    text: "Built Python automation and data-analysis pipelines (Pandas, Matplotlib) for polarisation-optics experiments on VR pancake lenses.",
  },
  {
    date: "Sep 2019 - Dec 2019",
    title: "Research Assistant",
    place: "Institute of Automation, Chinese Academy of Sciences",
    text: "Trained object-detection models (YOLO, SSD, Fast R-CNN), reaching 93.2% accuracy.",
  },
];

function Work() {
  return (
    <div id="work_history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          {jobs.map((job) => (
            <VerticalTimelineElement
              key={job.title + job.date}
              className="vertical-timeline-element--work"
              date={job.date}
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{job.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{job.place}</h4>
              <p>{job.text}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Work;
