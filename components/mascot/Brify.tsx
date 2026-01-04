"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";

interface BrieflyProps {
  videoActive: boolean;
  photoActive: boolean;
  smActive: boolean;
  adsActive: boolean;
  videoLevel?: number;
  photoLevel?: number;
}

// Better icon designs - cleaner and more recognizable
const iconPaths: Record<string, string> = {
  // Video camera - play button style
  video: "M-6,-5 L-6,5 L6,0 Z",
  // Camera - simple camera shape
  photo: "M-8,-4 L8,-4 L8,6 L-8,6 Z M-3,-6 L3,-6 L4,-4 L-4,-4 Z M0,1 A3,3 0 1,0 0.01,1",
  // Social media - connected nodes
  sm: "M-5,-5 A2,2 0 1,0 -5.01,-5 M5,-3 A2,2 0 1,0 5.01,-3 M0,5 A2,2 0 1,0 0.01,5 M-3,-4 L3,-2 M3,-2 L0,3 M-3,-4 L-1,3",
  // Megaphone - speaker shape
  ads: "M-8,0 L-4,-4 L-4,4 Z M-4,-3 L4,-5 L4,5 L-4,3 Z M4,-3 L7,-3 L7,3 L4,3",
};

type ServiceId = "video" | "photo" | "sm" | "ads";

// Tentacle configuration with ocean wave paths
const tentacleConfig = [
  {
    id: "video" as ServiceId,
    basePath: "M118 188 C100 210 85 250 75 290 C65 330 60 370 65 410",
    raisedPath: "M118 188 C90 195 60 220 40 260 C20 300 15 340 30 380",
    wave1: "M118 188 C95 215 78 255 70 295 C62 335 62 375 68 415",
    wave2: "M118 188 C105 205 92 245 82 285 C72 325 65 365 62 405",
    wave3: "M118 188 C98 212 82 252 72 292 C62 332 58 372 60 412",
    tipBase: [65, 410],
    tipRaised: [30, 380],
    isOuter: true,
    side: "left",
  },
  {
    id: "photo" as ServiceId,
    basePath: "M202 188 C220 210 235 250 245 290 C255 330 260 370 255 410",
    raisedPath: "M202 188 C230 195 260 220 280 260 C300 300 305 340 290 380",
    wave1: "M202 188 C225 215 242 255 250 295 C258 335 258 375 252 415",
    wave2: "M202 188 C215 205 228 245 238 285 C248 325 255 365 258 405",
    wave3: "M202 188 C222 212 238 252 248 292 C258 332 262 372 260 412",
    tipBase: [255, 410],
    tipRaised: [290, 380],
    isOuter: true,
    side: "right",
  },
  {
    id: "sm" as ServiceId,
    basePath: "M135 195 C120 225 110 265 108 305 C106 345 112 375 118 400",
    raisedPath: "M135 195 C110 215 85 250 70 290 C55 330 60 360 75 385",
    wave1: "M135 195 C118 228 105 268 102 308 C99 348 108 378 115 403",
    wave2: "M135 195 C122 222 115 262 114 302 C113 342 118 372 122 397",
    wave3: "M135 195 C120 226 108 266 105 306 C102 346 110 376 116 401",
    tipBase: [118, 400],
    tipRaised: [75, 385],
    isOuter: false,
    side: "left",
  },
  {
    id: "ads" as ServiceId,
    basePath: "M185 195 C200 225 210 265 212 305 C214 345 208 375 202 400",
    raisedPath: "M185 195 C210 215 235 250 250 290 C265 330 260 360 245 385",
    wave1: "M185 195 C202 228 215 268 218 308 C221 348 212 378 205 403",
    wave2: "M185 195 C198 222 205 262 206 302 C207 342 202 372 198 397",
    wave3: "M185 195 C200 226 212 266 215 306 C218 346 210 376 204 401",
    tipBase: [202, 400],
    tipRaised: [245, 385],
    isOuter: false,
    side: "right",
  },
];

// Helper: Get point on cubic bezier at t (0-1)
function getPointOnCubicBezier(
  p0: [number, number],
  p1: [number, number],
  p2: [number, number],
  p3: [number, number],
  t: number
): [number, number] {
  const t2 = t * t;
  const t3 = t2 * t;
  const mt = 1 - t;
  const mt2 = mt * mt;
  const mt3 = mt2 * mt;

  return [
    mt3 * p0[0] + 3 * mt2 * t * p1[0] + 3 * mt * t2 * p2[0] + t3 * p3[0],
    mt3 * p0[1] + 3 * mt2 * t * p1[1] + 3 * mt * t2 * p2[1] + t3 * p3[1],
  ];
}

