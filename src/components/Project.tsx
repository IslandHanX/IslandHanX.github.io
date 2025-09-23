import React from "react";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://todo-deploy-sooty.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://todo-deploy-sooty.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Todo List</h2>
          </a>
          <p>
            Developed a full-stack Todo List app with React, Express.js, and
            SQLite, containerized with Docker and orchestrated via Docker
            Compose. Implemented RESTful APIs for smooth integration and
            deployment.
          </p>
        </div>
        <div className="project">
          <a
            href="https://pokeme-dh2642.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://pokeme-dh2642.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Pokémon Personality Test Web</h2>
          </a>
          <p>
            Designed a personality quiz app recommending Pokémon based on user
            input. Integrated ChatGPT and Pokémon APIs to generate dynamic
            responses. Built a smooth, responsive interface with Firebase
            authentication.
          </p>
        </div>
        <div className="project">
          <a
            href="https://mistral-chat-xi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://mistral-chat-xi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Mistral Chat</h2>
          </a>
          <p>
            A minimal, production‑leaning chat app built with Next.js (App
            Router) + TypeScript that streams responses from Mistral AI’s public
            API.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/IslandHanX/Transcendence"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/IslandHanX/Transcendence"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Real-time Multiplayer Pong Game</h2>
          </a>
          <p>
            Developed a WebSocket-based Pong game with real-time multiplayer
            support. Implemented JWT and Google OAuth for secure authentication.
            Containerized services with Docker and managed data via Prisma.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/IslandHanX/chatgpt-chatbot"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/IslandHanX/chatgpt-chatbot"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ChatGPT Voice Chatbot</h2>
          </a>
          <p>
            Created a voice-interactive chatbot using FastAPI and ElevenLabs
            voice synthesis. Built a frontend with React and TailwindCSS for
            responsive UX. Used axios to handle real-time API communication.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
