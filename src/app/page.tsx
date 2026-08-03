"use client";

import React, { useState, useEffect } from "react";
import { NavigationHeader } from "@/components/NavigationHeader";
import { EVIDENCE_DATA } from "@/lib/evidenceData";
import { EvidenceBoard } from "@/components/EvidenceBoard";
import { GuessPortal } from "@/components/GuessPortal";
import { FinalReveal } from "@/components/FinalReveal";
import { PortalLoader } from "@/components/PortalLoader";
import { TribeLogo, VarsityShield } from "@/components/TribeLogo";
import { ArrowRight, ShieldCheck, FileSearch } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [phaseLoading, setPhaseLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const [pendingPhase, setPendingPhase] = useState<
    "landing" | "brief" | "investigation" | "guess" | "revealed" | null
  >(null);

  const [phase, setPhase] = useState<
    "landing" | "brief" | "investigation" | "guess" | "revealed"
  >("landing");

  const [progress, setProgress] = useState<number>(0);

  const triggerPhaseTransition = (
    nextPhase: "landing" | "brief" | "investigation" | "guess" | "revealed",
    message: string
  ) => {
    setLoaderMessage(message);
    setPendingPhase(nextPhase);
    setPhaseLoading(true);
  };

  const handleLoaderComplete = () => {
    if (pendingPhase) {
      setPhase(pendingPhase);
      setPendingPhase(null);
    }
    setPhaseLoading(false);
  };

  const handleBegin = () => {
    triggerPhaseTransition("brief", "UNSEALING CONFIDENTIAL DOSSIER...");
  };

  const handleContinueToInvestigation = () => {
    if (progress === 0) setProgress(20);
    triggerPhaseTransition("investigation", "LOADING EVIDENCE BOARD & CLUES...");
  };

  const handleUnlockNext = () => {
    if (progress < 100) {
      const nextProgress = progress + 20;
      setProgress(nextProgress);
    }
  };

  const handleGoToGuess = () => {
    triggerPhaseTransition("guess", "OPENING RESEARCH SUBMISSION PORTAL...");
  };

  const handleSubmitGuess = (r1: string, r2: string, reasoning: string) => {
    setProgress(100);
    triggerPhaseTransition("revealed", "DECRYPTING FINAL DOSSIER & REVEAL...");
  };

  const handleReset = () => {
    setProgress(0);
    triggerPhaseTransition("landing", "RESTARTING INVESTIGATION...");
  };

  return (
    <div className="min-h-screen flex flex-col brutal-grid font-sans text-[#1C1917]">
      {/* Portal Loading Screen */}
      <AnimatePresence>
        {(initialLoading || phaseLoading) && (
          <PortalLoader
            message={
              initialLoading
                ? "AUTHENTICATING ZERODHA TRIBE DOSSIER..."
                : loaderMessage
            }
            durationMs={initialLoading ? 1500 : 1200}
            onComplete={() => {
              if (initialLoading) setInitialLoading(false);
              else handleLoaderComplete();
            }}
          />
        )}
      </AnimatePresence>

      {/* Navigation Header */}
      <NavigationHeader
        progress={progress}
        currentPhase={phase}
        onReset={handleReset}
      />

      {/* Main Experience Container */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 md:py-12 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* LANDING EXPERIENCE */}
          {phase === "landing" && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto text-center space-y-8 my-auto py-8"
            >
              {/* Brand Hero Element */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <TribeLogo className="w-20 h-20" />
                </motion.div>
                <div className="flex items-center space-x-2 text-xs font-mono font-bold">
                  <span className="text-[#0C2340]">TRIBE</span>
                  <span className="text-[#78716C]">|</span>
                  <span className="text-[#78716C]">A Zerodha</span>
                  <VarsityShield />
                  <span className="text-[#1C1917]">VARSITY INITIATIVE</span>
                </div>
              </div>

              {/* Title & Badge */}
              <div className="border-3 border-[#1C1917] bg-white p-8 neo-shadow-lg space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F7A859] via-[#52A5EC] to-[#F8829C]" />
                
                <div className="inline-block px-3 py-1 bg-[#1C1917] text-white font-mono text-xs font-bold tracking-widest uppercase neo-shadow-sm">
                  OPERATION
                </div>
                <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0C2340] leading-none uppercase">
                  FIND THE RESEARCHERS
                </h1>
                <div className="pt-2 font-mono text-xs font-bold text-[#1C1917] tracking-widest flex items-center justify-center space-x-3">
                  <span className="bg-[#FAF8F5] px-2 py-0.5 border border-[#1C1917]">CASE FILE #0908</span>
                  <span>•</span>
                  <span className="bg-[#F8829C] px-2 py-0.5 border border-[#1C1917]">INVESTIGATION ACTIVE</span>
                </div>
              </div>

              <p className="font-sans text-base font-medium text-[#57534E] leading-relaxed max-w-lg mx-auto bg-white p-4 border-2 border-[#1C1917] neo-shadow-sm">
                Enter the Zerodha Tribe internal research portal to analyze evidence, unseal clues, and discover the mystery guests before the event.
              </p>

              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBegin}
                  className="px-9 py-4 bg-[#1C1917] text-white font-mono text-xs font-bold tracking-widest uppercase neo-shadow-lg neo-shadow-hover hover:bg-[#0C2340] transition-all inline-flex items-center space-x-3"
                >
                  <span>BEGIN INVESTIGATION</span>
                  <ArrowRight className="w-4 h-4 text-[#F7A859]" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* PHASE 1: RESEARCH BRIEF */}
          {phase === "brief" && (
            <motion.div
              key="brief"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto space-y-8 my-auto py-8"
            >
              <div className="border-3 border-[#1C1917] bg-white p-8 sm:p-10 neo-shadow-lg relative">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#52A5EC]" />
                
                <div className="flex items-center justify-between border-b-2 border-[#1C1917] pb-4 mb-6">
                  <span className="font-mono text-xs px-3 py-1 bg-[#F8829C] text-[#1C1917] font-bold tracking-widest border border-[#1C1917] neo-shadow-sm uppercase">
                    CONFIDENTIAL
                  </span>
                  <span className="font-mono text-xs font-bold text-[#1C1917]">
                    DOSSIER BRIEFING #01
                  </span>
                </div>

                <div className="space-y-6 text-[#1C1917]">
                  <h2 className="font-serif text-3xl font-bold border-l-4 border-[#0C2340] pl-4 py-1 text-[#0C2340]">
                    Research Mission Directive
                  </h2>

                  <div className="font-mono text-sm font-bold space-y-3 text-[#1C1917] leading-relaxed bg-[#FAF8F5] p-5 border-2 border-[#1C1917] neo-shadow-sm">
                    <p className="text-[#0C2340]">1. Two professionals.</p>
                    <p className="text-[#52A5EC]">2. One mission.</p>
                    <p className="text-[#F7A859]">3. No names.</p>
                    <p className="text-[#F8829C]">4. No photographs.</p>
                    <p className="text-[#1C1917] bg-[#B3B5E6]/40 px-2 py-1 inline-block border border-[#1C1917] mt-1">
                      5. Research begins now.
                    </p>
                  </div>

                  <p className="font-sans text-sm font-medium text-[#57534E] leading-relaxed">
                    Analyze fragments of verified research notes, publishing guidelines, podcast waveforms, and institutional affiliations to deduce their identities.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t-2 border-[#1C1917] flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleContinueToInvestigation}
                    className="px-7 py-3.5 bg-[#F7A859] text-[#1C1917] border-2 border-[#1C1917] font-mono text-xs font-bold tracking-wider uppercase neo-shadow-sm neo-shadow-hover hover:bg-[#52A5EC] hover:text-white transition-all inline-flex items-center space-x-2"
                  >
                    <span>ACCESS EVIDENCE BOARD</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {/* PHASE 2 & 3: EVIDENCE BOARD */}
          {phase === "investigation" && (
            <motion.div
              key="investigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EvidenceBoard
                evidenceList={EVIDENCE_DATA}
                progress={progress}
                onUnlockNext={handleUnlockNext}
                onGoToGuess={handleGoToGuess}
              />
            </motion.div>
          )}

          {/* PHASE 4: GUESS PORTAL */}
          {phase === "guess" && (
            <motion.div
              key="guess"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GuessPortal
                onSubmitGuess={handleSubmitGuess}
                onBackToBoard={() => setPhase("investigation")}
              />
            </motion.div>
          )}

          {/* REVEAL */}
          {phase === "revealed" && (
            <motion.div
              key="revealed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FinalReveal onRestart={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Editorial Neo-Brutalist Footer */}
      <footer className="border-t-3 border-[#1C1917] bg-[#FAF8F5] py-5 px-4 font-mono text-[11px] font-bold text-[#1C1917]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <TribeLogo className="w-5 h-5" />
            <span>ZERODHA TRIBE RESEARCH DIVISION</span>
            <span>•</span>
            <span className="text-[#52A5EC]">MARKETS BY ZERODHA</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-[#1C1917] text-white px-2 py-0.5">INTERNAL PORTAL</span>
            <span>•</span>
            <span className="text-[#F7A859]">AUG 9 ASSEMBLY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
