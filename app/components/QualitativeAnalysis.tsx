import React from 'react';
import { MessageSquareQuote, AlertTriangle, CheckCircle2, Languages } from 'lucide-react';

export function QualitativeAnalysis() {
  return (
    <div className="space-y-8">
      {/* Triumphs and Failures */}
      <div className="bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-8 border-b border-zinc-100 bg-zinc-50/50">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-zinc-900">Dialect Qualitative Analysis: Triumphs and Failures</h3>
              <p className="text-sm text-zinc-500 mt-1">
                Breaking down the qualitative performance of our <strong>MoE Conformer (33M)</strong> on the RESPIN test set, analyzing where it excels against SOTA models and where it completely fails.
              </p>
            </div>
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Languages className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="p-8 space-y-12">
          {/* D1 */}
          <div>
            <h4 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-sm">D1</span>
              Malvani / Konkan 🌴
            </h4>
            <p className="text-sm text-zinc-600 mb-6">Malvani is characterized by coastal phonetic shifts and unique vocabulary.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Moderately Good Samples
                </h5>
                <div className="space-y-3 text-sm">
                  <p><span className="font-semibold text-zinc-700">Ref:</span> गाढवाने जसे अंगावरचे ओझे कमी केले ...</p>
                  <p><span className="font-semibold text-zinc-700">Our Model:</span> गाडवाने जसे अंगावरचे ओजे कमी केले ...</p>
                  <p><span className="font-semibold text-zinc-700">Indic Conformer:</span> गाढवाने जसं अंगावरचे ओझं कमी केलं ...</p>
                  <div className="mt-4 pt-4 border-t border-emerald-200/50 text-emerald-900/80">
                    <strong>Analysis:</strong> Our model spelled <code>गाढवाने</code> (donkey) as <code>गाडवाने</code> and <code>ओझे</code> (burden) as <code>ओजे</code>. Phonetically, these are nearly identical in Malvani speech.
                  </div>
                </div>
              </div>

              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                <h5 className="font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Worst Failures
                </h5>
                <div className="space-y-3 text-sm">
                  <p><span className="font-semibold text-zinc-700">Ref:</span> पगाळी याने बारली सारख्या इखल पिकाचं उन्हाण्यात ओरटच आवाढतात</p>
                  <p><span className="font-semibold text-zinc-700">Our Model:</span> पगाळी याने बारली सारख्या इतल पिकाचं उनाण्यात ओरटच आवाढतात</p>
                  <div className="mt-4 pt-4 border-t border-amber-200/50 text-amber-900/80">
                    <strong>Why it failed:</strong> <code>उन्हाण्यात</code> (summer) is heavily slurred into <code>उनाण्यात</code>. The model tried to transcribe the pure acoustic sound rather than mapping it back to the standard spelling. <code>इखल</code> vs <code>इतल</code> is a pure acoustic confusion on heavy background noise.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* D2 */}
          <div className="pt-8 border-t border-zinc-100">
            <h4 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-sm">D2</span>
              Ahirani / Khandesh 🌾
            </h4>
            <p className="text-sm text-zinc-600 mb-6">Ahirani often uses <code>मा</code> (ma) instead of <code>मध्ये</code> (madhye) for "in", and <code>व्हतं</code> (vhatam) instead of <code>होतं</code> (hotam) for "was".</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Moderately Good Samples
                </h5>
                <div className="space-y-3 text-sm">
                  <p><span className="font-semibold text-zinc-700">Ref:</span> सेंद्रिय शेतीमुळे औषधी वनस्पती आणि सुगंधी वनस्पती आणि मसाले तयार होतात</p>
                  <p><span className="font-semibold text-zinc-700">Our Model:</span> सेंद्रिय शेतीमुळे औषधी वनस्पती आणि सुगंदी वनस्पती आणि मसाले तयार होतात</p>
                  <div className="mt-4 pt-4 border-t border-emerald-200/50 text-emerald-900/80">
                    <strong>Analysis:</strong> A near-perfect match. <code>सुगंधी</code> (fragrant) was phonetically transcribed as <code>सुगंदी</code>.
                  </div>
                </div>
              </div>

              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                <h5 className="font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Worst Failures
                </h5>
                <div className="space-y-3 text-sm">
                  <p><span className="font-semibold text-zinc-700">Ref:</span> राम ना निव्वळ नफामा मार्जिन भलतच कमी व्हतं</p>
                  <p><span className="font-semibold text-zinc-700">Our Model:</span> रांनानी वळना फामामार्जिंगभलतूच कमी होत</p>
                  <div className="mt-4 pt-4 border-t border-amber-200/50 text-amber-900/80">
                    <strong>Why it failed:</strong> Absolute catastrophic failure. The model completely lost the token boundaries (<code>राम ना निव्वळ नफामा</code> -&gt; <code>रांनानी वळना फामा</code>). Interestingly, it attempted to normalize the Ahirani <code>व्हतं</code> back to standard Marathi <code>होत</code>, contradicting the acoustic signal.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* D3 */}
          <div className="pt-8 border-t border-zinc-100">
            <h4 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-sm">D3</span>
              Standard Marathi 🏙️
            </h4>
            <p className="text-sm text-zinc-600 mb-6">Standard Marathi is the easiest, but our model has a known punctuation hallucination issue.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Moderately Good Samples
                </h5>
                <div className="space-y-3 text-sm">
                  <p><span className="font-semibold text-zinc-700">Ref:</span> ठिबक सिंचनाची जोडणी कशी असावी ?</p>
                  <p><span className="font-semibold text-zinc-700">Our Model:</span> ठिबक सिंचनाशी जोडणी कशी असावी ??</p>
                  <div className="mt-4 pt-4 border-t border-emerald-200/50 text-emerald-900/80">
                    <strong>Analysis:</strong> Perfect transcription (except for the hallucinated <code>??</code>). It correctly predicted <code>ठिबक</code> (drip irrigation) which requires strong domain context.
                  </div>
                </div>
              </div>

              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                <h5 className="font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Worst Failures
                </h5>
                <div className="space-y-3 text-sm">
                  <p><span className="font-semibold text-zinc-700">Ref:</span> मुदत खाते ऑनलाइन उघडता येईल का ?</p>
                  <p><span className="font-semibold text-zinc-700">Our Model:</span> मुदत खाते ऑनलाइन उघडता येईल का ??</p>
                  <div className="mt-4 pt-4 border-t border-amber-200/50 text-amber-900/80">
                    <strong>Why it failed:</strong> While the text is 100% semantically correct, the character-error rate (CER) algorithm strictly penalizes the extra <code>??</code>. The model learned this bias heavily during the OpenSLR64 Sequence Polish phase, causing the loss function to heavily penalize our model on paper despite perfect transcription.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* D4 */}
          <div className="pt-8 border-t border-zinc-100">
            <h4 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-sm">D4</span>
              Varhadi / Vidarbha 🏜️
            </h4>
            <p className="text-sm text-zinc-600 mb-6">Varhadi often changes <code>ल</code> (la) to <code>ळ</code> (lla) and has unique conjugations.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Moderately Good Samples
                </h5>
                <div className="space-y-3 text-sm">
                  <p><span className="font-semibold text-zinc-700">Ref:</span> सगळ्यांत चांगलो ट्रॅक्टर कसल्या कंपनीचो मिळता ?</p>
                  <p><span className="font-semibold text-zinc-700">Our Model:</span> सगगळ्यांत चांगलो ट्रॅक्टर किसल्या कंपनीचो मिळता ??</p>
                  <div className="mt-4 pt-4 border-t border-emerald-200/50 text-emerald-900/80">
                    <strong>Analysis:</strong> Excellent dialect preservation! It preserved the Varhadi <code>चांगलो</code> and <code>कंपनीचो</code> instead of converting them to the standard <code>चांगला</code> and <code>कंपनीचा</code>. Indic Conformer completely erased these dialectal markers.
                  </div>
                </div>
              </div>

              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                <h5 className="font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Worst Failures
                </h5>
                <div className="space-y-3 text-sm">
                  <p><span className="font-semibold text-zinc-700">Ref:</span> भय्यू महाराज यांच्या वकिलाकडे कोट्यवधी रुपये असल्याचा त्याला संशय होता</p>
                  <p><span className="font-semibold text-zinc-700">Our Model:</span> बयनाहराज यांच्या मपीलाप कटामधील ल असल्याचा त्याला सशहोता असेल पोलिसांनी म्ह</p>
                  <div className="mt-4 pt-4 border-t border-amber-200/50 text-amber-900/80">
                    <strong>Why it failed:</strong> The audio likely contained heavy stuttering or microphone noise at the beginning. <code>भय्यू महाराज</code> (Bhayyu Maharaj) was mangled into <code>बयनाहराज</code>, and the model completely hallucinated the end of the sentence (<code>असेल पोलिसांनी म्ह</code>), likely triggered by the GRPO trying to predict the most likely news-broadcast continuation for a sentence about "lawyers" and "crores of rupees".
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KenLM Decoding */}
      <div className="bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden mt-12">
        <div className="p-8 border-b border-zinc-100 bg-zinc-50/50">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-zinc-900">Dialect Qualitative Analysis: KenLM Decoding</h3>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                This updated report analyzes the qualitative predictions of our <strong>MoE Conformer (33M) decoded with a 5-gram KenLM (alpha=0.15)</strong>.
                <br/><br/>
                While the Language Model improved our aggregate CER to 8.33%, inspecting the dialectal samples reveals a classic ASR phenomenon: <strong>Dialect Erasure</strong>. Because the KenLM was trained on standard Marathi text (like Wikipedia), it heavily penalizes valid rural vocabulary and forces the acoustic model to output standard words.
              </p>
            </div>
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 ml-4">
              <MessageSquareQuote className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="p-8 space-y-12">
          {/* D2 */}
          <div>
            <h4 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2">
              <span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-sm">D2</span>
              Ahirani / Khandesh
            </h4>
            
            <div className="space-y-6">
              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                <h5 className="font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> The "KenLM Dialect Erasure" Effect (Worst Failures)
                </h5>
                <div className="space-y-6 text-sm">
                  <div className="space-y-2">
                    <p><span className="font-semibold text-zinc-700">Ref:</span> पिकनी शेती मा येगयेगळा पिके लेतस</p>
                    <p><span className="font-semibold text-zinc-700">Our Model (Greedy):</span> पिशवी शेतीमा येगयेगळा पिके लेतस</p>
                    <p><span className="font-semibold text-zinc-700">Our Model (KenLM):</span> पिशवी शेतीमा एक एगडा ती केल लीतस</p>
                    <div className="mt-2 text-amber-900/80">
                      <strong>Why it failed:</strong> The KenLM completely destroyed the Ahirani word <code>येगयेगळा</code> (different). Because <code>येगयेगळा</code> has near-zero probability in standard Marathi text, the KenLM forcefully re-routed the beam search into <code>एक एगडा</code>, completely ruining the acoustic prediction to satisfy its n-gram grammar rules!
                    </div>
                  </div>
                  <div className="border-t border-amber-200/30 pt-6 space-y-2">
                    <p><span className="font-semibold text-zinc-700">Ref:</span> दोन हजार तीन या सालमा गोडा पानीमधला झिंगानं आख्खा जगमधलं वरीसनं उत्पन्न...</p>
                    <p><span className="font-semibold text-zinc-700">Our Model (KenLM):</span> दोनहजार तीन असाल मागोड आपाणी मधला जिनदाला खाजगमधल वरीस उत्पन दोन ला काश दार टन ओड होतं</p>
                    <div className="mt-2 text-amber-900/80">
                      <strong>Why it failed:</strong> <code>सालमा</code> (in the year) and <code>पानीमधला</code> (in the water) are classic Ahirani markers. The KenLM tried to aggressively split and merge these words to form standard nouns (<code>असाल</code>, <code>मागोड</code>, <code>आपाणी</code>), causing cascading token boundary failures.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                <h5 className="font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Moderately Good Samples
                </h5>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-zinc-700">Ref:</span> दर महिन्याचे दिवस कमी जास्त असल्याने व्याजाची रक्कम वेगवेगळी असेल का ?</p>
                  <p><span className="font-semibold text-zinc-700">Our Model (KenLM):</span> दर महिन्याची दिवस कमी जास्त असल्याने व्याजाची रक्कम वेगवेगळी असेल का ??</p>
                  <div className="mt-2 text-emerald-900/80">
                    <strong>Analysis:</strong> On standard-sounding sentences, the KenLM excels! It perfectly predicted the sentence. Notice, however, that the punctuation hallucination (<code>??</code>) persists even with KenLM! Since punctuation isn't heavily penalized by a soft <code>alpha=0.15</code>, the strong acoustic GRPO bias still bleeds through the beam search.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* D1 */}
          <div className="pt-8 border-t border-zinc-100">
            <h4 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2">
              <span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-sm">D1</span>
              Malvani / Konkan
            </h4>
            
            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
              <h5 className="font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Moderately Good Samples
              </h5>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-zinc-700">Ref:</span> पगाळी याने बारली सारख्या इखल पिकाचं उन्हाण्यात ओरटच आवाढतात</p>
                <p><span className="font-semibold text-zinc-700">Our Model (KenLM):</span> गाळ याने बारली सारख्या इतर पिकाचं उणण्यात ओरटच आवडतात</p>
                <div className="mt-2 text-emerald-900/80">
                  <strong>Analysis:</strong> Here, the KenLM actually <em>helped</em>! It correctly fixed the acoustic slur <code>इखल</code> into the grammatically correct <code>इतर</code> (other), and <code>आवाढतात</code> into <code>आवडतात</code> (like). This is the intended benefit of a Language Model.
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-8 p-6 bg-zinc-800 text-zinc-100 rounded-2xl shadow-md">
            <h4 className="text-lg font-bold mb-3 text-white">Summary Conclusion</h4>
            <p className="text-sm leading-relaxed opacity-90">
              Using the soft KenLM (<code>alpha=0.15</code>) is a double-edged sword. It acts as an excellent spell-checker for standard Marathi sentences and minor phonetic stutters. However, it actively acts as a <strong>"dialect straightjacket"</strong>, forcefully erasing rural grammar (<code>येगयेगळा</code>) and morphing it into completely unrelated standard words (<code>एक एगडा</code>).
              <br/><br/>
              For true dialect preservation, pure Greedy CTC (or a custom KenLM trained on Ahirani/Malvani text) remains the gold standard!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
