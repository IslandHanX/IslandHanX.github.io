import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import avatar from "../assets/images/avatar.jpg";
import "../assets/styles/Main.scss";

const links = (
  <>
    <a href="https://github.com/IslandHanX" target="_blank" rel="noreferrer">
      <GitHubIcon />
    </a>
    <a
      href="https://www.linkedin.com/in/xu-han-island/"
      target="_blank"
      rel="noreferrer"
    >
      <LinkedInIcon />
    </a>
  </>
);

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Xu Han" />
        </div>
        <div className="content">
          <div className="social_icons">{links}</div>
          <h1>Xu Han</h1>
          <p>Software Engineer · Backend, Platform & AI</p>
          <p className="meta">
            Geneva, Switzerland · Authorised to work in Switzerland
          </p>
          <div className="cta">
            <a href="mailto:xuhisland@gmail.com">Email me</a>
            <a href="/cv/Xu-Han-CV-EN.pdf" target="_blank" rel="noreferrer">
              CV (English)
            </a>
            <a href="/cv/Xu-Han-CV-FR.pdf" target="_blank" rel="noreferrer">
              CV (Français)
            </a>
          </div>
          <div className="mobile_social_icons">{links}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
