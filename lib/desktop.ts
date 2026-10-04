export interface DesktopWindow {
  id: string;
  minimized: boolean;
  maximized: boolean;
  x: number;
  y: number;
}
export type DesktopAction =
  | { type: "open" | "focus" | "close" | "minimize" | "maximize"; id: string }
  | {
      type: "move";
      id: string;
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | { type: "resize"; width: number; height: number }
  | { type: "tile"; width: number; height: number };
const clamp = (n: number, max: number) =>
  Math.max(12, Math.min(n, Math.max(12, max)));
export function desktopReducer(
  state: DesktopWindow[],
  action: DesktopAction,
): DesktopWindow[] {
  if (action.type === "resize")
    return state.map((w) => ({
      ...w,
      x: clamp(w.x, action.width - 640),
      y: clamp(w.y, action.height - 160),
    }));
  if (action.type === "tile")
    return state.map((w, i) => ({
      ...w,
      maximized: false,
      x: clamp(12 + (i % 2) * (action.width / 2), action.width - 640),
      y: clamp(20 + Math.floor(i / 2) * 56, action.height - 160),
    }));
  const found = state.find((w) => w.id === action.id);
  if (action.type === "open")
    return [
      ...state.filter((w) => w.id !== action.id),
      found
        ? { ...found, minimized: false }
        : {
            id: action.id,
            minimized: false,
            maximized: false,
            x: 60 + (state.length % 4) * 30,
            y: 28 + (state.length % 4) * 28,
          },
    ];
  if (!found) return state;
  if (action.type === "close") return state.filter((w) => w.id !== action.id);
  if (action.type === "focus")
    return [...state.filter((w) => w.id !== action.id), found];
  return state.map((w) =>
    w.id !== action.id
      ? w
      : action.type === "minimize"
        ? { ...w, minimized: true }
        : action.type === "maximize"
          ? { ...w, maximized: !w.maximized }
          : action.type === "move"
            ? {
                ...w,
                x: clamp(action.x, action.width - 640),
                y: clamp(action.y, action.height - 160),
              }
            : w,
  );
}
