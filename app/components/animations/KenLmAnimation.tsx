"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function KenLmAnimation() {
  const loopTransition = { duration: 8, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.2, 0.5, 0.8, 1] };

  return (
    <div className="relative w-full aspect-auto min-h-[500px] bg-zinc-900 flex flex-col p-8 overflow-hidden rounded-xl font-sans border border-zinc-800">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative z-10 w-full h-full flex flex-col gap-8">
        
        {/* Title */}
        <div>
          <h3 className="text-zinc-200 font-bold text-lg">KenLM Internals: Fast N-Gram Trie Querying</h3>
          <p className="text-zinc-500 text-sm mt-1">How KenLM uses bit-level packed Trie structures for instantaneous n-gram backoff and correction.</p>
        </div>

        <div className="flex-1 flex flex-col md:flex-row mt-4 gap-8">
          
          {/* Left: The Query Process */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            
            <div className="bg-zinc-800/80 border border-zinc-700 rounded-xl p-5 shadow-lg">
              <div className="text-xs text-zinc-400 font-bold mb-3 tracking-widest uppercase">Incoming Hypothesis</div>
              <motion.div 
                className="text-lg font-bold p-3 rounded-lg text-center"
                animate={{ 
                  backgroundColor: ['#27272a', '#27272a', '#3f2c2c', '#3f2c2c', '#27272a'],
                  color: ['#a1a1aa', '#a1a1aa', '#f87171', '#f87171', '#a1a1aa'],
                  border: ['1px solid #3f3f46', '1px solid #3f3f46', '1px solid #dc2626', '1px solid #dc2626', '1px solid #3f3f46']
                }}
                transition={loopTransition}
              >
                <motion.span animate={{ display: ['inline', 'inline', 'none', 'none', 'inline'] }} transition={loopTransition}>"शेती मा"</motion.span>
                <motion.span animate={{ display: ['none', 'none', 'inline', 'inline', 'none'] }} transition={loopTransition}>"शेती मा"</motion.span>
              </motion.div>
              <div className="mt-2 flex justify-center">
                <motion.div 
                  className="text-lg font-bold p-3 rounded-lg text-center w-full mt-2"
                  animate={{ 
                    backgroundColor: ['#27272a', '#27272a', '#27272a', '#223c2e', '#223c2e'],
                    color: ['#a1a1aa', '#a1a1aa', '#a1a1aa', '#4ade80', '#4ade80'],
                    border: ['1px solid #3f3f46', '1px solid #3f3f46', '1px solid #3f3f46', '1px solid #16a34a', '1px solid #16a34a']
                  }}
                  transition={loopTransition}
                >
                  <motion.span animate={{ display: ['none', 'none', 'none', 'inline', 'inline'] }} transition={loopTransition}>"शेती मध्ये"</motion.span>
                  <motion.span animate={{ display: ['inline', 'inline', 'inline', 'none', 'none'] }} transition={loopTransition}>"शेती मध्ये"</motion.span>
                </motion.div>
              </div>
            </div>

            <div className="bg-zinc-800/80 border border-zinc-700 rounded-xl p-5 shadow-lg flex-1">
              <div className="text-xs text-zinc-400 font-bold mb-3 tracking-widest uppercase">KenLM State Query</div>
              <div className="space-y-4">
                
                <motion.div 
                  className="font-mono text-sm bg-zinc-900 p-3 rounded-lg border border-zinc-700"
                  animate={{ 
                    borderColor: ['#3f3f46', '#ef4444', '#ef4444', '#3f3f46', '#3f3f46'],
                    boxShadow: ['none', '0 0 15px rgba(239, 68, 68, 0.2)', '0 0 15px rgba(239, 68, 68, 0.2)', 'none', 'none']
                  }}
                  transition={loopTransition}
                >
                  <div className="text-zinc-500 mb-1">State: P( w_t | w_t-1 )</div>
                  <div className="text-zinc-300">Query: <span className="text-blue-400">P(मा | शेती)</span></div>
                  <motion.div 
                    className="mt-2 text-rose-500 text-xs font-bold"
                    animate={{ opacity: [0, 1, 1, 0, 0] }}
                    transition={loopTransition}
                  >
                    Result: Miss! (Backoff Penalty: -99.9)
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="font-mono text-sm bg-zinc-900 p-3 rounded-lg border border-zinc-700"
                  animate={{ 
                    borderColor: ['#3f3f46', '#3f3f46', '#3f3f46', '#10b981', '#10b981'],
                    boxShadow: ['none', 'none', 'none', '0 0 15px rgba(16, 185, 129, 0.2)', '0 0 15px rgba(16, 185, 129, 0.2)']
                  }}
                  transition={loopTransition}
                >
                  <div className="text-zinc-500 mb-1">State: P( w_t | w_t-1 )</div>
                  <div className="text-zinc-300">Query: <span className="text-blue-400">P(मध्ये | शेती)</span></div>
                  <motion.div 
                    className="mt-2 text-emerald-500 text-xs font-bold"
                    animate={{ opacity: [0, 0, 0, 1, 1] }}
                    transition={loopTransition}
                  >
                    Result: Hit! (Prob: -1.2)
                  </motion.div>
                </motion.div>

              </div>
            </div>

          </div>

          {/* Right: The Trie Structure Visualization using Flexbox */}
          <div className="w-full md:w-2/3 bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 shadow-lg relative flex flex-col justify-center overflow-hidden min-h-[400px]">
            
            <div className="flex items-center justify-between w-full max-w-lg mx-auto relative z-10 h-full py-12">
              
              {/* Column 1: Root */}
              <div className="flex flex-col items-center justify-center relative">
                <div className="w-20 h-16 bg-zinc-700 border-2 border-zinc-500 rounded-xl flex items-center justify-center font-bold text-zinc-300 shadow-md">
                  [ROOT]
                </div>
              </div>

              {/* Connecting line 1 */}
              <div className="flex-1 h-0.5 bg-zinc-600 w-16 mx-4 relative"></div>

              {/* Column 2: शेती */}
              <div className="flex flex-col items-center justify-center relative">
                <motion.div 
                  className="w-24 bg-zinc-800 border-2 border-zinc-600 rounded-xl p-3 shadow-lg"
                  animate={{ borderColor: ['#52525b', '#3b82f6', '#3b82f6', '#3b82f6', '#52525b'] }}
                  transition={loopTransition}
                >
                  <div className="text-center font-bold text-blue-300 text-lg">शेती</div>
                  <div className="mt-2 text-[10px] font-mono text-zinc-500 text-center border-t border-zinc-700 pt-1">
                    0x1A2F
                  </div>
                </motion.div>
              </div>

              {/* Connecting lines container to Column 3 */}
              <div className="relative w-24 h-48 mx-4">
                {/* SVG for smooth angled lines connecting to children */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  {/* To मध्ये (top) */}
                  <motion.path 
                    d="M 0 50 Q 50 50 100 15" 
                    fill="none" 
                    strokeWidth="4"
                    animate={{ stroke: ['#52525b', '#52525b', '#52525b', '#10b981', '#10b981'] }}
                    transition={loopTransition}
                  />
                  {/* To मा (middle/miss) */}
                  <motion.path 
                    d="M 0 50 Q 50 50 100 50" 
                    fill="none" 
                    strokeWidth="4"
                    strokeDasharray="5 5"
                    animate={{ 
                      stroke: ['transparent', '#ef4444', '#ef4444', 'transparent', 'transparent'],
                      pathLength: [0, 1, 1, 0, 0]
                    }}
                    transition={loopTransition}
                  />
                  {/* To आणि (bottom) */}
                  <path d="M 0 50 Q 50 50 100 85" stroke="#52525b" strokeWidth="2" fill="none" />
                </svg>
              </div>

              {/* Column 3: Children */}
              <div className="flex flex-col items-center justify-between h-56 relative w-28 flex-shrink-0">
                {/* मध्ये Node */}
                <motion.div 
                  className="w-full bg-zinc-800 border-2 border-zinc-600 rounded-xl p-2 shadow-lg z-10"
                  animate={{ 
                    borderColor: ['#52525b', '#52525b', '#52525b', '#10b981', '#10b981'],
                    boxShadow: ['none', 'none', 'none', '0 0 20px rgba(16, 185, 129, 0.3)', '0 0 20px rgba(16, 185, 129, 0.3)']
                  }}
                  transition={loopTransition}
                >
                  <div className="text-center font-bold text-emerald-400 text-sm">मध्ये</div>
                  <div className="mt-1 text-[10px] font-mono text-zinc-400 border-t border-zinc-700 pt-1 text-center">
                    P: -1.2
                  </div>
                </motion.div>

                {/* Miss Node "मा" */}
                <motion.div 
                  className="text-rose-500 font-bold text-lg whitespace-nowrap z-10 h-10 flex items-center justify-center"
                  animate={{ opacity: [0, 1, 1, 0, 0], scale: [0.5, 1.2, 1, 0.5, 0.5] }}
                  transition={loopTransition}
                >
                  ✗ "मा"
                </motion.div>

                {/* आणि Node */}
                <div className="w-full bg-zinc-800 border-2 border-zinc-600 rounded-xl p-2 shadow-lg opacity-50 z-10">
                  <div className="text-center font-bold text-zinc-400 text-sm">आणि</div>
                  <div className="mt-1 text-[10px] font-mono text-zinc-500 border-t border-zinc-700 pt-1 text-center">
                    P: -2.4
                  </div>
                </div>
              </div>

            </div>

            {/* Explanation box at bottom */}
            <div className="absolute bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-xl text-xs md:text-sm text-zinc-300 shadow-xl text-center">
              <motion.span animate={{ display: ['inline', 'inline', 'none', 'none', 'inline'] }} transition={loopTransition}>
                Ahirani dialect word <strong>"मा"</strong> misses the standard Wikipedia Trie, returning a massive backoff penalty.
              </motion.span>
              <motion.span animate={{ display: ['none', 'none', 'inline', 'inline', 'none'] }} transition={loopTransition}>
                Standard word <strong>"मध्ये"</strong> is found instantly via pointer interpolation, forcing the correction!
              </motion.span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
