"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function MoeAnimation() {
  const loopTransition = { duration: 6, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.2, 0.5, 0.8, 1] };
  const tokenTransition = { duration: 6, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.15, 0.8, 1] };
  const pathTransition = { duration: 6, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.25, 0.7, 1] };

  return (
    <div className="relative w-full max-w-5xl aspect-[21/9] bg-zinc-900 flex items-center justify-center p-8 overflow-hidden rounded-xl font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative w-full h-full flex items-center justify-between z-10 px-8">
        
        {/* Input Token (Marathi Full Word) */}
        <motion.div 
          className="flex flex-col items-center"
          animate={{ opacity: [0, 1, 1, 0], x: [-30, 0, 0, -30] }}
          transition={tokenTransition}
        >
          <div className="text-zinc-500 text-xs font-mono mb-2 uppercase tracking-widest">Input</div>
          <div className="px-4 py-3 bg-blue-500/20 border-2 border-blue-500/50 rounded-xl text-blue-400 font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            Token: 'येगयेगळा'
          </div>
          <div className="text-xs text-blue-300/50 font-mono mt-2">[x_t]</div>
        </motion.div>

        {/* Router */}
        <div className="relative flex items-center">
          <motion.div 
            className="w-32 h-32 bg-zinc-800 border-2 rounded-2xl flex flex-col items-center justify-center relative z-20 text-center shadow-xl"
            animate={{ 
              borderColor: ['#52525b', '#3b82f6', '#3b82f6', '#52525b'],
              boxShadow: ['none', '0 0 25px rgba(59, 130, 246, 0.4)', '0 0 25px rgba(59, 130, 246, 0.4)', 'none']
            }}
            transition={loopTransition}
          >
            <span className="font-bold text-zinc-200 text-xl">Router<br/>Gate</span>
          </motion.div>

          <svg className="absolute top-1/2 left-[calc(100%-10px)] w-48 h-64 -translate-y-1/2 z-10" style={{ overflow: 'visible' }}>
            <motion.path
              d="M 10 128 C 40 128, 40 32, 180 32"
              fill="transparent"
              stroke="#a855f7"
              strokeWidth="4"
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={pathTransition}
            />
            <motion.path
              d="M 10 128 C 40 128, 40 160, 180 160"
              fill="transparent"
              stroke="#a855f7"
              strokeWidth="2"
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.4, 0.4, 0] }}
              transition={pathTransition}
            />
          </svg>
          
          {/* Activation Weight Labels on paths */}
          <motion.div 
            className="absolute z-20 left-[160px] top-[-50px] bg-zinc-900 border border-purple-500/50 px-2 py-1 rounded text-xs font-bold text-purple-300 font-mono"
            animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 0, 0, 10] }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.3, 0.8, 1] }}
          >
            × 0.85
          </motion.div>
          <motion.div 
            className="absolute z-20 left-[160px] bottom-[-50px] bg-zinc-900 border border-purple-500/30 px-2 py-1 rounded text-xs font-bold text-purple-400/70 font-mono"
            animate={{ opacity: [0, 0, 1, 1, 0], y: [-10, 0, 0, -10] }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.3, 0.8, 1] }}
          >
            × 0.15
          </motion.div>
        </div>

        {/* Experts */}
        <div className="flex flex-col gap-6 relative z-20">
          {[1, 2, 3, 4].map((expert) => {
            const isTop1 = expert === 1;
            const isTop2 = expert === 3;
            const isActive = isTop1 || isTop2;
            
            return (
              <motion.div 
                key={expert}
                className="w-40 h-16 bg-zinc-800 border-2 rounded-xl flex flex-col items-center justify-center shadow-lg relative"
                animate={
                  isTop1 ? {
                    opacity: [0.3, 1, 1, 0.3],
                    scale: [0.95, 1.1, 1.1, 0.95],
                    borderColor: ['#3f3f46', '#a855f7', '#a855f7', '#3f3f46'],
                    boxShadow: ['none', '0 0 20px rgba(168, 85, 247, 0.5)', '0 0 20px rgba(168, 85, 247, 0.5)', 'none']
                  } : isTop2 ? {
                    opacity: [0.3, 0.8, 0.8, 0.3],
                    scale: [0.95, 1.05, 1.05, 0.95],
                    borderColor: ['#3f3f46', '#a855f7', '#a855f7', '#3f3f46'],
                    boxShadow: ['none', '0 0 10px rgba(168, 85, 247, 0.2)', '0 0 10px rgba(168, 85, 247, 0.2)', 'none']
                  } : {
                    opacity: 0.2,
                    scale: 0.95,
                    borderColor: '#3f3f46'
                  }
                }
                transition={loopTransition}
              >
                <div className={`font-bold text-sm ${isActive ? 'text-zinc-200' : 'text-zinc-500'}`}>
                  Expert {expert}
                </div>
                {isActive && (
                  <motion.div 
                    className={`text-xs font-mono mt-1 ${isTop1 ? 'text-purple-300' : 'text-purple-400/60'}`}
                    animate={{ opacity: [0, 0, 1, 1, 0] }}
                    transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.4, 0.8, 1] }}
                  >
                    h_{expert}(x_t)
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Combiner / Output */}
        <div className="relative pl-8">
          <svg className="absolute top-1/2 right-[calc(100%-10px)] w-48 h-64 -translate-y-1/2 z-10" style={{ overflow: 'visible' }}>
            <motion.path
              d="M 0 32 C 140 32, 140 128, 180 128"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="4"
              animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1] }}
            />
            <motion.path
              d="M 0 160 C 140 160, 140 128, 180 128"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="2"
              animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0, 0, 0.4, 0.4, 0] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1] }}
            />
          </svg>
          
          <div className="flex flex-col items-center">
            <div className="text-zinc-500 text-xs font-mono mb-2 uppercase tracking-widest text-center">Output</div>
            <motion.div 
              className="w-48 h-24 bg-zinc-800 border-2 rounded-2xl flex flex-col items-center justify-center relative z-20 shadow-xl"
              animate={{ 
                borderColor: ['#52525b', '#52525b', '#10b981', '#10b981', '#52525b'],
                scale: [1, 1, 1.1, 1.1, 1],
                boxShadow: ['none', 'none', '0 0 25px rgba(16, 185, 129, 0.4)', '0 0 25px rgba(16, 185, 129, 0.4)', 'none']
              }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.4, 0.6, 0.8, 1] }}
            >
              <span className="text-emerald-400 font-bold text-2xl mb-1">Σ</span>
              <motion.div 
                className="text-xs font-mono text-zinc-300 text-center leading-tight"
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{ duration: 6, repeat: Infinity, times: [0, 0.5, 0.6, 0.8, 1] }}
              >
                0.85 * h_1 <br/> + <br/> 0.15 * h_3
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
