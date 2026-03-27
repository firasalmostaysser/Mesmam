"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  ArrowRight,
  FileText,
  Users,
  Bot,
  Globe2,
  FlaskConical,
  Scale,
  Building2,
  Target,
  Lightbulb,
  DollarSign,
  Eye,
  Cpu,
  Rocket,
  BookOpen,
  GraduationCap,
  Handshake,
  Megaphone,
  Wrench,
  MapPin,
} from "lucide-react";
import { PageNav, PageHero, PageFooter, fadeUp } from "@/components/shared";

interface ChecklistItem {
  task: string;
  detail: string;
  done?: boolean;
}

function PhaseCard({
  phase,
  title,
  timeline,
  color,
  icon,
  categories,
}: {
  phase: string;
  title: string;
  timeline: string;
  color: string;
  icon: React.ReactNode;
  categories: { name: string; icon: React.ReactNode; items: ChecklistItem[] }[];
}) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}>
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-black">{phase}: {title}</h3>
          </div>
          <p className="text-sm text-gray-500">{timeline}</p>
        </div>
      </div>

      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat.name} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                {cat.icon}
              </div>
              <h4 className="font-bold">{cat.name}</h4>
            </div>
            <div className="space-y-3">
              {cat.items.map((item) => (
                <div key={item.task} className="flex items-start gap-3">
                  {item.done ? (
                    <CheckCircle2 size={18} className="text-green-400 mt-0.5 shrink-0" />
                  ) : (
                    <Circle size={18} className="text-gray-600 mt-0.5 shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className={`text-sm font-medium ${item.done ? "text-green-300 line-through opacity-70" : ""}`}>
                      {item.task}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ActionPlanPage() {
  return (
    <main>
      <PageNav current="/action-plan" />

      <PageHero
        badge="Complete Step-by-Step Checklist"
        title="Action Plan:"
        titleHighlight="What to Do Next"
        subtitle="Every single step you need to take — from today to global scale. Organized by phase with detailed checklists, responsible parties, and dependencies."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* IMMEDIATE ACTIONS */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-gold rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-gold mb-2">Priority Actions — This Week</h3>
          <p className="text-gray-400 text-sm mb-6">The very first things to do right now to get momentum.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { task: "Register domain mesmam.com", detail: "Secure the brand online before anyone else. Also grab mesmam.tn" },
              { task: "Create social media profiles", detail: "LinkedIn Company Page, Twitter/X, Instagram, YouTube. Consistent branding مسمام" },
              { task: "Set up business email", detail: "contact@mesmam.com, founder@mesmam.com via Google Workspace or similar" },
              { task: "Deploy landing page", detail: "Push the Next.js site to Vercel. Share URL for early feedback and credibility" },
              { task: "Draft 1-page executive summary", detail: "PDF version of the pitch for quick email shares to potential co-founders" },
              { task: "Start a Notion/docs workspace", detail: "Central hub for all documents, research, meeting notes, progress tracking" },
            ].map((item) => (
              <div key={item.task} className="flex items-start gap-3">
                <Circle size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-medium">{item.task}</div>
                  <div className="text-xs text-gray-500">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PHASE 1 */}
        <PhaseCard
          phase="Phase 1"
          title="Foundation & Legal"
          timeline="Months 1–3"
          color="bg-blue-500/10 text-blue-400"
          icon={<Building2 size={28} />}
          categories={[
            {
              name: "Company Registration",
              icon: <FileText size={18} />,
              items: [
                { task: "Choose legal structure (SARL recommended)", detail: "Consult Tunisian business lawyer. SARL is the most common for startups." },
                { task: "Register company name 'Mesmam' with RNE", detail: "Registre National des Entreprises. Check name availability first." },
                { task: "Obtain Tax ID (Matricule Fiscal)", detail: "From Ministry of Finance. Required for all business activities." },
                { task: "Open business bank account", detail: "Major Tunisian bank (BIAT, Amen Bank, etc.). Set up foreign currency account." },
                { task: "Register with CNSS (Social Security)", detail: "National Social Security Fund. Required for hiring employees." },
                { task: "Apply for Tunisian Startup Act label", detail: "portail.startup.gov.tn/register — unlocks tax exemptions, investor benefits" },
                { task: "Trademark 'Mesmam مسمام' in Tunisia", detail: "INNORPI (National Institute of Standardization). Also file internationally via Madrid Protocol." },
              ],
            },
            {
              name: "Regulatory & Legal Setup",
              icon: <Scale size={18} />,
              items: [
                { task: "Hire specialized environmental / trade lawyer", detail: "Must understand CITES, wildlife law, and pharmaceutical export regulations." },
                { task: "Identify CITES-listed scorpion species in Tunisia", detail: "Check CITES database for Appendix I/II/III species. Most scorpions are NOT listed." },
                { task: "Contact Tunisia's CITES Management Authority", detail: "Ministry of Agriculture, Water Resources and Fisheries. Establish relationship early." },
                { task: "Apply for wildlife collection permit", detail: "Required before any field collection activities begin." },
                { task: "Prepare environmental impact assessment (EIA)", detail: "Demonstrate sustainable harvesting methods. Include population monitoring plan." },
                { task: "Research target country import requirements", detail: "EU (REACH), US (FDA/APHIS), UAE, Japan — each has specific rules for biological material." },
                { task: "Draft standard operating procedures (SOPs)", detail: "Collection, extraction, processing, storage, and shipping protocols." },
              ],
            },
            {
              name: "Team Building",
              icon: <Users size={18} />,
              items: [
                { task: "Write job descriptions for core roles", detail: "CTO (Robotics), Head of Biology, AI/ML Engineer, Business Development" },
                { task: "Post on LinkedIn, Tunisian tech communities", detail: "TANITJOBS, Facebook tech groups, university career centers" },
                { task: "Reach out to engineering universities", detail: "ENIT, INSAT, ENIS (Sfax), FST (Tunis). Propose thesis/internship collaborations." },
                { task: "Contact biology/zoology departments", detail: "Faculty of Sciences Tunis, Institut Pasteur, veterinary schools." },
                { task: "Build advisory board shortlist", detail: "Need: toxinologist, robotics professor, pharma exec, startup mentor" },
                { task: "Set up equity vesting structure", detail: "Standard 4-year vesting with 1-year cliff for founding team members." },
              ],
            },
            {
              name: "Research & Validation",
              icon: <BookOpen size={18} />,
              items: [
                { task: "Literature review: Tunisian scorpion species", detail: "Map all species present in Southern Tunisia. Identify medically important ones." },
                { task: "Field survey trip to Tozeur / Gafsa / Tataouine", detail: "Observe scorpion habitats, meet local communities, assess terrain for robots." },
                { task: "Contact 20+ pharmaceutical labs globally", detail: "Cold email/LinkedIn to procurement teams. Ask about venom sourcing challenges." },
                { task: "Validate pricing with 5+ potential buyers", detail: "Confirm willingness to pay $8K-$12K/gram for certified, traceable venom." },
                { task: "Study VES-4® robot from Morocco in detail", detail: "Published papers, patent filings. Understand existing extraction technology." },
                { task: "Connect with Ben M'sik Hassan II University (Morocco)", detail: "VES-4® inventors. Explore collaboration or licensing opportunities." },
              ],
            },
          ]}
        />

        {/* PHASE 2 */}
        <PhaseCard
          phase="Phase 2"
          title="Prototype & First Revenue"
          timeline="Months 4–9"
          color="bg-gold/10 text-gold"
          icon={<Wrench size={28} />}
          categories={[
            {
              name: "Robot Prototype Development",
              icon: <Bot size={18} />,
              items: [
                { task: "Design UV detection system", detail: "395nm UV-A LED array + high-sensitivity camera. Test detection range and accuracy." },
                { task: "Select robot chassis platform", detail: "All-terrain mobile base. Consider ROS (Robot Operating System) for navigation." },
                { task: "Integrate thermal imaging", detail: "FLIR or similar thermal camera for burrowed scorpion detection." },
                { task: "Build autonomous navigation system", detail: "GPS waypoint following, obstacle avoidance, return-to-base. Lidar + IMU." },
                { task: "Design specimen collection mechanism", detail: "Safe, non-harmful capture and containment system." },
                { task: "First field test (controlled environment)", detail: "Test with captive scorpions in known area before wild deployment." },
                { task: "Iterate on v1 based on field test results", detail: "Fix issues, improve detection accuracy, test in varied terrain." },
              ],
            },
            {
              name: "Extraction & Processing Setup",
              icon: <FlaskConical size={18} />,
              items: [
                { task: "Build or acquire venom milking station", detail: "Electrical stimulation unit with programmable species profiles." },
                { task: "Procure bench-top lyophilizer", detail: "$15K-$30K investment. Essential for pharmaceutical-grade venom processing." },
                { task: "Set up cold storage (-80°C freezer)", detail: "For raw venom before lyophilization. Backup power essential." },
                { task: "Develop species-specific extraction protocols", detail: "Voltage, duration, and technique calibrated per species for max yield." },
                { task: "First venom extraction pilot", detail: "Extract, process, test quality. Document entire workflow." },
                { task: "Send samples to 3 labs for independent quality testing", detail: "Third-party validation of purity and protein concentration." },
              ],
            },
            {
              name: "AI & Software Development",
              icon: <Eye size={18} />,
              items: [
                { task: "Collect training data: scorpion images by species", detail: "Web scraping, field photography, academic datasets. Need 1,000+ images per target species." },
                { task: "Train species classification model (v1)", detail: "Start with 50 most common species. Use transfer learning (ResNet/EfficientNet)." },
                { task: "Deploy model on edge device (Jetson Nano / RPi)", detail: "Must work offline in the field without internet." },
                { task: "Build basic dashboard for operations tracking", detail: "Robot status, collection counts, extraction records, inventory." },
                { task: "Develop venom inventory management system", detail: "Track batches: species, quantity, quality grade, storage location, expiry." },
                { task: "Start marketplace wireframes and user research", detail: "Interview 10+ potential lab buyers about desired platform features." },
              ],
            },
            {
              name: "First Sales & Business Development",
              icon: <Handshake size={18} />,
              items: [
                { task: "Build pharma lab contact database (web scraping)", detail: "Scrape university lab directories, pharma company websites, conference attendee lists." },
                { task: "Cold outreach campaign (email + LinkedIn)", detail: "Personalized messages to lab procurement managers. Offer samples." },
                { task: "Send free venom samples to 5-10 labs", detail: "Build trust and verify quality. Include certificates of analysis." },
                { task: "Secure first Letter of Intent (LOI)", detail: "Non-binding but demonstrates market demand for investors." },
                { task: "Close first paid venom sale", detail: "Target: 1-5 grams to a research lab. Revenue: $8K-$60K." },
                { task: "Attend BIO International Convention or Venom Week", detail: "Networking, credibility, buyer meetings. Consider poster presentation." },
              ],
            },
          ]}
        />

        {/* PHASE 3 */}
        <PhaseCard
          phase="Phase 3"
          title="Scale & Fundraise"
          timeline="Months 10–18"
          color="bg-purple-500/10 text-purple-400"
          icon={<Rocket size={28} />}
          categories={[
            {
              name: "Fundraising",
              icon: <DollarSign size={18} />,
              items: [
                { task: "Prepare pitch deck (PDF + presentation)", detail: "15-slide deck with traction data. The /pitch-deck page is your starting point." },
                { task: "Create financial model spreadsheet", detail: "Detailed Excel/Sheets model with assumptions, scenarios, sensitivity analysis." },
                { task: "Identify 50+ target investors", detail: "Tunisian VCs (AfricInvest, Flat6Labs Tunis), international deep-tech funds, impact investors." },
                { task: "Apply to accelerator programs", detail: "Y Combinator, Techstars, Flat6Labs, StartupBootcamp, IntilaQ (Tunisia)." },
                { task: "Warm intros through advisory board", detail: "Leverage advisors' networks for investor introductions." },
                { task: "Run investor meeting pipeline", detail: "Track in CRM: outreach → meeting → follow-up → term sheet → close." },
                { task: "Close pre-seed round ($300K-$500K)", detail: "Target: 3-5 angel investors or 1-2 micro VCs. SAFE or convertible note." },
                { task: "Apply for government grants", detail: "Tunisian Innovation Fund, AfDB programs, EU Horizon Europe (Tunisia eligible)." },
              ],
            },
            {
              name: "Operations Scale-Up",
              icon: <Target size={18} />,
              items: [
                { task: "Deploy 5 robots across Southern Tunisia", detail: "Tozeur, Gafsa, Tataouine, Medenine, Kebili regions." },
                { task: "Onboard 20+ rural collector partners", detail: "Training, equipment provision, guaranteed buy-back contracts." },
                { task: "Establish extraction facility in Tozeur", detail: "Clean room, milking stations, lyophilizer, cold storage." },
                { task: "Hire operations manager for field team", detail: "Local hire who knows the terrain and communities." },
                { task: "Implement quality management system (QMS)", detail: "ISO 17025-aligned. Batch tracking, calibration records, SOPs." },
                { task: "Begin export permit applications", detail: "CITES, health certificates, customs documentation for target markets." },
              ],
            },
            {
              name: "Product Development",
              icon: <Lightbulb size={18} />,
              items: [
                { task: "Robot v2 with improved detection", detail: "Higher accuracy, longer range, better terrain handling." },
                { task: "AI model v2: 200+ species", detail: "Expand training data. Add population estimation capability." },
                { task: "MVP marketplace platform", detail: "Supplier profiles, product listings, order management, basic compliance." },
                { task: "Portable venom analyzer prototype", detail: "Spectrometry-based field quality testing device." },
                { task: "Mobile app for rural collectors", detail: "GPS tracking, specimen logging, earnings dashboard, training videos." },
              ],
            },
            {
              name: "Marketing & Brand Building",
              icon: <Megaphone size={18} />,
              items: [
                { task: "Launch content marketing (blog + video)", detail: "Educational content about scorpion venom industry, behind-the-scenes, tech demos." },
                { task: "PR outreach to tech and biotech media", detail: "TechCrunch, Wired, Nature Biotechnology, African tech publications." },
                { task: "Produce demo video of robot in action", detail: "Night footage of UV robot detecting and collecting scorpions. Crucial for fundraising." },
                { task: "Build case studies from first lab customers", detail: "Testimonials, quality reports, partnership stories." },
                { task: "Apply for innovation awards", detail: "African Innovation Award, MIT Solve, CES Innovation, Katerva Award." },
              ],
            },
          ]}
        />

        {/* PHASE 4 */}
        <PhaseCard
          phase="Phase 4"
          title="Regional Expansion"
          timeline="Months 19–36"
          color="bg-green-500/10 text-green-400"
          icon={<Globe2 size={28} />}
          categories={[
            {
              name: "Geographic Expansion",
              icon: <MapPin size={18} />,
              items: [
                { task: "Expand to Morocco", detail: "Rich scorpion diversity, proximity to Tunisia, strong research community (VES-4® inventors)." },
                { task: "Expand to Algeria", detail: "Vast Saharan territory, significant scorpion populations, shared border." },
                { task: "Enter Middle East (UAE, Saudi Arabia, Jordan)", detail: "High scorpion density, wealthy pharma markets, innovation-friendly regulations." },
                { task: "Explore Sub-Saharan Africa (Kenya, Nigeria)", detail: "Different species, new markets, existing trading networks." },
                { task: "Establish distribution in EU and US", detail: "Partner with existing biotech distributors for last-mile delivery." },
              ],
            },
            {
              name: "Technology Maturation",
              icon: <Cpu size={18} />,
              items: [
                { task: "Robot v3: fully autonomous swarm operation", detail: "Multiple robots coordinating, covering larger areas, sharing data." },
                { task: "AI model v3: 1,000+ species, real-time analytics", detail: "Cloud + edge hybrid. Research-grade species distribution data." },
                { task: "Full marketplace platform with blockchain traceability", detail: "Immutable supply chain records. Buyer confidence tool." },
                { task: "Venom analyzer production model", detail: "Move from prototype to manufactured device for field deployment." },
                { task: "Predictive yield optimization engine", detail: "ML models for seasonal planning, route optimization, species prioritization." },
              ],
            },
            {
              name: "Team & Organization",
              icon: <Users size={18} />,
              items: [
                { task: "Scale team to 35-65 people", detail: "Engineering, biology, operations, sales, legal, support." },
                { task: "Open satellite offices in key markets", detail: "Casablanca, Dubai, and/or a European city for pharma access." },
                { task: "Recruit VP Sales for pharma channel", detail: "Someone with pharmaceutical industry rolodex and deal-making experience." },
                { task: "Build customer success team", detail: "Dedicated support for lab customers on quality, logistics, compliance." },
                { task: "Establish R&D partnerships with 5+ universities", detail: "Joint research on venom-derived drug candidates." },
              ],
            },
            {
              name: "Next Fundraise",
              icon: <DollarSign size={18} />,
              items: [
                { task: "Prepare Seed round materials", detail: "Updated deck, financial model with actual traction data, customer case studies." },
                { task: "Close Seed round ($1M-$3M)", detail: "Target: institutional VCs, deep-tech specialists, impact investors." },
                { task: "Begin Series A preparation", detail: "Build toward $5M-$15M raise based on multi-country revenue and tech differentiation." },
              ],
            },
          ]}
        />

        {/* STUDIES NEEDED */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-uv-blue/10 text-uv-glow">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black">Required Studies & Research</h3>
              <p className="text-sm text-gray-500">Research you need to conduct or commission before key decisions</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Feasibility Study: UV Robotic Collection in Tunisian Terrain",
                questions: [
                  "Can UV detection reliably spot scorpions in rocky/sandy desert terrain?",
                  "What detection range is achievable with current LED/camera technology?",
                  "How do seasonal and weather conditions affect scorpion surface activity?",
                  "What battery life is needed for 8+ hour nocturnal operations?",
                  "What is the cost-per-specimen for robotic vs. manual collection?",
                ],
                who: "Robotics engineer + field biologist",
              },
              {
                title: "Market Validation Study: Pharmaceutical Lab Demand",
                questions: [
                  "How many labs actively purchase scorpion venom globally?",
                  "What quantities do they need per year?",
                  "What quality certifications do they require?",
                  "What are their biggest pain points in current sourcing?",
                  "Would they pay a premium for ethical, traceable venom?",
                ],
                who: "Business development + pharma industry contacts",
              },
              {
                title: "Species Survey: Southern Tunisia Scorpion Populations",
                questions: [
                  "Which species are present in each target region?",
                  "What are population densities per square kilometer?",
                  "Which species produce the most valuable venom?",
                  "What are seasonal activity patterns?",
                  "Are any target species endangered or CITES-listed?",
                ],
                who: "Zoologist / arachnologist",
              },
              {
                title: "Legal & Regulatory Landscape Study",
                questions: [
                  "What specific permits are required in Tunisia for scorpion collection?",
                  "Are any Tunisian scorpion species protected under national law?",
                  "What are the export documentation requirements for biological materials?",
                  "How do EU, US, and Asian regulations differ for venom imports?",
                  "What liability insurance is needed for venomous animal handling?",
                ],
                who: "Environmental lawyer + trade compliance specialist",
              },
              {
                title: "Extraction Technology Comparison",
                questions: [
                  "How does electrical stimulation compare to mechanical/chemical methods?",
                  "What are optimal voltage/duration parameters per species?",
                  "How does automated extraction (VES-4® style) compare to manual?",
                  "What is the impact on venom quality from different methods?",
                  "Can we improve on existing designs for higher throughput?",
                ],
                who: "Biomedical engineer + toxinologist",
              },
              {
                title: "Financial Modeling & Sensitivity Analysis",
                questions: [
                  "What is the break-even point under conservative assumptions?",
                  "How sensitive is profitability to venom price fluctuations?",
                  "What is the optimal robot fleet size for different regions?",
                  "What is the customer acquisition cost for pharma labs?",
                  "How does captive breeding compare to wild collection economics?",
                ],
                who: "Financial analyst / CFO-type advisor",
              },
            ].map((study) => (
              <div key={study.title} className="glass rounded-2xl p-6">
                <h4 className="font-bold mb-3">{study.title}</h4>
                <div className="space-y-2 mb-4">
                  {study.questions.map((q) => (
                    <div key={q} className="flex items-start gap-2 text-xs text-gray-400">
                      <Target size={12} className="text-uv-glow mt-0.5 shrink-0" />
                      {q}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-uv-glow bg-uv-blue/5 rounded-lg px-3 py-2 inline-block">
                  Who: {study.who}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RESOURCES & LEARNING */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gold/10 text-gold">
              <BookOpen size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black">Self-Education Roadmap</h3>
              <p className="text-sm text-gray-500">What you need to learn to lead this company effectively</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                area: "Scorpion Biology & Toxinology",
                resources: [
                  "\"The Biology of Scorpions\" by Gary A. Polis — foundational textbook",
                  "\"Scorpion Venoms\" (Springer) — venom chemistry and pharmacology",
                  "Research papers on UV fluorescence in scorpion exoskeletons",
                  "CITES identification guide for scorpions",
                  "Online courses on toxinology (University of Melbourne MOOCs)",
                ],
              },
              {
                area: "Robotics & AI Fundamentals",
                resources: [
                  "ROS (Robot Operating System) tutorials — ros.org",
                  "Computer Vision with OpenCV and PyTorch courses",
                  "Edge ML deployment (TensorFlow Lite, ONNX Runtime)",
                  "UV detection and spectroscopy principles",
                  "Arduino/Raspberry Pi robotics projects for prototyping",
                ],
              },
              {
                area: "Pharmaceutical Industry",
                resources: [
                  "How pharma supply chains work (FDA, EMA regulations)",
                  "ISO 17025 laboratory management system standard",
                  "GMP (Good Manufacturing Practice) fundamentals",
                  "Cold-chain logistics for biologicals (IATA DGR)",
                  "BioPharma procurement processes and vendor qualification",
                ],
              },
              {
                area: "Startup & Business Skills",
                resources: [
                  "Y Combinator Startup School (free online course)",
                  "\"The Lean Startup\" by Eric Ries",
                  "Financial modeling for startups (Venture Hacks, SaaS Academy)",
                  "Tunisian Startup Act documentation (startup.gov.tn)",
                  "Fundraising masterclasses (First Round Capital blog, a16z library)",
                ],
              },
            ].map((section) => (
              <div key={section.area} className="glass-gold rounded-2xl p-6">
                <h4 className="font-bold text-gold mb-3">{section.area}</h4>
                <div className="space-y-2">
                  {section.resources.map((r) => (
                    <div key={r} className="flex items-start gap-2 text-xs text-gray-400">
                      <BookOpen size={12} className="text-gold mt-0.5 shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-gold rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-black text-gold mb-4">You Don&apos;t Need to Know Everything — You Need to Start</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            The most important step is the first one. Start with the priority actions above, learn as you go,
            build a team that fills your gaps, and execute relentlessly. The knowledge will come with action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pitch-deck" className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold hover:shadow-xl hover:shadow-gold/30 transition-all hover:scale-105 flex items-center gap-2 justify-center">
              Pitch Deck <ArrowRight size={18} />
            </a>
            <a href="/business-plan" className="px-6 py-3 rounded-xl glass-gold text-gold font-bold hover:bg-gold/10 transition-all flex items-center gap-2 justify-center">
              Business Plan <ArrowRight size={18} />
            </a>
            <a href="/studies" className="px-6 py-3 rounded-xl glass text-gray-300 font-bold hover:bg-white/5 transition-all flex items-center gap-2 justify-center">
              Research Studies <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <PageFooter />
    </main>
  );
}
