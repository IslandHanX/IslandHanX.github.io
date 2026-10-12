import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const skills = [
  {
    icon: faNodeJs,
    title: "Backend & Data",
    text: "I build backend services in TypeScript and Node.js (NestJS), with PostgreSQL as the source of truth: data models, migrations that run while the product stays live, and query tuning from execution plans.",
    labels: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "SQL", "REST", "Python"],
  },
  {
    icon: faDocker,
    title: "Platform & Reliability",
    text: "I keep production systems stable: infrastructure as code, deployments that do not interrupt users, monitoring and alerting, and production issues traced to their root cause and fixed there.",
    labels: ["Terraform", "Docker", "Linux", "GitHub Actions", "Prometheus", "Grafana", "OpenTelemetry", "AWS"],
  },
  {
    icon: faRobot,
    title: "AI & Documents",
    text: "I work on document processing for AI products, turning large sets of scans and PDFs into searchable text with OCR, and on LLM agents in production: tool calling, retries and fallbacks, and long tasks that finish reliably.",
    labels: ["LLM agents", "Tool calling", "OCR", "RAG", "Anthropic", "Mistral AI", "OpenAI"],
  },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill.title}>
              <FontAwesomeIcon icon={skill.icon} size="3x" />
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {skill.labels.map((label) => (
                  <Chip key={label} className="chip" label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
