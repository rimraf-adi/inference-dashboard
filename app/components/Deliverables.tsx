import React from 'react';
import { Target, FastForward, Activity, BookOpen } from 'lucide-react';

export function Deliverables() {
  return (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-xl mt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2">Project Deliverables & Roadmap</h2>
        <p className="text-zinc-400 mb-10 text-lg">Key milestones and upcoming features for the MoE Conformer suite.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Deliverable 1 */}
          <div className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl flex gap-4 transition-all hover:bg-zinc-800">
            <div className="mt-1 bg-blue-500/10 p-3 rounded-xl border border-blue-500/20 h-fit">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100 mb-2">1. Scaled MoE Architectures</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Expanding from the current <strong className="text-zinc-300">MoE Small (33M)</strong> to larger parameter counts for improved accuracy while retaining sparse efficiency. Introducing <strong className="text-zinc-300">MoE Medium (60-70M)</strong> and <strong className="text-zinc-300">MoE Large (~130M)</strong>.
              </p>
            </div>
          </div>

          {/* Deliverable 2 */}
          <div className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl flex gap-4 transition-all hover:bg-zinc-800">
            <div className="mt-1 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 h-fit">
              <FastForward className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100 mb-2">2. Causal Adaptation</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                All models will be modified to support <strong className="text-zinc-300">causal streaming</strong>. This adaptation eliminates the need for full bidirectional future context, enabling real-time, low-latency transcription for live audio feeds.
              </p>
            </div>
          </div>

          {/* Deliverable 3 */}
          <div className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl flex gap-4 transition-all hover:bg-zinc-800">
            <div className="mt-1 bg-purple-500/10 p-3 rounded-xl border border-purple-500/20 h-fit">
              <Activity className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100 mb-2">3. Universal Sparsity</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Every model in the suite, regardless of parameter size, will remain <strong className="text-zinc-300">strictly sparse</strong>. This guarantees that inference speeds stay exceptionally fast on edge hardware without activating the entire dense network.
              </p>
            </div>
          </div>

          {/* Deliverable 4 */}
          <div className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl flex gap-4 transition-all hover:bg-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-amber-950 text-[10px] font-bold px-3 py-1 rounded-bl-xl z-20">CRITICAL ROADBLOCK</div>
            <div className="mt-1 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 h-fit z-10 relative">
              <BookOpen className="w-6 h-6 text-amber-400" />
            </div>
            <div className="z-10 relative">
              <h3 className="text-lg font-bold text-zinc-100 mb-2">4. Dialect-Aware 5-Gram LM</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Development of a custom language model to prevent the <strong className="text-rose-400">dialect erasure</strong> caused by standard Wikipedia data. Current standard text data acts as a straightjacket for rural vocabulary; this custom LM will actively preserve words like <span className="font-mono text-xs bg-zinc-900 px-1 py-0.5 rounded text-amber-400">येगयेगळा</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
