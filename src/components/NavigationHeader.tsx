"use client";

import React from "react";
import { TribeLogo, VarsityShield } from "./TribeLogo";
import { ShieldAlert, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  progress: number;
  currentPhase: "landing" | "brief" | "investigation" | "guess" | "revealed";
  onReset?: () => void;
}

export const NavigationHeader: React.FC<HeaderProps> = ({ progress, currentPhase, onReset }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5] border-b-2 border-[#1C1917] px-3 sm:px-6 py-2.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between font-mono text-xs text-[#1C1917] gap-2">
        {/* Left: Brand & Metadata */}
        <div className="flex items-center space-x-2 shrink-0">
          <button 
            onClick={onReset}
            className="flex items-center space-x-2 sm:space-x-3 group text-left"
          >
            <TribeLogo className="w-7 h-7 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <div className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#0C2340] leading-none flex items-center space-x-1">
                <span>TRIBE</span>
              </div>
              <div className="text-[9px] sm:text-[10px] text-[#78716C] font-mono flex items-center space-x-1 mt-0.5">
                <span>A Zerodha</span>
                <VarsityShield />
                <span className="font-semibold text-[#1C1917]">VARSITY</span>
              </div>
            </div>
          </button>

          <span className="text-[#1C1917] font-bold text-lg hidden md:inline">•</span>

          <div className="hidden md:flex flex-col">
            <span className="font-mono text-[10px] uppercase font-bold text-[#F7A859] bg-[#1C1917] px-1.5 py-0.5 neo-shadow-sm">
              OPERATION: FIND THE RESEARCHERS
            </span>
            <span className="text-[10px] text-[#78716C] font-mono mt-0.5">CASE FILE #0908</span>
          </div>
        </div>

        {/* Center/Right: Progress Status */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            <span className="hidden lg:inline uppercase text-[10px] font-bold tracking-widest text-[#1C1917]">
              Case Progress
            </span>
            <div className="flex items-center space-x-1.5">
              <div className="w-16 xs:w-24 sm:w-36 h-3.5 sm:h-4 bg-white border-2 border-[#1C1917] neo-shadow-sm p-0.5 overflow-hidden">
                <motion.div 
                  className="h-full bg-[#52A5EC]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <span className="font-mono font-bold text-[10px] sm:text-xs text-[#1C1917] min-w-[30px] sm:min-w-[36px] text-right bg-[#FAF8F5] px-1 border border-[#1C1917]">
                {progress}%
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-1 text-[10px] sm:text-[11px] font-bold px-2 sm:px-3 py-0.5 sm:py-1 bg-[#F8829C] border-2 border-[#1C1917] neo-shadow-sm text-[#1C1917] shrink-0">
            {currentPhase === "revealed" ? (
              <>
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#0C2340] text-white" />
                <span className="hidden xs:inline">CASE CLOSED</span>
                <span className="xs:hidden">DONE</span>
              </>
            ) : (
              <>
                <ShieldAlert className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1C1917]" />
                <span className="hidden xs:inline">ACTIVE CASE</span>
                <span className="xs:hidden">ACTIVE</span>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
