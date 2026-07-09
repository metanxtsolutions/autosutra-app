"use client";

import { useEffect, useState } from "react";

export function ReadingProgressBar({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    function onScroll() {
      if (!target) return;
      const { top, height } = target.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = height - viewport;
      const scrolled = total > 0 ? (viewport - top) / total : 0;
      setProgress(Math.min(1, Math.max(0, scrolled)));
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetId]);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-brand transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
