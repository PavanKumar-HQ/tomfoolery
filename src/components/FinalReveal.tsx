"use client";

import React, { useEffect } from "react";
import { REVEAL_DATA } from "@/lib/evidenceData";
import { CheckCircle2, Calendar, MapPin, RefreshCw } from "lucide-react";
import { TribeLogo, VarsityShield } from "./TribeLogo";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

interface RevealProps {
  onRestart: () => void;
}

export const FinalReveal: React.FC<RevealProps> = ({ onRestart }) => {
  useEffect(() => {
    try {
      // Vibrant brand confetti
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#0C2340", "#52A5EC", "#B3B5E6", "#F7A859", "#F8829C"],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // safe fallback
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="max-w-4xl mx-auto py-8 px-4 font-sans space-y-8"
    >
      <div className="border-3 border-[#1C1917] bg-white neo-shadow-lg relative overflow-hidden">
        {/* Top Folder Header */}
        <div className="bg-[#FAF8F5] border-b-3 border-[#1C1917] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs font-bold">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-[#F8829C] text-[#1C1917] border border-[#1C1917] neo-shadow-sm">
              CASE CLOSED
            </span>
            <span className="text-[#52A5EC] bg-[#0C2340] px-2.5 py-1 uppercase tracking-wider">
              DOSSIER REVEALED // 100% VERIFIED
            </span>
          </div>
          <span className="text-[#1C1917]">
            DOSSIER #ZERODHA-TRIBE-0908
          </span>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <div className="flex justify-center mb-2">
              <TribeLogo className="w-16 h-16 animate-bounce" />
            </div>
            <span className="font-mono text-xs font-bold bg-[#F7A859] px-3 py-1 border border-[#1C1917] uppercase tracking-widest text-[#1C1917] inline-block">
              GUESTS IDENTIFIED
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0C2340] tracking-tight">
              Krishna Lohia & Pranav Agarwal
            </h1>
            <div className="font-mono text-xs font-bold text-[#1C1917] flex items-center justify-center space-x-1">
              <span>MARKETS BY ZERODHA</span>
              <span>•</span>
              <VarsityShield />
              <span>VARSITY</span>
            </div>
          </div>

          {/* Grid of Researchers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Researcher 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="border-3 border-[#1C1917] p-6 bg-[#7BB4EC]/20 neo-shadow-sm space-y-4 relative"
            >
              <div className="font-mono text-xs font-bold text-[#1C1917] flex items-center justify-between">
                <span className="bg-[#FAF8F5] px-2 py-0.5 border border-[#1C1917]">RESEARCHER 01</span>
                <CheckCircle2 className="w-5 h-5 text-[#52A5EC] fill-[#0C2340]" />
              </div>

              {/* Photo Frame */}
              <div className="relative border-3 border-[#1C1917] neo-shadow-sm overflow-hidden bg-white aspect-square">
                <img
                  src="/images/krishna_lohia.png"
                  alt="Krishna Lohia"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-2 left-2 bg-white border-2 border-[#1C1917] px-2 py-0.5 font-mono text-[10px] font-bold text-[#1C1917] neo-shadow-sm">
                  VERIFIED IDENTITY ✓
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0C2340]">
                  Krishna Lohia
                </h3>
                <p className="font-mono text-xs font-bold text-[#1C1917] bg-[#F7A859] px-2 py-0.5 border border-[#1C1917] inline-block mt-1">
                  Head of Content & Research Strategy
                </p>
              </div>

              <p className="font-sans text-xs font-medium text-[#57534E] leading-relaxed pt-3 border-t-2 border-[#1C1917]">
                Focuses on structural breakdown of Indian capital markets, demystifying indices, option mechanics, and simplifying financial literature for everyday market participants.
              </p>
            </motion.div>

            {/* Researcher 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="border-3 border-[#1C1917] p-6 bg-[#B3B5E6]/30 neo-shadow-sm space-y-4 relative"
            >
              <div className="font-mono text-xs font-bold text-[#1C1917] flex items-center justify-between">
                <span className="bg-[#FAF8F5] px-2 py-0.5 border border-[#1C1917]">RESEARCHER 02</span>
                <CheckCircle2 className="w-5 h-5 text-[#52A5EC] fill-[#0C2340]" />
              </div>

              {/* Photo Frame */}
              <div className="relative border-3 border-[#1C1917] neo-shadow-sm overflow-hidden bg-white aspect-square">
                <img
                  src="/images/pranav_agarwal.png"
                  alt="Pranav Agarwal"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-2 left-2 bg-white border-2 border-[#1C1917] px-2 py-0.5 font-mono text-[10px] font-bold text-[#1C1917] neo-shadow-sm">
                  VERIFIED IDENTITY ✓
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0C2340]">
                  Pranav Agarwal
                </h3>
                <p className="font-mono text-xs font-bold text-[#1C1917] bg-[#F8829C] px-2 py-0.5 border border-[#1C1917] inline-block mt-1">
                  Lead Quantitative Analyst & Content Specialist
                </p>
              </div>

              <p className="font-sans text-xs font-medium text-[#57534E] leading-relaxed pt-3 border-t-2 border-[#1C1917]">
                Specializes in data-driven market microstructure analysis, quant research teardowns, and crafting high-signal educational modules on Markets by Zerodha.
              </p>
            </motion.div>
          </div>

          {/* Event Callout Box */}
          <div className="border-3 border-[#1C1917] bg-[#FAF8F5] p-8 text-center space-y-4 neo-shadow-sm">
            <div className="inline-block px-4 py-1 bg-[#0C2340] text-white border-2 border-[#1C1917] font-mono text-xs font-bold uppercase tracking-widest">
              MISSION COMPLETE
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              See you on August 9
            </h2>
            <p className="font-sans text-sm text-[#57534E] font-medium max-w-lg mx-auto leading-relaxed">
              Join Krishna Lohia and Pranav Agarwal for a deep-dive session into market mechanics, research methodologies, and clear-thinking frameworks at the Zerodha Tribe event.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 font-mono text-xs font-bold text-[#1C1917]">
              <div className="flex items-center space-x-2 bg-white px-3 py-1.5 border-2 border-[#1C1917] neo-shadow-sm">
                <Calendar className="w-4 h-4 text-[#52A5EC]" />
                <span>DATE: AUGUST 9, 2026</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-3 py-1.5 border-2 border-[#1C1917] neo-shadow-sm">
                <MapPin className="w-4 h-4 text-[#F8829C]" />
                <span>ZERODHA TRIBE ASSEMBLY</span>
              </div>
            </div>
          </div>

          {/* Footer Reset */}
          <div className="text-center pt-2">
            <button
              onClick={onRestart}
              className="inline-flex items-center space-x-2 font-mono text-xs font-bold text-[#1C1917] bg-white border-2 border-[#1C1917] px-4 py-2 neo-shadow-sm neo-shadow-hover hover:bg-[#FAF8F5] transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>RESTART INVESTIGATION CASE</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
