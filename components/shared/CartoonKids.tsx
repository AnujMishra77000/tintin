"use client";

import { motion } from "framer-motion";

// Cartoon Kid SVG Components
export const HappyKid = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#FFE4E1" />
    <circle cx="35" cy="40" r="5" fill="#4A4A4A" />
    <circle cx="65" cy="40" r="5" fill="#4A4A4A" />
    <path d="M35 60 Q50 75 65 60" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="20" cy="50" r="8" fill="#FF6B6B" opacity="0.3" />
    <circle cx="80" cy="50" r="8" fill="#FF6B6B" opacity="0.3" />
    <path d="M25 25 Q50 10 75 25" stroke="#8B4513" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

export const ReadingKid = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#E8F4F8" />
    <circle cx="35" cy="40" r="5" fill="#4A4A4A" />
    <circle cx="65" cy="40" r="5" fill="#4A4A4A" />
    <path d="M40 60 Q50 65 60 60" stroke="#45B7D1" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="30" y="55" width="40" height="30" rx="3" fill="#FFE66D" />
    <rect x="35" y="60" width="30" height="3" fill="#4A4A4A" opacity="0.3" />
    <rect x="35" y="68" width="20" height="3" fill="#4A4A4A" opacity="0.3" />
    <rect x="35" y="76" width="25" height="3" fill="#4A4A4A" opacity="0.3" />
  </svg>
);

export const PlayingKid = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#E8F8E8" />
    <circle cx="35" cy="40" r="5" fill="#4A4A4A" />
    <circle cx="65" cy="40" r="5" fill="#4A4A4A" />
    <path d="M35 60 Q50 70 65 60" stroke="#95E1D3" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="30" cy="70" r="8" fill="#FF6B6B" />
    <circle cx="70" cy="70" r="8" fill="#45B7D1" />
    <circle cx="50" cy="80" r="8" fill="#FFE66D" />
  </svg>
);

export const SleepingKid = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#F0E6FF" />
    <path d="M30 42 Q35 38 40 42" stroke="#4A4A4A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M60 42 Q65 38 70 42" stroke="#4A4A4A" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="50" cy="60" r="3" fill="#A29BFE" />
    <text x="75" y="30" fontSize="12" fill="#A29BFE">z</text>
    <text x="82" y="22" fontSize="10" fill="#A29BFE">z</text>
    <text x="88" y="15" fontSize="8" fill="#A29BFE">z</text>
  </svg>
);

export const EatingKid = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#FFF5E6" />
    <circle cx="35" cy="40" r="5" fill="#4A4A4A" />
    <circle cx="65" cy="40" r="5" fill="#4A4A4A" />
    <ellipse cx="50" cy="60" rx="8" ry="10" fill="#FF9F43" />
    <rect x="20" y="70" width="25" height="15" rx="5" fill="#95E1D3" />
    <rect x="55" y="70" width="25" height="15" rx="5" fill="#95E1D3" />
  </svg>
);

export const ArtKid = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#FFE6F0" />
    <circle cx="35" cy="40" r="5" fill="#4A4A4A" />
    <circle cx="65" cy="40" r="5" fill="#4A4A4A" />
    <path d="M40 60 Q50 65 60 60" stroke="#FD79A8" strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="65" y="55" width="8" height="25" rx="2" fill="#8B4513" transform="rotate(-30 69 67)" />
    <circle cx="72" cy="52" r="6" fill="#FF6B6B" />
    <circle cx="78" cy="48" r="5" fill="#45B7D1" />
    <circle cx="83" cy="44" r="4" fill="#FFE66D" />
  </svg>
);

export const MusicKid = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#E6F3FF" />
    <circle cx="35" cy="40" r="5" fill="#4A4A4A" />
    <circle cx="65" cy="40" r="5" fill="#4A4A4A" />
    <path d="M40 58 Q50 63 60 58" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round" fill="none" />
    <ellipse cx="70" cy="55" rx="8" ry="6" fill="#FF6B6B" />
    <rect x="77" y="35" width="3" height="20" fill="#4A4A4A" />
    <path d="M77 35 L85 30" stroke="#4A4A4A" strokeWidth="2" />
    <text x="20" y="35" fontSize="14" fill="#FF6B6B">♪</text>
    <text x="30" y="25" fontSize="12" fill="#45B7D1">♫</text>
  </svg>
);

export const SportsKid = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#E8F8E8" />
    <circle cx="35" cy="40" r="5" fill="#4A4A4A" />
    <circle cx="65" cy="40" r="5" fill="#4A4A4A" />
    <path d="M35 60 Q50 68 65 60" stroke="#95E1D3" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="75" cy="70" r="10" fill="#FF6B6B" />
    <path d="M70 65 L80 75 M80 65 L70 75" stroke="white" strokeWidth="2" />
  </svg>
);

export const SafetyKid = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#E6F9FF" />
    <circle cx="35" cy="40" r="5" fill="#4A4A4A" />
    <circle cx="65" cy="40" r="5" fill="#4A4A4A" />
    <path d="M40 60 Q50 65 60 60" stroke="#45B7D1" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M70 30 L70 60 Q70 75 50 75 Q30 75 30 60 L30 30 Q30 25 35 25 L65 25 Q70 25 70 30" fill="#FFE66D" opacity="0.8" />
    <path d="M45 50 L50 55 L60 42" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

export const StarKid = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#FFF9E6" />
    <circle cx="35" cy="40" r="5" fill="#4A4A4A" />
    <circle cx="65" cy="40" r="5" fill="#4A4A4A" />
    <path d="M35 60 Q50 70 65 60" stroke="#FF9F43" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M75 25 L78 35 L88 35 L80 42 L83 52 L75 46 L67 52 L70 42 L62 35 L72 35 Z" fill="#FFE66D" stroke="#F7D794" strokeWidth="2" />
    <path d="M20 35 L22 40 L27 40 L23 44 L25 49 L20 46 L15 49 L17 44 L13 40 L18 40 Z" fill="#FFE66D" />
  </svg>
);

// Floating animation wrapper
export const FloatingKid = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

// Bouncing animation wrapper
export const BouncingKid = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    animate={{
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);
