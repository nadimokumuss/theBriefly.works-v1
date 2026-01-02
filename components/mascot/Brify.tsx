"use client";

import { motion } from "framer-motion";
import { Video, Camera, Share2, Megaphone } from "lucide-react";
import { useState, useEffect } from "react";

interface BrifyProps {
  videoActive: boolean;
  photoActive: boolean;
  smActive: boolean;
  adsActive: boolean;
  videoLevel: number;
  photoLevel: number;
}

export function Brify({
  videoActive,
  photoActive,
  smActive,
  adsActive,
}: BrifyProps) {
  const activeCount = [videoActive, photoActive, smActive, adsActive].filter(Boolean).length;
  const [isJuggling, setIsJuggling] = useState(false);

  const getEyeExpression = () => {
    if (isJuggling) return "excited";
    if (activeCount >= 3) return "excited";
    if (activeCount >= 1) return "happy";
    return "neutral";
  };

  const eyeExpression = getEyeExpression();

  // Trigger juggling every 5 seconds when 2+ items active
  useEffect(() => {
    if (activeCount >= 2) {
      const interval = setInterval(() => {
        setIsJuggling(true);
        setTimeout(() => setIsJuggling(false), 2400);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeCount]);

  // Tentacle base positions for transform origins
  const tentacles = [
    { id: "video", active: videoActive, ox: 110, oy: 190, icon: Video,
      path: "M110 190 Q70 220 55 260 Q45 300 60 340 Q70 365 55 385",
      suckers: [[80,235,5], [60,275,5], [58,315,4], [62,350,3]],
      iconPos: { cx: 55, cy: 385, r: 18 }
    },
    { id: "photo", active: photoActive, ox: 210, oy: 190, icon: Camera,
      path: "M210 190 Q250 220 265 260 Q275 300 260 340 Q250 365 265 385",
      suckers: [[240,235,5], [260,275,5], [262,315,4], [258,350,3]],
      iconPos: { cx: 265, cy: 385, r: 18 }
    },
    { id: "sm", active: smActive, ox: 130, oy: 210, icon: Share2,
      path: "M130 210 Q105 245 95 280 Q90 315 105 345",
      suckers: [[110,255,4], [98,290,4], [100,320,3]],
      iconPos: { cx: 105, cy: 345, r: 16 }
    },
    { id: "ads", active: adsActive, ox: 190, oy: 210, icon: Megaphone,
      path: "M190 210 Q215 245 225 280 Q230 315 215 345",
      suckers: [[210,255,4], [222,290,4], [220,320,3]],
      iconPos: { cx: 215, cy: 345, r: 16 }
    },
  ];

  return (
    <div className="relative w-full h-full min-h-[320px] md:min-h-[400px] flex items-center justify-center">
      <svg
        viewBox="0 0 320 400"
        className="w-full h-full max-w-[280px]"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7CB5C2" />
            <stop offset="50%" stopColor="#6A9BA6" />
            <stop offset="100%" stopColor="#4A8A97" />
          </linearGradient>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5A9AA8" />
            <stop offset="100%" stopColor="#3A7A88" />
          </linearGradient>
          <linearGradient id="tentacleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6A9BA6" />
            <stop offset="100%" stopColor="#4A7A86" />
          </linearGradient>
          <linearGradient id="tentacleActiveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6A9BA6" />
            <stop offset="100%" stopColor="#346C73" />
          </linearGradient>
          <radialGradient id="blushGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0" />
          </radialGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.15" />
          </filter>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Back decorative tentacles */}
        <motion.path
          d="M100 200 Q80 240 95 280 Q105 310 85 340"
          fill="none" stroke="#5A9AA8" strokeWidth="12" strokeLinecap="round" opacity="0.4"
          animate={{ d: ["M100 200 Q80 240 95 280 Q105 310 85 340", "M100 200 Q70 235 90 275 Q100 305 75 335", "M100 200 Q80 240 95 280 Q105 310 85 340"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M220 200 Q240 240 225 280 Q215 310 235 340"
          fill="none" stroke="#5A9AA8" strokeWidth="12" strokeLinecap="round" opacity="0.4"
          animate={{ d: ["M220 200 Q240 240 225 280 Q215 310 235 340", "M220 200 Q250 235 230 275 Q220 305 245 335", "M220 200 Q240 240 225 280 Q215 310 235 340"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Main Tentacles with Icons */}
        {tentacles.map((t, idx) => {
          const Icon = t.icon;
          const isLeft = idx === 0 || idx === 2;
          const rotateDir = isLeft ? -1 : 1;

          return (
            <motion.g
              key={t.id}
              style={{
                transformOrigin: `${t.ox}px ${t.oy}px`,
                transformBox: "fill-box" as const
              }}
              animate={isJuggling ? {
                rotate: [0, rotateDir * -25, rotateDir * 15, rotateDir * -30, rotateDir * 20, 0],
              } : t.active ? {
                rotate: [0, rotateDir * -8, rotateDir * 8, rotateDir * -5, rotateDir * 5, 0],
              } : {
                rotate: [0, rotateDir * -3, rotateDir * 3, 0],
              }}
              transition={{
                duration: isJuggling ? 2.4 : (t.active ? 1.5 + idx * 0.1 : 3 + idx * 0.2),
                repeat: isJuggling ? 0 : Infinity,
                ease: "easeInOut",
                delay: isJuggling ? idx * 0.1 : 0
              }}
            >
              {/* Tentacle Path */}
              <motion.path
                d={t.path}
                fill="none"
                stroke={t.active ? "url(#tentacleActiveGradient)" : "url(#tentacleGradient)"}
                strokeWidth={t.active ? "20" : "16"}
                strokeLinecap="round"
                animate={t.active && !isJuggling ? {
                  strokeWidth: ["20", "22", "20"]
                } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />

              {/* Suckers */}
              {t.suckers.map((s, i) => (
                <circle key={i} cx={s[0]} cy={s[1]} r={s[2]} fill="#A3C9D9" />
              ))}

              {/* Icon at tentacle tip */}
              <motion.g
                filter={isJuggling ? "url(#glow)" : "url(#shadow)"}
                animate={isJuggling ? {
                  rotate: [0, rotateDir * 360, rotateDir * 720],
                  scale: [1, 1.3, 1],
                } : t.active ? {
                  scale: [1, 1.15, 1],
                } : {}}
                transition={{
                  duration: isJuggling ? 2.4 : 1.2,
                  repeat: isJuggling ? 0 : (t.active ? Infinity : 0),
                  ease: "easeInOut"
                }}
                style={{ transformOrigin: `${t.iconPos.cx}px ${t.iconPos.cy}px` }}
              >
                <motion.circle
                  cx={t.iconPos.cx}
                  cy={t.iconPos.cy}
                  r={t.iconPos.r}
                  fill={t.active ? "#012326" : "#346C73"}
                  animate={t.active ? {
                    fill: ["#012326", "#1a3a3d", "#012326"]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <foreignObject
                  x={t.iconPos.cx - 12}
                  y={t.iconPos.cy - 12}
                  width="24"
                  height="24"
                >
                  <Icon style={{
                    width: "100%",
                    height: "100%",
                    color: t.active ? "#fff" : "#A3C9D9"
                  }} />
                </foreignObject>
              </motion.g>
            </motion.g>
          );
        })}

        {/* Body */}
        <motion.g filter="url(#shadow)">
          <ellipse cx="160" cy="185" rx="65" ry="42" fill="url(#bodyGradient)" />
          <motion.path
            d="M95 140 Q95 65 160 60 Q225 65 225 140 Q225 175 198 188 Q160 200 122 188 Q95 175 95 140"
            fill="url(#headGradient)"
            animate={isJuggling ? {
              d: [
                "M95 140 Q95 65 160 60 Q225 65 225 140 Q225 175 198 188 Q160 200 122 188 Q95 175 95 140",
                "M93 138 Q93 62 160 57 Q227 62 227 138 Q227 173 198 186 Q160 198 122 186 Q93 173 93 138",
                "M97 142 Q97 68 160 63 Q223 68 223 142 Q223 177 198 190 Q160 202 122 190 Q97 177 97 142",
                "M95 140 Q95 65 160 60 Q225 65 225 140 Q225 175 198 188 Q160 200 122 188 Q95 175 95 140",
              ]
            } : {
              d: [
                "M95 140 Q95 65 160 60 Q225 65 225 140 Q225 175 198 188 Q160 200 122 188 Q95 175 95 140",
                "M95 142 Q95 63 160 58 Q225 63 225 142 Q225 177 198 190 Q160 202 122 190 Q95 177 95 142",
                "M95 140 Q95 65 160 60 Q225 65 225 140 Q225 175 198 188 Q160 200 122 188 Q95 175 95 140",
              ]
            }}
            transition={{ duration: isJuggling ? 0.6 : 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <ellipse cx="130" cy="90" rx="22" ry="12" fill="white" opacity="0.12" />
        </motion.g>

        {/* Face */}
        <g>
          {/* Left Eye */}
          <ellipse cx="132" cy="120" rx="20" ry="24" fill="white" />
          <motion.ellipse
            cx="134" cy="122" rx="10" ry="12" fill="#012326"
            animate={{
              cy: eyeExpression === "excited" ? 118 : 122,
              ry: eyeExpression === "excited" ? 14 : 12,
              cx: isJuggling ? [134, 128, 140, 128, 134] : 134,
            }}
            transition={{ duration: isJuggling ? 2.4 : 0.3, repeat: isJuggling ? Infinity : 0 }}
          />
          <ellipse cx="137" cy="117" rx="4" ry="4" fill="white" />

          {/* Right Eye */}
          <ellipse cx="188" cy="120" rx="20" ry="24" fill="white" />
          <motion.ellipse
            cx="186" cy="122" rx="10" ry="12" fill="#012326"
            animate={{
              cy: eyeExpression === "excited" ? 118 : 122,
              ry: eyeExpression === "excited" ? 14 : 12,
              cx: isJuggling ? [186, 180, 192, 180, 186] : 186,
            }}
            transition={{ duration: isJuggling ? 2.4 : 0.3, repeat: isJuggling ? Infinity : 0 }}
          />
          <ellipse cx="189" cy="117" rx="4" ry="4" fill="white" />

          {/* Mouth */}
          <motion.path
            fill="none" stroke="#012326" strokeWidth="3" strokeLinecap="round"
            animate={{
              d: isJuggling ? "M140 155 Q160 175 180 155"
                : eyeExpression === "excited" ? "M142 155 Q160 172 178 155"
                : eyeExpression === "happy" ? "M145 153 Q160 165 175 153"
                : "M148 155 Q160 160 172 155",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Blush */}
          <motion.ellipse
            cx="110" cy="138" rx="12" ry="6" fill="url(#blushGradient)"
            animate={{ opacity: eyeExpression === "excited" || isJuggling ? 1 : 0 }}
          />
          <motion.ellipse
            cx="210" cy="138" rx="12" ry="6" fill="url(#blushGradient)"
            animate={{ opacity: eyeExpression === "excited" || isJuggling ? 1 : 0 }}
          />
        </g>

        {/* Juggling sparkles */}
        {isJuggling && (
          <>
            <motion.circle cx="100" cy="280" r="4" fill="#FFD700"
              animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], cy: [300, 260, 220] }}
              transition={{ duration: 0.8, repeat: 3 }}
            />
            <motion.circle cx="220" cy="280" r="4" fill="#FFD700"
              animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], cy: [300, 260, 220] }}
              transition={{ duration: 0.8, repeat: 3, delay: 0.3 }}
            />
            <motion.circle cx="160" cy="270" r="5" fill="#FF6B6B"
              animate={{ opacity: [0, 1, 0], scale: [0, 1.3, 0] }}
              transition={{ duration: 0.6, repeat: 4, delay: 0.15 }}
            />
          </>
        )}
      </svg>

      {/* Speech bubble */}
      <motion.div
        className="absolute top-2 right-0 md:right-2 bg-white rounded-xl px-3 py-1.5 shadow-lg border border-accent/20"
        animate={{
          opacity: activeCount > 0 || isJuggling ? 1 : 0,
          scale: activeCount > 0 || isJuggling ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-xs font-medium text-[#012326]">
          {isJuggling ? "Hooop!"
            : activeCount >= 4 ? "Muhteşem!"
            : activeCount >= 3 ? "Harika!"
            : activeCount >= 2 ? "Guzel secim!"
            : activeCount >= 1 ? "Iyi baslangic!"
            : ""}
        </p>
      </motion.div>
    </div>
  );
}
