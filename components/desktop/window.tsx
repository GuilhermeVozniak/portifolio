"use client";
import { useRef, type Dispatch } from "react";
import { Minus, Maximize2, X, Move } from "lucide-react";
import type { DesktopAction, DesktopWindow } from "@/lib/desktop";
import { WindowContent, windowTitle } from "./content";
export function AppWindow({
  window: win,
  index,
  active,
  obscured,
  dispatch,
  onOpen,
  onClose,
}: {
  window: DesktopWindow;
  index: number;
  active: boolean;
  obscured: boolean;
  dispatch: Dispatch<DesktopAction>;
  onOpen: (id: string) => void;
  onClose: (id: string) => void;
}) {
  const drag = useRef<{ x: number; y: number; wx: number; wy: number } | null>(
    null,
  );
  const title = windowTitle(win.id);
  const bounds = () => ({
    width: globalThis.innerWidth,
    height: globalThis.innerHeight - 100,
  });
  if (win.minimized) return null;
  return (
    <section
      role="region"
      inert={obscured || undefined}
      aria-hidden={obscured || undefined}
      aria-label={`${title} window`}
      className={`app-window ${active ? "active" : ""} ${win.maximized ? "maximized" : ""}`}
      style={{ left: win.x, top: win.y, zIndex: index + 1 }}
      onPointerDown={() => dispatch({ type: "focus", id: win.id })}
      onFocusCapture={() => {
        if (!active) dispatch({ type: "focus", id: win.id });
      }}
    >
      <div
        className="window-titlebar"
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest("button") || win.maximized)
            return;
          drag.current = { x: e.clientX, y: e.clientY, wx: win.x, wy: win.y };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!drag.current) return;
          dispatch({
            type: "move",
            id: win.id,
            x: drag.current.wx + e.clientX - drag.current.x,
            y: drag.current.wy + e.clientY - drag.current.y,
            ...bounds(),
          });
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        <span className="window-title">{title}</span>
        <button
          className="window-move"
          aria-label={`Move ${title} with arrow keys`}
          onKeyDown={(e) => {
            const delta = {
              ArrowLeft: [-24, 0],
              ArrowRight: [24, 0],
              ArrowUp: [0, -24],
              ArrowDown: [0, 24],
            }[e.key];
            if (delta) {
              e.preventDefault();
              dispatch({
                type: "move",
                id: win.id,
                x: win.x + delta[0],
                y: win.y + delta[1],
                ...bounds(),
              });
            }
          }}
        >
          <Move size={13} />
        </button>
        <div className="window-controls">
          <button
            aria-label={`Minimize ${title}`}
            onClick={() => {
              dispatch({ type: "minimize", id: win.id });
              requestAnimationFrame(() =>
                document
                  .querySelector<HTMLButtonElement>(
                    `[data-restore="${win.id}"]`,
                  )
                  ?.focus(),
              );
            }}
          >
            <Minus size={15} />
          </button>
          <button
            aria-label={`${win.maximized ? "Restore size of" : "Maximize"} ${title}`}
            onClick={() => dispatch({ type: "maximize", id: win.id })}
          >
            <Maximize2 size={13} />
          </button>
          <button aria-label={`Close ${title}`} onClick={() => onClose(win.id)}>
            <X size={17} />
          </button>
        </div>
      </div>
      <div className="window-body">
        <WindowContent id={win.id} onOpen={onOpen} />
      </div>
    </section>
  );
}
