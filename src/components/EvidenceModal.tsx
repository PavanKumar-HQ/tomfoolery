"use client";

import React from "react";
import { EvidenceItem } from "@/lib/evidenceData";
import { CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EvidenceModalProps {
  item: EvidenceItem;
  isOpen: boolean;
  onClose: () => void;
}

export const EvidenceModal: React.FC<EvidenceModalProps> = ({ item, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/50 backdrop-blur-xs">
          {/* Backdrop Overlay Click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-[#FAF8F5] border-3 border-[#1C1917] neo-shadow-lg max-w-2xl w-full p-6 sm:p-8 relative font-sans text-[#1C1917] overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Accent ribbon colors */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#52A5EC] via-[#B3B5E6] to-[#F8829C]" />

            {/* Top Case Header */}
            <div className="flex items-center justify-between border-b-2 border-[#1C1917] pb-4 mb-6 pt-2">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs px-2.5 py-1 bg-[#1C1917] text-white font-bold tracking-widest neo-shadow-sm uppercase">
                  {item.code}
                </span>
                <span className="font-mono text-xs text-[#1C1917] font-semibold">
                  RECORD DATE: {item.dateStr || "VERIFIED"}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="text-xs font-mono font-bold text-[#1C1917] border-2 border-[#1C1917] px-2.5 py-1 bg-[#F7A859] neo-shadow-sm hover:bg-[#F8829C] transition-colors flex items-center space-x-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>CLOSE [ESC]</span>
              </button>
            </div>

            {/* Title */}
            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52A5EC] bg-[#0C2340] px-2 py-0.5 inline-block mb-2">
                Category // {item.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
                {item.title}
              </h3>
            </div>

            {/* Evidence Content Box */}
            <div className="bg-white border-2 border-[#1C1917] p-6 mb-6 neo-shadow-sm">
              {item.type === "quote" && (
                <div className="space-y-4">
                  <p className="font-serif text-xl sm:text-2xl italic leading-relaxed text-[#1C1917]">
                    &ldquo;{item.quoteText}&rdquo;
                  </p>
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#0C2340] pt-2 border-t-2 border-[#1C1917]">
                    <CheckCircle2 className="w-4 h-4 text-[#52A5EC]" />
                    <span>{item.source}</span>
                  </div>
                </div>
              )}

              {item.type === "snippet" && (
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-xs font-bold text-[#1C1917] uppercase tracking-wider pb-2 border-b-2 border-[#1C1917] bg-[#B3B5E6]/30 px-2 py-1">
                    {item.snippetTitle}
                  </div>
                  <p className="font-sans text-base text-[#1C1917] leading-relaxed py-2">
                    {item.snippetBody}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#1C1917] font-bold pt-2 border-t border-[#1C1917]">
                    <span className="italic">{item.source}</span>
                    <span className="text-[#52A5EC] bg-[#0C2340] px-2 py-0.5">AUTHENTICATED ✓</span>
                  </div>
                </div>
              )}

              {item.type === "waveform" && (
                <div className="space-y-4 font-mono">
                  <div className="text-xs font-bold text-[#1C1917] flex items-center justify-between">
                    <span>{item.podcastHost}</span>
                    <span className="bg-[#F7A859] px-1.5 py-0.5 border border-[#1C1917]">{item.duration}</span>
                  </div>
                  <div className="text-base font-bold text-[#0C2340]">
                    {item.podcastTitle}
                  </div>
                  {/* Animated Waveform */}
                  <div className="h-16 bg-[#FAF8F5] border-2 border-[#1C1917] p-3 flex items-center justify-between space-x-1">
                    {[40, 65, 30, 85, 95, 45, 70, 30, 90, 100, 60, 40, 80, 55, 35, 90, 75, 40, 85, 60, 30, 95, 50, 70, 40].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 bg-[#0C2340]"
                        animate={{ height: ["20%", `${h}%`, "30%"] }}
                        transition={{ repeat: Infinity, duration: 1.2 + (i % 5) * 0.2, repeatType: "mirror" }}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-[#1C1917] italic bg-[#FAF8F5] p-2 border border-[#1C1917]">
                    Transcript snippet: "...our whole thesis is centered on demystifying indices so anyone can ask intelligent questions..."
                  </div>
                </div>
              )}

              {item.type === "logo" && (
                <div className="py-6 text-center space-y-4">
                  <div className="inline-block px-8 py-6 bg-[#FAF8F5] border-3 border-[#1C1917] neo-shadow-sm relative">
                    <span className="font-serif text-3xl font-bold tracking-widest text-[#0C2340]">
                      {item.logoText}
                    </span>
                    <div className="mt-2 text-xs font-mono font-bold text-[#1C1917] bg-[#52A5EC] px-2 py-0.5 border border-[#1C1917] inline-block">
                      PRIMARY AFFILIATION VERIFIED
                    </div>
                  </div>
                  <div className="text-xs font-mono font-bold text-[#78716C]">
                    {item.source}
                  </div>
                </div>
              )}
            </div>

            {/* Note / Hint */}
            <div className="bg-[#B3B5E6]/40 border-2 border-[#1C1917] p-4 font-mono text-xs text-[#1C1917] flex items-start space-x-3 mb-6 neo-shadow-sm">
              <span className="text-[#0C2340] font-bold uppercase tracking-wider shrink-0 bg-[#F7A859] px-1.5 py-0.5 border border-[#1C1917]">
                INVESTIGATOR NOTE:
              </span>
              <span className="font-semibold">{item.hint}</span>
            </div>

            {/* Action */}
            <div className="text-right">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#1C1917] text-white font-mono text-xs font-bold tracking-wider uppercase neo-shadow-hover neo-shadow-sm hover:bg-[#0C2340] transition-all"
              >
                Acknowledge Clue
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
