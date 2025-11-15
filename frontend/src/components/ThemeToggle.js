import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState(() => {
    try { return localStorage.getItem("ph_theme") || "dark"; } catch { return "dark"; }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    try { localStorage.setItem("ph_theme", mode); } catch {}
  }, [mode]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setMode(prev => (prev === "dark" ? "light" : "dark"))}
      title="Toggle theme"
    >
      {mode === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
