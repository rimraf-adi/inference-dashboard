import { MoeAnimation } from '../components/animations/MoeAnimation';
import { CtcAnimation } from '../components/animations/CtcAnimation';
import { KenLmAnimation } from '../components/animations/KenLmAnimation';
import { Layers, Zap, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

export default function IllustrationsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              &larr; Back to Dashboard
            </Link>
          </div>
          <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight">Model Architecture & Concepts</h1>
          <p className="text-lg text-zinc-600 max-w-2xl">
            Interactive visualizations demonstrating how our Dialect-Aware ASR system operates under the hood.
          </p>
        </div>

        {/* 1. MoE Conformer */}
        <section className="bg-white rounded-3xl p-10 border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">1. Mixture-of-Experts (MoE) Routing</h2>
              <p className="text-zinc-500 text-sm">Instead of a massive dense network, a Router network selectively activates top-k experts per token.</p>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl overflow-hidden p-8 flex items-center justify-center min-h-[400px]">
            <MoeAnimation />
          </div>
        </section>

        {/* 2. CTC Alignment */}
        <section className="bg-white rounded-3xl p-10 border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">2. CTC (Connectionist Temporal Classification)</h2>
              <p className="text-zinc-500 text-sm">How acoustic frames align with text by collapsing consecutive duplicates and removing blanks (ε).</p>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl overflow-hidden p-8 flex items-center justify-center min-h-[400px]">
            <CtcAnimation />
          </div>
        </section>

        {/* 3. KenLM */}
        <section className="bg-white rounded-3xl p-10 border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">3. KenLM Dialect Erasure (N-Gram Decoding)</h2>
              <p className="text-zinc-500 text-sm">How an N-gram LM re-routes acoustic beam search paths to force standard vocabulary.</p>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl overflow-hidden p-8 flex items-center justify-center min-h-[400px]">
            <KenLmAnimation />
          </div>
        </section>

      </div>
    </div>
  );
}
