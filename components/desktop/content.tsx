"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Terminal,
  Folder,
  Mail,
  Code2,
} from "lucide-react";
import { getProject, projects, type Project } from "@/lib/projects";
export function ProjectIcon({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <span
      className={`project-icon ${large ? "large" : ""}`}
      style={{ background: project.color }}
    >
      {project.image && !failed ? (
        <Image
          width={large ? 76 : 39}
          height={large ? 76 : 39}
          src={project.image}
          alt=""
          onError={() => setFailed(true)}
        />
      ) : (
        <span>{project.symbol}</span>
      )}
    </span>
  );
}
function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <div className="install-command">
      <code>{command}</code>
      <button
        aria-label="Copy install command"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          } catch {
            setFailed(true);
          }
        }}
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </button>
      <span role="status">
        {copied ? "Copied" : failed ? "Select the command to copy it." : ""}
      </span>
    </div>
  );
}
export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="project-detail">
      <div className="detail-top">
        <ProjectIcon project={project} large />
        <span className="status-label">{project.status}</span>
      </div>
      <h2>{project.name}</h2>
      <p className="detail-tagline">{project.tagline}</p>
      <p>{project.description}</p>
      <div className="tech-list">
        {project.technologies.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      {project.install && (
        <>
          <h3>Install with Homebrew</h3>
          <InstallCommand command={project.install} />
        </>
      )}
      <div className="detail-links">
        <a
          className="solid-link"
          href={project.source}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={17} /> View source <ArrowUpRight size={16} />
        </a>
        {project.website && (
          <a href={project.website} target="_blank" rel="noreferrer">
            Visit website <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      {project.attribution && (
        <p className="attribution">{project.attribution}</p>
      )}
    </div>
  );
}
function FirstComputer() {
  const [running, setRunning] = useState(false);
  return (
    <div className="story-content">
      <span className="file-path">memories / first-computer.html</span>
      <h2>Some ideas stick with you.</h2>
      <p>
        HTML and CSS were the first things I learned. As a kid, I thought
        putting a Windows executable inside an HTML tag might let me run my
        entire computer in a webpage.
      </p>
      <pre>
        <span>&lt;!-- My first operating system. Sort of. --&gt;</span>
        {"\n"}&lt;computer src=<em>&quot;windows.exe&quot;</em> /&gt;
      </pre>
      <button className="solid-link" onClick={() => setRunning(true)}>
        <Code2 size={18} />
        {running ? "It was worth a try." : "Run my childhood idea"}
      </button>
      {running && (
        <div className="story-result" role="status">
          <strong>Unknown element: computer</strong>
          <p>
            The browser couldn’t run Windows. But the idea never really went
            away. This little desktop is my second attempt.
          </p>
        </div>
      )}
      <p className="small-note">
        A browser experiment, built with a little more experience and the same
        curiosity.
      </p>
    </div>
  );
}
export function windowTitle(id: string) {
  return (
    getProject(id)?.name ??
    {
      projects: "Projects",
      experiments: "Experiments",
      infrastructure: "Hardware & infrastructure",
      about: "About me",
      contact: "Say hello",
      story: "first-computer.html",
    }[id] ??
    "Projects"
  );
}
export function WindowContent({
  id,
  onOpen,
}: {
  id: string;
  onOpen: (id: string) => void;
}) {
  const project = getProject(id);
  if (project) return <ProjectDetail project={project} />;
  if (id === "story") return <FirstComputer />;
  if (id === "about")
    return (
      <div className="about-content">
        <span className="about-monogram">gv.</span>
        <h2>Hi, I’m Guilherme.</h2>
        <p className="detail-tagline">
          Software engineer. Compulsive tinkerer.
        </p>
        <p>
          I build things that make a computer feel a little more useful: desktop
          tools, web apps, and experiments that bring software and hardware
          together.
        </p>
        <p>
          My interests don’t stop at the screen. Music production, a microphone
          within reach, and a small server beside the desk all belong in the
          same room.
        </p>
        <p>
          This space is based on my actual setup. The code is real. The room is
          a little tidier.
        </p>
        <button className="text-button" onClick={() => onOpen("story")}>
          Read the idea behind this website <ArrowUpRight size={16} />
        </button>
      </div>
    );
  if (id === "contact")
    return (
      <div className="contact-content">
        <Mail size={42} />
        <h2>Let’s make something interesting.</h2>
        <p>
          Have a project in mind, a question about an app, or an idea worth
          exploring? Find me here.
        </p>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/guilherme-vozniak"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn <ArrowUpRight />
        </a>
        <a
          className="contact-link"
          href="https://github.com/GuilhermeVozniak"
          target="_blank"
          rel="noreferrer"
        >
          Find me on GitHub <Github />
        </a>
      </div>
    );
  const filtered = projects.filter((p) =>
    id === "experiments"
      ? p.category === "Experiments"
      : id === "infrastructure"
        ? p.category === "Infrastructure"
        : true,
  );
  return (
    <div className="app-library">
      <div className="library-heading">
        <div>
          {id === "infrastructure" ? <Terminal /> : <Folder />}
          <h2>{windowTitle(id)}</h2>
        </div>
        <span>{filtered.length} projects</span>
      </div>
      <p>Built from curiosity. Available to explore.</p>
      <div className="library-list">
        {filtered.map((p) => (
          <button key={p.id} onClick={() => onOpen(p.id)}>
            <ProjectIcon project={p} />
            <span>
              <strong>{p.name}</strong>
              <small>{p.tagline}</small>
            </span>
            <ArrowUpRight size={18} />
          </button>
        ))}
      </div>
    </div>
  );
}
