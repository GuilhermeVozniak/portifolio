"use client";
import { StudioFallback } from "./fallback";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Monitor,
  RotateCcw,
  Volume2,
  VolumeX,
  MoveUpRight,
  Pause,
  Play,
  Server,
  Music2,
} from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectIcon } from "@/components/desktop/content";
import { useSound } from "./use-sound";
const Scene = dynamic(() => import("./scene"), {
  ssr: false,
  loading: () => <StudioFallback loading />,
});
const Desktop = dynamic(() => import("@/components/desktop/desktop"), {
  ssr: false,
});
export default function Experience() {
  const [desktop, setDesktop] = useState(false);
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [initialApp, setInitialApp] = useState<string | null>(null);
  const [entering, setEntering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const trigger = useRef<HTMLElement | null>(null);
  const transition = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sound = useSound();
  useEffect(() => {
    try {
      const context = document.createElement("canvas").getContext("webgl2");
      setWebgl(Boolean(context));
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      setWebgl(false);
    }
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const change = () => setReducedMotion(media.matches);
    media.addEventListener("change", change);
    return () => {
      media.removeEventListener("change", change);
      if (transition.current) clearTimeout(transition.current);
    };
  }, []);
  const open = (id: string | null = null, animate = false) => {
    if (entering) return;
    trigger.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setInitialApp(id);
    if (animate && !reducedMotion && webgl) {
      setEntering(true);
      transition.current = setTimeout(() => {
        setDesktop(true);
        setEntering(false);
      }, 680);
    } else setDesktop(true);
  };
  const exit = () => {
    setDesktop(false);
    setResetKey((k) => k + 1);
    requestAnimationFrame(() => trigger.current?.focus());
  };
  return (
    <>
      <div inert={desktop || undefined}>
        <a className="skip-link" href="#projects">
          Skip to projects
        </a>
        <header className="site-header">
          <a href="#" className="wordmark" aria-label="Guilherme Vozniak home">
            <span>gv.</span>
            <strong>
              Guilherme
              <br />
              Vozniak
            </strong>
          </a>
          <nav aria-label="Main navigation">
            <a href="#projects">Selected work</a>
            <button onClick={() => open("about")}>The person</button>
            <button className="nav-contact" onClick={() => open("contact")}>
              Say hello <ArrowUpRight size={17} />
            </button>
          </nav>
        </header>
        <main>
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <div className="intro-label">
                <span />
                Software engineer & curious human
              </div>
              <h1 id="hero-title">
                Built out
                <br />
                of curiosity.
              </h1>
              <p>
                Useful tools. Unusual experiments.
                <br />
                And a childhood idea that finally
                <br className="desktop-break" /> found its way into a browser.
              </p>
              <button
                className="primary-button"
                onClick={() => open(null, true)}
              >
                Open desktop <MoveUpRight size={21} />
              </button>
              <a className="project-shortcut" href="#projects">
                View projects <ArrowDown size={16} />
              </a>
              <div className="hero-footnote">
                <span className="tiny-cross">✳</span>
                <span>
                  A little room on the internet.
                  <br />
                  Based on the one I build things in.
                </span>
              </div>
            </div>
            <div className="studio-frame">
              <div className="scene-topline">
                <span>
                  <i /> Welcome to my corner
                </span>
                <span>Drag to look around</span>
              </div>
              <div
                className={`scene-canvas ${entering ? "entering" : ""}`}
                aria-label="Interactive 3D model of Guilherme’s studio"
              >
                {!desktop && webgl !== true && (
                  <StudioFallback loading={webgl === null} />
                )}
                {!desktop && webgl === true && (
                  <Scene
                    onDesktop={() => open(null, true)}
                    onServer={() => open("infrastructure")}
                    onStory={() => open("story")}
                    onSound={() => void sound.toggle()}
                    entering={entering}
                    reducedMotion={reducedMotion}
                    resetKey={resetKey}
                  />
                )}
              </div>
              <div className="scene-bottomline">
                <span className="scene-caption">
                  Real desk. Endless possibilities.
                </span>
                <div className="scene-controls">
                  <button
                    aria-label="Reset room view"
                    title="Reset view"
                    onClick={() => setResetKey((k) => k + 1)}
                  >
                    <RotateCcw size={16} />
                  </button>
                  <button
                    aria-label={
                      reducedMotion
                        ? "Enable camera motion"
                        : "Reduce camera motion"
                    }
                    title={reducedMotion ? "Enable motion" : "Reduce motion"}
                    aria-pressed={reducedMotion}
                    onClick={() => setReducedMotion((v) => !v)}
                  >
                    {reducedMotion ? <Play size={16} /> : <Pause size={16} />}
                  </button>
                  <button
                    aria-label={
                      sound.playing ? "Mute sound" : "Play sound experiment"
                    }
                    title="Sound experiment"
                    onClick={() => void sound.toggle()}
                  >
                    {sound.playing ? (
                      <Volume2 size={17} />
                    ) : (
                      <VolumeX size={17} />
                    )}
                  </button>
                </div>
              </div>
              <span className="sound-status" role="status">
                {sound.error ||
                  (sound.playing
                    ? "Playing a synthesized sound experiment"
                    : "")}
              </span>
            </div>
          </section>
          <div className="room-nav">
            <span>Make yourself at home</span>
            <button onClick={() => open(null, true)}>
              <Monitor size={18} /> The computer <ArrowUpRight size={15} />
            </button>
            <button onClick={() => open("infrastructure")}>
              <Server size={18} /> The server <ArrowUpRight size={15} />
            </button>
            <button onClick={() => void sound.toggle()}>
              <Music2 size={18} />{" "}
              {sound.playing ? "Stop the sound" : "The sound experiment"}{" "}
              <ArrowUpRight size={15} />
            </button>
            <span className="room-note">Everything starts with “what if?”</span>
          </div>
          <section className="projects-section" id="projects">
            <div className="section-heading">
              <div>
                <span className="section-kicker">
                  A few things I’ve put into the world
                </span>
                <h2>
                  Tools I wanted.
                  <br />
                  So I built them.
                </h2>
              </div>
              <p>
                From a better way to switch windows
                <br />
                to a new life for an old phone.
                <br />
                Open source, and always evolving.
              </p>
            </div>
            <div className="featured-projects">
              {projects.slice(0, 3).map((p, i) => (
                <article key={p.id} className={`featured-project feature-${i}`}>
                  <button
                    className="project-art"
                    aria-label={`Explore ${p.name}`}
                    onClick={() => open(p.id)}
                  >
                    <div className={`art-demo demo-${i}`} aria-hidden="true">
                      {i === 0 ? (
                        <>
                          <div className="mini-window back">
                            <i />
                            <i />
                            <i />
                            <span />
                          </div>
                          <div className="mini-window front">
                            <span className="mini-code">⌥ tab</span>
                            <div className="mini-apps">
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                          <span className="art-word">Find your flow.</span>
                        </>
                      ) : i === 1 ? (
                        <>
                          <div className="tile-demo">
                            <span />
                            <span />
                            <span />
                          </div>
                          <span className="art-word">
                            A place for everything.
                          </span>
                        </>
                      ) : (
                        <>
                          <div className="cleaner-orbit">
                            <span>✳</span>
                          </div>
                          <span className="art-word">
                            Room for what matters.
                          </span>
                        </>
                      )}
                    </div>
                    <span className="art-open">
                      <ArrowUpRight size={23} />
                    </span>
                    <span className="art-caption">
                      Interactive concept · {p.category}
                    </span>
                  </button>
                  <div className="project-card-heading">
                    <ProjectIcon project={p} />
                    <div>
                      <h3>{p.name}</h3>
                      <span>{p.technologies.join(" / ")}</span>
                    </div>
                    <button
                      aria-label={`Open ${p.name} details`}
                      onClick={() => open(p.id)}
                    >
                      <ArrowUpRight size={22} />
                    </button>
                  </div>
                  <p>{p.tagline}</p>
                </article>
              ))}
            </div>
            <div className="more-projects">
              {projects.slice(3).map((p) => (
                <button
                  key={p.id}
                  onClick={() => open(p.id)}
                  aria-label={`Explore ${p.name}`}
                >
                  <ProjectIcon project={p} />
                  <span>
                    <strong>{p.name}</strong>
                    <small>{p.tagline}</small>
                  </span>
                  <span className="project-category">{p.status}</span>
                  <ArrowUpRight size={21} />
                </button>
              ))}
            </div>
            <a
              className="github-link"
              href="https://github.com/GuilhermeVozniak"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} /> More from my GitHub{" "}
              <ArrowUpRight size={17} />
            </a>
          </section>
          <section className="origin-section">
            <div className="origin-label">
              <FileStory /> <span>Some ideas never leave.</span>
            </div>
            <div>
              <h2>
                I wanted to put
                <br />a whole computer
                <br />
                inside an HTML tag.
              </h2>
              <p>
                HTML and CSS were my first tools. I thought a Windows executable
                in a source attribute might do the trick. Years later, this is
                my slightly more informed second attempt.
              </p>
              <button onClick={() => open("story")}>
                Open first-computer.html <ArrowUpRight size={18} />
              </button>
            </div>
            <div className="origin-code" aria-hidden="true">
              <span>first-computer.html</span>
              <code>
                &lt;computer
                <br />
                &nbsp; src=<em>&quot;windows.exe&quot;</em>
                <br />
                /&gt;
              </code>
              <small>
                A questionable approach.
                <br />A pretty good starting point.
              </small>
            </div>
          </section>
          <footer className="site-footer">
            <div>
              <span>Have something in mind?</span>
              <button onClick={() => open("contact")}>
                Let’s talk.
                <ArrowUpRight />
              </button>
            </div>
            <div className="footer-bottom">
              <a className="footer-name" href="#">
                Guilherme Vozniak
              </a>
              <span>Built with code, curiosity, and a little noise.</span>
              <a
                href="https://github.com/GuilhermeVozniak"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </footer>
        </main>
      </div>
      {desktop && (
        <Desktop
          initialApp={initialApp}
          onExit={exit}
          sound={sound.playing}
          onSound={() => void sound.toggle()}
        />
      )}
    </>
  );
}
function FileStory() {
  return <span className="story-glyph">&lt;/&gt;</span>;
}
