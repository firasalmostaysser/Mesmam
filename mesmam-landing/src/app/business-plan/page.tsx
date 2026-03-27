"use client";

import { motion } from "framer-motion";
import {
  Bot,
  FlaskConical,
  Shield,
  Globe2,
  Eye,
  Building2,
  Scale,
  Microscope,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Zap,
  FileText,
} from "lucide-react";
import { PageNav, PageHero, PageFooter, SectionTitle, fadeUp, stagger } from "@/components/shared";

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mb-20">
      {children}
    </section>
  );
}

export default function BusinessPlanPage() {
  return (
    <main>
      <PageNav current="/business-plan" />

      <PageHero
        badge="Full Business Plan & Feasibility Study"
        title="Mesmam"
        titleHighlight="Business Plan"
        subtitle="Comprehensive business plan covering executive summary, market analysis, financial projections, operations, legal framework, risk assessment, and implementation strategy."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* TABLE OF CONTENTS */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-gold rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-gold mb-6">Table of Contents</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { num: "1", title: "Executive Summary", href: "#exec" },
              { num: "2", title: "Company Overview", href: "#company" },
              { num: "3", title: "Market Analysis", href: "#market" },
              { num: "4", title: "Products & Services", href: "#products" },
              { num: "5", title: "Operations Plan", href: "#operations" },
              { num: "6", title: "Financial Projections", href: "#financials" },
              { num: "7", title: "Legal & Regulatory Framework", href: "#legal" },
              { num: "8", title: "Risk Analysis & Mitigation", href: "#risks" },
              { num: "9", title: "Social Impact Assessment", href: "#impact" },
              { num: "10", title: "Funding Requirements", href: "#funding" },
            ].map((item) => (
              <a key={item.num} href={item.href} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gold/5 transition-colors group">
                <span className="w-7 h-7 rounded-md bg-gold/10 flex items-center justify-center text-gold text-sm font-bold shrink-0">{item.num}</span>
                <span className="text-gray-300 group-hover:text-gold transition-colors text-sm">{item.title}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* 1. EXECUTIVE SUMMARY */}
        <Section id="exec">
          <SectionTitle tag="Section 1" title="Executive" highlight="Summary" />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4">Mission Statement</h4>
              <p className="text-gray-400 leading-relaxed text-lg border-l-4 border-gold/30 pl-6 italic">
                Mesmam builds AI-powered robotics and digital infrastructure to transform the scorpion venom industry from a dangerous, fragmented craft into a safe, ethical, and globally scalable supply chain — empowering rural communities while delivering pharmaceutical-grade venom to the world&apos;s most important biomedical research.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "The Opportunity", desc: "Scorpion venom is the world's most expensive liquid at $39M/gallon, driven by cancer, pain, and autoimmune drug R&D. The anti-venom market alone reaches $2.45B by 2033. Yet zero technology companies serve the supply chain." },
                { title: "Our Solution", desc: "Full-stack technology platform: autonomous UV hunting robots, AI species classification, robotic venom extraction, portable quality analysis, and a global B2B marketplace connecting suppliers to pharma labs." },
                { title: "The Ask", desc: "Pre-seed round of $300K-$500K to build robot prototypes, establish extraction facilities in Southern Tunisia, secure first lab customers, and apply for Tunisian Startup Act label with full CITES compliance." },
              ].map((item) => (
                <div key={item.title} className="glass rounded-xl p-5">
                  <h4 className="font-bold text-gold text-sm mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* 2. COMPANY OVERVIEW */}
        <Section id="company">
          <SectionTitle tag="Section 2" title="Company" highlight="Overview" />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-4 text-gold">Company Details</h4>
                <div className="space-y-3">
                  {[
                    { label: "Legal Name", value: "Mesmam SARL (to be registered)" },
                    { label: "Arabic Name", value: "مسمام" },
                    { label: "Headquarters", value: "Tunis, Tunisia" },
                    { label: "Operations Base", value: "Southern Tunisia (Tozeur, Gafsa, Tataouine)" },
                    { label: "Legal Structure", value: "SARL under Tunisian Startup Act" },
                    { label: "Industry", value: "Biotech / Deep Tech / AgriTech" },
                    { label: "Stage", value: "Pre-Seed / Ideation" },
                    { label: "Founded", value: "2026" },
                  ].map((d) => (
                    <div key={d.label} className="flex items-center justify-between py-1 text-sm border-b border-white/5">
                      <span className="text-gray-500">{d.label}</span>
                      <span className="font-medium">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-4 text-gold">Tunisian Startup Act Benefits</h4>
                <p className="text-sm text-gray-400 mb-4">Law No. 2018-20 provides significant advantages for qualifying technology startups:</p>
                <div className="space-y-2">
                  {[
                    "Full corporate income tax exemption",
                    "Technology Card raised to 100,000 TND/year",
                    "Special foreign currency account with free investment rights",
                    "Authorized Economic Operator customs status",
                    "Exemption from CERT approval and import technical controls",
                    "Investor tax deduction (100% of investment deductible)",
                    "Capital gains exemption on startup participation sales",
                    "Startup Guarantee Fund for investor protection",
                  ].map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-4">Registration via portail.startup.gov.tn</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-4 text-gold">Vision & Values</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: <Lightbulb size={20} />, title: "Innovation First", desc: "Apply cutting-edge AI, robotics, and data science to an ancient industry that has never seen technology." },
                  { icon: <Shield size={20} />, title: "Safety & Ethics", desc: "Zero human risk in collection. Non-lethal extraction for animals. Full traceability. Fair compensation for communities." },
                  { icon: <Globe2 size={20} />, title: "Global Scale", desc: "Build from Tunisia for the world. Technology that scales across continents, species, and regulatory environments." },
                ].map((v) => (
                  <div key={v.title} className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-3">{v.icon}</div>
                    <h5 className="font-bold text-sm mb-1">{v.title}</h5>
                    <p className="text-xs text-gray-400">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Section>

        {/* 3. MARKET ANALYSIS */}
        <Section id="market">
          <SectionTitle tag="Section 3" title="Market" highlight="Analysis" subtitle="Comprehensive analysis of the global scorpion venom market, demand drivers, and competitive landscape." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-6 text-gold">Market Size & Growth</h4>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-gold">$39M</div>
                  <div className="text-sm text-gray-400">per gallon (Deathstalker)</div>
                  <div className="text-xs text-gray-600 mt-1">Most expensive liquid on Earth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gold">$2.45B</div>
                  <div className="text-sm text-gray-400">Anti-venom market by 2033</div>
                  <div className="text-xs text-gray-600 mt-1">5.6-8.1% CAGR</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gold">$4.58B</div>
                  <div className="text-sm text-gray-400">Venom-derived drugs by 2033</div>
                  <div className="text-xs text-gray-600 mt-1">Cancer, pain, autoimmune</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Venom Pricing by Species</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-3 text-gray-400">Species</th>
                      <th className="text-left py-3 px-3 text-gray-400">Region</th>
                      <th className="text-left py-3 px-3 text-gray-400">Price/Gram</th>
                      <th className="text-left py-3 px-3 text-gray-400">Yield/Milking</th>
                      <th className="text-left py-3 px-3 text-gray-400">Medical Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { species: "Leiurus quinquestriatus (Deathstalker)", region: "N. Africa, Middle East", price: "$8K-$12K", yield: "0.5-2mg", value: "Cancer, pain research" },
                      { species: "Androctonus australis", region: "Tunisia, Algeria, Morocco", price: "$5K-$8K", yield: "1-3mg", value: "Anti-venom, neurotoxin" },
                      { species: "Buthus occitanus", region: "Mediterranean", price: "$3K-$6K", yield: "1-2mg", value: "Antimicrobial compounds" },
                      { species: "Androctonus crassicauda", region: "Middle East, Turkey", price: "$4K-$7K", yield: "1-2.5mg", value: "Cardiovascular research" },
                      { species: "Centruroides sculpturatus", region: "N. America", price: "$3K-$5K", yield: "0.5-1.5mg", value: "Anti-venom production" },
                    ].map((s) => (
                      <tr key={s.species} className="border-b border-white/5">
                        <td className="py-3 px-3 font-medium text-xs">{s.species}</td>
                        <td className="py-3 px-3 text-gray-400 text-xs">{s.region}</td>
                        <td className="py-3 px-3 text-gold font-bold text-xs">{s.price}</td>
                        <td className="py-3 px-3 text-gray-400 text-xs">{s.yield}</td>
                        <td className="py-3 px-3 text-gray-400 text-xs">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">End-User Segments</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { segment: "Pharmaceutical R&D Labs", size: "60% of demand", desc: "Cancer drug development (chlorotoxin for brain tumors), non-opioid pain relievers, autoimmune treatments. Multi-year supply contracts." },
                  { segment: "Anti-Venom Manufacturers", size: "20% of demand", desc: "Production of scorpion anti-venom serums. 1.5M+ scorpion stings/year globally. Growing demand in Africa, Middle East, South Asia." },
                  { segment: "University Research", size: "10% of demand", desc: "Academic research on toxinology, neuroscience, drug discovery. Smaller quantities but consistent annual budgets." },
                  { segment: "Cosmetics & Biotech", size: "10% of demand", desc: "Venom-derived peptides for anti-aging skincare, wound healing, antimicrobial products. Emerging high-margin segment." },
                ].map((s) => (
                  <div key={s.segment} className="glass rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-sm">{s.segment}</h5>
                      <span className="text-xs text-gold bg-gold/10 px-2 py-0.5 rounded-full">{s.size}</span>
                    </div>
                    <p className="text-xs text-gray-400">{s.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Competitive Analysis</h4>
              <div className="space-y-4">
                {[
                  {
                    name: "Venomers (Iran)",
                    strengths: "World's largest farm (4M scorpions, 220,000m²). University research partnerships. 12L venom/year production.",
                    weaknesses: "Farm-only model, no field robotics, no AI, no B2B platform. Geopolitical sanctions limit global trade. No technology differentiation.",
                    threat: "Medium — scale advantage but limited by model and geography.",
                  },
                  {
                    name: "Scorpx (Egypt)",
                    strengths: "Established in Cairo. Sells to medical and research centers. Local market knowledge.",
                    weaknesses: "Manual extraction only. Limited scale. No technology. Domestic focus. No global reach.",
                    threat: "Low — regional player without technology moat.",
                  },
                  {
                    name: "Volta Venom Labs (USA)",
                    strengths: "Arizona-based. Purified venom supplier. Pharmaceutical relationships. US market access.",
                    weaknesses: "No collection automation. No AI. Small species range. Supply-focused, not a platform.",
                    threat: "Low-Medium — US market position but no full-stack capability.",
                  },
                  {
                    name: "Wigmore Trading (Nigeria)",
                    strengths: "International exporter. Sources from Africa and Turkey. Global distribution network.",
                    weaknesses: "Trading company only. No extraction capability. No technology. No quality control infrastructure.",
                    threat: "Low — middleman model, easily disrupted by integrated platform.",
                  },
                ].map((c) => (
                  <div key={c.name} className="glass rounded-xl p-5">
                    <h5 className="font-bold mb-3">{c.name}</h5>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div>
                        <span className="text-xs text-green-400 font-semibold">Strengths</span>
                        <p className="text-xs text-gray-400 mt-1">{c.strengths}</p>
                      </div>
                      <div>
                        <span className="text-xs text-red-400 font-semibold">Weaknesses</span>
                        <p className="text-xs text-gray-400 mt-1">{c.weaknesses}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gold font-semibold">Threat Level</span>
                        <p className="text-xs text-gray-400 mt-1">{c.threat}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* 4. PRODUCTS & SERVICES */}
        <Section id="products">
          <SectionTitle tag="Section 4" title="Products &" highlight="Services" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            {[
              {
                icon: <Bot size={24} />,
                name: "MesBot — Autonomous UV Hunting Robot",
                desc: "AI-guided nocturnal robot that detects fluorescent scorpions using UV-blue light (395nm wavelength). Equipped with thermal imaging, GPS navigation, terrain-adaptive wheels, and secure specimen containers.",
                specs: ["UV-A LED array (395nm)", "Thermal camera overlay", "8+ hours battery life", "50-100 specimens/night", "GPS route optimization", "IP65 weatherproof"],
                revenue: "RaaS subscription + equipment sales",
              },
              {
                icon: <Zap size={24} />,
                name: "MesMilk — Smart Venom Extraction Station",
                desc: "Programmable robotic milking system with species-specific electrical stimulation protocols. Pneumatic tail clamping, automated venom collection, sterile storage, and real-time yield tracking.",
                specs: ["150+ extractions/day", "Programmable per species", "Sterile collection system", "Yield tracking dashboard", "Non-lethal protocols", "Portable for field use"],
                revenue: "Equipment sales + per-extraction fees",
              },
              {
                icon: <Eye size={24} />,
                name: "MesEye — AI Species Classification Camera",
                desc: "Deep learning computer vision system trained on 2,500+ scorpion species. Real-time classification, sex/maturity detection, population counting, and venom potency estimation. Runs on edge hardware.",
                specs: ["2,500+ species database", "Edge ML (offline capable)", "< 200ms classification", "Sex & maturity detection", "Population density mapping", "USB/wireless deployment"],
                revenue: "SaaS subscription + data licensing",
              },
              {
                icon: <Microscope size={24} />,
                name: "MesLab — Portable Venom Analyzer",
                desc: "Field-grade spectrometry device for rapid venom quality assessment. Measures protein concentration, toxin composition, and purity grade in minutes instead of days.",
                specs: ["Spectrometric analysis", "5-minute test cycle", "Protein concentration", "Toxin composition profile", "Purity grading (A/B/C)", "Battery powered"],
                revenue: "Equipment sales + consumables",
              },
              {
                icon: <Globe2 size={24} />,
                name: "MesMarket — B2B Venom Marketplace",
                desc: "Digital platform connecting verified venom suppliers to pharmaceutical labs, research institutions, and biotech companies worldwide. Full traceability, compliance automation, and cold-chain logistics coordination.",
                specs: ["Supplier verification", "Blockchain traceability", "Automated CITES docs", "Cold-chain tracking", "Quality certificates", "Multi-currency payments"],
                revenue: "Transaction commissions (5-15%) + premium features",
              },
            ].map((p) => (
              <motion.div key={p.name} variants={fadeUp} className="glass rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">{p.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{p.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">{p.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
                  {p.specs.map((s) => (
                    <div key={s} className="text-xs text-gray-500 bg-white/3 rounded-lg px-2 py-1.5 text-center">{s}</div>
                  ))}
                </div>
                <div className="text-xs text-gold bg-gold/5 rounded-lg px-3 py-2 inline-block">
                  Revenue: {p.revenue}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* 5. OPERATIONS PLAN */}
        <Section id="operations">
          <SectionTitle tag="Section 5" title="Operations" highlight="Plan" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Facility Requirements</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "HQ & R&D Lab (Tunis)", desc: "Software development, AI training, robot assembly, business operations. ~200m² office + lab space." },
                  { name: "Extraction Facility (Southern Tunisia)", desc: "Venom milking stations, lyophilization equipment, cold storage (-40°C to 2-8°C). ~150m² clean facility." },
                  { name: "Robot Deployment Base", desc: "Charging stations, maintenance workshop, specimen processing. Mobile units for different collection zones." },
                  { name: "Cold-Chain Storage", desc: "Pharmaceutical-grade freezers (-80°C), lyophilizer, packaging area. Backup power systems." },
                ].map((f) => (
                  <div key={f.name} className="glass rounded-xl p-4">
                    <h5 className="font-bold text-sm mb-1">{f.name}</h5>
                    <p className="text-xs text-gray-400">{f.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Venom Processing Pipeline</h4>
              <div className="space-y-3">
                {[
                  { step: "Collection", desc: "Robots collect live scorpions → transported to extraction facility in temperature-controlled containers" },
                  { step: "Species Verification", desc: "AI camera confirms species, sex, maturity → logged in database with GPS origin data" },
                  { step: "Venom Extraction", desc: "Smart milking station applies species-calibrated electrical stimulation → venom collected in sterile microtubes" },
                  { step: "Quality Analysis", desc: "Portable analyzer measures protein concentration, toxin profile, purity grade → batch certificate generated" },
                  { step: "Lyophilization", desc: "Freeze-drying at -38 to -40°C (2-5 hrs), primary drying at -60°C, secondary drying ramp to 28-30°C over 14-20 hrs" },
                  { step: "Packaging & Storage", desc: "Pharma-grade vials, nitrogen-sealed, stored at 2-8°C. Shelf life: 5 years. Each vial has unique blockchain ID" },
                  { step: "Animal Release", desc: "Scorpions returned to original habitat location (GPS-tracked). Regeneration period: 2-3 weeks before re-milking" },
                  { step: "Shipping", desc: "IATA DGR compliant cold-chain shipment. Real-time temperature monitoring. Full chain-of-custody documentation" },
                ].map((s, i) => (
                  <div key={s.step} className="flex items-start gap-4 glass rounded-xl p-4">
                    <span className="w-7 h-7 rounded-md bg-gold/10 flex items-center justify-center text-gold text-xs font-bold shrink-0">{i + 1}</span>
                    <div>
                      <h5 className="font-bold text-sm">{s.step}</h5>
                      <p className="text-xs text-gray-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Key Equipment Needed</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 px-3 text-gray-400 text-xs">Equipment</th>
                      <th className="text-left py-2 px-3 text-gray-400 text-xs">Est. Cost</th>
                      <th className="text-left py-2 px-3 text-gray-400 text-xs">Purpose</th>
                      <th className="text-left py-2 px-3 text-gray-400 text-xs">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { equip: "UV Robot Prototype Components", cost: "$15K-$25K", purpose: "Autonomous collection robot v1", priority: "Critical" },
                      { equip: "Electrical Stimulation Unit", cost: "$3K-$5K", purpose: "Venom extraction milking", priority: "Critical" },
                      { equip: "Lyophilizer (Bench-top)", cost: "$15K-$30K", purpose: "Freeze-drying venom", priority: "High" },
                      { equip: "Ultra-low Freezer (-80°C)", cost: "$5K-$10K", purpose: "Venom storage pre-processing", priority: "High" },
                      { equip: "Spectrometer (Portable)", cost: "$8K-$15K", purpose: "Quality analysis", priority: "Medium" },
                      { equip: "GPU Compute (Edge)", cost: "$2K-$5K", purpose: "AI species classification", priority: "High" },
                      { equip: "UV LED Arrays & Cameras", cost: "$1K-$3K", purpose: "Scorpion detection system", priority: "Critical" },
                      { equip: "Terrarium / Holding Facility", cost: "$2K-$5K", purpose: "Temporary scorpion housing", priority: "High" },
                      { equip: "Cold-chain Shipping Containers", cost: "$3K-$8K", purpose: "IATA-compliant transport", priority: "Medium" },
                    ].map((e) => (
                      <tr key={e.equip} className="border-b border-white/5">
                        <td className="py-2 px-3 text-xs">{e.equip}</td>
                        <td className="py-2 px-3 text-xs text-gold">{e.cost}</td>
                        <td className="py-2 px-3 text-xs text-gray-400">{e.purpose}</td>
                        <td className="py-2 px-3 text-xs">
                          <span className={`px-2 py-0.5 rounded-full ${
                            e.priority === "Critical" ? "bg-red-500/10 text-red-400" :
                            e.priority === "High" ? "bg-gold/10 text-gold" :
                            "bg-blue-500/10 text-blue-400"
                          }`}>{e.priority}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* 6. FINANCIAL PROJECTIONS */}
        <Section id="financials">
          <SectionTitle tag="Section 6" title="Financial" highlight="Projections" subtitle="5-year financial model based on conservative venom pricing and gradual robot fleet expansion." />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-6 text-gold">5-Year Revenue Projection</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-3 text-gray-400">Metric</th>
                      <th className="text-center py-3 px-3 text-gray-400">Year 1</th>
                      <th className="text-center py-3 px-3 text-gray-400">Year 2</th>
                      <th className="text-center py-3 px-3 text-gray-400">Year 3</th>
                      <th className="text-center py-3 px-3 text-gray-400">Year 4</th>
                      <th className="text-center py-3 px-3 text-gray-400">Year 5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Active Robots", y1: "5", y2: "20", y3: "50", y4: "120", y5: "200" },
                      { metric: "Countries", y1: "1", y2: "3", y3: "5", y4: "8", y5: "12" },
                      { metric: "Rural Partners", y1: "20", y2: "80", y3: "200", y4: "500", y5: "1,000" },
                      { metric: "Venom Produced (grams)", y1: "22", y2: "180", y3: "540", y4: "1,440", y5: "2,700" },
                      { metric: "Venom Revenue", y1: "$130K", y2: "$1.2M", y3: "$3.8M", y4: "$10M", y5: "$20M" },
                      { metric: "RaaS Revenue", y1: "—", y2: "$200K", y3: "$800K", y4: "$2.5M", y5: "$6M" },
                      { metric: "Marketplace Revenue", y1: "—", y2: "—", y3: "$400K", y4: "$1.5M", y5: "$5M" },
                      { metric: "Data & Licensing", y1: "—", y2: "$50K", y3: "$200K", y4: "$500K", y5: "$1.5M" },
                      { metric: "Total Revenue", y1: "$180K", y2: "$2.4M", y3: "$8.5M", y4: "$22M", y5: "$45M" },
                      { metric: "Gross Margin", y1: "60%", y2: "72%", y3: "78%", y4: "80%", y5: "82%" },
                      { metric: "Team Size", y1: "8", y2: "18", y3: "35", y4: "65", y5: "120" },
                    ].map((r) => (
                      <tr key={r.metric} className={`border-b border-white/5 ${r.metric === "Total Revenue" ? "bg-gold/5 font-bold" : ""}`}>
                        <td className="py-2 px-3 text-xs">{r.metric}</td>
                        <td className="py-2 px-3 text-xs text-center">{r.y1}</td>
                        <td className="py-2 px-3 text-xs text-center">{r.y2}</td>
                        <td className="py-2 px-3 text-xs text-center">{r.y3}</td>
                        <td className="py-2 px-3 text-xs text-center">{r.y4}</td>
                        <td className="py-2 px-3 text-xs text-center text-gold">{r.y5}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-4">*Based on avg $8K/gram, 70% robot uptime, 1.5mg avg yield per extraction. Conservative estimates.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Unit Economics Deep Dive</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-sm mb-3">Cost Structure (Per Robot/Month)</h5>
                  <div className="space-y-2">
                    {[
                      { label: "Robot maintenance & power", cost: "$500" },
                      { label: "Collection supplies", cost: "$200" },
                      { label: "Extraction consumables", cost: "$300" },
                      { label: "Processing & lyophilization", cost: "$800" },
                      { label: "Cold storage & logistics", cost: "$400" },
                      { label: "Field operator salary", cost: "$600" },
                      { label: "Insurance & compliance", cost: "$200" },
                      { label: "Total operating cost", cost: "$3,000" },
                    ].map((c) => (
                      <div key={c.label} className={`flex items-center justify-between py-1 text-xs border-b border-white/5 ${c.label.includes("Total") ? "font-bold text-gold" : "text-gray-400"}`}>
                        <span>{c.label}</span>
                        <span>{c.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-sm mb-3">Revenue Per Robot/Month</h5>
                  <div className="space-y-2">
                    {[
                      { label: "Scorpions collected/night", value: "75 avg" },
                      { label: "Operating nights/month", value: "20" },
                      { label: "Total specimens/month", value: "1,500" },
                      { label: "Extraction rate", value: "150/day" },
                      { label: "Avg venom per specimen", value: "1.5mg" },
                      { label: "Total venom/month", value: "4.5 grams" },
                      { label: "Revenue at $8K/gram", value: "$36,000" },
                      { label: "Gross profit/month", value: "$33,000 (92%)" },
                    ].map((c) => (
                      <div key={c.label} className={`flex items-center justify-between py-1 text-xs border-b border-white/5 ${c.label.includes("Gross") ? "font-bold text-gold" : "text-gray-400"}`}>
                        <span>{c.label}</span>
                        <span>{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-gold">Funding Rounds Plan</h4>
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  { round: "Pre-Seed", amount: "$300K-$500K", timing: "Now", purpose: "Prototypes, first extractions, team, legal" },
                  { round: "Seed", amount: "$1M-$3M", timing: "Month 12-18", purpose: "Scale to 20 robots, expand to 3 countries, marketplace MVP" },
                  { round: "Series A", amount: "$5M-$15M", timing: "Month 24-30", purpose: "200 robots, 10+ countries, full platform, R&D center" },
                  { round: "Series B", amount: "$20M-$50M", timing: "Month 36-48", purpose: "Global expansion, drug discovery division, IPO prep" },
                ].map((r) => (
                  <div key={r.round} className="glass rounded-xl p-4 text-center">
                    <h5 className="font-bold text-gold">{r.round}</h5>
                    <div className="text-xl font-black mt-1">{r.amount}</div>
                    <div className="text-xs text-gray-500 mt-1">{r.timing}</div>
                    <div className="text-xs text-gray-400 mt-2">{r.purpose}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* 7. LEGAL & REGULATORY */}
        <Section id="legal">
          <SectionTitle tag="Section 7" title="Legal &" highlight="Regulatory Framework" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            {[
              {
                icon: <Building2 size={24} />,
                title: "Company Registration",
                items: [
                  "Register SARL with Tunisian Registry of Commerce (RNE)",
                  "Apply for Startup Label at portail.startup.gov.tn/register",
                  "Obtain Tax ID (Matricule Fiscal) from the Ministry of Finance",
                  "Open special foreign currency account (Startup Act benefit)",
                  "Register with National Social Security Fund (CNSS)",
                ],
              },
              {
                icon: <Scale size={24} />,
                title: "CITES Compliance",
                items: [
                  "Identify all CITES-listed species in target regions (Appendix I, II, III)",
                  "Register with Tunisia's CITES Management Authority (Ministry of Agriculture)",
                  "Obtain export permits for each shipment of CITES-listed species derivatives",
                  "Maintain chain-of-custody documentation (legal origin proof)",
                  "Coordinate with importing country CITES authorities for import permits",
                ],
              },
              {
                icon: <Shield size={24} />,
                title: "Wildlife & Environmental Permits",
                items: [
                  "Wildlife collection permit from Ministry of Agriculture, Fisheries",
                  "Environmental impact assessment for collection activities",
                  "Breeding facility license (if captive breeding)",
                  "Sustainable harvesting plan with population monitoring data",
                  "Annual reporting to wildlife authorities on collection volumes and species impact",
                ],
              },
              {
                icon: <FlaskConical size={24} />,
                title: "Pharmaceutical & Export Compliance",
                items: [
                  "Biosafety handling certification for venomous specimens",
                  "IATA Dangerous Goods Regulations (DGR) compliance for shipping",
                  "ISO 17025 laboratory accreditation (for quality testing)",
                  "GMP-aligned processing facility (Good Manufacturing Practice)",
                  "EU, US FDA awareness for pharma-grade biological material exports",
                  "Cold-chain certification for international transport",
                ],
              },
              {
                icon: <FileText size={24} />,
                title: "Intellectual Property",
                items: [
                  "Provisional patent filings for robot designs and extraction methods",
                  "Trademark registration for Mesmam مسمام brand",
                  "Trade secret protection for AI models and species databases",
                  "Software copyright for marketplace platform and analytics tools",
                ],
              },
            ].map((section) => (
              <motion.div key={section.title} variants={fadeUp} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold">{section.icon}</div>
                  <h4 className="font-bold text-lg">{section.title}</h4>
                </div>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* 8. RISK ANALYSIS */}
        <Section id="risks">
          <SectionTitle tag="Section 8" title="Risk Analysis &" highlight="Mitigation" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {[
              { risk: "Regulatory Rejection", level: "High", impact: "Critical", mitigation: "Engage regulatory lawyers from day 1. Build relationships with CITES Management Authority and Ministry of Agriculture. Prepare thorough environmental impact assessments. Start with non-CITES species." },
              { risk: "Robot Technology Failure", level: "Medium", impact: "High", mitigation: "Iterative prototyping. Partner with Tunisian engineering universities (ENIT, INSAT). Start with semi-autonomous systems before full autonomy. Build on proven VES-4® extraction technology from Morocco." },
              { risk: "Low Venom Yield", level: "Medium", impact: "High", mitigation: "Multi-species strategy diversifies yield risk. AI-driven species selection optimizes for high-yield specimens. Captive breeding program for controlled production." },
              { risk: "No Buyer Interest", level: "Low", impact: "Critical", mitigation: "Validate demand before scale: cold outreach to 100+ labs for LOIs. Attend BIO International, Venom Week conferences. Partner with university research programs for initial sales." },
              { risk: "Competitor Entry", level: "Low", impact: "Medium", mitigation: "First-mover advantage in full-stack approach. Patent key innovations. Data moat from AI models. Network effects from marketplace. Focus on execution speed." },
              { risk: "Geopolitical / Export Barriers", level: "Medium", impact: "Medium", mitigation: "Tunisia's neutral geopolitical position is an advantage vs. Iran-based competitors. Startup Act provides export facilitation. Diversify target markets across EU, US, Asia." },
              { risk: "Animal Welfare Concerns", level: "Medium", impact: "Medium", mitigation: "Non-lethal extraction only. Release-after-milking protocol. Population monitoring. Publish sustainability reports. Seek animal welfare certifications." },
              { risk: "Team / Talent Shortage", level: "High", impact: "High", mitigation: "Competitive equity packages. Remote-first for specialized roles. University recruitment pipeline. Advisory board with industry experts. International co-founders welcome." },
            ].map((r) => (
              <motion.div key={r.risk} variants={fadeUp} className="glass rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-sm">{r.risk}</h4>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      r.level === "High" ? "bg-red-500/10 text-red-400" :
                      r.level === "Medium" ? "bg-yellow-500/10 text-yellow-400" :
                      "bg-green-500/10 text-green-400"
                    }`}>Likelihood: {r.level}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      r.impact === "Critical" ? "bg-red-500/10 text-red-400" :
                      r.impact === "High" ? "bg-orange-500/10 text-orange-400" :
                      "bg-yellow-500/10 text-yellow-400"
                    }`}>Impact: {r.impact}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400"><strong className="text-gray-300">Mitigation:</strong> {r.mitigation}</p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* 9. SOCIAL IMPACT */}
        <Section id="impact">
          <SectionTitle tag="Section 9" title="Social Impact" highlight="Assessment" />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-400">Positive Impact</h4>
                <div className="space-y-3">
                  {[
                    "1,000+ rural jobs created by Year 5 across 10+ countries",
                    "Zero human deaths from scorpion collection (replacing informal hunting)",
                    "3-5x income increase for rural collectors via fair-trade model",
                    "Training programs create certified venom technicians",
                    "Population monitoring data supports conservation science",
                    "Sustainable harvesting prevents species depletion",
                    "Technology transfer to underserved regions",
                    "Women and youth employment in tech-enabled roles",
                  ].map((i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={14} className="text-green-400 mt-0.5 shrink-0" />
                      {i}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-gold">UN SDG Alignment</h4>
                <div className="space-y-3">
                  {[
                    { sdg: "SDG 1: No Poverty", desc: "Fair income for rural communities in Tunisia's poorest regions" },
                    { sdg: "SDG 3: Good Health", desc: "Venom for life-saving anti-venom and drug research" },
                    { sdg: "SDG 8: Decent Work", desc: "Safe, dignified tech jobs replacing dangerous hunting" },
                    { sdg: "SDG 9: Industry & Innovation", desc: "AI and robotics applied to traditional industry" },
                    { sdg: "SDG 15: Life on Land", desc: "Sustainable harvesting with population monitoring" },
                  ].map((s) => (
                    <div key={s.sdg} className="glass rounded-lg p-3">
                      <h5 className="font-bold text-xs text-gold">{s.sdg}</h5>
                      <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* 10. FUNDING REQUIREMENTS */}
        <Section id="funding">
          <SectionTitle tag="Section 10" title="Funding" highlight="Requirements" />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="glass-gold rounded-2xl p-8 text-center mb-8">
              <div className="text-5xl font-black text-gold mb-2">$300K – $500K</div>
              <p className="text-gray-400 text-lg">Pre-Seed Round — 12-18 Month Runway</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-4 text-gold">Allocation</h4>
                <div className="space-y-3">
                  {[
                    { label: "Robot R&D & Prototyping", pct: "35%", detail: "UV detection system, autonomous navigation, specimen containers" },
                    { label: "AI & Software", pct: "25%", detail: "Species classification model, marketplace platform, dashboards" },
                    { label: "Biology Lab Setup", pct: "15%", detail: "Extraction station, lyophilizer, cold storage, analysis equipment" },
                    { label: "Field Operations", pct: "15%", detail: "Team salaries, travel, field testing in Southern Tunisia" },
                    { label: "Legal & IP", pct: "10%", detail: "CITES permits, patents, Startup Act registration, export licenses" },
                  ].map((a) => (
                    <div key={a.label} className="glass rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm">{a.label}</span>
                        <span className="text-gold font-bold">{a.pct}</span>
                      </div>
                      <p className="text-xs text-gray-500">{a.detail}</p>
                      <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
                        <div className="bg-gradient-to-r from-gold to-gold-light h-1.5 rounded-full" style={{ width: a.pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-4 text-gold">Key Milestones (12-18 Months)</h4>
                <div className="space-y-3">
                  {[
                    { milestone: "Month 1-2", items: "Company registration, Startup Act application, team recruitment begins" },
                    { milestone: "Month 3-4", items: "UV robot prototype v1 assembled, first field test" },
                    { milestone: "Month 5-6", items: "AI species model trained (50+ species), extraction station operational" },
                    { milestone: "Month 7-8", items: "First venom extracted, quality tested, packaged" },
                    { milestone: "Month 9-10", items: "First lab customer sale, CITES permit obtained" },
                    { milestone: "Month 11-12", items: "5 robots deployed, 20 rural partners onboarded" },
                    { milestone: "Month 13-15", items: "Marketplace MVP launched, Morocco expansion begins" },
                    { milestone: "Month 16-18", items: "Seed round preparation, $2.4M revenue run-rate target" },
                  ].map((m) => (
                    <div key={m.milestone} className="flex items-start gap-3 text-sm">
                      <span className="text-gold font-bold text-xs shrink-0 w-20">{m.milestone}</span>
                      <span className="text-gray-400 text-xs">{m.items}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* CTA */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-gold rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-black text-gold mb-4">Ready to Build the Future of Venom?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            This business plan is a living document. We&apos;re actively seeking co-founders, advisors, and investors who share our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pitch-deck" className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold hover:shadow-xl hover:shadow-gold/30 transition-all hover:scale-105 flex items-center gap-2 justify-center">
              View Pitch Deck <ArrowRight size={18} />
            </a>
            <a href="/action-plan" className="px-6 py-3 rounded-xl glass-gold text-gold font-bold hover:bg-gold/10 transition-all flex items-center gap-2 justify-center">
              Step-by-Step Action Plan <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <PageFooter />
    </main>
  );
}
