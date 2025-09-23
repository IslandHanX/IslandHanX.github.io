import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Work() {
  return (
    <div id="work_history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - June 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Optical Engineer - Thesis Student
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tobii, Stockholm, Sweden
            </h4>
            <p>
              Designed and automated optical experiment workflows using Python,
              improving efficiency and consistency of testing. Developed tools
              for complex data processing and visualization, enabling clearer
              analysis and insights to support research and development at
              Tobii.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2019 - Dec 2019"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Institute of Automation, CAS
            </h4>
            <p>
              Applied YOLOv1/v2, SSD, and Fast-RCNN for neural network model
              training, achieving 93.2% accuracy. Optimized real-time models and
              developed performance-critical software using Python.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Work;
