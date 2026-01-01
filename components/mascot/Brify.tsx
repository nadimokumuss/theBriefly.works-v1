"use client";

import { motion } from "framer-motion";
import { Video, Camera, Share2, Megaphone } from "lucide-react";

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

  // Eye expression based on selections
  const getEyeExpression = () => {
    if (activeCount >= 3) return "excited";
    if (activeCount >= 1) return "happy";
    return "neutral";
  };

  const eyeExpression = getEyeExpression();

  return (
    <div className="relative w-full h-full min-h-[320px] md:min-h-[400px] flex items-center justify-center">
      <svg
        viewBox="0 0 320 380"
        className="w-full h-full max-w-[300px]"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Gradients */}
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

          {/* Shadow filter */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Back tentacles (decorative) */}
        <motion.path
          d="M100 200 Q80 240 95 280 Q105 310 85 340"
          fill="none"
          stroke="#5A9AA8"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.5"
          animate={{ d: ["M100 200 Q80 240 95 280 Q105 310 85 340", "M100 200 Q75 240 90 280 Q100 310 80 340", "M100 200 Q80 240 95 280 Q105 310 85 340"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M220 200 Q240 240 225 280 Q215 310 235 340"
          fill="none"
          stroke="#5A9AA8"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.5"
          animate={{ d: ["M220 200 Q240 240 225 280 Q215 310 235 340", "M220 200 Q245 240 230 280 Q220 310 240 340", "M220 200 Q240 240 225 280 Q215 310 235 340"] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Tentacle 1 - Video (Left) */}
        <motion.g
          animate={{
            rotate: videoActive ? [0, -3, 3, 0] : 0,
          }}
          transition={{
            duration: 2.5,
            repeat: videoActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          style={{ originX: "110px", originY: "190px" }}
        >
          <motion.path
            d="M110 190 Q60 210 40 260 Q25 300 45 340 Q55 360 40 380"
            fill="none"
            stroke={videoActive ? "url(#tentacleActiveGradient)" : "url(#tentacleGradient)"}
            strokeWidth={videoActive ? "22" : "18"}
            strokeLinecap="round"
            animate={{
              d: videoActive
                ? ["M110 190 Q60 210 40 260 Q25 300 45 340 Q55 360 40 380", "M110 190 Q55 215 35 265 Q20 305 40 345 Q50 365 35 385", "M110 190 Q60 210 40 260 Q25 300 45 340 Q55 360 40 380"]
                : "M110 190 Q60 210 40 260 Q25 300 45 340 Q55 360 40 380"
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Suckers */}
          <circle cx="70" cy="230" r="6" fill="#A3C9D9" />
          <circle cx="50" cy="270" r="6" fill="#A3C9D9" />
          <circle cx="40" cy="310" r="5" fill="#A3C9D9" />
          <circle cx="48" cy="345" r="4" fill="#A3C9D9" />

          {/* Tool circle */}
          <motion.g
            animate={{ scale: videoActive ? 1 : 0.85, opacity: videoActive ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <circle cx="40" cy="380" r="20" fill={videoActive ? "#012326" : "#346C73"} filter="url(#shadow)" />
            <foreignObject x="26" y="366" width="28" height="28">
              <Video
                style={{
                  width: "100%",
                  height: "100%",
                  color: videoActive ? "#fff" : "#A3C9D9"
                }}
              />
            </foreignObject>
          </motion.g>
        </motion.g>

        {/* Tentacle 2 - Photo (Right) */}
        <motion.g
          animate={{
            rotate: photoActive ? [0, 3, -3, 0] : 0,
          }}
          transition={{
            duration: 2.3,
            repeat: photoActive ? Infinity : 0,
            ease: "easeInOut",
            delay: 0.2,
          }}
          style={{ originX: "210px", originY: "190px" }}
        >
          <motion.path
            d="M210 190 Q260 210 280 260 Q295 300 275 340 Q265 360 280 380"
            fill="none"
            stroke={photoActive ? "url(#tentacleActiveGradient)" : "url(#tentacleGradient)"}
            strokeWidth={photoActive ? "22" : "18"}
            strokeLinecap="round"
            animate={{
              d: photoActive
                ? ["M210 190 Q260 210 280 260 Q295 300 275 340 Q265 360 280 380", "M210 190 Q265 215 285 265 Q300 305 280 345 Q270 365 285 385", "M210 190 Q260 210 280 260 Q295 300 275 340 Q265 360 280 380"]
                : "M210 190 Q260 210 280 260 Q295 300 275 340 Q265 360 280 380"
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Suckers */}
          <circle cx="250" cy="230" r="6" fill="#A3C9D9" />
          <circle cx="270" cy="270" r="6" fill="#A3C9D9" />
          <circle cx="280" cy="310" r="5" fill="#A3C9D9" />
          <circle cx="272" cy="345" r="4" fill="#A3C9D9" />

          {/* Tool circle */}
          <motion.g
            animate={{ scale: photoActive ? 1 : 0.85, opacity: photoActive ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <circle cx="280" cy="380" r="20" fill={photoActive ? "#012326" : "#346C73"} filter="url(#shadow)" />
            <foreignObject x="266" y="366" width="28" height="28">
              <Camera
                style={{
                  width: "100%",
                  height: "100%",
                  color: photoActive ? "#fff" : "#A3C9D9"
                }}
              />
            </foreignObject>
          </motion.g>
        </motion.g>

        {/* Tentacle 3 - SM (Front Left) */}
        <motion.g
          animate={{
            rotate: smActive ? [0, -4, 4, 0] : 0,
          }}
          transition={{
            duration: 2,
            repeat: smActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          style={{ originX: "130px", originY: "210px" }}
        >
          <motion.path
            d="M130 210 Q100 250 90 290 Q85 330 110 360"
            fill="none"
            stroke={smActive ? "url(#tentacleActiveGradient)" : "url(#tentacleGradient)"}
            strokeWidth={smActive ? "20" : "16"}
            strokeLinecap="round"
            animate={{
              d: smActive
                ? ["M130 210 Q100 250 90 290 Q85 330 110 360", "M130 210 Q95 255 85 295 Q80 335 105 365", "M130 210 Q100 250 90 290 Q85 330 110 360"]
                : "M130 210 Q100 250 90 290 Q85 330 110 360"
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Suckers */}
          <circle cx="105" cy="260" r="5" fill="#A3C9D9" />
          <circle cx="92" cy="300" r="5" fill="#A3C9D9" />
          <circle cx="98" cy="335" r="4" fill="#A3C9D9" />

          {/* Tool circle */}
          <motion.g
            animate={{ scale: smActive ? 1 : 0.85, opacity: smActive ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <circle cx="110" cy="360" r="18" fill={smActive ? "#012326" : "#346C73"} filter="url(#shadow)" />
            <foreignObject x="98" y="348" width="24" height="24">
              <Share2
                style={{
                  width: "100%",
                  height: "100%",
                  color: smActive ? "#fff" : "#A3C9D9"
                }}
              />
            </foreignObject>
          </motion.g>
        </motion.g>

        {/* Tentacle 4 - Ads (Front Right) */}
        <motion.g
          animate={{
            rotate: adsActive ? [0, 4, -4, 0] : 0,
          }}
          transition={{
            duration: 1.8,
            repeat: adsActive ? Infinity : 0,
            ease: "easeInOut",
            delay: 0.1,
          }}
          style={{ originX: "190px", originY: "210px" }}
        >
          <motion.path
            d="M190 210 Q220 250 230 290 Q235 330 210 360"
            fill="none"
            stroke={adsActive ? "url(#tentacleActiveGradient)" : "url(#tentacleGradient)"}
            strokeWidth={adsActive ? "20" : "16"}
            strokeLinecap="round"
            animate={{
              d: adsActive
                ? ["M190 210 Q220 250 230 290 Q235 330 210 360", "M190 210 Q225 255 235 295 Q240 335 215 365", "M190 210 Q220 250 230 290 Q235 330 210 360"]
                : "M190 210 Q220 250 230 290 Q235 330 210 360"
            }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Suckers */}
          <circle cx="215" cy="260" r="5" fill="#A3C9D9" />
          <circle cx="228" cy="300" r="5" fill="#A3C9D9" />
          <circle cx="222" cy="335" r="4" fill="#A3C9D9" />

          {/* Tool circle */}
          <motion.g
            animate={{ scale: adsActive ? 1 : 0.85, opacity: adsActive ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <circle cx="210" cy="360" r="18" fill={adsActive ? "#012326" : "#346C73"} filter="url(#shadow)" />
            <foreignObject x="198" y="348" width="24" height="24">
              <Megaphone
                style={{
                  width: "100%",
                  height: "100%",
                  color: adsActive ? "#fff" : "#A3C9D9"
                }}
              />
            </foreignObject>
          </motion.g>
        </motion.g>

        {/* Main Body - Bulbous head/mantle */}
        <motion.g filter="url(#shadow)">
          {/* Body base */}
          <motion.ellipse
            cx="160"
            cy="185"
            rx="70"
            ry="45"
            fill="url(#bodyGradient)"
          />

          {/* Head/Mantle - Large dome shape */}
          <motion.path
            d="M90 140
               Q90 60 160 55
               Q230 60 230 140
               Q230 180 200 195
               Q160 210 120 195
               Q90 180 90 140"
            fill="url(#headGradient)"
            animate={{
              d: [
                "M90 140 Q90 60 160 55 Q230 60 230 140 Q230 180 200 195 Q160 210 120 195 Q90 180 90 140",
                "M90 142 Q90 58 160 53 Q230 58 230 142 Q230 182 200 197 Q160 212 120 197 Q90 182 90 142",
                "M90 140 Q90 60 160 55 Q230 60 230 140 Q230 180 200 195 Q160 210 120 195 Q90 180 90 140"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Head highlight/shine */}
          <ellipse cx="130" cy="85" rx="25" ry="15" fill="white" opacity="0.15" />
        </motion.g>

        {/* Face */}
        <g>
          {/* Left Eye */}
          <ellipse cx="130" cy="120" rx="22" ry="26" fill="white" />
          <motion.ellipse
            cx="132"
            cy="122"
            rx="12"
            ry="14"
            fill="#012326"
            animate={{
              cy: eyeExpression === "excited" ? 118 : 122,
              ry: eyeExpression === "excited" ? 16 : 14,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.ellipse
            cx="136"
            cy="116"
            rx="5"
            ry="5"
            fill="white"
            animate={{
              opacity: eyeExpression === "excited" ? 1 : 0.9,
              r: eyeExpression === "excited" ? 6 : 5,
            }}
          />
          <ellipse cx="128" cy="126" rx="2" ry="2" fill="white" opacity="0.5" />

          {/* Right Eye */}
          <ellipse cx="190" cy="120" rx="22" ry="26" fill="white" />
          <motion.ellipse
            cx="188"
            cy="122"
            rx="12"
            ry="14"
            fill="#012326"
            animate={{
              cy: eyeExpression === "excited" ? 118 : 122,
              ry: eyeExpression === "excited" ? 16 : 14,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.ellipse
            cx="192"
            cy="116"
            rx="5"
            ry="5"
            fill="white"
            animate={{
              opacity: eyeExpression === "excited" ? 1 : 0.9,
              r: eyeExpression === "excited" ? 6 : 5,
            }}
          />
          <ellipse cx="184" cy="126" rx="2" ry="2" fill="white" opacity="0.5" />

          {/* Mouth */}
          <motion.path
            fill="none"
            stroke="#012326"
            strokeWidth="4"
            strokeLinecap="round"
            animate={{
              d:
                eyeExpression === "excited"
                  ? "M140 160 Q160 180 180 160"
                  : eyeExpression === "happy"
                  ? "M145 158 Q160 172 175 158"
                  : "M148 160 Q160 165 172 160",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Blush (when excited) */}
          <motion.ellipse
            cx="105"
            cy="140"
            rx="15"
            ry="8"
            fill="url(#blushGradient)"
            animate={{
              opacity: eyeExpression === "excited" ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.ellipse
            cx="215"
            cy="140"
            rx="15"
            ry="8"
            fill="url(#blushGradient)"
            animate={{
              opacity: eyeExpression === "excited" ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </g>
      </svg>

      {/* Speech bubble */}
      <motion.div
        className="absolute top-0 right-0 md:right-4 bg-white rounded-2xl px-4 py-2 shadow-lg border border-accent/20"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{
          opacity: activeCount > 0 ? 1 : 0,
          scale: activeCount > 0 ? 1 : 0.8,
          y: activeCount > 0 ? 0 : 10,
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm font-medium text-[#012326]">
          {activeCount >= 4
            ? "Muhteşem! 🚀"
            : activeCount >= 3
            ? "Harika gidiyor! ✨"
            : activeCount >= 2
            ? "Güzel seçimler!"
            : activeCount >= 1
            ? "İyi başlangıç!"
            : ""}
        </p>
        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-r border-b border-accent/20 transform rotate-45" />
      </motion.div>
    </div>
  );
}
