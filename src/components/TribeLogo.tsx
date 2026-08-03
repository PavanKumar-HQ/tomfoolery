"use client";

import React from "react";

export const TribeLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        {/* Ribbon 1: Vertical Dark Navy */}
        <path
          d="M 43,10 H 57 V 90 H 43 Z"
          fill="#0B1E36"
        />

        {/* Ribbon 2: Horizontal (Left Orange, Right Dark Navy) */}
        <path
          d="M 10,43 H 50 V 57 H 10 Z"
          fill="#F7A258"
        />
        <path
          d="M 50,43 H 90 V 57 H 50 Z"
          fill="#0B1E36"
        />

        {/* Ribbon 3: Diagonal TL to BR (Soft Lavender/Purple top-left, Pink bottom-right ribbon tip) */}
        <g transform="rotate(45 50 50)">
          <path d="M 43,10 H 57 V 50 H 43 Z" fill="#BCC0ED" />
          <path d="M 43,50 H 57 V 72 H 43 Z" fill="#0B1E36" />
          {/* V-notch ribbon end at bottom right */}
          <path d="M 43,72 H 57 L 57,90 L 50,83 L 43,90 Z" fill="#F8839B" />
        </g>

        {/* Ribbon 4: Diagonal BL to TR (Sky Blue top-right, Brighter Blue bottom-left ribbon tip) */}
        <g transform="rotate(-45 50 50)">
          <path d="M 43,10 H 57 V 50 H 43 Z" fill="#99C5F1" />
          <path d="M 43,50 H 57 V 72 H 43 Z" fill="#388EE9" />
          {/* V-notch ribbon end at bottom left */}
          <path d="M 43,72 H 57 L 57,90 L 50,83 L 43,90 Z" fill="#388EE9" />
        </g>
      </svg>
    </div>
  );
};

export const VarsityShield: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => {
  return (
    <span className={`inline-flex items-center justify-center bg-[#388EE9] text-white font-bold text-[10px] rounded-xs px-1 py-0.2 ${className}`}>
      v
    </span>
  );
};
