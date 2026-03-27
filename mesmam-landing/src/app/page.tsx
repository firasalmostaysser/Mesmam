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
  DollarSign,
  Building2,
  Scale,
  Leaf,
  ChevronDown,
  ArrowRight,
  Star,
  Target,
  Cpu,
  Microscope,
  HandCoins,
  MapPin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Lightbulb,
  Factory,
  Truck,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Technology", href: "#technology" },
    { label: "Market", href: "#market" },
    { label: "Revenue", href: "#revenue" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
            <span className="text-black font-bold text-lg">م</span>
          </div>
          <span className="font-bold text-xl tracking-tight">
            <span className="text-gradient-gold">Mesmam</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-gold to-gold-light text-black font-semibold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden text-gray-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/5 px-6 py-4 space-y-3"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-gray-400 hover:text-gold transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-uv-blue/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-8">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gold-light font-medium">
              Pre-Seed — Tunisia&apos;s First Deep-Tech Venom Startup
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4">
            <span className="text-gradient-gold">Mesmam</span>
          </h1>
          <p className="text-3xl sm:text-4xl font-bold text-gold/60 mb-2" dir="rtl">
            مسمام
          </p>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            AI-powered robotics for{" "}
            <span className="text-gold font-semibold">ethical, scalable scorpion venom extraction</span>.
            Connecting rural communities to the world&apos;s most expensive liquid —{" "}
            <span className="text-uv-glow font-semibold">$39 million per gallon</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <a
            href="#solution"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg hover:shadow-xl hover:shadow-gold/30 transition-all hover:scale-105"
          >
            Explore Our Vision
          </a>
          <a
            href="#market"
            className="px-8 py-4 rounded-xl glass-gold text-gold font-bold text-lg hover:bg-gold/10 transition-all"
          >
            View Market Data
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "$39M", label: "Per Gallon" },
            { value: "$12K", label: "Per Gram" },
            { value: "2mg", label: "Per Extraction" },
            { value: "2500+", label: "Scorpion Species" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-xl p-4">
              <div className="text-2xl font-bold text-gold">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2 }}
          className="mt-16"
        >
          <a href="#problem" className="inline-block animate-bounce">
            <ChevronDown size={32} className="text-gold/50" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: <Shield size={28} />,
      title: "Deadly Manual Collection",
      desc: "Scorpion hunters risk fatal stings nightly. Traditional methods kill collectors and damage animals. In rural Tunisia and North Africa, poverty drives people to dangerous night hunts with minimal protection.",
    },
    {
      icon: <Scale size={28} />,
      title: "Zero Industry Infrastructure",
      desc: "No standardized supply chain exists from field to pharma lab. Venom quality is inconsistent, traceability is nonexistent, and middlemen extract most of the value from rural collectors.",
    },
    {
      icon: <FlaskConical size={28} />,
      title: "Extraction Bottleneck",
      desc: "Manual milking produces only ~10 scorpions/day per worker. At 2mg per extraction, producing 1 gram requires 500 individual milkings — making scale economically impossible with current methods.",
    },
    {
      icon: <Globe2 size={28} />,
      title: "Fragmented Global Market",
      desc: "Pharma labs, researchers, and biotech companies struggle to source verified, ethically-collected venom. No digital marketplace or B2B platform connects suppliers to end-users at scale.",
    },
  ];

  return (
    <section id="problem" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-red-400 uppercase tracking-widest">
            The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            A <span className="text-red-400">$39M/Gallon</span> Industry
            <br />
            Trapped in the Dark Ages
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Scorpion venom is the most expensive liquid on Earth, yet the industry operates with
            medieval methods, zero technology, and devastating human cost.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="glass rounded-2xl p-8 hover:border-red-500/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-4 group-hover:bg-red-500/20 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const pillars = [
    {
      icon: <Bot size={32} />,
      title: "Autonomous Scorpion Hunting Robots",
      desc: "AI-guided nocturnal robots using UV-blue light technology to detect fluorescent scorpions under rocks, in burrows, and across desert terrain. Operates all night, zero human risk.",
      highlights: ["UV fluorescence detection", "Terrain-adaptive mobility", "GPS-mapped collection routes", "24/7 autonomous operation"],
    },
    {
      icon: <FlaskConical size={32} />,
      title: "Automated Venom Extraction",
      desc: "Robotic milking systems inspired by Morocco's VES-4® technology, enhanced with AI-optimized electrical stimulation calibrated per species for maximum yield and animal safety.",
      highlights: ["150+ scorpions/day per unit", "Species-specific calibration", "Non-lethal extraction", "Pharmaceutical-grade purity"],
    },
    {
      icon: <Eye size={32} />,
      title: "AI Vision & Analytics",
      desc: "Computer vision for instant species identification, population counting, venom yield estimation, and quality grading. Real-time dashboards for full operational visibility.",
      highlights: ["Species classification AI", "Population density mapping", "Yield prediction models", "Quality assurance scoring"],
    },
    {
      icon: <Globe2 size={32} />,
      title: "Global B2B Marketplace",
      desc: "Digital platform connecting verified venom suppliers to pharmaceutical labs, research institutions, and biotech companies worldwide. Full traceability from field to lab.",
      highlights: ["Lab & pharma directory", "Cold-chain logistics", "Blockchain traceability", "Automated compliance docs"],
    },
  ];

  return (
    <section id="solution" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Our Solution
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            Four Pillars of{" "}
            <span className="text-gradient-gold">Innovation</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Mesmam builds the full-stack infrastructure to industrialize, ethicalize, and globalize
            scorpion venom — from desert to lab bench.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="glass-gold rounded-2xl p-8 hover:shadow-lg hover:shadow-gold/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold mb-5 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-5">{p.desc}</p>
              <div className="grid grid-cols-2 gap-2">
                {p.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2 text-sm text-gold/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const techs = [
    {
      icon: <Cpu size={24} />,
      title: "UV Detection Robotics",
      desc: "Scorpions fluoresce bright cyan under UV light (395nm). Our robots use UV-A LED arrays with high-sensitivity cameras to spot scorpions at distance, even hidden under rocks or in burrows. Thermal imaging adds a second detection layer for burrowed specimens.",
    },
    {
      icon: <Eye size={24} />,
      title: "Scorpion AI Camera",
      desc: "Deep learning models trained on 2,500+ scorpion species for real-time classification. Instant identification of species, sex, maturity, and estimated venom potency. Deployed on edge devices for field use without internet connectivity.",
    },
    {
      icon: <Microscope size={24} />,
      title: "Venom Analyzer",
      desc: "Portable spectrometry-based venom analysis device for field-level quality testing. Measures protein concentration, toxin composition, and purity grade in minutes — replacing expensive lab tests that take days.",
    },
    {
      icon: <Zap size={24} />,
      title: "Smart Milking Station",
      desc: "Programmable electrical stimulation system with species-specific protocols. Pneumatic capture, automated venom collection, sterile storage, and real-time yield tracking. Processes 150+ scorpions per day per unit.",
    },
    {
      icon: <Target size={24} />,
      title: "Population Mapper",
      desc: "Drone-assisted survey system that maps scorpion population densities across regions. Combines satellite data, ground-truth robot data, and ecological models to predict optimal collection zones and seasonal patterns.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Yield Prediction Engine",
      desc: "Machine learning models that predict venom yield based on species, size, season, geography, and extraction history. Optimizes collection routes and production planning for maximum efficiency.",
    },
  ];

  return (
    <section id="technology" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-uv-glow uppercase tracking-widest">
            Technology Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            Deep Tech for a{" "}
            <span className="text-gradient-blue">Deep Industry</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            From UV robotics to AI species classification — every tool purpose-built for
            the scorpion venom supply chain.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techs.map((t) => (
            <motion.div
              key={t.title}
              variants={fadeUp}
              className="glass rounded-2xl p-6 hover:border-uv-glow/20 transition-colors group"
            >
              <div className="w-11 h-11 rounded-lg bg-uv-blue/10 flex items-center justify-center text-uv-glow mb-4 group-hover:bg-uv-blue/20 transition-colors">
                {t.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{t.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 glass-gold rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-bold mb-2 text-gold">
            🦂 Did You Know? UV Scorpion Hunting
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Scorpions contain fluorescent molecules in their exoskeleton (beta-carboline and
            7-hydroxy-4-methylcoumarin) that glow bright blue-green under UV light. Experienced
            hunters use this trick at night with UV flashlights. Our robots automate this —
            scanning terrain with UV arrays, identifying species with AI, and safely collecting
            specimens without human risk. They work all night, every night, rain or shine.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MarketSection() {
  const competitors = [
    {
      name: "Venomers",
      country: "Iran",
      desc: "World's largest scorpion farm. 4M scorpions, 220,000 m², 12L venom/year. University partnerships.",
      weakness: "Farm-only model, no field robotics, no B2B platform, geopolitical limitations on global trade.",
    },
    {
      name: "Scorpx",
      country: "Egypt",
      desc: "Cairo-based venom extraction company selling to research centers and pharma.",
      weakness: "Manual extraction, limited scale, no technology differentiation, local market focus.",
    },
    {
      name: "Volta Venom Labs",
      country: "USA",
      desc: "Arizona-based purified snake & scorpion venom supplier for pharmaceutical research.",
      weakness: "Supply-focused, no collection automation, no global marketplace, limited species range.",
    },
    {
      name: "Wigmore Trading",
      country: "Nigeria",
      desc: "International scorpion venom exporter sourcing from Africa and Turkey.",
      weakness: "Trading company only — no technology, no extraction capability, no quality control infrastructure.",
    },
  ];

  return (
    <section id="market" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-venom-green uppercase tracking-widest">
            Market & Competition
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            Massive Market,{" "}
            <span className="text-venom-green">Zero Tech Players</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            The scorpion venom industry is growing rapidly, driven by pharmaceutical breakthroughs.
            Yet no company has applied serious technology to the supply chain.
          </p>
        </motion.div>

        {/* Market stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "$39M", sub: "per gallon", detail: "Deathstalker venom" },
            { value: "$12K", sub: "per gram", detail: "Rare species premium" },
            { value: "150+", sub: "per day", detail: "Robot extraction rate" },
            { value: "2,500+", sub: "species", detail: "Global biodiversity" },
          ].map((s) => (
            <motion.div
              key={s.sub}
              variants={fadeUp}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-black text-venom-green">{s.value}</div>
              <div className="text-sm text-gray-400 mt-1">{s.sub}</div>
              <div className="text-xs text-gray-600 mt-1">{s.detail}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Applications driving demand */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-gold rounded-2xl p-8 mb-16"
        >
          <h3 className="text-xl font-bold mb-6 text-gold">Pharmaceutical Applications Driving Demand</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Cancer treatment (brain, breast, prostate tumors)",
              "Non-opioid pain relievers (chlorotoxin peptides)",
              "Autoimmune diseases (arthritis, lupus, MS)",
              "Antimicrobial drug discovery",
              "Cardiovascular research compounds",
              "Anti-venom serum production",
              "Immunosuppressive therapy",
              "Cosmetic & skincare bioactives",
              "Neurological disorder research",
            ].map((app) => (
              <div key={app} className="flex items-start gap-2 text-sm text-gray-300">
                <Star size={14} className="text-gold mt-0.5 shrink-0" />
                {app}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Competitor analysis */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Competitive Landscape
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {competitors.map((c) => (
              <div
                key={c.name}
                className="glass rounded-2xl p-6 hover:border-venom-green/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">{c.name}</h4>
                    <span className="text-xs text-gray-500">{c.country}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-3">{c.desc}</p>
                <div className="flex items-start gap-2 text-sm text-red-400/80 bg-red-500/5 rounded-lg p-3">
                  <Target size={14} className="mt-0.5 shrink-0" />
                  <span>{c.weakness}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 glass-gold rounded-2xl p-6 text-center">
            <h4 className="text-lg font-bold text-gold mb-2">
              Mesmam&apos;s Unfair Advantage
            </h4>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No competitor combines autonomous collection robotics + AI species ID + automated
              extraction + a global B2B marketplace. Mesmam is the only full-stack,
              technology-first player in this space.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RevenueSection() {
  const streams = [
    {
      icon: <HandCoins size={24} />,
      title: "Venom Sales (B2B)",
      desc: "Direct sales of pharmaceutical-grade scorpion venom to labs, pharma companies, and research institutions globally. Premium pricing for rare species and certified purity.",
      potential: "Primary Revenue",
    },
    {
      icon: <Bot size={24} />,
      title: "Robotics-as-a-Service",
      desc: "Lease autonomous hunting and extraction robots to partner farms, cooperatives, and government wildlife programs. Subscription model with per-unit extraction fees.",
      potential: "Recurring Revenue",
    },
    {
      icon: <Globe2 size={24} />,
      title: "Marketplace Commissions",
      desc: "Platform fees on every transaction between venom suppliers and end-buyers on the Mesmam B2B marketplace. Transaction fees + premium listing features.",
      potential: "Platform Revenue",
    },
    {
      icon: <Microscope size={24} />,
      title: "Analytics & Data",
      desc: "Sell anonymized population data, species distribution maps, and yield analytics to conservation organizations, governments, and pharmaceutical R&D teams.",
      potential: "Data Revenue",
    },
    {
      icon: <Users size={24} />,
      title: "Community Network",
      desc: "Onboard rural collectors as micro-entrepreneurs. Provide equipment, training, and guaranteed buy-back. Fair-trade model creates loyal supply network across North Africa.",
      potential: "Social Impact",
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "Licensing & Consulting",
      desc: "License proprietary technology and protocols to international partners. Consulting services for regulatory compliance, farm setup, and venom industry entry.",
      potential: "IP Revenue",
    },
  ];

  return (
    <section id="revenue" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Revenue Model
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            Six Revenue Streams,{" "}
            <span className="text-gradient-gold">One Platform</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Diversified monetization across hardware, software, marketplace, and direct sales
            — built for sustainable growth and global scale.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {streams.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="glass rounded-2xl p-6 hover:border-gold/20 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                  {s.icon}
                </div>
                <span className="text-xs font-medium text-gold/60 bg-gold/5 px-3 py-1 rounded-full">
                  {s.potential}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ValueChainSection() {
  const steps = [
    { icon: <MapPin size={20} />, label: "Scout", desc: "AI drones map scorpion populations" },
    { icon: <Bot size={20} />, label: "Collect", desc: "UV robots hunt autonomously at night" },
    { icon: <Eye size={20} />, label: "Identify", desc: "AI camera classifies species instantly" },
    { icon: <Zap size={20} />, label: "Extract", desc: "Robotic milking stations process venom" },
    { icon: <Microscope size={20} />, label: "Analyze", desc: "Portable analyzer grades quality" },
    { icon: <Factory size={20} />, label: "Process", desc: "Lyophilization & pharmaceutical prep" },
    { icon: <Truck size={20} />, label: "Ship", desc: "Cold-chain logistics to buyers" },
    { icon: <Building2 size={20} />, label: "Deliver", desc: "Labs & pharma receive certified venom" },
  ];

  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-uv-glow uppercase tracking-widest">
            Value Chain
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            Desert to Lab Bench,{" "}
            <span className="text-gradient-blue">Fully Integrated</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="glass rounded-xl p-4 text-center relative group"
            >
              <div className="text-xs text-gold/40 font-mono mb-2">0{i + 1}</div>
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mx-auto mb-2 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <div className="font-bold text-sm">{s.label}</div>
              <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
              {i < steps.length - 1 && (
                <ArrowRight
                  size={14}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 text-gold/30 hidden lg:block"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LegalSection() {
  const items = [
    {
      icon: <Scale size={24} />,
      title: "CITES Compliance",
      desc: "Full compliance with the Convention on International Trade in Endangered Species. Proper permits for all protected species (Appendix II). Documentation of legal origin for every specimen — wild-caught or captive-bred.",
    },
    {
      icon: <Shield size={24} />,
      title: "Tunisian Wildlife Law",
      desc: "Operating under Tunisian environmental regulations and the Ministry of Agriculture wildlife management framework. Obtaining necessary permits for collection, breeding, and export of scorpion-derived products.",
    },
    {
      icon: <Leaf size={24} />,
      title: "Ethical & Sustainable Sourcing",
      desc: "Non-lethal extraction methods that preserve animal welfare. Population monitoring ensures sustainable harvest rates. Release-after-milking protocols maintain wild populations. No endangered species exploitation.",
    },
    {
      icon: <Globe2 size={24} />,
      title: "International Export Licensing",
      desc: "Pharmaceutical-grade handling, cold-chain certification, and biosafety transport compliance (IATA DGR). Export licenses for EU, US, and Asian markets. Full chain-of-custody documentation.",
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "Quality & Safety Certifications",
      desc: "ISO 17025 laboratory accreditation pathway. GMP-compliant processing facilities. Third-party quality auditing. Batch traceability from field collection to final delivery.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Corporate Governance",
      desc: "Tunisian Startup Act registration for tax benefits and investor protections. Transparent corporate structure with international advisory board. ESG reporting framework from day one.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Legal & Compliance
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            Built on{" "}
            <span className="text-gradient-gold">Trust & Transparency</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Navigating complex international regulations with a compliance-first approach.
            Every step documented, every source ethical.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="glass rounded-2xl p-6 hover:border-gold/20 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-venom-green uppercase tracking-widest">
            Social Impact
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            Empowering{" "}
            <span className="text-venom-green">Rural Communities</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Mesmam transforms dangerous, informal scorpion hunting into a safe, dignified,
            and profitable profession for rural families across Tunisia and North Africa.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <Users size={28} />,
              title: "Jobs for Rural Youth",
              desc: "Training programs turn unemployed youth into certified venom technicians and robot operators. Steady income replaces seasonal agricultural work.",
            },
            {
              icon: <Shield size={28} />,
              title: "Zero Human Risk",
              desc: "Robots replace dangerous night hunts. No more scorpion stings, snake bites, or desert accidents. Technology saves lives.",
            },
            {
              icon: <HandCoins size={28} />,
              title: "Fair-Trade Income",
              desc: "Guaranteed buy-back prices eliminate middlemen exploitation. Transparent pricing means collectors keep more of the value they create.",
            },
            {
              icon: <Leaf size={28} />,
              title: "Conservation Impact",
              desc: "Sustainable harvesting with population monitoring. Release-after-milking preserves ecosystems. Data supports conservation policy.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="glass rounded-2xl p-6 border-venom-green/10 hover:border-venom-green/20 transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-venom-green/10 flex items-center justify-center text-venom-green mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      timeline: "Months 1–6",
      items: [
        "Company registration under Tunisian Startup Act",
        "Assemble core team (robotics, AI, biology, business)",
        "Launch landing page and social media presence",
        "Begin scorpion species research in Southern Tunisia",
        "Prototype UV detection robot v1",
        "Establish relationships with 3+ pharma labs",
        "Apply for CITES and export permits",
      ],
      status: "current",
    },
    {
      phase: "Phase 2",
      title: "Prototype & Validate",
      timeline: "Months 7–12",
      items: [
        "Field-test autonomous hunting robot",
        "Build automated extraction station prototype",
        "Train AI species classification model (50+ species)",
        "First commercial venom sales to research labs",
        "Onboard 20+ rural collectors as partners",
        "Secure pre-seed funding ($200K–$500K)",
        "File provisional patents on key technologies",
      ],
      status: "upcoming",
    },
    {
      phase: "Phase 3",
      title: "Scale & Market",
      timeline: "Months 13–24",
      items: [
        "Launch B2B marketplace MVP",
        "Deploy robot fleet across 5 collection zones",
        "Expand to Morocco, Algeria, and Libya",
        "Seed round ($1M–$3M)",
        "Establish cold-chain logistics network",
        "ISO 17025 lab certification",
        "100+ active rural collector partners",
      ],
      status: "upcoming",
    },
    {
      phase: "Phase 4",
      title: "Global Expansion",
      timeline: "Months 25–48",
      items: [
        "Enter Middle East and Sub-Saharan Africa markets",
        "License technology to international partners",
        "Series A ($5M–$15M)",
        "Full pharmaceutical supply chain certification",
        "1,000+ rural partners across 10+ countries",
        "R&D center for venom-derived drug discovery",
        "IPO or strategic acquisition pathway",
      ],
      status: "upcoming",
    },
  ];

  return (
    <section id="roadmap" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Roadmap
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            From Idea to{" "}
            <span className="text-gradient-gold">Global Industry</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {phases.map((p) => (
            <motion.div
              key={p.phase}
              variants={fadeUp}
              className={`rounded-2xl p-6 ${
                p.status === "current"
                  ? "glass-gold glow-gold"
                  : "glass"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    p.status === "current" ? "text-gold" : "text-gray-500"
                  }`}
                >
                  {p.phase}
                </span>
                {p.status === "current" && (
                  <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">
                    Now
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold mb-1">{p.title}</h3>
              <div className="text-xs text-gray-500 mb-4">{p.timeline}</div>
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                        p.status === "current" ? "bg-gold" : "bg-gray-600"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyTunisiaSection() {
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Why Tunisia
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            The Perfect <span className="text-gradient-gold">Launchpad</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Rich Scorpion Biodiversity",
              desc: "Tunisia's southern desert regions (Sahara border) host diverse scorpion populations including medically significant species like Androctonus australis and Buthus occitanus.",
            },
            {
              title: "Startup Act Benefits",
              desc: "Tunisia's 2018 Startup Act offers tax exemptions, social security coverage for founders, international banking access, and streamlined incorporation for tech startups.",
            },
            {
              title: "Strategic Geographic Position",
              desc: "Gateway between Africa and Europe. Close proximity to North African scorpion habitats (Morocco, Algeria, Libya) and easy access to EU pharmaceutical markets.",
            },
            {
              title: "Strong Engineering Talent",
              desc: "Tunisia produces 10,000+ engineering graduates annually. Strong AI, robotics, and biotech research base at universities in Tunis, Sfax, and Sousse.",
            },
            {
              title: "Low Operating Costs",
              desc: "Competitive labor costs, affordable real estate, and government incentives for technology companies make Tunisia one of the most cost-effective bases in the Mediterranean.",
            },
            {
              title: "Rural Community Need",
              desc: "High unemployment in southern regions creates both the need and the workforce for scorpion collection operations. Mesmam brings dignified tech jobs to underserved areas.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="glass-gold rounded-2xl p-6"
            >
              <h3 className="font-bold mb-2 text-gold">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Join Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4 mb-6">
            Let&apos;s Build the Future of{" "}
            <span className="text-gradient-gold">Venom</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Whether you&apos;re an investor, pharma researcher, potential partner, or rural community
            leader — we want to hear from you. Mesmam is building something unprecedented.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              icon: <DollarSign size={24} />,
              title: "Investors",
              desc: "Pre-seed round open. Join the deepest moat in biotech supply chain.",
              cta: "Investment Deck",
            },
            {
              icon: <FlaskConical size={24} />,
              title: "Labs & Pharma",
              desc: "Need verified scorpion venom? We're building the world's most reliable supply.",
              cta: "Partner With Us",
            },
            {
              icon: <Users size={24} />,
              title: "Communities",
              desc: "Rural collectors and cooperatives — earn fair income with zero risk.",
              cta: "Join Network",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="glass-gold rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-gold/10 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm text-gold font-semibold">
                {item.cta} <ArrowRight size={14} />
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-gold rounded-2xl p-8 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <a
              href="mailto:contact@mesmam.com"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Mail size={18} />
              contact@mesmam.com
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <ExternalLink size={18} />
              LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <MapPin size={18} />
              Tunis, Tunisia
            </a>
          </div>

          <a
            href="mailto:contact@mesmam.com"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold text-lg hover:shadow-xl hover:shadow-gold/30 transition-all hover:scale-105"
          >
            Get in Touch <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
              <span className="text-black font-bold">م</span>
            </div>
            <span className="font-bold">
              <span className="text-gradient-gold">Mesmam</span>{" "}
              <span className="text-gray-600">مسمام</span>
            </span>
          </div>
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Mesmam. Revolutionizing the scorpion venom industry.
            From Tunisia to the world.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TechnologySection />
      <MarketSection />
      <RevenueSection />
      <ValueChainSection />
      <LegalSection />
      <ImpactSection />
      <RoadmapSection />
      <WhyTunisiaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
