"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function CtcAnimation() {
  const frames = ['T1', 'T2', 'T3', 'T4', 'T5'];
  const greedyTokens = ['क', 'क', 'ε', 'म', 'म'];
  const colors = ['#3b82f6', '#3b82f6', '#71717a', '#a855f7', '#a855f7'];

  const loopTransition = { duration: 6, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.2, 0.5, 0.8, 1] };
  const floatTransition = { duration: 6, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.4, 0.5, 0.9, 1] };

  return (
    <div className="relative w-full max-w-6xl aspect-auto min-h-[500px] bg-zinc-900 flex flex-col p-8 overflow-hidden rounded-xl font-sans border border-zinc-800">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative z-10 w-full h-full flex flex-col justify-between gap-8">
        
        {/* Title */}
        <div>
          <h3 className="text-zinc-200 font-bold text-lg">CTC Decoding Strategies</h3>
          <p className="text-zinc-500 text-sm mt-1">Comparing fast Argmax (Greedy) with rigorous probabilistic merging (Prefix Beam Search).</p>
        </div>

        <div className="flex-1 flex gap-8">
          
          {/* Left: CTC Greedy */}
          <div className="flex-1 bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 flex flex-col items-center shadow-lg relative">
            <div className="text-zinc-300 font-bold mb-8">1. Greedy Search (Argmax)</div>
            
            <div className="flex flex-col items-center gap-8 w-full mt-4">
              {/* Acoustic Frames */}
              <div className="flex gap-3">
                {frames.map((frame, i) => (
                  <div key={frame} className="w-10 h-10 bg-zinc-800 border border-zinc-600 rounded flex items-center justify-center text-xs font-mono text-zinc-400 shadow-sm">
                    {frame}
                  </div>
                ))}
              </div>

              {/* Raw CTC Tokens */}
              <div className="flex gap-3 relative">
                {greedyTokens.map((token, i) => (
                  <motion.div 
                    key={`raw-${i}`}
                    className="w-10 h-14 rounded-lg flex flex-col items-center justify-center text-xl font-bold shadow-lg bg-zinc-900 border-2"
                    style={{ borderColor: colors[i], color: colors[i] }}
                    animate={{ 
                      y: [30, 0, 0, 0], 
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.8, 1], delay: i * 0.1 }}
                  >
                    {token}
                  </motion.div>
                ))}

                {/* Merge & Blank Removal Overlay */}
                <motion.div 
                  className="absolute inset-0 flex gap-3 items-center justify-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 1, 1, 0] }}
                  transition={floatTransition}
                >
                  <div className="flex gap-12 absolute -top-12">
                    <motion.div className="text-3xl font-bold text-blue-400 bg-zinc-800/80 px-4 rounded-xl border border-blue-500/30">क</motion.div>
                    <motion.div className="text-3xl font-bold text-purple-400 bg-zinc-800/80 px-4 rounded-xl border border-purple-500/30 ml-4">म</motion.div>
                  </div>
                  {/* Cross out blanks */}
                  <div className="absolute inset-0 flex gap-3">
                     {greedyTokens.map((t, i) => (
                       <div key={`cross-${i}`} className="w-10 h-14 flex items-center justify-center">
                         {t === 'ε' && <div className="w-14 h-1 bg-red-500 rotate-45 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" />}
                       </div>
                     ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-auto pt-8">
               <div className="text-xs text-zinc-500 text-center max-w-xs">
                 Selects the highest probability token at each frame independently, then collapses duplicates and removes blanks. Fast but error-prone.
               </div>
            </div>
          </div>

          {/* Right: CTC Prefix Beam Search */}
          <div className="flex-1 bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 flex flex-col items-center shadow-lg relative overflow-hidden">
            <div className="text-zinc-300 font-bold mb-4 z-10">2. Prefix Beam Search</div>
            
            <div className="flex flex-col gap-4 w-full max-w-sm mt-4 z-10">
              
              <div className="text-xs font-mono text-zinc-400 mb-2 text-center uppercase tracking-wider">Multiple Paths to same prefix "कम"</div>
              
              {/* Path 1 */}
              <motion.div 
                className="bg-zinc-800 border border-zinc-600 rounded-lg p-3 flex justify-between items-center shadow-md"
                animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, -20] }}
                transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.8, 1], delay: 0.1 }}
              >
                <div className="font-mono text-sm text-zinc-300 tracking-[0.2em]">[क, ε, म, म, ε]</div>
                <div className="text-xs text-emerald-400 font-mono">P = 0.42</div>
              </motion.div>

              {/* Path 2 */}
              <motion.div 
                className="bg-zinc-800 border border-zinc-600 rounded-lg p-3 flex justify-between items-center shadow-md"
                animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, -20] }}
                transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.8, 1], delay: 0.3 }}
              >
                <div className="font-mono text-sm text-zinc-300 tracking-[0.2em]">[ε, क, क, ε, म]</div>
                <div className="text-xs text-emerald-400 font-mono">P = 0.35</div>
              </motion.div>

              {/* Path 3 */}
              <motion.div 
                className="bg-zinc-800 border border-zinc-600 rounded-lg p-3 flex justify-between items-center shadow-md"
                animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, -20] }}
                transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.8, 1], delay: 0.5 }}
              >
                <div className="font-mono text-sm text-zinc-300 tracking-[0.2em]">[क, क, क, म, म]</div>
                <div className="text-xs text-emerald-400 font-mono">P = 0.18</div>
              </motion.div>

              {/* Merged Output */}
              <motion.div 
                className="mt-6 p-4 bg-zinc-900 border-2 border-emerald-500/50 rounded-xl text-center shadow-[0_0_20px_rgba(16,185,129,0.15)] relative overflow-hidden"
                animate={{ 
                  scale: [0.9, 0.9, 1.05, 1], 
                  opacity: [0, 0, 1, 1] 
                }}
                transition={{ duration: 6, repeat: Infinity, times: [0, 0.5, 0.6, 1] }}
              >
                <motion.div 
                  className="absolute inset-0 bg-emerald-500/10 z-0"
                  animate={{ opacity: [0, 1, 0, 0] }}
                  transition={{ duration: 6, repeat: Infinity, times: [0, 0.6, 0.8, 1] }}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-zinc-400 text-xs font-mono mb-2">Σ P(paths) = P("कम")</div>
                  <div className="text-3xl font-bold text-emerald-400">कम</div>
                  <div className="text-sm text-emerald-300 font-mono mt-1">Total P = 0.95</div>
                </div>
              </motion.div>

            </div>
            
            <div className="mt-auto pt-8 z-10">
               <div className="text-xs text-zinc-500 text-center max-w-xs">
                 Maintains multiple hypotheses (beams). Merges probabilities of all paths that collapse to the same text. Highly accurate.
               </div>
            </div>

            {/* Connecting lines for sum */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
              <motion.path d="M 190 145 C 300 145, 300 290, 190 290" fill="transparent" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 6, repeat: Infinity, times: [0, 0.5, 0.6, 1] }} />
              <motion.path d="M 190 205 C 280 205, 280 290, 190 290" fill="transparent" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 6, repeat: Infinity, times: [0, 0.5, 0.6, 1] }} />
              <motion.path d="M 190 265 C 260 265, 260 290, 190 290" fill="transparent" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 6, repeat: Infinity, times: [0, 0.5, 0.6, 1] }} />
            </svg>
          </div>

        </div>

      </div>
    </div>
  );
}
