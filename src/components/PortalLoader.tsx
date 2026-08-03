"use client";

import React, { useEffect, useState } from "react";
import { TribeLogo, VarsityShield } from "./TribeLogo";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  message?: string;
  onComplete?: () => void;
  durationMs?: number;
}

export const PortalLoader: React.FC<LoaderProps> = ({
  message = "INITIALIZING INVESTIGATION DOSSIER...",
  onComplete,
  durationMs = 1800,
}) => {
  const [loadPercent, setLoadPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) setTimeout(onComplete, 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, durationMs / 12);

    return () => clearInterval(interval);
  }, [durationMs, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] brutal-grid p-6 text-[#1C1917]"
    >
      <div className="max-w-md w-full border-3 border-[#1C1917] bg-white p-8 neo-shadow-lg text-center space-y-6 relative overflow-hidden">
        {/* Top color bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F7A859] via-[#52A5EC] to-[#F8829C]" />

        {/* Animated Brand Logo */}
        <div className="flex justify-center pt-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <TribeLogo className="w-16 h-16" />
          </motion.div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <div className="font-mono text-[10px] font-bold tracking-widest text-[#0C2340] uppercase bg-[#B3B5E6]/40 px-2 py-0.5 border border-[#1C1917] inline-block">
            ZERODHA TRIBE RESEARCH PORTAL
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#0C2340]">
            AUTHENTICATING ACCESS
          </h3>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="space-y-2 font-mono text-xs font-bold">
          <div className="flex items-center justify-between text-[#1C1917]">
            <span className="truncate pr-2">{message}</span>
            <span className="bg-[#FAF8F5] px-1.5 py-0.5 border border-[#1C1917]">
              {Math.min(loadPercent, 100)}%
            </span>
          </div>

          <div className="w-full h-4 bg-[#FAF8F5] border-2 border-[#1C1917] neo-shadow-sm p-0.5 relative overflow-hidden">
            <motion.div
              className="h-full bg-[#52A5EC]"
              style={{ width: `${Math.min(loadPercent, 100)}%` }}
            />
          </div>
        </div>

        {/* Subtitle Status */}
        <div className="font-mono text-[10px] font-semibold text-[#78716C] flex items-center justify-center space-x-2 pt-2 border-t border-[#1C1917]">
          <span className="w-2 h-2 rounded-full bg-[#F7A859] animate-ping" />
          <span>DECRYPTING EVIDENCE FILES #0908</span>
        </div>
      </div>
    </motion.div>
  );
};
