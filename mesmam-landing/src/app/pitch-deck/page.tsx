"use client";

import { motion } from "framer-motion";
import {
  Bot,
  FlaskConical,
  Shield,
  Globe2,
  Users,
  Zap,
  Eye,
  Scale,
  Target,
  Cpu,
  Microscope,
  HandCoins,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Award,
  BarChart3,
} from "lucide-react";
import { PageNav, PageHero, PageFooter, fadeUp } from "@/components/shared";

function SlideWrapper({
  slideNum,
  title,
  children,
}: {
  slideNum: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="glass-gold rounded-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-8 py-4 border-b border-gold/10">
          <span className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-gold text-sm font-bold">
            {slideNum}
          </span>
          <h3 className="text-xl font-bold text-gold">{title}</h3>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </motion.section>
  );
}

export default function PitchDeckPage() {
  return (
    <main>
      <PageNav current="/pitch-deck" />

      <PageHero
        badge="Investor Pitch Deck — 15 Slides"
        title="The Investment Case for"
        titleHighlight="Mesmam مسمام"
        subtitle="A complete pitch deck covering the problem, solution, market, technology, business model, financials, team needs, and ask. Ready for investor meetings."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* SLIDE 1: Title */}
        <SlideWrapper slideNum={1} title="Title Slide">
          <div className="text-center py-8">
            <h2 className="text-5xl font-black text-gradient-gold mb-2">Mesmam</h2>
            <p className="text-2xl text-gold/50 mb-6" dir="rtl">مسمام</p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              AI-Powered Robotics for Ethical, Scalable Scorpion Venom Extraction
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {["Deep Tech", "Biotech Supply Chain", "AI + Robotics", "Tunisia-Based", "Pre-Seed"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full glass text-gray-400">{t}</span>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6">contact@mesmam.com | Tunis, Tunisia</p>
          </div>
        </SlideWrapper>

        {/* SLIDE 2: The Hook */}
        <SlideWrapper slideNum={2} title="The Hook — Why This Matters">
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { val: "$39M", sub: "per gallon", note: "Most expensive liquid on Earth" },
              { val: "0", sub: "tech companies", note: "In the entire supply chain" },
              { val: "1.5M+", sub: "stings/year", note: "People injured harvesting venom" },
            ].map((s) => (
              <div key={s.sub} className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-black text-gold">{s.val}</div>
                <div className="text-sm text-gray-400 mt-1">{s.sub}</div>
                <div className="text-xs text-gray-600 mt-2">{s.note}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center text-lg">
            Scorpion venom is worth more than gold, yet the industry has <strong className="text-white">zero technology, zero infrastructure, and zero safety</strong>. Mesmam changes everything.
          </p>
        </SlideWrapper>

        {/* SLIDE 3: Problem */}
        <SlideWrapper slideNum={3} title="The Problem">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <AlertTriangle size={24} />,
                title: "Human Lives at Risk",
                desc: "Rural hunters risk fatal scorpion stings nightly using bare hands and flashlights. Dozens die annually across North Africa and the Middle East.",
              },
              {
                icon: <Scale size={24} />,
                title: "No Supply Chain Infrastructure",
                desc: "No standardized pipeline from field to lab. Inconsistent quality, zero traceability, middlemen extracting 80%+ of value from collectors.",
              },
              {
                icon: <BarChart3 size={24} />,
                title: "Cannot Scale with Manual Methods",
                desc: "Manual milking: ~10 scorpions/day/worker. 2mg per extraction means 500 milkings per gram. Industrial scale is impossible without automation.",
              },
              {
                icon: <Globe2 size={24} />,
                title: "Fragmented Buyer Market",
                desc: "Pharma labs, research institutions, and biotech companies cannot find verified, ethically-sourced venom. No digital marketplace exists.",
              },
            ].map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                  {p.icon}
                </div>
                <div>
                  <h4 className="font-bold mb-1">{p.title}</h4>
                  <p className="text-sm text-gray-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SlideWrapper>

        {/* SLIDE 4: Solution */}
        <SlideWrapper slideNum={4} title="Our Solution">
          <p className="text-gray-400 mb-8 text-center text-lg">
            Mesmam builds the <strong className="text-white">full-stack technology infrastructure</strong> for the scorpion venom industry — from desert to lab bench.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: <Bot size={24} />, title: "Autonomous UV Hunting Robots", desc: "AI-guided nocturnal robots detect fluorescent scorpions using UV-blue light. Zero human risk. Operates all night autonomously." },
              { icon: <Zap size={24} />, title: "Automated Venom Extraction", desc: "Robotic milking systems process 150+ scorpions/day. Species-specific electrical stimulation. Non-lethal, pharma-grade output." },
              { icon: <Eye size={24} />, title: "AI Vision & Species Classification", desc: "Computer vision identifies 2,500+ species instantly. Population counting, yield estimation, quality grading — all in real time." },
              { icon: <Globe2 size={24} />, title: "Global B2B Venom Marketplace", desc: "Digital platform connecting verified suppliers to pharma labs worldwide. Full traceability, cold-chain logistics, compliance automation." },
            ].map((s) => (
              <div key={s.title} className="glass rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">{s.icon}</div>
                  <h4 className="font-bold">{s.title}</h4>
                </div>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </SlideWrapper>

        {/* SLIDE 5: How It Works */}
        <SlideWrapper slideNum={5} title="How It Works — The Mesmam Pipeline">
          <div className="space-y-4">
            {[
              { step: "01", title: "Scout", desc: "AI drones & satellite data map scorpion population densities across target regions. Predict optimal collection zones.", color: "text-blue-400" },
              { step: "02", title: "Collect", desc: "Autonomous UV robots deploy at dusk. They scan terrain with 395nm UV arrays, detect fluorescent scorpions, and safely collect specimens into secured containers.", color: "text-indigo-400" },
              { step: "03", title: "Identify", desc: "AI camera classifies each specimen by species, sex, maturity, and estimated venom potency. Edge ML runs without internet.", color: "text-purple-400" },
              { step: "04", title: "Extract", desc: "Smart milking stations apply species-specific electrical stimulation. 150+ extractions per day per unit. Non-lethal. Sterile collection.", color: "text-gold" },
              { step: "05", title: "Analyze", desc: "Portable spectrometry analyzer grades venom quality in minutes — protein concentration, toxin composition, purity level.", color: "text-amber-400" },
              { step: "06", title: "Process", desc: "Lyophilization (freeze-drying) at -40°C. Pharmaceutical-grade packaging. 5-year shelf life at 2-8°C.", color: "text-orange-400" },
              { step: "07", title: "Connect", desc: "B2B marketplace matches verified venom with buyer needs. Automated compliance docs, pricing, and cold-chain logistics.", color: "text-green-400" },
              { step: "08", title: "Deliver", desc: "IATA-compliant cold-chain shipping to labs and pharma companies worldwide. Full chain-of-custody documentation.", color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-4 glass rounded-xl p-4">
                <span className={`font-mono font-bold text-lg ${s.color} shrink-0 w-8`}>{s.step}</span>
                <div>
                  <h4 className="font-bold">{s.title}</h4>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SlideWrapper>

        {/* SLIDE 6: Market */}
        <SlideWrapper slideNum={6} title="Market Opportunity">
          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-gold">Total Addressable Market</h4>
              <div className="space-y-3">
                <div className="glass rounded-lg p-4">
                  <div className="text-sm text-gray-500">Scorpion venom (raw)</div>
                  <div className="text-2xl font-bold">$8K–$12K <span className="text-sm text-gray-500">per gram</span></div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="text-sm text-gray-500">Anti-venom market</div>
                  <div className="text-2xl font-bold">$2.45B <span className="text-sm text-gray-500">by 2033</span></div>
                  <div className="text-xs text-gray-600">Growing at 5.6-8.1% CAGR</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="text-sm text-gray-500">Venom-derived drug market</div>
                  <div className="text-2xl font-bold">$4.58B <span className="text-sm text-gray-500">by 2033</span></div>
                  <div className="text-xs text-gray-600">Cancer, pain, autoimmune therapies</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-gold">Demand Drivers</h4>
              <div className="space-y-2">
                {[
                  "Cancer drug R&D (brain, breast, prostate tumors)",
                  "Non-opioid pain reliever development",
                  "Autoimmune disease treatments (arthritis, lupus, MS)",
                  "Anti-venom serum production (1.5M+ stings/year globally)",
                  "Antimicrobial compound discovery",
                  "Cardiovascular research",
                  "Immunosuppressive therapy",
                  "Cosmetic & skincare bioactives",
                  "Neurological disorder research",
                ].map((d) => (
                  <div key={d} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SlideWrapper>

        {/* SLIDE 7: Competition */}
        <SlideWrapper slideNum={7} title="Competitive Landscape">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Company</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Country</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Robots</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">AI</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Marketplace</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Extraction</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Global</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Venomers", country: "Iran", robots: false, ai: false, market: false, extract: true, global: false },
                  { name: "Scorpx", country: "Egypt", robots: false, ai: false, market: false, extract: true, global: false },
                  { name: "Volta Venom", country: "USA", robots: false, ai: false, market: false, extract: true, global: true },
                  { name: "Wigmore", country: "Nigeria", robots: false, ai: false, market: false, extract: false, global: true },
                  { name: "Mesmam", country: "Tunisia", robots: true, ai: true, market: true, extract: true, global: true },
                ].map((c) => (
                  <tr key={c.name} className={`border-b border-white/5 ${c.name === "Mesmam" ? "bg-gold/5" : ""}`}>
                    <td className={`py-3 px-4 font-semibold ${c.name === "Mesmam" ? "text-gold" : ""}`}>{c.name}</td>
                    <td className="py-3 px-4 text-gray-400">{c.country}</td>
                    {[c.robots, c.ai, c.market, c.extract, c.global].map((v, i) => (
                      <td key={i} className="py-3 px-4">
                        <span className={v ? "text-green-400" : "text-gray-700"}>
                          {v ? "✓" : "✗"}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 glass rounded-xl p-4 text-center">
            <p className="text-gold font-semibold">Mesmam is the only full-stack, technology-first player in the scorpion venom industry.</p>
            <p className="text-sm text-gray-400 mt-1">No competitor combines autonomous collection + AI identification + automated extraction + global marketplace.</p>
          </div>
        </SlideWrapper>

        {/* SLIDE 8: Business Model */}
        <SlideWrapper slideNum={8} title="Business Model — 6 Revenue Streams">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <FlaskConical size={20} />, title: "Venom Sales (B2B)", desc: "Direct pharma-grade venom to labs. $8K-$12K/gram. Premium for rare species.", tag: "Primary" },
              { icon: <Bot size={20} />, title: "Robotics-as-a-Service", desc: "Lease robots to partner farms & cooperatives. Monthly subscription + per-extraction fees.", tag: "Recurring" },
              { icon: <Globe2 size={20} />, title: "Marketplace Commissions", desc: "5-15% transaction fee on all B2B venom trades. Premium listings and verification.", tag: "Platform" },
              { icon: <BarChart3 size={20} />, title: "Data & Analytics", desc: "Population maps, yield predictions, species data sold to conservation orgs & researchers.", tag: "Data" },
              { icon: <Users size={20} />, title: "Community Network", desc: "Equip rural collectors, guarantee buy-back. Fair-trade model across North Africa.", tag: "Impact" },
              { icon: <Award size={20} />, title: "Licensing & Consulting", desc: "License IP, protocols, and technology. Consulting for regulatory compliance.", tag: "IP" },
            ].map((s) => (
              <div key={s.title} className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold">{s.icon}</div>
                  <span className="text-xs font-medium text-gold/60 bg-gold/5 px-2 py-0.5 rounded-full">{s.tag}</span>
                </div>
                <h4 className="font-bold text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </SlideWrapper>

        {/* SLIDE 9: Unit Economics */}
        <SlideWrapper slideNum={9} title="Unit Economics">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-gold">Per-Robot Economics (Monthly)</h4>
              <div className="space-y-2">
                {[
                  { label: "Scorpions collected per night", value: "50-100" },
                  { label: "Extraction rate (robot milking)", value: "150/day" },
                  { label: "Avg venom per scorpion", value: "1-2 mg" },
                  { label: "Monthly venom yield", value: "~4.5 grams" },
                  { label: "Revenue per gram (avg)", value: "$8,000" },
                  { label: "Gross monthly revenue per unit", value: "$36,000" },
                  { label: "Robot operating cost/month", value: "~$3,000" },
                  { label: "Gross margin per unit", value: "~92%" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between py-2 border-b border-white/5 text-sm">
                    <span className="text-gray-400">{r.label}</span>
                    <span className="font-semibold text-white">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gold">Scaling Projections</h4>
              <div className="space-y-3">
                {[
                  { year: "Year 1 (5 robots)", rev: "$180K", margin: "60%", note: "Proof of concept + first lab sales" },
                  { year: "Year 2 (20 robots)", rev: "$2.4M", margin: "72%", note: "Morocco + Algeria expansion" },
                  { year: "Year 3 (50 robots)", rev: "$8.5M", margin: "78%", note: "Marketplace launch + RaaS" },
                  { year: "Year 5 (200 robots)", rev: "$45M", margin: "82%", note: "10+ countries, full platform" },
                ].map((p) => (
                  <div key={p.year} className="glass rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{p.year}</span>
                      <span className="text-gold font-bold">{p.rev}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Gross margin: {p.margin}</span>
                      <span>{p.note}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-4">
                *Projections based on conservative venom pricing ($8K/gram avg) and 70% uptime per robot. Actual yields vary by species and geography.
              </p>
            </div>
          </div>
        </SlideWrapper>

        {/* SLIDE 10: Technology Moat */}
        <SlideWrapper slideNum={10} title="Technology & Competitive Moat">
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: <Cpu size={20} />, title: "UV Detection Robotics", items: ["395nm UV-A LED arrays", "Thermal imaging backup", "Terrain-adaptive mobility", "GPS route optimization"] },
              { icon: <Eye size={20} />, title: "Species AI Engine", items: ["2,500+ species database", "Edge ML (no internet)", "Sex & maturity detection", "Venom potency estimation"] },
              { icon: <Microscope size={20} />, title: "Venom Analytics", items: ["Portable spectrometry", "Real-time quality grading", "Protein concentration", "Purity verification"] },
            ].map((t) => (
              <div key={t.title} className="glass rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-uv-blue/10 flex items-center justify-center text-uv-glow mb-3">{t.icon}</div>
                <h4 className="font-bold text-sm mb-3">{t.title}</h4>
                <ul className="space-y-1">
                  {t.items.map((i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-uv-glow" />{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="glass-gold rounded-xl p-5">
            <h4 className="font-bold text-sm text-gold mb-2">Defensibility</h4>
            <div className="grid sm:grid-cols-4 gap-3">
              {[
                "Proprietary robot designs",
                "Trained AI models (data moat)",
                "Patent-pending extraction IP",
                "Network effects (marketplace)",
              ].map((d) => (
                <div key={d} className="flex items-center gap-2 text-xs text-gray-300">
                  <Shield size={12} className="text-gold shrink-0" />{d}
                </div>
              ))}
            </div>
          </div>
        </SlideWrapper>

        {/* SLIDE 11: Go-to-Market */}
        <SlideWrapper slideNum={11} title="Go-to-Market Strategy">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                phase: "Phase 1: Supply",
                items: [
                  "Deploy first robots in Southern Tunisia (Tozeur, Gafsa, Tataouine)",
                  "Partner with rural cooperatives for collection network",
                  "Build venom processing facility (lyophilization, cold storage)",
                  "First sales to 3-5 research laboratories",
                ],
              },
              {
                phase: "Phase 2: Demand",
                items: [
                  "Web scraping pharma lab directories worldwide",
                  "Cold email/LinkedIn outreach to procurement teams",
                  "Conference presence (BIO International, Venom Week)",
                  "Partnerships with university research programs",
                ],
              },
              {
                phase: "Phase 3: Platform",
                items: [
                  "Launch B2B marketplace with verified suppliers",
                  "Onboard international venom producers",
                  "Automated compliance & logistics platform",
                  "Expand to 10+ countries within 3 years",
                ],
              },
            ].map((p) => (
              <div key={p.phase} className="glass rounded-xl p-5">
                <h4 className="font-bold text-gold mb-4">{p.phase}</h4>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <ArrowRight size={12} className="text-gold mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SlideWrapper>

        {/* SLIDE 12: Traction & Milestones */}
        <SlideWrapper slideNum={12} title="Traction & Milestones">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-4 text-green-400">Completed</h4>
              <div className="space-y-3">
                {[
                  "Market research & competitive analysis",
                  "Landing page & brand identity",
                  "Business plan & financial projections",
                  "Target species identification (Tunisia)",
                  "Regulatory framework mapped (CITES, Tunisian law)",
                ].map((m) => (
                  <div key={m} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-400 mt-0.5 shrink-0" />
                    {m}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gold">Next Milestones</h4>
              <div className="space-y-3">
                {[
                  "Tunisian Startup Act label application",
                  "Assemble founding team (CTO, Head of Biology, BD)",
                  "UV robot prototype v1",
                  "First venom extraction pilot",
                  "First lab customer LOI (Letter of Intent)",
                  "Pre-seed round close ($200K-$500K)",
                ].map((m) => (
                  <div key={m} className="flex items-start gap-2 text-sm text-gray-300">
                    <Target size={16} className="text-gold mt-0.5 shrink-0" />
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SlideWrapper>

        {/* SLIDE 13: Team */}
        <SlideWrapper slideNum={13} title="Team — Who We Need">
          <p className="text-gray-400 mb-6 text-center">
            Building an A-team across robotics, biology, AI, and business development.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { role: "CEO / Founder", skills: "Vision, fundraising, partnerships, strategy", status: "Active" },
              { role: "CTO — Robotics", skills: "Embedded systems, UV optics, autonomous navigation, mechanical engineering", status: "Hiring" },
              { role: "Head of Biology", skills: "Arachnology, venom biochemistry, species taxonomy, extraction protocols", status: "Hiring" },
              { role: "AI/ML Engineer", skills: "Computer vision, edge ML, species classification, yield prediction models", status: "Hiring" },
              { role: "Head of Operations", skills: "Supply chain, cold-chain logistics, lab facility management", status: "Hiring" },
              { role: "Business Development", skills: "Pharma sales, B2B, partnerships, web scraping, cold outreach", status: "Hiring" },
              { role: "Regulatory & Legal", skills: "CITES, export law, pharmaceutical compliance, IP protection", status: "Advisor" },
              { role: "Hardware Engineer", skills: "PCB design, sensor integration, milking station electronics", status: "Hiring" },
              { role: "Full-Stack Developer", skills: "Marketplace platform, dashboards, APIs, blockchain traceability", status: "Hiring" },
            ].map((t) => (
              <div key={t.role} className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-sm">{t.role}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    t.status === "Active" ? "bg-green-500/10 text-green-400" :
                    t.status === "Advisor" ? "bg-blue-500/10 text-blue-400" :
                    "bg-gold/10 text-gold"
                  }`}>{t.status}</span>
                </div>
                <p className="text-xs text-gray-500">{t.skills}</p>
              </div>
            ))}
          </div>
        </SlideWrapper>

        {/* SLIDE 14: Social Impact */}
        <SlideWrapper slideNum={14} title="Social Impact & ESG">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: <Users size={24} />, title: "Rural Employment", desc: "Creating dignified tech jobs in Tunisia's most underserved southern regions. Replacing dangerous hunting with robot operation and venom technician roles." },
              { icon: <Shield size={24} />, title: "Saving Lives", desc: "Autonomous robots eliminate human exposure to fatal scorpion stings. Zero-risk collection means no more deaths from informal hunting." },
              { icon: <HandCoins size={24} />, title: "Fair-Trade Economics", desc: "Guaranteed buy-back pricing. Eliminating middlemen means collectors keep 3-5x more value. Transparent, blockchain-tracked payments." },
              { icon: <Lightbulb size={24} />, title: "Conservation & Science", desc: "Population monitoring prevents over-harvesting. Release-after-milking protocols. Data contributes to global scorpion conservation research." },
            ].map((s) => (
              <div key={s.title} className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">{s.icon}</div>
                <div>
                  <h4 className="font-bold mb-1">{s.title}</h4>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 glass rounded-xl p-4 text-center">
            <p className="text-sm text-gray-400">
              <strong className="text-white">UN SDG Alignment:</strong> SDG 1 (No Poverty), SDG 3 (Good Health), SDG 8 (Decent Work), SDG 9 (Industry & Innovation), SDG 15 (Life on Land)
            </p>
          </div>
        </SlideWrapper>

        {/* SLIDE 15: The Ask */}
        <SlideWrapper slideNum={15} title="The Ask — Pre-Seed Round">
          <div className="text-center mb-8">
            <div className="text-5xl font-black text-gold mb-2">$300K – $500K</div>
            <p className="text-gray-400">Pre-Seed Round — 12–18 month runway</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-gold">Use of Funds</h4>
              <div className="space-y-3">
                {[
                  { label: "Robot Prototype Development", pct: "35%", amt: "$105K-$175K" },
                  { label: "AI & Software Development", pct: "25%", amt: "$75K-$125K" },
                  { label: "Biology Lab & Extraction Setup", pct: "15%", amt: "$45K-$75K" },
                  { label: "Operations & Field Testing", pct: "15%", amt: "$45K-$75K" },
                  { label: "Legal, IP & Regulatory", pct: "10%", amt: "$30K-$50K" },
                ].map((f) => (
                  <div key={f.label} className="glass rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold">{f.label}</span>
                      <span className="text-gold font-bold">{f.pct}</span>
                    </div>
                    <div className="text-xs text-gray-500">{f.amt}</div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
                      <div className="bg-gradient-to-r from-gold to-gold-light h-1.5 rounded-full" style={{ width: f.pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gold">What Investors Get</h4>
              <div className="space-y-3">
                {[
                  "Equity in Tunisia's first deep-tech venom startup",
                  "Full Tunisian Startup Act tax benefits on investment",
                  "Capital gains exemption on exit",
                  "Access to $39M/gallon commodity with zero tech competition",
                  "First-mover advantage in full-stack venom supply chain",
                  "ESG-positive investment with measurable social impact",
                  "Board observer seat (lead investor)",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                    {b}
                  </div>
                ))}
              </div>

              <div className="mt-6 glass-gold rounded-xl p-4 text-center">
                <p className="text-sm text-gold font-semibold mb-1">Tunisian Startup Act Benefits</p>
                <p className="text-xs text-gray-400">
                  Investment fully deductible from tax base. Capital gains on exit are 100% tax-exempt. Startup Guarantee Fund covers investor risk.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center glass-gold rounded-xl p-6">
            <p className="text-lg font-bold text-gold mb-2">Ready to Discuss?</p>
            <p className="text-gray-400 mb-4">Let&apos;s talk about how Mesmam will industrialize the most valuable liquid on Earth.</p>
            <a
              href="mailto:contact@mesmam.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold hover:shadow-xl hover:shadow-gold/30 transition-all hover:scale-105"
            >
              Schedule a Call <ArrowRight size={18} />
            </a>
          </div>
        </SlideWrapper>
      </div>

      <PageFooter />
    </main>
  );
}
