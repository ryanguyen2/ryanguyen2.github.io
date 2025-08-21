
import React, { useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  delay = 0,                 
  threshold = 0.15,          
  rootMargin = "0px 0px -12% 0px", 
  once = true,              
  instant = false,          
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced || instant) {
      setVisible(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay) {
              const t = typeof delay === "number" ? delay : 0;
              setTimeout(() => setVisible(true), t);
            } else {
              setVisible(true);
            }
            if (once) io.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold, rootMargin, once, instant]);

 
  const extraProps =
    Tag === "button" && !("type" in rest) ? { type: "button" } : {};

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      {...extraProps}
      {...rest}
    >
      {children}
    </Tag>
  );
}
