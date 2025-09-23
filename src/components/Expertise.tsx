import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "HTML",
  "CSS",
  "SQL",
  "PostgreSQL",
  "Postman",
];

const labelsSecond = ["Git", "GitHub Actions", "Docker", "Linux"];

const labelsThird = ["OpenAI", "Mistral AI"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I develop full-stack applications using React, TypeScript, and
              JavaScript on the frontend, and Node.js with Express on the
              backend. For data management, I work with SQL/PostgreSQL, and I am
              comfortable designing RESTful APIs to connect frontend and backend
              services. I also make use of HTML and CSS for semantic structure
              and responsive design.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              I use Git and GitHub Actions for version control and continuous
              integration, and rely on Docker to containerize and deploy
              applications across environments. I am also comfortable working in
              Linux, supporting development and deployment workflows.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              I have hands-on experience exploring large language models like
              OpenAI and Mistral AI, integrating them into projects for tasks
              such as text processing, knowledge retrieval, and intelligent
              assistants. I focus on applying AI tools in practical, real-world
              scenarios.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
