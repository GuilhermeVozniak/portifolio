"use client";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import {
  ArrowLeft,
  Folder,
  FlaskConical,
  UserRound,
  Mail,
  FileCode2,
  PanelTop,
  Volume2,
  VolumeX,
  LayoutGrid,
  Server,
} from "lucide-react";
import { desktopReducer } from "@/lib/desktop";
import { AppWindow } from "./window";
import { windowTitle } from "./content";
const launchers = [
  { id: "projects", label: "Projects", icon: Folder, color: "orange" },
  {
    id: "experiments",
    label: "Experiments",
    icon: FlaskConical,
    color: "lime",
  },
  { id: "infrastructure", label: "Hardware", icon: Server, color: "silver" },
  { id: "about", label: "About me", icon: UserRound, color: "purple" },
  { id: "contact", label: "Say hello", icon: Mail, color: "peach" },
  {
    id: "story",
    label: "first-computer.html",
    icon: FileCode2,
    color: "paper",
  },
];
export default function Desktop({
  initialApp,
  onExit,
  sound,
  onSound,
}: {
  initialApp: string | null;
  onExit: () => void;
  sound: boolean;
  onSound: () => void;
}) {
  const [windows, dispatch] = useReducer(
    desktopReducer,
    initialApp ? desktopReducer([], { type: "open", id: initialApp }) : [],
  );
  const root = useRef<HTMLDivElement>(null);
  const invokers = useRef(new Map<string, HTMLElement>());
  const [compact, setCompact] = useState(false);
  const visibleWindows = windows.filter((w) => !w.minimized);
  const activeId = visibleWindows.at(-1)?.id;
  const covered =
    (compact && visibleWindows.length > 0) ||
    visibleWindows.some((w) => w.maximized);
  const close = useCallback((id: string) => {
    const invokingControl = invokers.current.get(id);
    invokers.current.delete(id);
    dispatch({ type: "close", id });
    requestAnimationFrame(() => {
      if (invokingControl?.isConnected && !invokingControl.closest("[inert]")) {
        const rect = invokingControl.getBoundingClientRect();
        const hit = document.elementFromPoint(
          rect.x + rect.width / 2,
          rect.y + rect.height / 2,
        );
        if (hit && invokingControl.contains(hit)) {
          invokingControl.focus();
          return;
        }
      }
      const panels = root.current?.querySelectorAll<HTMLElement>(
        ".app-window:not([inert])",
      );
      const target =
        panels?.[panels.length - 1]?.querySelector<HTMLButtonElement>(
          ".window-controls button:last-child",
        ) ??
        root.current?.querySelector<HTMLButtonElement>(
          '[data-launcher="projects"]',
        );
      target?.focus();
    });
  }, []);
  const exitButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    exitButton.current?.focus();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const resize = () => {
      setCompact(innerWidth <= 760);
      dispatch({
        type: "resize",
        width: innerWidth,
        height: innerHeight - 100,
      });
    };
    resize();
    addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = old;
      removeEventListener("resize", resize);
    };
  }, []);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      const top = windows.filter((w) => !w.minimized).at(-1);
      if (top) close(top.id);
      else onExit();
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [windows, onExit, close]);
  const open = (id: string) => {
    if (document.activeElement instanceof HTMLElement)
      invokers.current.set(id, document.activeElement);
    dispatch({ type: "open", id });
    requestAnimationFrame(() => {
      dispatch({
        type: "resize",
        width: innerWidth,
        height: innerHeight - 100,
      });
      requestAnimationFrame(() => {
        const regions =
          root.current?.querySelectorAll<HTMLElement>(".app-window");
        regions?.[regions.length - 1]
          ?.querySelector<HTMLButtonElement>(
            ".window-controls button:last-child",
          )
          ?.focus();
      });
    });
  };
  return (
    <div
      className="desktop-shell"
      ref={root}
      role="dialog"
      aria-modal="true"
      aria-label="Vozniak OS"
      onKeyDown={(e) => {
        if (e.key === "Tab") {
          const nodes = Array.from(
            root.current?.querySelectorAll<HTMLElement>(
              'button,a[href],[tabindex="0"]',
            ) ?? [],
          ).filter((n) => n.getClientRects().length && !n.closest("[inert]"));
          const first = nodes[0],
            last = nodes.at(-1);
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }}
    >
      <header className="desktop-menubar">
        <button ref={exitButton} onClick={onExit}>
          <ArrowLeft size={16} />
          <span>Back to the studio</span>
        </button>
        <span className="os-name">
          gv<span>OS</span> <small>A browser with a childhood dream.</small>
        </span>
        <button
          onClick={onSound}
          aria-label={sound ? "Mute sound" : "Play sound experiment"}
        >
          {sound ? <Volume2 size={17} /> : <VolumeX size={17} />}
        </button>
      </header>
      <div className="desktop-workspace">
        <div className="desktop-wallpaper" aria-hidden="true">
          <span>
            Make yourself
            <br />
            at home.
          </span>
          <div className="wallpaper-orbit" />
          <small>Ideas become things here.</small>
        </div>
        <nav
          className="desktop-icons"
          aria-label="Desktop applications"
          inert={covered || undefined}
          aria-hidden={covered || undefined}
        >
          {launchers.map((item) => (
            <button
              key={item.id}
              data-launcher={item.id}
              onClick={() => open(item.id)}
            >
              <span className={`desktop-icon ${item.color}`}>
                <item.icon strokeWidth={1.4} />
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        {windows.map((win, i) => (
          <AppWindow
            key={win.id}
            window={win}
            index={i}
            active={activeId === win.id}
            obscured={
              (compact || visibleWindows.at(-1)?.maximized === true) &&
              activeId !== win.id
            }
            dispatch={dispatch}
            onOpen={open}
            onClose={close}
          />
        ))}
      </div>
      <footer className="desktop-taskbar">
        <button
          className="taskbar-start"
          aria-label="Projects"
          onClick={() => open("projects")}
        >
          <LayoutGrid size={22} />
        </button>
        <div className="taskbar-windows">
          {windows.map((win) => (
            <button
              key={win.id}
              data-restore={win.id}
              aria-label={`Restore ${windowTitle(win.id)}`}
              className={win.minimized ? "minimized" : ""}
              onClick={() => open(win.id)}
            >
              <PanelTop size={17} />
              <span>{windowTitle(win.id)}</span>
            </button>
          ))}
        </div>
        <button
          className="tile-button"
          onClick={() =>
            dispatch({
              type: "tile",
              width: innerWidth,
              height: innerHeight - 100,
            })
          }
        >
          <LayoutGrid size={17} />
          <span>Tile windows</span>
        </button>
        <span className="desktop-hint">Made for the web.</span>
      </footer>
    </div>
  );
}
