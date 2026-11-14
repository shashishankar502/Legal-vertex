"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  direction?: "up" | "down" | "left" | "right" | "from-left" | "from-right" | "none";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 2400,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0 opacity-100 scale-100";

    switch (direction) {
      case "up":
        return "translate-y-12 opacity-0 scale-[0.98]";
      case "down":
        return "-translate-y-12 opacity-0 scale-[0.98]";
      case "left":
      case "from-right":
        // Starts noticeably on the right (+128px to +192px), slides in towards the left
        return "translate-x-32 sm:translate-x-48 opacity-0";
      case "right":
      case "from-left":
        // Starts noticeably on the left (-128px to -192px), slides in towards the right
        return "-translate-x-32 sm:-translate-x-48 opacity-0";
      case "none":
        return "opacity-0 scale-[0.98]";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className={`transition-all ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
}

