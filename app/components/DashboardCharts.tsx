"use client";

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-zinc-200 shadow-lg rounded-xl text-sm z-50">
        <p className="font-semibold text-zinc-800 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="flex justify-between gap-4">
            <span>{entry.name}:</span>
            <span className="font-mono">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// 1. Hardware & Efficiency Data
const efficiencyData = [
  { name: 'Our Model (MoE)', activeParams: 26.53, vram: 160.5, disk: 320.3 },
  { name: 'SraVaani 1.0', activeParams: 430.0, vram: 1796.4, disk: 866.7 },
  { name: 'Indic 600M', activeParams: 600.0, vram: 2400.0, disk: 2400.0 },
];

export function EfficiencyChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={efficiencyData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f4f4f5" />
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13, fontWeight: 500 }} width={120} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '10px' }} />
          <Bar dataKey="activeParams" name="Active Params (M)" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={12} />
          <Bar dataKey="disk" name="Checkpoint Disk (MB)" fill="#14b8a6" radius={[0, 4, 4, 0]} barSize={12} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// 2. Audio Duration Latency Data
const audioDurationData = [
  { duration: '3.0s', latency: 78.85, rtf: 0.0263 },
  { duration: '8.0s', latency: 89.32, rtf: 0.0112 },
  { duration: '15.0s', latency: 79.40, rtf: 0.0053 },
];

export function AudioDurationLatencyChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={audioDurationData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
          <XAxis dataKey="duration" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} yAxisId="left" />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} yAxisId="right" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '10px' }} />
          <Line yAxisId="left" type="monotone" dataKey="latency" name="Latency (ms)" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          <Line yAxisId="right" type="monotone" dataKey="rtf" name="Real-Time Factor (RTF)" stroke="#f43f5e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// 3. GPU Batch Throughput Data
const throughputData = [
  { batchSize: '1', 'Our Model': 1.06, 'SraVaani': 0.72 },
  { batchSize: '4', 'Our Model': 3.95, 'SraVaani': 0.06 },
  { batchSize: '8', 'Our Model': 7.50, 'SraVaani': 0.11 },
  { batchSize: '16', 'Our Model': 17.60, 'SraVaani': 0.54 },
  { batchSize: '32', 'Our Model': 31.46, 'SraVaani': 1.11 },
  { batchSize: '64', 'Our Model': 46.31, 'SraVaani': null }, // SraVaani OOMs or doesn't scale
];

export function ThroughputChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={throughputData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorOur" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorSravaani" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
          <XAxis dataKey="batchSize" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '10px' }} />
          <Area type="monotone" dataKey="Our Model" name="Our Model (hrs/min)" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorOur)" />
          <Area type="monotone" dataKey="SraVaani" name="SraVaani (hrs/min)" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorSravaani)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// 4. Overall Metrics Data
const overallMetricsData = [
  { metric: 'CER (%)', 'Our Model': 7.97, 'SraVaani': 2.97, 'Indic': 4.95 },
  { metric: 'WER (%)', 'Our Model': 32.72, 'SraVaani': 15.75, 'Indic': 23.94 },
  { metric: 'SER (%)', 'Our Model': 83.78, 'SraVaani': 58.80, 'Indic': 70.00 },
  { metric: 'Exact Match (%)', 'Our Model': 16.22, 'SraVaani': 41.20, 'Indic': 30.00 },
];

export function OverallMetricsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={overallMetricsData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
          <XAxis dataKey="metric" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '10px' }} />
          <Bar dataKey="Our Model" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="SraVaani" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Indic" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// 5. Dialect Benchmarks Data
const werData = [
  { dialect: 'D1 (Malvani)', 'Our Model': 39.44, 'SraVaani': 21.71, 'Indic': 34.59 },
  { dialect: 'D2 (Ahirani)', 'Our Model': 33.96, 'SraVaani': 17.76, 'Indic': 24.64 },
  { dialect: 'D3 (Standard)', 'Our Model': 22.89, 'SraVaani': 8.97, 'Indic': 11.57 },
  { dialect: 'D4 (Varhadi)', 'Our Model': 34.07, 'SraVaani': 14.14, 'Indic': 24.29 },
  { dialect: 'Aggregate', 'Our Model': 32.72, 'SraVaani': 15.75, 'Indic': 23.94 },
];

export function WerChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={werData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
          <XAxis dataKey="dialect" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '20px' }} />
          <Bar dataKey="Our Model" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="SraVaani" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Indic" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const cerData = [
  { dialect: 'D1 (Malvani)', 'Our Model': 9.71, 'SraVaani': 4.53, 'Indic': 7.39 },
  { dialect: 'D2 (Ahirani)', 'Our Model': 7.92, 'SraVaani': 2.95, 'Indic': 4.96 },
  { dialect: 'D3 (Standard)', 'Our Model': 5.59, 'SraVaani': 1.69, 'Indic': 2.27 },
  { dialect: 'D4 (Varhadi)', 'Our Model': 8.49, 'SraVaani': 2.58, 'Indic': 4.96 },
  { dialect: 'Aggregate', 'Our Model': 7.97, 'SraVaani': 2.97, 'Indic': 4.95 },
];

export function CerChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={cerData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
          <XAxis dataKey="dialect" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '20px' }} />
          <Bar dataKey="Our Model" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="SraVaani" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Indic" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// 6. CPU Latency Data
const cpuLatencyData = [
  { threads: '1 Thread', 'Our Model': 441.19, 'Indic': 700.67 },
  { threads: '4 Threads', 'Our Model': 242.40, 'Indic': 706.87 },
  { threads: '8 Threads', 'Our Model': 215.61, 'Indic': 714.38 },
  { threads: '16 Threads', 'Our Model': 261.70, 'Indic': 755.34 },
];

export function CpuLatencyChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={cpuLatencyData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
          <XAxis dataKey="threads" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '10px' }} />
          <Line type="monotone" dataKey="Our Model" name="Our Model (ms)" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="Indic" name="Indic 600M (ms)" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// 7. KenLM Ablation Data
const kenlmData = [
  { strategy: 'Greedy CTC', wer: 32.65 },
  { strategy: 'Lexicon Beam', wer: 31.85 },
  { strategy: 'KenLM (α=0.5)', wer: 28.29 },
  { strategy: 'KenLM Soft (α=0.15)', wer: 28.06 },
];

export function KenLmAblationChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={kenlmData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
          <XAxis dataKey="strategy" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} domain={['dataMin - 2', 'dataMax + 2']} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="wer" name="WER (%)" fill="#06b6d4" radius={[4, 4, 0, 0]} maxBarSize={60} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// 8. Decoder Overhead Data
const decoderOverheadData = [
  { strategy: 'Greedy CTC', latency: 0.02 },
  { strategy: 'Prefix Beam', latency: 108.48 },
  { strategy: 'KenLM (α=0.5)', latency: 78.52 },
  { strategy: 'KenLM (α=0.15)', latency: 78.78 },
];

export function DecoderOverheadChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={decoderOverheadData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
          <XAxis dataKey="strategy" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 13 }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="latency" name="Latency (ms)" fill="#8b5cf6" radius={[4, 4, 0, 0]} maxBarSize={60} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
