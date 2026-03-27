"use client";

import { useState, useEffect } from "react";

export default function OrbitalOrb() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate rotation based on mouse position relative to window center
      // Range: -15 to 15 degrees
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * -30;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative z-10 w-full h-full flex items-center justify-center animate-float pointer-events-none perspective-1000">
      <div 
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 preserve-3d animate-spin-3d transition-transform duration-500 ease-out"
        style={{ transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)` }}
      >
        {/* Center Core Glow */}
        <div className="absolute inset-x-0 inset-y-0 m-auto w-1/3 h-1/3 rounded-full bg-gradient-to-tr from-primary to-tertiary blur-2xl animate-pulse shadow-[0_0_80px_rgba(161,250,255,0.8)]"></div>
        <div className="absolute inset-x-0 inset-y-0 m-auto w-1/4 h-1/4 rounded-full bg-white blur-md"></div>
        
        {/* Rings with depth offsets */}
        <div className="absolute inset-0 rounded-full border border-primary/50 shadow-[0_0_30px_rgba(161,166,255,0.3)_inset,0_0_30px_rgba(161,166,255,0.3)] [transform:rotateY(0deg)_translateZ(20px)]"></div>
        <div className="absolute inset-0 rounded-full border border-tertiary/50 shadow-[0_0_30px_rgba(161,250,255,0.3)_inset,0_0_30px_rgba(161,250,255,0.3)] [transform:rotateY(45deg)_translateZ(-20px)]"></div>
        <div className="absolute inset-0 rounded-full border border-primary/50 shadow-[0_0_30px_rgba(161,166,255,0.3)_inset,0_0_30px_rgba(161,166,255,0.3)] [transform:rotateY(90deg)_translateZ(40px)]"></div>
        <div className="absolute inset-0 rounded-full border border-tertiary/50 shadow-[0_0_30px_rgba(161,250,255,0.3)_inset,0_0_30px_rgba(161,250,255,0.3)] [transform:rotateY(135deg)_translateZ(-40px)]"></div>
        
        {/* Equator and Polar rings */}
        <div className="absolute inset-0 rounded-full border-[2px] border-primary shadow-[0_0_40px_rgba(161,166,255,0.5)_inset,0_0_40px_rgba(161,166,255,0.5)] [transform:rotateX(90deg)_translateZ(10px)]"></div>
        <div className="absolute inset-0 rounded-full border border-tertiary/30 shadow-[0_0_30px_rgba(161,250,255,0.2)_inset,0_0_30px_rgba(161,250,255,0.2)] [transform:rotateX(45deg)rotateY(45deg)_translateZ(-10px)]"></div>
      </div>
    </div>
  );
}
