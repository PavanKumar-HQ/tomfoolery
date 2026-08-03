"use client";

import React, { useState } from "react";
import { EvidenceItem } from "@/lib/evidenceData";
import { EvidenceModal } from "./EvidenceModal";
import { Lock, Unlock, ArrowRight, Eye, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface BoardProps {
  evidenceList: EvidenceItem[];
  progress: number;
  onUnlockNext: () => void;
  onGoToGuess: () => void;
}

export const EvidenceBoard: React.FC<BoardProps> = ({
  evidenceList,
  progress,
  onUnlockNext,
  onGoToGuess,
}) => {
  const [selectedItem, setSelectedItem] = useState<EvidenceItem | null>(null);

  const unlockedCount = evidenceList.filter((item) => progress >= item.unlockedAtProgress).length;
  const totalCount = evidenceList.length;
  const canUnlockMore = unlockedCount < totalCount;

  // Category banner accent colors
  const categoryColors: Record<string, string> = {
    Writing: "bg-[#7BB4EC]",
    Research: "bg-[#B3B5E6]",
    Podcast: "bg-[#F7A859]",
    Occupation: "bg-[#F8829C]",
    Articles: "bg-[#52A5EC]",
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4 font-sans">
      {/* Board Header Section */}
      <div className="border-3 border-[#1C1917] bg-white p-6 sm:p-8 neo-shadow-lg flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 font-mono text-xs font-bold text-white bg-[#0C2340] px-2.5 py-1 neo-shadow-sm uppercase tracking-widest mb-3">
            <span>PHASE 02</span>
            <span>//</span>
            <span>EVIDENCE BOARD</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Investigative Dossier & Clues
          </h2>
          <p className="font-sans text-sm text-[#57534E] mt-2 max-w-xl font-medium">
            Review unlocked evidence fragments to deduce the guest researchers for Zerodha Tribe. Unlock each clue to advance case progress.
          </p>
        </div>

        {/* Unlock Action Button */}
        <div className="flex items-center space-x-3 shrink-0 font-mono text-xs font-bold w-full md:w-auto">
          {canUnlockMore ? (
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={onUnlockNext}
              className="w-full md:w-auto justify-center px-5 py-3.5 bg-[#F7A859] text-[#1C1917] border-2 border-[#1C1917] neo-shadow-sm active:translate-x-0.5 active:translate-y-0.5 hover:bg-[#F8829C] transition-all flex items-center space-x-2 touch-manipulation cursor-pointer"
            >
              <span>UNLOCK NEXT CLUE (+20%)</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={onGoToGuess}
              className="w-full md:w-auto justify-center px-5 py-3.5 bg-[#52A5EC] text-white border-2 border-[#1C1917] neo-shadow-sm active:translate-x-0.5 active:translate-y-0.5 hover:bg-[#0C2340] transition-all flex items-center space-x-2 touch-manipulation cursor-pointer"
            >
              <span>PROCEED TO SUBMISSION</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Grid of Evidence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {evidenceList.map((item, index) => {
          const isUnlocked = progress >= item.unlockedAtProgress;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              onClick={() => isUnlocked && setSelectedItem(item)}
              onTouchEnd={(e) => {
                if (isUnlocked) {
                  // Ensure touch tap opens modal cleanly on iOS/Android
                  setSelectedItem(item);
                }
              }}
              className={`border-3 border-[#1C1917] transition-all relative p-5 sm:p-6 flex flex-col justify-between touch-manipulation ${
                isUnlocked
                  ? "bg-white neo-shadow cursor-pointer active:bg-[#FAF8F5] hover:border-[#0C2340]"
                  : "bg-[#FAF8F5] opacity-65 neo-shadow-sm select-none border-dashed"
              }`}
            >
              {/* Category Accent Stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 border-b border-[#1C1917] ${categoryColors[item.category] || "bg-[#1C1917]"}`} />

              <div>
                {/* Top Code & Category */}
                <div className="flex items-center justify-between font-mono text-xs font-bold mb-3 pt-1">
                  <span className="text-[#1C1917] bg-[#FAF8F5] px-2 py-0.5 border border-[#1C1917]">{item.code}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-0.5 text-[10px] uppercase border border-[#1C1917] font-bold ${categoryColors[item.category] || "bg-white"}`}>
                      {item.category}
                    </span>
                    {isUnlocked ? (
                      <Unlock className="w-4 h-4 text-[#52A5EC]" />
                    ) : (
                      <Lock className="w-4 h-4 text-[#78716C]" />
                    )}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917] mb-2 sm:mb-3">
                  {isUnlocked ? item.title : "CLASSIFIED DOSSIER FILE"}
                </h3>

                {/* Snippet / Preview */}
                <div className="font-sans text-xs sm:text-sm min-h-[50px] sm:min-h-[60px] flex items-center">
                  {isUnlocked ? (
                    <div className="space-y-2 w-full">
                      {item.type === "quote" && (
                        <p className="italic text-[#1C1917] font-serif line-clamp-2">
                          &ldquo;{item.quoteText}&rdquo;
                        </p>
                      )}
                      {item.type === "snippet" && (
                        <p className="line-clamp-2 text-xs font-mono text-[#57534E]">
                          {item.snippetBody}
                        </p>
                      )}
                      {item.type === "waveform" && (
                        <div className="text-[11px] sm:text-xs font-mono font-bold text-[#0C2340] bg-[#F7A859]/30 p-2 border border-[#1C1917] flex items-center justify-between">
                          <span>[AUDIO DISCOURSE WAVEFORM]</span>
                          <span className="text-[#1C1917]">{item.duration}</span>
                        </div>
                      )}
                      {item.type === "logo" && (
                        <div className="text-[11px] sm:text-xs font-mono font-bold text-[#0C2340] tracking-wider uppercase bg-[#B3B5E6]/40 px-2.5 py-1 border border-[#1C1917] inline-block">
                          {item.logoText}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-[#78716C] font-semibold">
                      <Lock className="w-3.5 h-3.5 shrink-0" />
                      <span>Requires {item.unlockedAtProgress}% Case Progress to Unseal</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-[#1C1917] flex items-center justify-between font-mono text-xs font-bold gap-2">
                {isUnlocked ? (
                  <>
                    <span className="text-[#0C2340] flex items-center space-x-1 sm:space-x-1.5 bg-[#7BB4EC]/30 px-2 py-0.5 border border-[#1C1917] text-[10px] sm:text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#52A5EC] shrink-0" />
                      <span>VERIFIED ✓</span>
                    </span>
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                      }}
                      className="px-3 py-1.5 bg-[#1C1917] text-white border-2 border-[#1C1917] neo-shadow-sm hover:bg-[#0C2340] hover:text-[#F7A859] active:bg-[#0C2340] transition-all flex items-center space-x-1.5 cursor-pointer uppercase tracking-wider font-mono text-[11px] sm:text-xs font-bold shrink-0 touch-manipulation"
                    >
                      <span>INSPECT CLUE</span>
                      <Eye className="w-3.5 h-3.5 text-[#F7A859] shrink-0" />
                    </button>
                  </>
                ) : (
                  <span className="text-[#78716C] uppercase tracking-wider text-[10px] sm:text-xs">
                    LOCKED DOCUMENT
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Controls */}
      <div className="pt-6 border-t-3 border-[#1C1917] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs font-bold text-[#1C1917] bg-white px-3 py-1.5 border-2 border-[#1C1917] neo-shadow-sm">
          CLUES UNSEALED: {unlockedCount} / {totalCount}
        </div>
        {progress >= 60 && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onGoToGuess}
            className="font-mono text-xs font-bold px-6 py-3 bg-[#1C1917] text-white neo-shadow-sm neo-shadow-hover hover:bg-[#0C2340] transition-all flex items-center space-x-2"
          >
            <span>SUBMIT RESEARCH HYPOTHESIS</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <EvidenceModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};
