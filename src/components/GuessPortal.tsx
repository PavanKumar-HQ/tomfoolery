"use client";

import React, { useState } from "react";
import { ArrowRight, Send, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface GuessPortalProps {
  onSubmitGuess: (r1: string, r2: string, reasoning: string) => void;
  onBackToBoard: () => void;
}

export const GuessPortal: React.FC<GuessPortalProps> = ({ onSubmitGuess, onBackToBoard }) => {
  const [researcherOne, setResearcherOne] = useState("");
  const [researcherTwo, setResearcherTwo] = useState("");
  const [reasoning, setReasoning] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!researcherOne.trim() || !researcherTwo.trim()) {
      setError("State your identity hypotheses for both Researcher One and Researcher Two.");
      return;
    }
    setError("");
    onSubmitGuess(researcherOne.trim(), researcherTwo.trim(), reasoning.trim());
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto py-6 font-sans space-y-8"
    >
      {/* Top Banner */}
      <div className="border-3 border-[#1C1917] bg-white p-8 neo-shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#F7A859]" />
        <div className="inline-flex items-center space-x-2 font-mono text-xs font-bold text-white bg-[#0C2340] px-2.5 py-1 neo-shadow-sm uppercase tracking-widest mb-3">
          <span>PHASE 03</span>
          <span>//</span>
          <span>RESEARCH SUBMISSION</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] mb-3">
          Submit Investigative Hypothesis
        </h2>
        <p className="text-sm font-medium text-[#57534E] leading-relaxed max-w-xl">
          Based on the unsealed evidence across editorial guidelines, podcasts, and quantitative teardowns, enter your final hypothesis for the Zerodha Tribe researchers.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="border-3 border-[#1C1917] bg-white p-8 space-y-6 neo-shadow-lg">
        {error && (
          <div className="p-4 bg-[#F8829C] border-2 border-[#1C1917] text-xs font-mono font-bold text-[#1C1917] flex items-center space-x-2 neo-shadow-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
          {/* Researcher 1 Field */}
          <div className="space-y-2">
            <label className="block text-[#1C1917] font-bold uppercase tracking-wider">
              Researcher One <span className="text-[#52A5EC]">*</span>
            </label>
            <input
              type="text"
              value={researcherOne}
              onChange={(e) => setResearcherOne(e.target.value)}
              placeholder="e.g. Full Name or Alias"
              className="w-full px-4 py-3 bg-[#FAF8F5] border-2 border-[#1C1917] neo-shadow-sm text-[#1C1917] font-bold placeholder-[#A8A29E] focus:outline-none focus:bg-white focus:border-[#52A5EC] transition-all"
            />
            <span className="text-[11px] text-[#0C2340] font-semibold bg-[#B3B5E6]/30 px-2 py-0.5 border border-[#1C1917] block">
              Hint: Head of Content & Research Strategy
            </span>
          </div>

          {/* Researcher 2 Field */}
          <div className="space-y-2">
            <label className="block text-[#1C1917] font-bold uppercase tracking-wider">
              Researcher Two <span className="text-[#52A5EC]">*</span>
            </label>
            <input
              type="text"
              value={researcherTwo}
              onChange={(e) => setResearcherTwo(e.target.value)}
              placeholder="e.g. Full Name or Alias"
              className="w-full px-4 py-3 bg-[#FAF8F5] border-2 border-[#1C1917] neo-shadow-sm text-[#1C1917] font-bold placeholder-[#A8A29E] focus:outline-none focus:bg-white focus:border-[#52A5EC] transition-all"
            />
            <span className="text-[11px] text-[#0C2340] font-semibold bg-[#B3B5E6]/30 px-2 py-0.5 border border-[#1C1917] block">
              Hint: Lead Quantitative Analyst & Author
            </span>
          </div>
        </div>

        {/* Reasoning Area */}
        <div className="space-y-2 font-mono text-xs">
          <label className="block text-[#1C1917] font-bold uppercase tracking-wider">
            Supporting Notes & Reasoning <span className="text-[#78716C] font-medium">(Optional)</span>
          </label>
          <textarea
            rows={4}
            value={reasoning}
            onChange={(e) => setReasoning(e.target.value)}
            placeholder="Document which clues led to your deduction..."
            className="w-full px-4 py-3 bg-[#FAF8F5] border-2 border-[#1C1917] neo-shadow-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:bg-white focus:border-[#52A5EC] transition-all font-sans text-sm font-medium"
          />
        </div>

        {/* Buttons */}
        <div className="pt-4 border-t-2 border-[#1C1917] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold">
          <button
            type="button"
            onClick={onBackToBoard}
            className="text-[#1C1917] hover:bg-[#FAF8F5] px-3 py-2 border border-[#1C1917] transition-colors uppercase tracking-wider"
          >
            ← Back to Evidence Board
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#52A5EC] text-white border-2 border-[#1C1917] neo-shadow-sm neo-shadow-hover hover:bg-[#0C2340] transition-all flex items-center justify-center space-x-2 tracking-wider uppercase"
          >
            <span>SUBMIT RESEARCH CASE</span>
            <Send className="w-4 h-4" />
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};
