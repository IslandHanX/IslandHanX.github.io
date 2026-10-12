import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCertificate } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

const items = [
  {
    date: "2026",
    title: "AWS Certified AI Practitioner",
    place: "Amazon Web Services",
    text: "Certification",
    icon: faCertificate,
  },
  {
    date: "2024 - Present",
    title: "École 42 Paris",
    place: "Paris, France",
    text: "Software Engineering Programme",
    icon: faGraduationCap,
  },
  {
    date: "2021 - 2024",
    title: "KTH Royal Institute of Technology",
    place: "Stockholm, Sweden",
    text: "MSc in Engineering Physics",
    icon: faGraduationCap,
  },
  {
    date: "2016 - 2020",
    title: "Nankai University",
    place: "Tianjin, China",
    text: "BSc in Electronic Science and Technology",
    icon: faGraduationCap,
  },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & Certification</h1>
        <VerticalTimeline>
          {items.map((item) => (
            <VerticalTimelineElement
              key={item.title}
              className="vertical-timeline-element--work"
              date={item.date}
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={item.icon} />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.place}</h4>
              <p>{item.text}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
