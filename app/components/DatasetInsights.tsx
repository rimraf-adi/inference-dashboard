import React from 'react';
import { Database, Mic, Radio, Sprout } from 'lucide-react';

const datasets = [
  {
    name: 'Shrutilipi (Marathi)',
    hours: '~250 hrs',
    size: '~22.6 GB',
    utterances: '180K+',
    domain: 'News Broadcasts',
    description: 'Mined from All India Radio (AIR) bulletins. Highly formal standard Marathi with professional anchors and studio-quality acoustics.',
    icon: <Radio className="w-6 h-6 text-blue-400" />,
    color: 'from-blue-500/10 to-blue-500/5',
    borderColor: 'border-blue-500/20'
  },
  {
    name: 'Kathbath (Marathi)',
    hours: '~450 hrs',
    size: '~14.5 GB',
    utterances: '200K+',
    domain: 'Read Speech',
    description: 'Crowdsourced recordings of read sentences. Features high demographic diversity across genders and ages with relatively clean audio.',
    icon: <Mic className="w-6 h-6 text-purple-400" />,
    color: 'from-purple-500/10 to-purple-500/5',
    borderColor: 'border-purple-500/20'
  },
  {
    name: 'Project Vaani (Marathi)',
    hours: '~300 hrs',
    size: '~34.5 GB',
    utterances: '150K+',
    domain: 'Spontaneous',
    description: 'Unscripted, spontaneous conversational speech collected across multiple districts. High acoustic and environmental diversity.',
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    color: 'from-emerald-500/10 to-emerald-500/5',
    borderColor: 'border-emerald-500/20'
  },
  {
    name: 'RESPIN (Train & Test)',
    hours: '~50 hrs',
    size: '~5.8 GB',
    utterances: '35K+',
    domain: 'Agriculture / Telephony',
    description: 'Real agricultural queries from farmers. Extremely noisy telephony audio featuring heavy rural dialects (Ahirani, Malvani, Varhadi).',
    icon: <Sprout className="w-6 h-6 text-amber-400" />,
    color: 'from-amber-500/10 to-amber-500/5',
    borderColor: 'border-amber-500/20'
  }
];

export function DatasetInsights() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-zinc-900">Training Corpus Insights</h2>
        <p className="text-zinc-500">Breakdown of the Marathi speech datasets used for acoustic modeling.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {datasets.map((dataset, idx) => (
          <div key={idx} className={`p-5 rounded-2xl border bg-gradient-to-b ${dataset.color} ${dataset.borderColor} shadow-sm hover:shadow-md transition-all`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-zinc-100">
                {dataset.icon}
              </div>
              <h3 className="font-bold text-zinc-800 leading-tight">{dataset.name}</h3>
            </div>
            
            <div className="flex justify-between mb-4 pb-4 border-b border-zinc-200/50">
              <div>
                <div className="text-xl font-bold text-zinc-900">{dataset.hours}</div>
                <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Duration</div>
              </div>
              <div>
                <div className="text-xl font-bold text-zinc-900">{dataset.size}</div>
                <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Size</div>
              </div>
              <div>
                <div className="text-xl font-bold text-zinc-900">{dataset.utterances}</div>
                <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Utterances</div>
              </div>
            </div>
            
            <div>
              <div className="inline-block px-2 py-1 bg-zinc-900 text-white text-xs font-bold rounded-md mb-2">
                {dataset.domain}
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {dataset.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
