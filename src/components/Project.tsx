import React from "react";
import pong from "../assets/images/mock06.png";
import tetris from "../assets/images/red-tetris.jpg";
import mistral from "../assets/images/mock08.png";
import "../assets/styles/Project.scss";

const projects = [
  {
    title: "ft_transcendence",
    url: "https://github.com/IslandHanX/Transcendence",
    image: pong,
    text: "Online Pong platform with a TypeScript API (Fastify, Prisma): JWT and Google sign-in with two-factor login by email, real-time presence, game invitations and chat over WebSockets, tournaments and match statistics.",
  },
  {
    title: "Red Tetris",
    url: "https://github.com/IslandHanX/red-tetris-multiplayer",
    image: tetris,
    text: "Real-time multiplayer Tetris: a React client and a Node.js server (Express, Socket.IO) that keeps every player on the same piece sequence, sends penalty lines to opponents and hands over the host role when a player leaves. Tested with Vitest.",
  },
  {
    title: "Mistral Chat",
    url: "https://mistral-chat-xi.vercel.app/",
    image: mistral,
    text: "A small Next.js and TypeScript chat app that streams answers from Mistral AI through a server-side proxy, so the API key never reaches the browser, and falls back to smaller models when the preferred one is at capacity. Live demo.",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.title}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <img src={project.image} className="zoom" alt={project.title} width="100%" />
            </a>
            <a href={project.url} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p>{project.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
