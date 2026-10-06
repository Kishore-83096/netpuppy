"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Button from "../ui/Button";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "tis-theme";

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("tis-theme-change", onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("tis-theme-change", onChange);
  };
}

function getThemeSnapshot(): Theme {
  return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark"
    ? "dark"
    : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="site-nav">
        <a
          href="#"
          className="brand"
          aria-label="Tulas International School home"
          onClick={closeMenu}
        >
          <Image
            src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
            alt="Tulas International School"
            width={180}
            height={60}
            className="school-logo"
            unoptimized
            loading="eager"
          />
        </a>

        <button
          type="button"
          className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#academics" onClick={closeMenu}>
            Academics
          </a>
          <a href="#facilities" onClick={closeMenu}>
            Facilities
          </a>
          <a href="#admissions" onClick={closeMenu}>
            Admissions
          </a>
        </div>

        <button
          type="button"
          className="theme-toggle"
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
          aria-pressed={theme === "dark"}
          title={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
          onClick={() => {
            const nextTheme: Theme = theme === "dark" ? "light" : "dark";
            window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
            document.documentElement.dataset.theme = nextTheme;
            window.dispatchEvent(new Event("tis-theme-change"));
          }}
        >
          {theme === "dark" ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
            </svg>
          )}
        </button>

        <Button
          href="#admissions"
          className="nav-cta"
          onClick={closeMenu}
        >
          Apply Now
          <span>↗</span>
        </Button>
      </nav>
    </header>
  );
}