"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isInteractive, setIsInteractive] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const clickRingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const body = document.body;

    const updateCursorMode = () => {
      body.classList.toggle("custom-cursor-enabled", finePointer.matches);
      setIsInteractive(false);
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || event.pointerType !== "mouse") {
        return;
      }

      const cursor = cursorRef.current;
      if (!cursor) {
        return;
      }

      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.style.opacity = "0.5";

      const target = event.target;
      const hoveringInteractive =
        target instanceof Element &&
        target.closest("a, button, [role='button'], input, select, textarea") !==
          null;

      setIsInteractive((current) =>
        current === hoveringInteractive ? current : hoveringInteractive,
      );
    };

    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (event.relatedTarget === null) {
        hideCursor();
        setIsInteractive(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!finePointer.matches || event.pointerType !== "mouse" || event.button !== 0) {
        return;
      }

      const ring = clickRingRef.current;
      if (!ring) {
        return;
      }

      ring.getAnimations().forEach((animation) => animation.cancel());
      ring.animate(
        [
          {
            opacity: 0.95,
            transform: "translate(-50%, -50%) scale(0.25)",
          },
          {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(1.55)",
          },
        ],
        {
          duration: 460,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        },
      );
    };

    updateCursorMode();
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("blur", hideCursor);
    finePointer.addEventListener("change", updateCursorMode);

    return () => {
      body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", hideCursor);
      finePointer.removeEventListener("change", updateCursorMode);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor${isInteractive ? " is-interactive" : ""}`}
      aria-hidden="true"
    >
      <span ref={clickRingRef} className="custom-cursor-click-ring" />
      <svg
        viewBox="0 0 72 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cursor-glass" x1="9" y1="8" x2="56" y2="75">
            <stop stopColor="white" stopOpacity="0.96" />
            <stop offset="0.48" stopColor="#e7f7ff" stopOpacity="0.78" />
            <stop offset="1" stopColor="#9dc7dc" stopOpacity="0.56" />
          </linearGradient>
          <linearGradient id="cursor-chrome" x1="8" y1="7" x2="62" y2="78">
            <stop stopColor="#17232d" />
            <stop offset="0.24" stopColor="#f4fbff" />
            <stop offset="0.48" stopColor="#52748a" />
            <stop offset="0.68" stopColor="#ffffff" />
            <stop offset="1" stopColor="#142733" />
          </linearGradient>
          <linearGradient id="cursor-refraction" x1="15" y1="18" x2="48" y2="70">
            <stop stopColor="#9de7ff" stopOpacity="0.84" />
            <stop offset="0.55" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="1" stopColor="#ef806f" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <path
          d="M3 2 68.5 49.5 39.5 53.8 55 82.2 42.5 88 27 59.5 9 77 3 2Z"
          fill="url(#cursor-glass)"
          stroke="rgba(255,255,255,0.94)"
          strokeLinejoin="round"
          strokeWidth="6"
        />
        <path
          d="M3 2 68.5 49.5 39.5 53.8 55 82.2 42.5 88 27 59.5 9 77 3 2Z"
          fill="url(#cursor-glass)"
          stroke="url(#cursor-chrome)"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <path
          d="m9 13 48 35-20.5 3-15.8 28.2-5.3-52.6Z"
          fill="url(#cursor-refraction)"
          stroke="rgba(255,255,255,0.8)"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
        <path
          d="m9 13 5.2 54.4 12.7-12.3 12.9 23.8"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.94"
          strokeWidth="2"
        />
        <path
          d="m40 53 18.8-2.8-14.5 33.5"
          stroke="#17394d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.72"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
