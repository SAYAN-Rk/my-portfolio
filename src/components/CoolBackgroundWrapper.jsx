"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Mouse parallax logic for multiple layers
function useParallaxMouse(layers = 4) {
  const containerRef = useRef();
  const [parallax, setParallax] = useState(Array(layers).fill({ x: 0, y: 0 }));

  useEffect(() => {
    const handleMouse = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setParallax(Array.from({ length: layers }, (_, i) => ({
        x: x * (12 + i * 20),
        y: y * (12 + i * 20),
      })));
    };
    const el = containerRef.current;
    if (el) el.addEventListener("mousemove", handleMouse);
    return () => { if (el) el.removeEventListener("mousemove", handleMouse); };
  }, [layers]);
  return [containerRef, parallax];
}

// Animated mouse glow/follower
function MouseFollower() {
  const dotRef = useRef();
  useEffect(() => {
    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 24}px`;
        dotRef.current.style.top = `${e.clientY - 24}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <motion.div
      ref={dotRef}
      className="fixed pointer-events-none z-[100] w-12 h-12 rounded-full bg-accent-400/30 blur-2xl opacity-75 mix-blend-plus-lighter"
      animate={{
        boxShadow: [
          "0 0 40px 10px #FFD80370",
          "0 0 60px 15px #7f5af090",
          "0 0 40px 10px #FFD80370"
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{ left: 0, top: 0 }}
    />
  );
}

// SVG particles for animated starfield
function Starfield() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      style={{ opacity: 0.3 }}
    >
      {Array.from({ length: 70 }).map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const r = Math.random() * 2 + 1;
        const delay = Math.random() * 4;
        return (
          <motion.circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={r}
            fill={i % 3 === 0 ? "#FFD803" : "#7f5af0"}
            initial={{ opacity: 0.2, scale: 1 }}
            animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.2, 1] }}
            transition={{
              duration: 3 + delay,
              repeat: Infinity,
              repeatType: "reverse",
              delay,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </svg>
  );
}

export default function CoolBackgroundWrapper({ children }) {
  const [containerRef, parallax] = useParallaxMouse(4);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full min-h-screen bg-black">
      {/* 1. Animated Gradient Base */}
      <div
        className="absolute inset-0 -z-30"
        style={{
          background: "linear-gradient(120deg, #1a1a2e 0%, #7f5af0 65%, #ffd803 100%)",
          backgroundSize: "300% 300%",
          animation: "gradientMove 18s ease-in-out infinite",
        }}
      />

      {/* 2. Animated Blobs (with parallax) */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 rounded-full bg-primary-500/30 blur-[90px] -z-20"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        style={{
          transform: `translate(${parallax[0]?.x || 0}px, ${parallax[0]?.y || 0}px)`,
        }}
      />
      <motion.div
        className="absolute bottom-24 right-20 w-[28rem] h-[22rem] rounded-full bg-accent-400/40 blur-[100px] -z-20"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        style={{
          transform: `translate(${parallax[1]?.x || 0}px, ${parallax[1]?.y || 0}px)`,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-primary-300/30 blur-[80px] -z-20"
        animate={{
          x: [0, 30, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 17, repeat: Infinity, repeatType: "reverse" }}
        style={{
          transform: `translate(${parallax[2]?.x || 0}px, ${parallax[2]?.y || 0}px)`,
        }}
      />
      <motion.div
        className="absolute top-[70%] left-1/4 w-72 h-72 rounded-full bg-accent-400/20 blur-[50px] -z-20"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        style={{
          transform: `translate(${parallax[3]?.x || 0}px, ${parallax[3]?.y || 0}px)`,
        }}
      />

      {/* 3. Glassmorphism Panels (with parallax) */}
      <motion.div
        className="absolute top-40 right-2/3 w-96 h-40 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 rotate-12 -z-10 shadow-xl"
        style={{
          transform: `translate(${parallax[0]?.x || 0}px, 0px)`,
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/3 w-72 h-32 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/10 -rotate-6 -z-10 shadow-lg"
        style={{
          transform: `translate(${parallax[1]?.x || 0}px, 0px)`,
        }}
      />
      <motion.div
        className="absolute top-10 left-2/3 w-80 h-28 bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 rotate-3 -z-10 shadow"
        style={{
          transform: `translate(${parallax[2]?.x || 0}px, 0px)`,
        }}
      />

      {/* 4. Neon animated gradient lines */}
      <motion.div
        className="absolute top-[20%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-500/60 to-transparent -z-10"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[26%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-400/60 to-transparent -z-10"
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* 5. SVG starfield particles */}
      <Starfield />

      {/* 6. Mouse Follower Glow */}
      <MouseFollower />

      {/* 7. Parallax content wrapper */}
      <div className="relative z-20">{children}</div>

      {/* 8. Keyframes for gradient animation */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}