import { Zap, Cpu, Database, ChevronRight, Activity, TrendingUp, Cpu as CpuIcon, Layers, FileCode2, Clock, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { 
  EfficiencyChart, ThroughputChart, WerChart, CerChart, OverallMetricsChart,
  CpuLatencyChart, KenLmAblationChart, DecoderOverheadChart, AudioDurationLatencyChart 
} from './components/DashboardCharts';
import { QualitativeAnalysis } from './components/QualitativeAnalysis';

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-white text-zinc-900 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <div className="px-6 md:px-12 pt-20 pb-16 border-b border-zinc-100 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-tight border border-blue-100">
            <Zap className="w-4 h-4 fill-blue-600/20" />
            Next-Gen Marathi ASR
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Performance Analytics <br className="hidden md:block"/> & Benchmarks
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
            A comprehensive evaluation of the <strong>MoE Conformer</strong> against state-of-the-art models across dialects, decoding strategies, and hardware configurations.
          </p>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="px-6 md:px-12 py-12 max-w-6xl mx-auto w-full space-y-12 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-150 fill-mode-both">
        
        {/* Row 1: KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-zinc-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-sm font-medium text-zinc-500 mb-1">Active Parameters</div>
            <div className="text-4xl font-bold text-zinc-900">26.5M</div>
            <div className="text-sm text-indigo-600 mt-2 font-medium flex items-center gap-1">
              ↓ 95% smaller
            </div>
          </div>
          
          <div className="p-6 bg-white border border-zinc-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-sm font-medium text-zinc-500 mb-1">Max Throughput</div>
            <div className="text-4xl font-bold text-zinc-900">46<span className="text-2xl text-zinc-500">h/m</span></div>
            <div className="text-sm text-emerald-600 mt-2 font-medium">
              Audio hours per minute
            </div>
          </div>

          <div className="p-6 bg-white border border-zinc-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-cyan-600" />
            </div>
            <div className="text-sm font-medium text-zinc-500 mb-1">Checkpoint Disk Size</div>
            <div className="text-4xl font-bold text-zinc-900">320<span className="text-2xl text-zinc-500">MB</span></div>
            <div className="text-sm text-cyan-600 mt-2 font-medium flex items-center gap-1">
              Highly portable
            </div>
          </div>

          <div className="p-6 bg-white border border-zinc-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center mb-4">
              <CpuIcon className="w-6 h-6 text-rose-600" />
            </div>
            <div className="text-sm font-medium text-zinc-500 mb-1">Static VRAM</div>
            <div className="text-4xl font-bold text-zinc-900">160<span className="text-2xl text-zinc-500">MB</span></div>
            <div className="text-sm text-rose-600 mt-2 font-medium">
              Edge deployment ready
            </div>
          </div>
        </div>

        {/* Row 2: Architecture & Speed Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-zinc-900">Architectural Efficiency</h3>
              <p className="text-sm text-zinc-500 mt-1">Comparing active parameters and disk footprint.</p>
            </div>
            <EfficiencyChart />
          </div>

          <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-zinc-900">Batch Throughput Scaling (GPU)</h3>
              <p className="text-sm text-zinc-500 mt-1">SraVaani OOMs at larger batch sizes, while MoE scales.</p>
            </div>
            <ThroughputChart />
          </div>
        </div>

        {/* Row 3: Dialect Benchmarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-zinc-900">RESPIN Dialect WER Benchmark</h3>
              <p className="text-sm text-zinc-500 mt-1">Word Error Rate (%) across 4 Marathi dialects.</p>
            </div>
            <WerChart />
          </div>
          <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-zinc-900">RESPIN Dialect CER Benchmark</h3>
              <p className="text-sm text-zinc-500 mt-1">Character Error Rate (%) across 4 Marathi dialects.</p>
            </div>
            <CerChart />
          </div>
        </div>

        {/* Row 4: Overall System Performance */}
        <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-zinc-900">Overall System Performance (Aggregate)</h3>
            <p className="text-sm text-zinc-500 mt-1">CER, WER, Sentence Error Rate (SER), and Exact Match comparison.</p>
          </div>
          <OverallMetricsChart />
        </div>

        {/* Row 5: Language Model Decoding & Latency Overhead */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mb-4">
              <FileCode2 className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900">Language Model Decoding</h3>
            <p className="text-zinc-600 leading-relaxed">
              Applying a KenLM 5-gram language model reduces Word Error Rate by nearly <strong>14% relative</strong> (from 32.65% to 28.06%). 
              The optimized prefix beam search implementation only adds ~78ms of decoding overhead compared to the raw CTC output.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-zinc-900">WER Improvement (%)</h3>
              </div>
              <KenLmAblationChart />
            </div>
            <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-zinc-900">Decoder Overhead (ms)</h3>
              </div>
              <DecoderOverheadChart />
            </div>
          </div>
        </div>

        {/* Row 6: CPU and Audio Latency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-zinc-900">CPU Thread Scaling</h3>
                <p className="text-sm text-zinc-500 mt-1">Serverless latency (ms) for 5s Audio on CPU.</p>
              </div>
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                <CpuIcon className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <CpuLatencyChart />
          </div>
          
          <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Audio Duration Latency</h3>
                <p className="text-sm text-zinc-500 mt-1">Latency and RTF for varying audio lengths (3s, 8s, 15s).</p>
              </div>
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
            <AudioDurationLatencyChart />
          </div>
        </div>

        {/* Row 7: Qualitative Analysis - Model Comparison */}
        <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm mt-8">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-zinc-900">Qualitative Analysis: Model Comparison</h3>
              <p className="text-sm text-zinc-500 mt-1">Comparing greedy CTC transcriptions across the three models.</p>
            </div>
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-500">
                  <th className="pb-4 font-semibold w-12">Dialect</th>
                  <th className="pb-4 font-semibold w-1/4">Reference (Ground Truth)</th>
                  <th className="pb-4 font-semibold w-1/4">Our Model (MoE Conformer)</th>
                  <th className="pb-4 font-semibold w-1/4">SraVaani 1.0</th>
                  <th className="pb-4 font-semibold w-1/4">Indic Conformer 600M</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-800">
                <tr className="group hover:bg-zinc-50 transition-colors">
                  <td className="py-4 font-mono text-xs text-zinc-400">D3</td>
                  <td className="py-4 font-medium">बकरी किंवा मेंढीपासून खत मिळते का ?</td>
                  <td className="py-4">बकरी किंवा मेंढीपासून खत मिळते का ??</td>
                  <td className="py-4">बकरी किंवा मेंढीपासून खत मिळते का</td>
                  <td className="py-4">बकरी किंवा मेंढीपासून खत मिळते का</td>
                </tr>
                <tr className="group hover:bg-zinc-50 transition-colors">
                  <td className="py-4 font-mono text-xs text-zinc-400">D3</td>
                  <td className="py-4 font-medium">ठिबक सिंचनाची जोडणी कशी असावी ?</td>
                  <td className="py-4">ठिबक सिंचनाची जोडणी कशी असावी ??</td>
                  <td className="py-4">ठिबक सिंचनाची जोडणी कशी असावी</td>
                  <td className="py-4">ठिबक सिंचनाची जोडणी कशी असावी</td>
                </tr>
                <tr className="group hover:bg-zinc-50 transition-colors">
                  <td className="py-4 font-mono text-xs text-zinc-400">D3</td>
                  <td className="py-4 font-medium">के.वाय.सी फॉर्म भरणे गरजेचे असते का ?</td>
                  <td className="py-4">के.वाय.सी फॉर्म भरणे गरजेचे असते का ??</td>
                  <td className="py-4 font-medium">केवायसी फॉर्म भरणे गरजेचे असते का</td>
                  <td className="py-4 font-medium">के वाय सी फॉर्म भरणे गरजेचे असते का</td>
                </tr>
                <tr className="group hover:bg-zinc-50 transition-colors">
                  <td className="py-4 font-mono text-xs text-zinc-400">D3</td>
                  <td className="py-4 font-medium">लवकर तयार होणाऱ्या तुरीच्या जाती कोणत्या ?</td>
                  <td className="py-4 font-medium">लवकर तयार होणा्या तुडीच्या जाती कोणत्या ??</td>
                  <td className="py-4">लवकर तयार होणाऱ्या तुरीच्या जाती कोणत्या</td>
                  <td className="py-4">लवकर तयार होणाऱ्या तुरीच्या जाती कोणत्या</td>
                </tr>
                <tr className="group hover:bg-zinc-50 transition-colors">
                  <td className="py-4 font-mono text-xs text-zinc-400">D3</td>
                  <td className="py-4 font-medium">मला एका वर्षातच कर्ज परतफेड करण्याठी दर महिन्याला किमान किती हप्ता बसेल ?</td>
                  <td className="py-4">मला एका वर्षातच कर्ज परतफेड करण्यासाठी दर महिन्याला किमान किती हप्ता बसेल ?</td>
                  <td className="py-4 font-medium">मला एका वर्षात कर्ज परतफेड करण्यासाठी दर महिन्याला किमान किती हफ्ता बसेल</td>
                  <td className="py-4">मला एका वर्षातच कर्ज परतफेड करण्यासाठी दर महिन्याला किमान किती हप्ता बसेल</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Row 8: Qualitative Analysis Component */}
        <div className="mt-12">
          <QualitativeAnalysis />
        </div>

      </div>
    </div>
  );
}