// Parse SVG path to get control points
function parseCubicPath(d: string): [[number, number], [number, number], [number, number], [number, number]] {
  const nums = d.match(/-?\d+\.?\d*/g)?.map(Number) || [];
  return [
    [nums[0], nums[1]], // M start
    [nums[2], nums[3]], // C control1
    [nums[4], nums[5]], // control2
    [nums[6], nums[7]], // end (first curve)
  ];
}

export function Briefly({
  videoActive,
  photoActive,
  smActive,
  adsActive,
}: BrieflyProps) {
  const activeStates: Record<ServiceId, boolean> = {
    video: videoActive,
    photo: photoActive,
    sm: smActive,
    ads: adsActive,
  };

  const activeServices = (Object.keys(activeStates) as ServiceId[]).filter(
    (key) => activeStates[key]
  );
  const activeCount = activeServices.length;

  // Animation phase tracking
  const [phase, setPhase] = useState<"idle" | "raising" | "flying" | "catching">("idle");
  const [swapPair, setSwapPair] = useState<[ServiceId, ServiceId] | null>(null);
  const [flyProgress, setFlyProgress] = useState(0);

  // Expression
  const expression = useMemo(() => {
    if (phase === "flying") return "excited";
    if (activeCount >= 3) return "excited";
    if (activeCount >= 1) return "happy";
    return "neutral";
  }, [phase, activeCount]);

  // Calculate eye target based on flying icons
  const eyeTarget = useMemo(() => {
    if (phase === "flying" && swapPair) {
      // Look at the center of the flying action
      const config0 = tentacleConfig.find(t => t.id === swapPair[0])!;
      const config1 = tentacleConfig.find(t => t.id === swapPair[1])!;
      const midX = (config0.tipRaised[0] + config1.tipRaised[0]) / 2;
      const midY = Math.min(config0.tipRaised[1], config1.tipRaised[1]) - 80;

      // Convert to eye offset (-5 to 5 range)
      const eyeOffsetX = ((midX - 160) / 160) * 5;
      const eyeOffsetY = ((midY - 300) / 200) * -3;

      return { x: eyeOffsetX, y: eyeOffsetY };
    }
    return { x: 0, y: 0 };
  }, [phase, swapPair]);

  // Start juggle sequence
  const startJuggle = useCallback(() => {
    if (activeServices.length < 2 || phase !== "idle") return;

    const shuffled = [...activeServices].sort(() => Math.random() - 0.5);
    const pair: [ServiceId, ServiceId] = [shuffled[0], shuffled[1]];
    setSwapPair(pair);

    // Phase 1: Raise arms (0 - 800ms)
    setPhase("raising");

    // Phase 2: Flying (800ms - 2200ms)
    setTimeout(() => {
      setPhase("flying");
      // Animate progress
      let start = Date.now();
      const duration = 1400;
      const animate = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        setFlyProgress(progress);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, 800);

    // Phase 3: Catching (2200ms - 2800ms)
    setTimeout(() => setPhase("catching"), 2200);

    // Phase 4: Return to idle
    setTimeout(() => {
      setPhase("idle");
      setSwapPair(null);
      setFlyProgress(0);
    }, 3200);
  }, [activeServices, phase]);

  // Auto-juggle
  useEffect(() => {
    if (activeCount >= 2) {
      const interval = setInterval(startJuggle, 5000);
      return () => clearInterval(interval);
    }
  }, [activeCount, startJuggle]);

  // Get current tentacle path based on phase
  const getTentaclePath = (config: typeof tentacleConfig[0], isInSwap: boolean) => {
    if (isInSwap && (phase === "raising" || phase === "flying" || phase === "catching")) {
      return config.raisedPath;
    }
    return config.basePath;
  };

  // Get current tip position
  const getTipPosition = (config: typeof tentacleConfig[0], isInSwap: boolean): [number, number] => {
    if (isInSwap && (phase === "raising" || phase === "flying" || phase === "catching")) {
      return config.tipRaised as [number, number];
    }
    return config.tipBase as [number, number];
  };

  // Calculate sucker positions along path
  const getSuckerPositions = (pathD: string, count: number): [number, number][] => {
    const points = parseCubicPath(pathD);
    const positions: [number, number][] = [];
    for (let i = 0; i < count; i++) {
      const t = 0.25 + (i * 0.55) / (count - 1); // Spread from 25% to 80% along path
      positions.push(getPointOnCubicBezier(points[0], points[1], points[2], points[3], t));
    }
    return positions;
  };

  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[450px] flex items-center justify-center">
      <svg
        viewBox="0 0 320 460"
        className="w-full h-full max-w-[320px]"
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
            <stop offset="0%" stopColor="#7CB5C2" />
            <stop offset="100%" stopColor="#346C73" />
          </linearGradient>
          <radialGradient id="blushGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0" />
          </radialGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.15" />
          </filter>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Back decorative tentacles - slow ocean wave */}
        <motion.path
          fill="none"
          stroke="#5A9AA8"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.2"
          animate={{
            d: [
              "M112 192 C95 230 92 275 98 320 C104 365 92 395 82 420",
              "M112 192 C92 235 88 280 92 325 C96 370 88 400 78 425",
              "M112 192 C98 228 96 272 100 318 C104 362 95 392 85 418",
              "M112 192 C95 230 92 275 98 320 C104 365 92 395 82 420",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          fill="none"
          stroke="#5A9AA8"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.2"
          animate={{
            d: [
              "M208 192 C225 230 228 275 222 320 C216 365 228 395 238 420",
              "M208 192 C228 235 232 280 228 325 C224 370 232 400 242 425",
              "M208 192 C222 228 224 272 220 318 C216 362 225 392 235 418",
              "M208 192 C225 230 228 275 222 320 C216 365 228 395 238 420",
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Main Tentacles */}
        {tentacleConfig.map((config, idx) => {
          const isActive = activeStates[config.id];
          const isInSwap = swapPair?.includes(config.id) || false;
          const currentPath = getTentaclePath(config, isInSwap);
          const currentTip = getTipPosition(config, isInSwap);
          const suckerCount = config.isOuter ? 4 : 3;

          // Determine path animation
          const idleWaves = [config.basePath, config.wave1, config.basePath, config.wave2, config.wave3, config.basePath];
          const actionPath = isInSwap ? config.raisedPath : config.basePath;

          return (
            <g key={config.id}>
              {/* Tentacle Path */}
              <motion.path
                fill="none"
                stroke={isActive ? "url(#tentacleActiveGradient)" : "url(#tentacleGradient)"}
                strokeWidth={isActive ? 13 : 10}
                strokeLinecap="round"
                animate={{
                  d: phase === "idle" ? idleWaves : [config.basePath, actionPath, actionPath, config.basePath],
                }}
                transition={{
                  duration: phase === "idle" ? 7 + idx : 3.2,
                  repeat: phase === "idle" ? Infinity : 0,
                  ease: "easeInOut",
                  times: phase === "idle" ? [0, 0.2, 0.4, 0.6, 0.8, 1] : [0, 0.25, 0.75, 1],
                }}
              />

              {/* Suckers - positioned along the animated path */}
              {Array.from({ length: suckerCount }).map((_, i) => {
                const t = 0.3 + (i * 0.5) / (suckerCount - 1);

                // Calculate positions for different path states
                const basePoints = parseCubicPath(config.basePath);
                const wave1Points = parseCubicPath(config.wave1);
                const wave2Points = parseCubicPath(config.wave2);
                const raisedPoints = parseCubicPath(config.raisedPath);

                const basePos = getPointOnCubicBezier(basePoints[0], basePoints[1], basePoints[2], basePoints[3], t);
                const wave1Pos = getPointOnCubicBezier(wave1Points[0], wave1Points[1], wave1Points[2], wave1Points[3], t);
                const wave2Pos = getPointOnCubicBezier(wave2Points[0], wave2Points[1], wave2Points[2], wave2Points[3], t);
                const raisedPos = getPointOnCubicBezier(raisedPoints[0], raisedPoints[1], raisedPoints[2], raisedPoints[3], t);

                const idlePositions = [basePos, wave1Pos, basePos, wave2Pos, basePos];
                const actionPositions = [basePos, raisedPos, raisedPos, basePos];

                return (
                  <motion.circle
                    key={i}
                    r={config.isOuter ? 4.5 - i * 0.6 : 3.5 - i * 0.5}
                    fill="#A3C9D9"
                    animate={{
                      cx: phase === "idle"
                        ? idlePositions.map(p => p[0])
                        : (isInSwap ? actionPositions.map(p => p[0]) : idlePositions.map(p => p[0])),
                      cy: phase === "idle"
                        ? idlePositions.map(p => p[1])
                        : (isInSwap ? actionPositions.map(p => p[1]) : idlePositions.map(p => p[1])),
                    }}
                    transition={{
                      duration: phase === "idle" ? 7 + idx : 3.2,
                      repeat: phase === "idle" ? Infinity : 0,
                      ease: "easeInOut",
                      times: phase === "idle" ? [0, 0.25, 0.5, 0.75, 1] : [0, 0.25, 0.75, 1],
                    }}
                  />
                );
              })}

              {/* Icon at tentacle tip */}
              {isActive && !(isInSwap && phase === "flying") && (
                <motion.g
                  animate={{
                    x: phase === "idle"
                      ? [0, 3, 0, -3, 0]
                      : (isInSwap ? [0, config.tipRaised[0] - config.tipBase[0], config.tipRaised[0] - config.tipBase[0], 0] : [0, 3, 0, -3, 0]),
                    y: phase === "idle"
                      ? [0, 5, 0, -3, 0]
                      : (isInSwap ? [0, config.tipRaised[1] - config.tipBase[1], config.tipRaised[1] - config.tipBase[1], 0] : [0, 5, 0, -3, 0]),
                  }}
                  transition={{
                    duration: phase === "idle" ? 7 + idx : 3.2,
                    repeat: phase === "idle" ? Infinity : 0,
                    ease: "easeInOut",
                    times: phase === "idle" ? [0, 0.25, 0.5, 0.75, 1] : [0, 0.25, 0.75, 1],
                  }}
                >
                  <circle
                    cx={config.tipBase[0]}
                    cy={config.tipBase[1]}
                    r={config.isOuter ? 17 : 14}
                    fill="#012326"
                    filter="url(#shadow)"
                  />
                  <path
                    d={iconPaths[config.id]}
                    fill="#fff"
                    transform={`translate(${config.tipBase[0]}, ${config.tipBase[1]}) scale(${config.isOuter ? 1.1 : 0.9})`}
                  />
                </motion.g>
              )}

              {/* Inactive placeholder */}
              {!isActive && (
                <motion.circle
                  cx={config.tipBase[0]}
                  cy={config.tipBase[1]}
                  r={config.isOuter ? 15 : 12}
                  fill="none"
                  stroke="#346C73"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  opacity="0.3"
                  animate={{
                    cx: [config.tipBase[0], config.tipBase[0] + 3, config.tipBase[0], config.tipBase[0] - 3, config.tipBase[0]],
                    cy: [config.tipBase[1], config.tipBase[1] + 5, config.tipBase[1], config.tipBase[1] - 3, config.tipBase[1]],
                  }}
                  transition={{
                    duration: 7 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </g>
          );
        })}

        {/* Flying Icons - smooth arc motion */}
        {phase === "flying" && swapPair && (() => {
          const config0 = tentacleConfig.find(t => t.id === swapPair[0])!;
          const config1 = tentacleConfig.find(t => t.id === swapPair[1])!;

          // Smooth easing function
          const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          const smoothProgress = easeInOutCubic(flyProgress);

          // Calculate arc positions - parabolic with slight horizontal offset
          const calcArcPos = (from: number[], to: number[], progress: number, offsetMult: number) => {
            const x = from[0] + (to[0] - from[0]) * progress;
            const y = from[1] + (to[1] - from[1]) * progress - 120 * Math.sin(progress * Math.PI);
            // Slight horizontal offset so they don't collide
            const offset = Math.sin(progress * Math.PI) * 15 * offsetMult;
            return { x: x + offset, y };
          };

          const pos0 = calcArcPos(config0.tipRaised, config1.tipRaised, smoothProgress, -1);
          const pos1 = calcArcPos(config1.tipRaised, config0.tipRaised, smoothProgress, 1);

          // Gentle rotation - one full rotation over the flight
          const rotation0 = smoothProgress * 360;
          const rotation1 = -smoothProgress * 360;

          return (
            <>
              {/* Icon 0 flying to position 1 */}
              <g
                transform={`translate(${pos0.x}, ${pos0.y}) rotate(${rotation0})`}
                filter="url(#glow)"
              >
                <circle r="17" fill="#012326" />
                <path d={iconPaths[swapPair[0]]} fill="#fff" transform="scale(1.1)" />
              </g>

              {/* Icon 1 flying to position 0 */}
              <g
                transform={`translate(${pos1.x}, ${pos1.y}) rotate(${rotation1})`}
                filter="url(#glow)"
              >
                <circle r="17" fill="#012326" />
                <path d={iconPaths[swapPair[1]]} fill="#fff" transform="scale(1.1)" />
              </g>

              {/* Subtle sparkle trail */}
              {flyProgress > 0.2 && flyProgress < 0.8 && (
                <>
                  <circle
                    cx={(pos0.x + pos1.x) / 2}
                    cy={Math.min(pos0.y, pos1.y) - 20}
                    r={3 + Math.sin(flyProgress * Math.PI * 4) * 2}
                    fill="#FFD700"
                    opacity={0.6}
                  />
                  <circle
                    cx={(pos0.x + pos1.x) / 2 - 15}
                    cy={Math.min(pos0.y, pos1.y)}
                    r={2 + Math.sin(flyProgress * Math.PI * 3) * 1.5}
                    fill="#7CB5C2"
                    opacity={0.5}
                  />
                  <circle
                    cx={(pos0.x + pos1.x) / 2 + 15}
                    cy={Math.min(pos0.y, pos1.y) - 10}
                    r={2.5 + Math.sin(flyProgress * Math.PI * 5) * 1.5}
                    fill="#A3C9D9"
                    opacity={0.5}
                  />
                </>
              )}
            </>
          );
        })()}

        {/* Body & Head */}
        <motion.g filter="url(#shadow)">
          <ellipse cx="160" cy="188" rx="58" ry="36" fill="url(#bodyGradient)" />
          <motion.path
            fill="url(#headGradient)"
            animate={{
              d: [
                "M102 142 Q102 70 160 64 Q218 70 218 142 Q218 175 193 188 Q160 200 127 188 Q102 175 102 142",
                "M102 144 Q102 68 160 62 Q218 68 218 144 Q218 177 193 190 Q160 202 127 190 Q102 177 102 144",
                "M102 142 Q102 70 160 64 Q218 70 218 142 Q218 175 193 188 Q160 200 127 188 Q102 175 102 142",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <ellipse cx="132" cy="94" rx="16" ry="8" fill="white" opacity="0.08" />
        </motion.g>

        {/* Face */}
        <g>
          {/* Left Eye */}
          <ellipse cx="140" cy="124" rx="16" ry="20" fill="white" />
          <motion.ellipse
            rx="7"
            ry="9"
            fill="#012326"
            animate={{
              cx: 142 + eyeTarget.x,
              cy: expression === "excited" ? 121 + eyeTarget.y : 125 + eyeTarget.y,
              ry: expression === "excited" ? 11 : 9,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <ellipse cx="145" cy="120" rx="2.5" ry="2.5" fill="white" />

          {/* Right Eye */}
          <ellipse cx="180" cy="124" rx="16" ry="20" fill="white" />
          <motion.ellipse
            rx="7"
            ry="9"
            fill="#012326"
            animate={{
              cx: 178 + eyeTarget.x,
              cy: expression === "excited" ? 121 + eyeTarget.y : 125 + eyeTarget.y,
              ry: expression === "excited" ? 11 : 9,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <ellipse cx="181" cy="120" rx="2.5" ry="2.5" fill="white" />

          {/* Mouth */}
          <motion.path
            fill="none"
            stroke="#012326"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{
              d: expression === "excited"
                ? "M148 156 Q160 172 172 156"
                : expression === "happy"
                ? "M150 155 Q160 166 170 155"
                : "M153 157 Q160 162 167 157",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Blush */}
          <motion.ellipse
            cx="118"
            cy="142"
            rx="10"
            ry="5"
            fill="url(#blushGradient)"
            animate={{ opacity: expression === "excited" ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.ellipse
            cx="202"
            cy="142"
            rx="10"
            ry="5"
            fill="url(#blushGradient)"
            animate={{ opacity: expression === "excited" ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </g>
      </svg>

      {/* Speech Bubble */}
      <motion.div
        className="absolute top-0 right-0 md:top-2 md:right-4 bg-white rounded-xl px-3 py-1.5 shadow-lg border border-accent/20"
        animate={{
          opacity: activeCount > 0 ? 1 : 0,
          scale: activeCount > 0 ? 1 : 0.8,
          y: activeCount > 0 ? 0 : 10,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="text-xs font-medium text-[#012326] whitespace-nowrap">
          {phase === "flying"
            ? "Hooop!"
            : activeCount >= 4
            ? "Tam kadro!"
            : activeCount >= 3
            ? "Harika!"
            : activeCount >= 2
            ? "Guzel secim!"
            : activeCount >= 1
            ? "Basladik!"
            : ""}
        </p>
      </motion.div>
    </div>
  );
}

// Export with old name for backwards compatibility
export { Briefly as Brify };
