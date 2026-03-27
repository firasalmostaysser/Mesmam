"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
} from "lucide-react";
import { PageNav, PageHero, PageFooter, SectionTitle, fadeUp, stagger } from "@/components/shared";

function StudySection({
  id,
  tag,
  title,
  highlight,
  subtitle,
  children,
}: {
  id: string;
  tag: string;
  title: string;
  highlight: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-20">
      <SectionTitle tag={tag} title={title} highlight={highlight} subtitle={subtitle} />
      {children}
    </section>
  );
}

export default function StudiesPage() {
  return (
    <main>
      <PageNav current="/studies" />

      <PageHero
        badge="In-Depth Research & Analysis"
        title="Research"
        titleHighlight="Studies & Data"
        subtitle="Deep-dive research into scorpion biology, venom science, UV fluorescence technology, extraction methods, market economics, and regulatory frameworks. Everything you need to understand the industry."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* TOC */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-gold rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-gold mb-6">Research Areas</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { num: "1", title: "Scorpion Biology & Species", href: "#biology" },
              { num: "2", title: "UV Fluorescence Science", href: "#uv" },
              { num: "3", title: "Venom Composition & Medical Value", href: "#venom" },
              { num: "4", title: "Extraction Methods Comparison", href: "#extraction" },
              { num: "5", title: "Processing & Quality Standards", href: "#processing" },
              { num: "6", title: "Market Economics Deep Dive", href: "#economics" },
              { num: "7", title: "Regulatory Framework Analysis", href: "#regulatory" },
              { num: "8", title: "Technology Landscape", href: "#techscape" },
            ].map((item) => (
              <a key={item.num} href={item.href} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gold/5 transition-colors group">
                <span className="w-7 h-7 rounded-md bg-gold/10 flex items-center justify-center text-gold text-sm font-bold shrink-0">{item.num}</span>
                <span className="text-gray-300 group-hover:text-gold transition-colors text-sm">{item.title}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* 1. BIOLOGY */}
        <StudySection id="biology" tag="Study 1" title="Scorpion Biology &" highlight="Species Guide" subtitle="Understanding the biology of scorpions is foundational to every aspect of the business.">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Key Biology Facts</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { fact: "2,500+ species worldwide", detail: "Distributed across all continents except Antarctica. 13 families, 200+ genera." },
                  { fact: "400+ million years old", detail: "Among the oldest terrestrial arthropods. Highly adapted to arid environments." },
                  { fact: "Nocturnal predators", detail: "Active at night, hide under rocks/burrows during day. Peak activity: 2-4 hours after sunset." },
                  { fact: "Venom gland (telson)", detail: "Located at the tail tip. Two symmetrical glands produce complex peptide cocktails." },
                  { fact: "2-3 week venom regeneration", detail: "After milking, scorpions need 14-21 days to fully replenish venom supply." },
                  { fact: "Lifespan: 3-8 years", detail: "Varies by species. Can survive months without food. Extremely resilient animals." },
                ].map((f) => (
                  <div key={f.fact} className="glass rounded-xl p-4">
                    <h5 className="font-bold text-sm text-gold">{f.fact}</h5>
                    <p className="text-xs text-gray-400 mt-1">{f.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Medically Important Species in North Africa</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-2 text-gray-400">Species</th>
                      <th className="text-left py-3 px-2 text-gray-400">Common Name</th>
                      <th className="text-left py-3 px-2 text-gray-400">Range</th>
                      <th className="text-left py-3 px-2 text-gray-400">Danger</th>
                      <th className="text-left py-3 px-2 text-gray-400">Venom Value</th>
                      <th className="text-left py-3 px-2 text-gray-400">Yield</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { species: "Androctonus australis", common: "Fat-tailed scorpion", range: "Tunisia, Algeria, Morocco, Libya", danger: "Extremely dangerous", value: "$5K-$8K/g", yield: "1-3mg" },
                      { species: "Androctonus amoreuxi", common: "Yellow fat-tail", range: "North Africa, Middle East", danger: "Very dangerous", value: "$4K-$7K/g", yield: "1-2.5mg" },
                      { species: "Buthus occitanus", common: "Common yellow scorpion", range: "Mediterranean, N. Africa", danger: "Dangerous", value: "$3K-$6K/g", yield: "1-2mg" },
                      { species: "Leiurus quinquestriatus", common: "Deathstalker", range: "N. Africa, Middle East", danger: "Most dangerous", value: "$8K-$12K/g", yield: "0.5-2mg" },
                      { species: "Scorpio maurus", common: "Large-clawed scorpion", range: "N. Africa, Middle East", danger: "Moderate", value: "$2K-$4K/g", yield: "2-5mg" },
                      { species: "Hottentotta gentili", common: "—", range: "Tunisia, Algeria", danger: "Dangerous", value: "$3K-$5K/g", yield: "1-2mg" },
                    ].map((s) => (
                      <tr key={s.species} className="border-b border-white/5">
                        <td className="py-2 px-2 italic">{s.species}</td>
                        <td className="py-2 px-2 text-gray-400">{s.common}</td>
                        <td className="py-2 px-2 text-gray-400">{s.range}</td>
                        <td className="py-2 px-2">
                          <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                            s.danger.includes("Extremely") || s.danger.includes("Most") ? "bg-red-500/10 text-red-400" :
                            s.danger.includes("Very") ? "bg-orange-500/10 text-orange-400" :
                            s.danger.includes("Dangerous") ? "bg-yellow-500/10 text-yellow-400" :
                            "bg-green-500/10 text-green-400"
                          }`}>{s.danger}</span>
                        </td>
                        <td className="py-2 px-2 text-gold font-bold">{s.value}</td>
                        <td className="py-2 px-2 text-gray-400">{s.yield}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">How to Find Scorpions — Field Guide</h4>
              <p className="text-sm text-gray-400 mb-4">Traditional hunting knowledge that our robots will automate:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { tip: "Under rocks and debris", detail: "Scorpions shelter under flat rocks, wood, and debris during the day. Lift carefully from the uphill side." },
                  { tip: "In burrows and crevices", detail: "Many species dig burrows up to 1 meter deep. Look for small entry holes in sandy soil." },
                  { tip: "Near walls and foundations", detail: "Scorpions often rest against vertical surfaces like stone walls, house foundations, and cliff faces." },
                  { tip: "UV light at night (the key trick)", detail: "All scorpions fluoresce under UV light (395nm). A UV flashlight makes them glow bright cyan-green in the dark." },
                  { tip: "After rain or irrigation", detail: "Scorpions often surface after rain to avoid flooding. Prime collection time." },
                  { tip: "Warm season peak activity", detail: "Most active in summer (May-September in Tunisia). Activity drops significantly in winter." },
                  { tip: "2-4 hours after sunset", detail: "Peak hunting time. Scorpions emerge to hunt insects. Activity decreases toward dawn." },
                  { tip: "Sandy soil and desert edges", detail: "Highest densities at desert margins, oases, and rocky desert with scattered vegetation." },
                ].map((t) => (
                  <div key={t.tip} className="glass rounded-xl p-4">
                    <h5 className="font-bold text-sm mb-1">{t.tip}</h5>
                    <p className="text-xs text-gray-400">{t.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </StudySection>

        {/* 2. UV FLUORESCENCE */}
        <StudySection id="uv" tag="Study 2" title="UV Fluorescence" highlight="Science" subtitle="The scientific basis for Mesmam's core detection technology.">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">How Scorpion Fluorescence Works</h4>
              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>
                  All scorpions possess <strong className="text-white">fluorescent molecules</strong> in their exoskeleton (cuticle) that glow bright blue-green when exposed to ultraviolet light. This phenomenon has been known since 1954 and is universal across all 2,500+ scorpion species.
                </p>
                <p>
                  The fluorescence is caused by two main compounds:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 my-4">
                  <div className="glass rounded-xl p-4">
                    <h5 className="font-bold text-uv-glow text-sm">β-Carboline</h5>
                    <p className="text-xs text-gray-400 mt-1">A heterocyclic amine found in the hyaline layer of the cuticle. Absorbs UV-A light (around 395nm) and emits visible blue-green light (440-500nm).</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h5 className="font-bold text-uv-glow text-sm">7-Hydroxy-4-methylcoumarin</h5>
                    <p className="text-xs text-gray-400 mt-1">A coumarin derivative also embedded in the cuticle. Works synergistically with β-carboline for bright fluorescence under UV illumination.</p>
                  </div>
                </div>
                <p>
                  The biological purpose of fluorescence is still debated. Theories include: detection of UV light to find shelter (avoiding moonlit areas), prey detection, mate signaling, or simply a metabolic byproduct with no adaptive function.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Engineering Implications for MesBot</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { spec: "Optimal UV Wavelength", value: "365-395nm (UV-A)", detail: "Peak fluorescence excitation. Standard UV-A LEDs are safe, inexpensive, and durable." },
                  { spec: "Detection Range", value: "3-10 meters", detail: "Depends on LED power, camera sensitivity, and ambient light. 5m typical for field use." },
                  { spec: "Camera Requirement", value: "High-sensitivity CMOS", detail: "Must capture faint fluorescence against dark background. Low-light cameras or filtered sensors." },
                  { spec: "Filter Needed", value: "UV-blocking visible-pass", detail: "Block reflected UV light, pass only fluorescent emission (440-500nm). Reduces false positives." },
                  { spec: "Interference", value: "Minimal in desert", detail: "Few other desert organisms fluoresce. Some minerals may fluoresce — AI can distinguish." },
                  { spec: "Power Consumption", value: "10-30W for UV array", detail: "High-power UV LEDs for sufficient range. Battery management critical for 8+ hr operation." },
                ].map((s) => (
                  <div key={s.spec} className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-bold text-sm">{s.spec}</h5>
                      <span className="text-xs text-uv-glow bg-uv-blue/10 px-2 py-0.5 rounded-full">{s.value}</span>
                    </div>
                    <p className="text-xs text-gray-400">{s.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </StudySection>

        {/* 3. VENOM */}
        <StudySection id="venom" tag="Study 3" title="Venom Composition &" highlight="Medical Value" subtitle="Why scorpion venom commands $39 million per gallon.">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Venom Composition</h4>
              <p className="text-sm text-gray-400 mb-4">Scorpion venom is a complex cocktail of bioactive compounds:</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { component: "Neurotoxins", pct: "~40%", desc: "Ion channel blockers (Na+, K+, Ca2+, Cl-). Target nervous system. Basis for pain and neurological drug research." },
                  { component: "Enzymes", pct: "~25%", desc: "Phospholipases, hyaluronidases, proteases. Aid venom spread in prey tissue. Studied for anti-inflammatory properties." },
                  { component: "Antimicrobial Peptides", pct: "~15%", desc: "Natural antibiotics active against bacteria, fungi, and parasites. Potential new antibiotic drug candidates." },
                  { component: "Cytotoxins", pct: "~10%", desc: "Cell-killing compounds. Chlorotoxin (from Deathstalker) binds specifically to brain tumor cells. Cancer drug candidate." },
                  { component: "Other Peptides", pct: "~5%", desc: "Bradykinin-potentiating peptides, immunosuppressants, and novel compounds still being characterized." },
                  { component: "Salts & Water", pct: "~5%", desc: "Ionic buffer maintaining peptide stability. Important for processing and storage protocols." },
                ].map((c) => (
                  <div key={c.component} className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-bold text-sm">{c.component}</h5>
                      <span className="text-xs text-gold">{c.pct}</span>
                    </div>
                    <p className="text-xs text-gray-400">{c.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Pharmaceutical Applications in Development</h4>
              <div className="space-y-3">
                {[
                  { drug: "Chlorotoxin (TM-601)", source: "Leiurus quinquestriatus", application: "Brain cancer (glioma) imaging and treatment", stage: "Phase II Clinical Trials", detail: "Binds selectively to glioma cells. Used as a 'tumor paint' for surgical guidance. Licensed by Blaze Bioscience." },
                  { drug: "Iberiotoxin analogs", source: "Buthus tamulus", application: "Cardiovascular disease", stage: "Preclinical", detail: "Potassium channel blockers with potential for treating arrhythmias and hypertension." },
                  { drug: "Scorpine antimicrobials", source: "Pandinus imperator", application: "Antibiotic-resistant infections", stage: "Preclinical", detail: "Active against malaria parasites and drug-resistant bacteria. Novel antibiotic pathway." },
                  { drug: "Margatoxin analogs", source: "Centruroides margaritatus", application: "Autoimmune diseases", stage: "Preclinical", detail: "Selective Kv1.3 channel blockers. Potential treatment for MS, rheumatoid arthritis, type 1 diabetes." },
                  { drug: "BmKAGAP", source: "Buthus martensii", application: "Pain management", stage: "Preclinical", detail: "Non-opioid analgesic peptide. Could address opioid crisis by providing alternative pain relief." },
                  { drug: "Anti-venom immunoglobulins", source: "Multiple species", application: "Scorpion sting treatment", stage: "Approved & marketed", detail: "Life-saving treatment for 1.5M+ annual scorpion envenomations. Growing demand in developing nations." },
                ].map((d) => (
                  <div key={d.drug} className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-sm">{d.drug}</h5>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        d.stage.includes("Approved") ? "bg-green-500/10 text-green-400" :
                        d.stage.includes("Phase") ? "bg-blue-500/10 text-blue-400" :
                        "bg-yellow-500/10 text-yellow-400"
                      }`}>{d.stage}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">Source: <span className="italic">{d.source}</span> | Application: {d.application}</p>
                    <p className="text-xs text-gray-400">{d.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </StudySection>

        {/* 4. EXTRACTION */}
        <StudySection id="extraction" tag="Study 4" title="Extraction Methods" highlight="Comparison" subtitle="Comparing traditional and modern venom extraction techniques.">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-2xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-2 text-gray-400">Method</th>
                    <th className="text-left py-3 px-2 text-gray-400">Speed</th>
                    <th className="text-left py-3 px-2 text-gray-400">Yield</th>
                    <th className="text-left py-3 px-2 text-gray-400">Quality</th>
                    <th className="text-left py-3 px-2 text-gray-400">Safety</th>
                    <th className="text-left py-3 px-2 text-gray-400">Animal Impact</th>
                    <th className="text-left py-3 px-2 text-gray-400">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { method: "Manual (hand squeeze)", speed: "~10/day", yield: "Low", quality: "Variable", safety: "Very dangerous", animal: "Stress", cost: "Low" },
                    { method: "Mechanical stimulation", speed: "~20/day", yield: "Medium", quality: "Good", safety: "Moderate risk", animal: "Low stress", cost: "Low" },
                    { method: "Electrical stimulation (manual)", speed: "~30/day", yield: "High", quality: "Excellent", safety: "Moderate risk", animal: "Brief stress", cost: "Medium" },
                    { method: "VES-4® robot (semi-auto)", speed: "~150/day", yield: "High", quality: "Excellent", safety: "Very safe", animal: "Minimal", cost: "High initial" },
                    { method: "Mesmam MesMilk (target)", speed: "~150+/day", yield: "High", quality: "Pharma-grade", safety: "Fully safe", animal: "Minimal", cost: "Medium (at scale)" },
                    { method: "Gland dissection", speed: "~20/day", yield: "Maximum", quality: "Contaminated", safety: "Safe", animal: "Lethal", cost: "Low" },
                  ].map((m) => (
                    <tr key={m.method} className={`border-b border-white/5 ${m.method.includes("Mesmam") ? "bg-gold/5" : ""}`}>
                      <td className="py-2 px-2 font-medium">{m.method}</td>
                      <td className="py-2 px-2 text-gray-400">{m.speed}</td>
                      <td className="py-2 px-2 text-gray-400">{m.yield}</td>
                      <td className="py-2 px-2 text-gray-400">{m.quality}</td>
                      <td className="py-2 px-2">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                          m.safety.includes("Fully") || m.safety === "Very safe" || m.safety === "Safe" ? "bg-green-500/10 text-green-400" :
                          m.safety.includes("Moderate") ? "bg-yellow-500/10 text-yellow-400" :
                          "bg-red-500/10 text-red-400"
                        }`}>{m.safety}</span>
                      </td>
                      <td className="py-2 px-2">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                          m.animal === "Lethal" ? "bg-red-500/10 text-red-400" :
                          m.animal.includes("Minimal") ? "bg-green-500/10 text-green-400" :
                          "bg-yellow-500/10 text-yellow-400"
                        }`}>{m.animal}</span>
                      </td>
                      <td className="py-2 px-2 text-gray-400">{m.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 glass-gold rounded-xl p-4">
              <h5 className="font-bold text-sm text-gold mb-2">VES-4® Reference: Key Learnings from Morocco</h5>
              <p className="text-xs text-gray-400 leading-relaxed">
                Developed at Ben M&apos;sik Hassan II University in Casablanca. The robot clamps the scorpion&apos;s tail with pneumatic grips, delivers species-calibrated electrical stimulation (voltage, pulse duration, frequency), and collects venom droplets via a vibratory system into sterile microtubes. A single operator controls the device remotely. Patented in Morocco. This technology proves automated extraction is viable — Mesmam&apos;s MesMilk builds on this with AI-driven species recognition and integrated quality analysis.
              </p>
            </div>
          </motion.div>
        </StudySection>

        {/* 5. PROCESSING */}
        <StudySection id="processing" tag="Study 5" title="Processing &" highlight="Quality Standards" subtitle="How raw venom becomes pharmaceutical-grade product.">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Lyophilization Process (Freeze-Drying)</h4>
              <div className="space-y-3">
                {[
                  { step: "1. Freezing", temp: "-38 to -40°C", time: "2-5 hours", detail: "Raw venom frozen rapidly to preserve peptide structures. Uniform crystal formation critical." },
                  { step: "2. Primary Drying", temp: "-60 to -55°C", time: "8-12 hours", detail: "Pressure reduced to 1.25-1.33 Pa. Sublimation removes ice. Shelf temperature slowly raised to -40°C." },
                  { step: "3. Secondary Drying", temp: "-40°C → 28-30°C", time: "14-20 hours", detail: "Gradual temperature ramp removes bound moisture. Final moisture content <3% for stability." },
                  { step: "4. Sealing & Storage", temp: "2-8°C", time: "Shelf life: 5 years", detail: "Nitrogen-sealed pharmaceutical vials. Each vial labeled with batch ID, species, weight, purity grade." },
                ].map((s) => (
                  <div key={s.step} className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-sm">{s.step}</h5>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-uv-glow bg-uv-blue/10 px-2 py-0.5 rounded-full">{s.temp}</span>
                        <span className="text-xs text-gray-500">{s.time}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">{s.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Quality Grading System (Proposed)</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { grade: "Grade A — Pharmaceutical", purity: ">95% protein", desc: "Suitable for drug development and clinical research. Full peptide profile characterization. ISO 17025 certified analysis.", price: "Premium ($10K-$12K/g)" },
                  { grade: "Grade B — Research", purity: ">85% protein", desc: "Suitable for academic research and pre-clinical studies. Standard quality analysis. Certificate of analysis included.", price: "Standard ($6K-$8K/g)" },
                  { grade: "Grade C — Industrial", purity: ">70% protein", desc: "Suitable for anti-venom production and bulk applications. Basic quality testing. Higher volume, lower price.", price: "Bulk ($3K-$5K/g)" },
                ].map((g) => (
                  <div key={g.grade} className="glass-gold rounded-xl p-5">
                    <h5 className="font-bold text-sm text-gold mb-1">{g.grade}</h5>
                    <div className="text-xs text-uv-glow mb-2">{g.purity}</div>
                    <p className="text-xs text-gray-400 mb-2">{g.desc}</p>
                    <div className="text-xs text-gold font-bold">{g.price}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </StudySection>

        {/* 6. ECONOMICS */}
        <StudySection id="economics" tag="Study 6" title="Market Economics" highlight="Deep Dive" subtitle="Unit economics, pricing dynamics, and revenue modeling.">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Why Scorpion Venom Is So Expensive</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { factor: "Extreme Scarcity", detail: "Each scorpion produces only 0.5-2mg per milking. Need 500 milkings for 1 gram. Nature rate-limits production." },
                  { factor: "Complex Bioactivity", detail: "Contains 100+ unique peptides per species. Many with no synthetic equivalent. Irreplaceable for research." },
                  { factor: "Dangerous Collection", detail: "Manual harvesting risks human lives. Few people willing to do the work. Labor supply is constrained." },
                  { factor: "No Synthetic Alternative", detail: "Most venom peptides cannot be economically synthesized. Recombinant production is species-specific and expensive." },
                  { factor: "Growing Medical Demand", detail: "Cancer, pain, autoimmune research accelerating. More labs competing for limited supply." },
                  { factor: "Zero Industrialization", detail: "No company has applied serious technology to increase supply. The industry has never been modernized." },
                ].map((f) => (
                  <div key={f.factor} className="glass rounded-xl p-4">
                    <h5 className="font-bold text-sm mb-1">{f.factor}</h5>
                    <p className="text-xs text-gray-400">{f.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Break-Even Analysis</h4>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { scenario: "Conservative", price: "$5K/gram", robots: "5", breakEven: "Month 8", note: "Low-value species, cautious estimates" },
                  { scenario: "Base Case", price: "$8K/gram", robots: "5", breakEven: "Month 5", note: "Mixed species portfolio" },
                  { scenario: "Optimistic", price: "$12K/gram", robots: "5", breakEven: "Month 3", note: "High-value species focus" },
                ].map((s) => (
                  <div key={s.scenario} className={`glass rounded-xl p-4 text-center ${s.scenario === "Base Case" ? "border border-gold/20" : ""}`}>
                    <h5 className="font-bold text-sm text-gold">{s.scenario}</h5>
                    <div className="text-2xl font-black mt-2">{s.breakEven}</div>
                    <div className="text-xs text-gray-500">to break-even</div>
                    <div className="text-xs text-gray-400 mt-2">{s.price} avg | {s.robots} robots</div>
                    <div className="text-[10px] text-gray-600 mt-1">{s.note}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 text-center">
                Assumes monthly operating cost of $15K (5 robots + 3 staff + facility). Break-even = cumulative revenue exceeds cumulative costs.
              </p>
            </motion.div>
          </motion.div>
        </StudySection>

        {/* 7. REGULATORY */}
        <StudySection id="regulatory" tag="Study 7" title="Regulatory Framework" highlight="Analysis" subtitle="Navigating international regulations for scorpion venom trade.">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">CITES Framework for Scorpions</h4>
              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>
                  <strong className="text-white">Good news:</strong> Most scorpion species are <strong className="text-green-400">NOT listed on CITES</strong>. Only a few species require CITES permits for international trade:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 my-4">
                  <div className="glass rounded-xl p-4">
                    <h5 className="font-bold text-sm text-gold">CITES Appendix II (Regulated)</h5>
                    <p className="text-xs text-gray-400 mt-1">Pandinus dictator, Pandinus gambiensis, Pandinus imperator (Emperor Scorpion). Trade permitted with proper export/import permits.</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h5 className="font-bold text-sm text-green-400">NOT Listed (Most Species)</h5>
                    <p className="text-xs text-gray-400 mt-1">Androctonus, Leiurus, Buthus, Hottentotta, Scorpio — the most medically valuable genera in North Africa are NOT CITES-listed.</p>
                  </div>
                </div>
                <p>
                  This means Mesmam can trade venom from the most commercially important North African species <strong className="text-white">without CITES permits</strong>, though standard export documentation and health certificates are still required.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Country-by-Country Import Requirements</h4>
              <div className="space-y-3">
                {[
                  { country: "European Union", reqs: "REACH registration for chemical substances. Phytosanitary certificate. Import notification for biological materials. EU Annex B check for CITES-equivalent species." },
                  { country: "United States", reqs: "USDA/APHIS import permit for biological materials. FDA notification for pharmaceutical-grade substances. CBP customs declaration. Lacey Act compliance (wildlife products)." },
                  { country: "United Arab Emirates", reqs: "Ministry of Climate Change import permit. CITES permit if applicable. Health certificate from origin country. Customs pre-clearance for biological materials." },
                  { country: "Japan", reqs: "Ministry of Health approval for pharmaceutical materials. CITES import permit if applicable. Quarantine inspection. Japanese Pharmacopoeia compliance for pharma-grade." },
                  { country: "India", reqs: "DGFT import license for biological materials. Wildlife Protection Act clearance. Drug Controller General approval for pharmaceutical use. Phytosanitary certificate." },
                ].map((c) => (
                  <div key={c.country} className="glass rounded-xl p-4">
                    <h5 className="font-bold text-sm mb-1">{c.country}</h5>
                    <p className="text-xs text-gray-400">{c.reqs}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </StudySection>

        {/* 8. TECHNOLOGY LANDSCAPE */}
        <StudySection id="techscape" tag="Study 8" title="Technology" highlight="Landscape" subtitle="Existing technologies and innovation opportunities.">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Existing Technologies We Can Build On</h4>
              <div className="space-y-4">
                {[
                  {
                    tech: "VES-4® Automated Extraction Robot (Morocco)",
                    status: "Patented",
                    detail: "Developed by Mouad Mkamel at Ben M'sik Hassan II University. Pneumatic tail clamping, programmable electrical stimulation, vibratory venom collection. 150 scorpions/day. Single-operator remote control. Published in Journal of Venomous Animals and Toxins.",
                    opportunity: "License or improve upon this design. Add AI species recognition, integrated quality analysis, and autonomous operation.",
                  },
                  {
                    tech: "UV Detection for Entomological Survey",
                    status: "Widely used",
                    detail: "UV flashlights (395nm) are standard tools for scorpion researchers worldwide. Consumer-grade UV torches ($20-$50) work for manual surveys. Industrial UV-A LED arrays are available for robotics integration.",
                    opportunity: "Combine with AI camera, GPS mapping, and autonomous mobility for fully automated detection at scale.",
                  },
                  {
                    tech: "Computer Vision for Species Classification",
                    status: "Emerging",
                    detail: "Deep learning models (CNN, Vision Transformers) achieve >95% accuracy for insect/arthropod classification with sufficient training data. Edge deployment on Jetson Nano, Coral TPU, or RPi possible.",
                    opportunity: "Build the world's first scorpion-specific classification model. Create a proprietary training dataset as a data moat.",
                  },
                  {
                    tech: "Portable Spectrometry",
                    status: "Available",
                    detail: "Miniaturized spectrometers (NIR, Raman) are available for $5K-$15K. Used in food quality testing, pharmaceutical analysis, and field science. Can measure protein concentrations and chemical composition.",
                    opportunity: "Calibrate for scorpion venom analysis. Create standardized quality grading protocol.",
                  },
                ].map((t) => (
                  <div key={t.tech} className="glass rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-sm">{t.tech}</h5>
                      <span className="text-xs text-gold bg-gold/10 px-2 py-0.5 rounded-full">{t.status}</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{t.detail}</p>
                    <div className="text-xs text-gold bg-gold/5 rounded-lg px-3 py-2">
                      <strong>Mesmam Opportunity:</strong> {t.opportunity}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-gold rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Innovation Gaps — Where Mesmam Leads</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { gap: "Nobody has combined UV detection + AI + autonomous mobility", detail: "Each technology exists separately. Integrating them into a single field robot is Mesmam's core innovation." },
                  { gap: "No B2B venom marketplace exists", detail: "Buyers and sellers find each other through conferences and word-of-mouth. A digital platform would transform trade." },
                  { gap: "No portable field quality analyzer for venom", detail: "Quality testing requires sending samples to distant labs. Takes days. A field device would be game-changing." },
                  { gap: "No species-aware extraction system", detail: "Current systems use generic settings. AI-driven species recognition feeding into extraction calibration is novel." },
                ].map((g) => (
                  <div key={g.gap} className="glass rounded-xl p-4">
                    <h5 className="font-bold text-sm mb-1">{g.gap}</h5>
                    <p className="text-xs text-gray-400">{g.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </StudySection>

        {/* CTA */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-gold rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-black text-gold mb-4">Knowledge Is Power — Now Execute</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            This research gives you the foundation. The next step is action: build prototypes, validate with customers, and raise capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/action-plan" className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold hover:shadow-xl hover:shadow-gold/30 transition-all hover:scale-105 flex items-center gap-2 justify-center">
              Action Plan <ArrowRight size={18} />
            </a>
            <a href="/pitch-deck" className="px-6 py-3 rounded-xl glass-gold text-gold font-bold hover:bg-gold/10 transition-all flex items-center gap-2 justify-center">
              Pitch Deck <ArrowRight size={18} />
            </a>
            <a href="/business-plan" className="px-6 py-3 rounded-xl glass text-gray-300 font-bold hover:bg-white/5 transition-all flex items-center gap-2 justify-center">
              Business Plan <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <PageFooter />
    </main>
  );
}
