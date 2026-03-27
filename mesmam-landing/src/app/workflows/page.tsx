"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Users,
  Zap,
  Eye,
  Target,
  Microscope,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Mail,
  Search,
  Database,
  FileText,
  Cog,
  Calendar,
  ClipboardList,
  Workflow,
  BrainCircuit,
  Layers,
  Truck,
  Shield,
  DollarSign,
  TrendingUp,
  Megaphone,
  PenTool,
  Video,
  Sparkles,
  CircuitBoard,
  Wrench,
  Gauge,
  MapPin,
  BookOpen,
  Handshake,
  Receipt,
} from "lucide-react";
import { PageNav, PageHero, PageFooter, fadeUp } from "@/components/shared";

/* ─── TYPES ─── */
interface AgentCard {
  id: string;
  name: string;
  icon: React.ReactNode;
  department: string;
  purpose: string;
  trigger: string;
  inputs: string[];
  outputs: string[];
  tools: string[];
  frequency: string;
  approach: string;
  steps: string[];
  kpis: string[];
  stack: string[];
  priority: "Critical" | "High" | "Medium" | "Low";
}

/* ─── DATA ─── */

const departments = [
  { name: "Sales & Outreach", color: "text-blue-400", bg: "bg-blue-500/10", count: 5 },
  { name: "Robotics & Hardware", color: "text-purple-400", bg: "bg-purple-500/10", count: 4 },
  { name: "AI & Data Science", color: "text-indigo-400", bg: "bg-indigo-500/10", count: 4 },
  { name: "Biology & Extraction", color: "text-green-400", bg: "bg-green-500/10", count: 3 },
  { name: "Operations & Logistics", color: "text-amber-400", bg: "bg-amber-500/10", count: 3 },
  { name: "Legal & Compliance", color: "text-red-400", bg: "bg-red-500/10", count: 3 },
  { name: "Marketing & Content", color: "text-pink-400", bg: "bg-pink-500/10", count: 4 },
  { name: "Finance & Admin", color: "text-cyan-400", bg: "bg-cyan-500/10", count: 3 },
  { name: "Product & Platform", color: "text-gold", bg: "bg-gold/10", count: 3 },
];

const agents: AgentCard[] = [
  // ─── SALES & OUTREACH ───
  {
    id: "lab-hunter",
    name: "Lab Hunter Agent",
    icon: <Search size={22} />,
    department: "Sales & Outreach",
    purpose: "Scrape the internet for pharmaceutical labs, biotech companies, research institutions, and universities worldwide that use or could use scorpion venom. Build a master prospect database.",
    trigger: "Weekly scheduled run + on-demand when entering new markets",
    inputs: ["Target countries list", "Venom-related keywords", "Industry codes (SIC/NAICS)"],
    outputs: ["Prospect database (company name, website, location, research focus, size)", "Contact enrichment queue", "Market heat map by geography"],
    tools: ["Apify / Scrapy for web scraping", "Apollo.io / Hunter.io for email enrichment", "LinkedIn Sales Navigator API", "Google Scholar API for research papers", "ClinicalTrials.gov scraper"],
    frequency: "Weekly full scan, daily incremental",
    approach: "Multi-source scraping pipeline. Start with Google search operators (site:*.edu + \"scorpion venom\"), pharma directories (API-Data.com, PharmaCompass), conference attendee lists (BIO International, Venom Week), research paper authors (PubMed, Google Scholar). Deduplicate, validate, enrich with contact data.",
    steps: [
      "Scrape pharma lab directories (API-Data.com — 45,000+ manufacturers, SmartScrapers — 1,193 EU labs)",
      "Search Google Scholar / PubMed for papers citing scorpion venom → extract author affiliations and emails",
      "Scrape conference attendee / speaker lists (BIO International, ISTM, Venom Week)",
      "Scrape LinkedIn company pages for biotech / pharma companies",
      "Cross-reference ClinicalTrials.gov for venom-related trials → extract site contacts (Apify actor available at $0.70/1K contacts)",
      "Deduplicate across all sources using fuzzy matching on company name + domain",
      "Enrich with email addresses via Hunter.io / Apollo.io API",
      "Score each prospect by fit (research focus, size, geography, venom mentions)",
      "Store in CRM (HubSpot Free or Airtable) with tags and scores",
      "Generate weekly report: new prospects found, by region, by fit score",
    ],
    kpis: ["Prospects found per week", "Email enrichment rate (%)", "Coverage by target country", "Data accuracy (% valid emails)"],
    stack: ["Python + Scrapy/BeautifulSoup", "Apify (hosted scraping)", "Apollo.io API", "Airtable / HubSpot CRM", "n8n for orchestration"],
    priority: "Critical",
  },
  {
    id: "cold-outreach",
    name: "Cold Outreach Agent",
    icon: <Mail size={22} />,
    department: "Sales & Outreach",
    purpose: "Run personalized multi-channel cold outreach campaigns to pharmaceutical labs and research institutions. Email + LinkedIn sequences. AI-personalized messaging.",
    trigger: "When Lab Hunter Agent adds new qualified prospects to CRM",
    inputs: ["Prospect database with contact details", "Company research data", "Outreach templates", "Sender email accounts"],
    outputs: ["Sent messages log", "Reply tracking", "Meeting bookings", "Pipeline updates in CRM"],
    tools: ["Reply.io or Instantly.ai for email sequences", "LinkedIn automation (Phantombuster / Dripify)", "OpenAI API for personalization", "Calendly for meeting booking", "HubSpot CRM"],
    frequency: "Daily (new prospects enter sequences automatically)",
    approach: "Research-first outreach. Each email is personalized based on the lab's published research, recent papers, and specific venom needs. Multi-step sequence: intro email → value email → case study → soft close. LinkedIn touch in parallel. AI writes unique emails — no templates.",
    steps: [
      "Pull new qualified prospects from CRM (fit score > threshold)",
      "For each prospect: scrape their website, recent publications, lab focus areas",
      "Use GPT-4 / Claude to write personalized email referencing their specific research",
      "Create 5-step email sequence: (1) Personalized intro, (2) Value prop + market data, (3) Free sample offer, (4) Case study / social proof, (5) Soft breakup email",
      "Send LinkedIn connection request with personalized note in parallel",
      "Track opens, clicks, replies in real-time dashboard",
      "Auto-route replies to human sales team for follow-up",
      "Auto-book meetings via Calendly link in email signature",
      "Update CRM with engagement data (opened, clicked, replied, meeting booked)",
      "A/B test subject lines and messaging angles weekly",
    ],
    kpis: ["Open rate (target: >50%)", "Reply rate (target: >8%)", "Meeting booking rate", "Cost per meeting", "Pipeline value generated"],
    stack: ["Reply.io / Instantly.ai", "OpenAI API (GPT-4)", "Phantombuster (LinkedIn)", "Calendly", "n8n for orchestration", "HubSpot CRM"],
    priority: "Critical",
  },
  {
    id: "deal-closer",
    name: "Deal Intelligence Agent",
    icon: <Handshake size={22} />,
    department: "Sales & Outreach",
    purpose: "Track active deals, prepare custom proposals, generate pricing quotes, and produce compliance documentation for each prospective buyer.",
    trigger: "When a prospect replies positively or books a meeting",
    inputs: ["Prospect company profile", "Research focus & venom needs", "Quantity requirements", "Regulatory environment"],
    outputs: ["Custom proposal PDF", "Pricing quote", "Compliance checklist for their country", "Sample shipment order"],
    tools: ["GPT-4 for proposal drafting", "PDF generation (Puppeteer / react-pdf)", "Pricing engine (custom)", "CRM pipeline"],
    frequency: "Per-deal basis (event-driven)",
    approach: "When a deal reaches 'interested' stage, auto-generate a custom proposal including: species-specific venom options, pricing tiers (Grade A/B/C), compliance docs for their country, logistics plan, and sample offer. Human reviews before sending.",
    steps: [
      "Pull prospect data and conversation history from CRM",
      "Research their country's import requirements (automated lookup table)",
      "Generate custom proposal with relevant species, pricing, and compliance info",
      "Create pricing quote based on volume, species, and quality grade",
      "Generate compliance checklist (CITES, health certificates, import permits needed)",
      "Draft sample shipment plan with logistics timeline and costs",
      "Human review and approval before sending",
      "Track proposal status (sent, viewed, negotiating, won/lost)",
    ],
    kpis: ["Proposal-to-close rate", "Average deal size", "Time from first contact to close", "Win rate by segment"],
    stack: ["GPT-4 / Claude", "React-PDF for documents", "Airtable / HubSpot", "n8n workflows"],
    priority: "High",
  },
  {
    id: "partnership-scout",
    name: "Partnership Scout Agent",
    icon: <Globe2 size={22} />,
    department: "Sales & Outreach",
    purpose: "Identify and track potential strategic partners: university labs, venom researchers, conservation NGOs, government agencies, and international distributors.",
    trigger: "Bi-weekly scheduled scan + keyword alerts",
    inputs: ["Partner type criteria", "Geographic targets", "Research area keywords"],
    outputs: ["Partner prospect list", "Collaboration opportunity briefs", "Intro email drafts"],
    tools: ["Google Alerts API", "Google Scholar API", "LinkedIn Search", "News scraping", "OpenAI for brief generation"],
    frequency: "Bi-weekly scan, real-time alerts",
    approach: "Monitor academic publications, conference announcements, government grants, and news for partnership opportunities. Auto-generate one-page briefs for each prospect with a recommended collaboration angle.",
    steps: [
      "Set up Google Alerts for keywords: 'scorpion venom research', 'venom extraction grant', 'arachnology lab'",
      "Scrape Google Scholar weekly for new scorpion venom papers → identify active researchers",
      "Monitor conference announcements (BIO, ISTM, IST) for speakers and sponsors",
      "Scrape government grant databases (EU Horizon, NSF, AfDB) for venom-related funding",
      "For each prospect: generate 1-page brief (who they are, what they do, collaboration angle)",
      "Draft personalized intro email referencing their specific work",
      "Prioritize by strategic value (access to species, market access, technology, funding)",
      "Feed high-priority prospects to Cold Outreach Agent for execution",
    ],
    kpis: ["Partners identified per month", "Intro meetings booked", "Partnerships activated", "Revenue from partnerships"],
    stack: ["Google Alerts", "Scrapy / BeautifulSoup", "GPT-4 for briefs", "Airtable", "n8n"],
    priority: "High",
  },
  {
    id: "competitor-intel",
    name: "Competitor Intelligence Agent",
    icon: <Eye size={22} />,
    department: "Sales & Outreach",
    purpose: "Continuously monitor competitors (Venomers, Scorpx, Volta Venom Labs, Wigmore Trading) for pricing changes, new products, partnerships, funding, and market moves.",
    trigger: "Daily automated scan",
    inputs: ["Competitor website URLs", "Social media profiles", "News keywords", "Patent databases"],
    outputs: ["Competitor alert digest (daily/weekly)", "Pricing tracker", "Feature comparison matrix update", "Strategic response recommendations"],
    tools: ["Diffbot / Scrapy for website monitoring", "Google Alerts", "Crunchbase API", "Patent search (Google Patents, Espacenet)", "GPT-4 for analysis"],
    frequency: "Daily website checks, weekly deep analysis",
    approach: "Track competitor websites for changes (new products, pricing, team hires). Monitor news, patents, social media. Generate weekly intelligence brief with strategic recommendations.",
    steps: [
      "Monitor competitor websites for content changes (Diffbot / Change detection)",
      "Track social media accounts (LinkedIn, Twitter) for announcements",
      "Search Google News daily for competitor name mentions",
      "Check patent databases (Google Patents, Espacenet) for new filings",
      "Monitor Crunchbase / PitchBook for funding rounds",
      "Aggregate all signals into weekly intelligence digest",
      "GPT-4 generates strategic analysis: what it means, how to respond",
      "Alert founder on high-priority changes (funding, new product, partnership)",
    ],
    kpis: ["Alerts generated per week", "Actionable insights per month", "Response time to competitive moves"],
    stack: ["Diffbot / Visualping", "Google Alerts", "Crunchbase API", "GPT-4", "Slack notifications", "n8n"],
    priority: "Medium",
  },

  // ─── ROBOTICS & HARDWARE ───
  {
    id: "robot-planner",
    name: "Robot Design Planner Agent",
    icon: <CircuitBoard size={22} />,
    department: "Robotics & Hardware",
    purpose: "Research components, plan bill-of-materials, track design iterations, and manage the MesBot development roadmap. AI-assisted hardware design planning.",
    trigger: "On design sprint start, weekly planning cycle",
    inputs: ["Design requirements", "Component databases", "Budget constraints", "Performance targets"],
    outputs: ["Bill of materials (BOM)", "Component comparison matrices", "Design sprint plans", "Cost estimates"],
    tools: ["GPT-4 for research synthesis", "Octopart / DigiKey API for component search", "Notion / Linear for project management", "CAD integration notes"],
    frequency: "Weekly planning, daily updates during sprints",
    approach: "AI-assisted hardware planning. Agent researches available components (UV LEDs, cameras, motors, batteries, chassis), compares specs and pricing, generates BOMs, and tracks design decisions. Human engineers make final design choices.",
    steps: [
      "Define requirements: UV wavelength (395nm), battery life (8hr), terrain type, payload capacity",
      "Search Octopart / DigiKey / Mouser for UV LED arrays, cameras, motor controllers, batteries",
      "Generate comparison matrix: specs vs price vs availability vs lead time",
      "Produce bill of materials with total cost estimate and supplier list",
      "Create design sprint backlog: tasks, owners, dependencies, timeline",
      "Track design decisions and rationale in knowledge base",
      "Research academic papers on UV detection systems for additional approaches",
      "Monitor for new component releases that could improve design",
      "Generate weekly progress report for founder and investors",
    ],
    kpis: ["BOM cost accuracy vs actual", "Sprint completion rate", "Design iteration cycle time", "Component lead time tracking"],
    stack: ["GPT-4 / Claude for research", "Octopart API", "Linear / Jira", "Notion", "Google Sheets for BOM"],
    priority: "High",
  },
  {
    id: "robot-fleet",
    name: "Fleet Monitoring Agent",
    icon: <Gauge size={22} />,
    department: "Robotics & Hardware",
    purpose: "Real-time monitoring of deployed robot fleet. Track location, battery, collection counts, errors, and maintenance schedules. Alert on anomalies.",
    trigger: "Continuous (real-time data stream from robots)",
    inputs: ["Robot telemetry (GPS, battery, sensors)", "Collection event logs", "Error codes", "Weather data"],
    outputs: ["Fleet dashboard", "Anomaly alerts", "Maintenance schedule", "Performance reports", "Route optimization suggestions"],
    tools: ["MQTT / IoT broker for telemetry", "InfluxDB / TimescaleDB for time-series", "Grafana for dashboards", "Custom alerting rules", "GPT-4 for anomaly analysis"],
    frequency: "Continuous real-time + daily summaries",
    approach: "Each robot streams telemetry via MQTT to a central IoT hub. Agent monitors for anomalies (battery drain, stuck robot, low collection rate, sensor failure). Generates maintenance schedules based on operating hours. Optimizes collection routes based on historical yield data.",
    steps: [
      "Ingest robot telemetry via MQTT: GPS, battery %, motor temps, UV LED status, camera feed",
      "Store time-series data in InfluxDB (battery trends, collection counts, route data)",
      "Real-time anomaly detection: battery drain > expected, robot stationary > 30min, error codes",
      "Generate automated alerts via Slack / SMS for critical issues",
      "Produce daily fleet summary: units active, total specimens collected, area covered, avg battery usage",
      "Predictive maintenance: flag robots approaching service intervals based on operating hours",
      "Route optimization: analyze historical collection data to suggest best zones per night",
      "Weekly fleet performance report for operations team",
    ],
    kpis: ["Robot uptime (%)", "Specimens collected per robot-night", "Mean time between failures", "Battery efficiency", "Route optimization lift"],
    stack: ["MQTT broker (Mosquitto)", "InfluxDB + Grafana", "Python anomaly detection", "Twilio for SMS alerts", "n8n for orchestration"],
    priority: "High",
  },
  {
    id: "robot-maintenance",
    name: "Maintenance Scheduler Agent",
    icon: <Wrench size={22} />,
    department: "Robotics & Hardware",
    purpose: "Predict and schedule robot maintenance based on usage patterns, component wear, and environmental conditions. Manage spare parts inventory.",
    trigger: "Daily analysis of fleet telemetry + maintenance events",
    inputs: ["Robot operating hours", "Component lifecycle data", "Failure history", "Spare parts inventory"],
    outputs: ["Maintenance schedule", "Parts order recommendations", "Failure prediction alerts", "Service history log"],
    tools: ["Predictive ML models", "Inventory management system", "Calendar integration", "Supplier order automation"],
    frequency: "Daily predictions, weekly scheduling",
    approach: "Use operating hours, environmental exposure (sand, heat), and failure history to predict when each component will need service. Auto-schedule maintenance windows. Track spare parts inventory and auto-order when stock drops below threshold.",
    steps: [
      "Collect component-level data: motor hours, UV LED intensity degradation, wheel wear, camera cleanliness",
      "Apply predictive models: estimate remaining useful life per component",
      "Generate maintenance schedule: which robots need service, when, which components",
      "Check spare parts inventory against upcoming needs",
      "Auto-generate purchase orders when parts stock hits reorder point",
      "Schedule maintenance windows to minimize fleet downtime (rotate robots)",
      "Log all maintenance events for future model improvement",
      "Monthly report: maintenance costs, failure rates, fleet availability",
    ],
    kpis: ["Unplanned downtime reduction (%)", "Parts inventory accuracy", "Predictive maintenance accuracy", "Fleet availability (%)"],
    stack: ["Python + scikit-learn", "Airtable for inventory", "Google Calendar API", "n8n for automation"],
    priority: "Medium",
  },
  {
    id: "robot-route",
    name: "Route Optimizer Agent",
    icon: <MapPin size={22} />,
    department: "Robotics & Hardware",
    purpose: "Optimize nightly collection routes for maximum scorpion yield per hour. Use historical data, seasonal patterns, terrain analysis, and weather forecasts.",
    trigger: "Daily before sunset (route planning for tonight)",
    inputs: ["Historical collection data (GPS + species + counts)", "Weather forecast", "Terrain maps", "Seasonal patterns", "Population survey data"],
    outputs: ["Optimized route for each robot tonight", "Expected yield prediction", "Zone priority ranking"],
    tools: ["Custom optimization algorithm (OR-tools / genetic algorithm)", "Weather API", "GIS data", "Historical yield database"],
    frequency: "Daily (before deployment)",
    approach: "Analyze historical collection data to identify high-yield zones by time of year, weather conditions, and lunar phase (moonlight affects scorpion activity). Generate optimal route that maximizes specimens per hour while covering diverse species.",
    steps: [
      "Pull historical collection data: GPS points, species, counts, time, weather conditions",
      "Check tonight's weather forecast (temperature, wind, rain probability, moon phase)",
      "Score each collection zone: predicted yield based on historical + seasonal + weather factors",
      "Run route optimization: maximize total expected yield within battery constraints",
      "Assign robots to zones based on fleet status (battery levels, maintenance needs)",
      "Generate route files and upload to robot navigation systems",
      "After tonight's run: compare predicted vs actual yield to improve models",
      "Update zone scoring models with new data (continuous learning)",
    ],
    kpis: ["Prediction accuracy (predicted vs actual yield)", "Specimens per robot-hour", "Zone coverage diversity", "Route efficiency (distance vs yield)"],
    stack: ["Python + Google OR-Tools", "OpenWeatherMap API", "PostGIS for spatial data", "Custom ML models"],
    priority: "High",
  },

  // ─── AI & DATA SCIENCE ───
  {
    id: "species-ai",
    name: "Species Classification AI Agent",
    icon: <BrainCircuit size={22} />,
    department: "AI & Data Science",
    purpose: "Train, deploy, and continuously improve the scorpion species classification model. Manage training data pipeline, model versioning, and edge deployment.",
    trigger: "Continuous — new images from field operations, weekly retraining",
    inputs: ["Scorpion images from robots and field cameras", "Expert species labels", "iNaturalist / academic image datasets"],
    outputs: ["Trained classification model", "Edge-deployable model (TFLite/ONNX)", "Accuracy reports", "Species distribution maps"],
    tools: ["PyTorch / TensorFlow", "Roboflow for annotation", "W&B for experiment tracking", "TFLite / ONNX for edge", "Label Studio"],
    frequency: "Continuous data collection, weekly retraining, monthly model release",
    approach: "Transfer learning on EfficientNet/ResNet backbone. Train with images from field operations, iNaturalist, academic datasets. Active learning: model flags low-confidence predictions for human expert review. Deploy to edge (Jetson Nano / Coral TPU) for offline field use.",
    steps: [
      "Collect training images from: robot cameras, field surveys, iNaturalist, academic papers",
      "Expert annotators label species, sex, maturity, condition (Label Studio / Roboflow)",
      "Augment data: rotation, lighting, background variation for desert conditions",
      "Train model: EfficientNet-B4 backbone, transfer learning, multi-class classification",
      "Validate on held-out test set: target >95% accuracy on top 50 species",
      "Convert to edge format (TFLite for Coral, ONNX for Jetson)",
      "Deploy to robot fleet via OTA update system",
      "Active learning loop: flag low-confidence predictions (< 80%) for human review",
      "Monthly model performance report: accuracy by species, failure cases, data gaps",
      "Expand species coverage: start with 50 → 200 → 1,000 → 2,500+ species",
    ],
    kpis: ["Classification accuracy (top-1, top-5)", "Species coverage count", "Inference latency on edge (ms)", "Active learning resolution rate"],
    stack: ["PyTorch", "Roboflow / Label Studio", "Weights & Biases", "TensorFlow Lite / ONNX Runtime", "NVIDIA Jetson / Google Coral"],
    priority: "Critical",
  },
  {
    id: "yield-predictor",
    name: "Yield Prediction Agent",
    icon: <TrendingUp size={22} />,
    department: "AI & Data Science",
    purpose: "Predict venom yield per scorpion based on species, size, season, geography, and extraction history. Optimize production planning and revenue forecasting.",
    trigger: "Before each extraction batch + weekly production planning",
    inputs: ["Species ID", "Specimen size/weight", "Season", "Last milking date", "Geographic origin", "Historical yield data"],
    outputs: ["Expected yield per specimen (mg)", "Batch yield forecast (total grams)", "Revenue projection", "Optimal milking schedule"],
    tools: ["XGBoost / Random Forest", "Historical yield database", "Weather data", "Calendar features"],
    frequency: "Per-batch prediction + weekly aggregation",
    approach: "Gradient boosted model trained on historical extraction data. Features include species, body length, weight, days since last milking, season, temperature, geographic origin. Used for production planning, pricing, and revenue forecasting.",
    steps: [
      "Collect extraction records: species, size, weight, yield (mg), date, location, method",
      "Engineer features: species encoding, days since last milk, season, lunar phase, avg temperature",
      "Train XGBoost model on historical data",
      "For each upcoming batch: predict yield per specimen and total batch yield",
      "Generate production schedule: which specimens to milk, in what order, expected output",
      "Weekly revenue forecast based on predicted yields and current pricing",
      "Monthly model retrain with new data for continuous improvement",
      "Alert operations if predicted yield drops below profitability threshold for a batch",
    ],
    kpis: ["Prediction accuracy (MAPE <15%)", "Revenue forecast accuracy", "Optimal batch scheduling compliance"],
    stack: ["Python + XGBoost", "PostgreSQL for data", "Streamlit for dashboard", "n8n for scheduling"],
    priority: "Medium",
  },
  {
    id: "population-mapper",
    name: "Population Intelligence Agent",
    icon: <Layers size={22} />,
    department: "AI & Data Science",
    purpose: "Build and maintain scorpion population density maps. Combine robot data, drone surveys, satellite imagery, and ecological models to predict species distribution and sustainable harvest rates.",
    trigger: "Weekly data aggregation + seasonal deep analysis",
    inputs: ["Robot GPS + species collection data", "Drone survey imagery", "Satellite land use data", "Climate/weather data", "Academic survey data"],
    outputs: ["Population density heat maps", "Species distribution maps", "Sustainable harvest rate estimates", "Conservation risk alerts"],
    tools: ["QGIS / GeoPandas for spatial analysis", "Satellite APIs (Sentinel, Landsat)", "Drone image processing", "Species distribution modeling (MaxEnt)"],
    frequency: "Weekly updates, seasonal deep analysis",
    approach: "Spatial ecology modeling. Combine robot detection data with environmental variables (terrain, vegetation, soil, temperature, rainfall) to model species distribution across unsampled areas. Calculate sustainable harvest rates to prevent overexploitation.",
    steps: [
      "Aggregate all GPS-tagged detection events from robot fleet",
      "Create grid-based density maps (specimens per km² per species)",
      "Correlate density with environmental covariates (terrain, vegetation, soil type, climate)",
      "Run species distribution models (MaxEnt) to predict distribution in unsampled areas",
      "Calculate sustainable harvest rate per zone (based on population estimates and reproductive biology)",
      "Flag zones approaching harvest limits → restrict collection in those areas",
      "Generate seasonal comparison reports (population trends over time)",
      "Share anonymized data with conservation organizations (revenue opportunity + ESG)",
    ],
    kpis: ["Map coverage (% of target area)", "Prediction accuracy (validation surveys)", "Sustainable harvest compliance (%)", "Data products sold"],
    stack: ["Python + GeoPandas", "QGIS", "MaxEnt SDM", "PostGIS", "Mapbox for visualization"],
    priority: "Medium",
  },
  {
    id: "quality-ai",
    name: "Venom Quality AI Agent",
    icon: <Microscope size={22} />,
    department: "AI & Data Science",
    purpose: "Analyze venom quality from spectrometry data. Auto-grade venom batches. Detect contamination. Predict shelf stability.",
    trigger: "After each extraction batch analysis",
    inputs: ["Spectrometry readings (NIR/Raman)", "Protein concentration measurements", "Environmental conditions during extraction"],
    outputs: ["Quality grade (A/B/C)", "Contamination alerts", "Batch certificate of analysis", "Pricing recommendation"],
    tools: ["Spectral analysis ML models", "Chemometrics libraries", "PDF certificate generation"],
    frequency: "Per-batch (event-driven)",
    approach: "Train ML models on spectrometry readings labeled with lab-verified quality grades. Deploy on MesLab portable analyzer for instant field grading. Generate certificates of analysis automatically.",
    steps: [
      "Collect spectrometry readings from MesLab device",
      "Run ML model: classify grade (A >95% protein, B >85%, C >70%)",
      "Check for contamination signatures in spectral data",
      "Generate certificate of analysis with batch ID, species, grade, measurements",
      "Recommend pricing based on grade and current market rates",
      "Flag anomalous readings for manual lab review",
      "Log all quality data for model improvement and regulatory compliance",
    ],
    kpis: ["Grading accuracy vs lab-verified results", "Contamination detection rate", "Certificate generation time", "Customer quality complaints"],
    stack: ["Python + scikit-learn / PyTorch", "Spectral analysis (scipy)", "React-PDF for certificates", "PostgreSQL"],
    priority: "High",
  },

  // ─── BIOLOGY & EXTRACTION ───
  {
    id: "extraction-optimizer",
    name: "Extraction Protocol Agent",
    icon: <Zap size={22} />,
    department: "Biology & Extraction",
    purpose: "Optimize venom extraction parameters per species. Track yields, adjust electrical stimulation profiles, and maintain extraction SOPs.",
    trigger: "After each extraction session + weekly optimization review",
    inputs: ["Species ID", "Extraction parameters (voltage, pulse, duration)", "Yield measurements", "Animal condition post-extraction"],
    outputs: ["Optimized protocol per species", "Yield trend reports", "SOP updates", "Animal welfare reports"],
    tools: ["Statistical analysis (R / Python)", "A/B testing framework for parameters", "SOP documentation system"],
    frequency: "Per-session data collection, weekly optimization",
    approach: "Systematic parameter optimization. For each species, test variations in voltage, pulse width, pulse frequency, and session duration. Track yield and animal welfare outcomes. Bayesian optimization to find optimal settings.",
    steps: [
      "Log every extraction: species, specimen ID, parameters used, yield (mg), animal condition",
      "For new species: start with published literature values, run systematic parameter sweep",
      "Apply Bayesian optimization to find optimal voltage/pulse/duration per species",
      "A/B test promising parameter changes on small batches before fleet-wide rollout",
      "Update species protocol library with optimized settings",
      "Monitor animal welfare indicators: recovery time, mortality rate, repeat yield",
      "Flag any welfare concerns for biology team review",
      "Generate monthly yield optimization report: improvements by species",
    ],
    kpis: ["Avg yield per extraction by species", "Yield improvement trend", "Animal welfare score", "Protocol compliance rate"],
    stack: ["Python + scipy / GPyOpt", "PostgreSQL", "Notion for SOPs", "n8n for logging automation"],
    priority: "High",
  },
  {
    id: "specimen-tracker",
    name: "Specimen Lifecycle Agent",
    icon: <Database size={22} />,
    department: "Biology & Extraction",
    purpose: "Track every scorpion specimen through its entire lifecycle: capture, identification, milking schedule, health status, release/retention. Full chain-of-custody.",
    trigger: "Every specimen event (capture, ID, milking, release)",
    inputs: ["Robot capture event (GPS, time, image)", "Species classification result", "Milking events", "Health observations"],
    outputs: ["Specimen database with full history", "Milking schedules (respect regeneration period)", "Population impact reports", "Traceability records"],
    tools: ["PostgreSQL database", "QR/RFID tagging system", "Mobile app for field data entry", "Dashboard for operations team"],
    frequency: "Continuous (event-driven)",
    approach: "Every specimen gets a unique ID at capture. Track through: capture → species ID → quarantine → milking → recovery → milking (repeat) → release. Enforce 14-21 day regeneration periods between milkings. GPS-tagged release at original capture location.",
    steps: [
      "Assign unique ID at capture (QR code tag or temporary marking)",
      "Record capture data: GPS, time, robot ID, habitat type",
      "Log species classification result and confidence score",
      "Create milking schedule: first milking after 48hr quarantine, then every 14-21 days",
      "Record each milking event: yield, quality grade, animal condition",
      "Monitor health indicators: activity, feeding, body condition",
      "Schedule release after collection cycle (or retain for breeding program)",
      "Log release: GPS location, date, total milkings, total yield from this specimen",
      "Generate traceability chain: specimen → venom batch → product → buyer",
    ],
    kpis: ["Specimens in system", "Avg yield per specimen lifecycle", "Regeneration compliance (%)", "Release-to-capture ratio"],
    stack: ["PostgreSQL + PostGIS", "React Native mobile app", "QR code system", "n8n for scheduling"],
    priority: "High",
  },
  {
    id: "inventory-manager",
    name: "Venom Inventory Agent",
    icon: <ClipboardList size={22} />,
    department: "Biology & Extraction",
    purpose: "Manage venom inventory: raw, processed, packaged. Track batches, expiry dates, quality grades, storage conditions. Auto-alert for temperature excursions.",
    trigger: "Every inventory event + continuous temperature monitoring",
    inputs: ["Batch production data", "Quality grades", "Storage sensor data (temperature, humidity)", "Sales orders"],
    outputs: ["Inventory dashboard (real-time)", "Expiry alerts", "Temperature excursion alerts", "Fulfillment recommendations"],
    tools: ["IoT temperature sensors", "Inventory management system", "Alert system", "Sales order integration"],
    frequency: "Continuous monitoring, daily inventory reconciliation",
    approach: "Every venom batch is tracked from extraction through lyophilization to packaging to shipment. IoT sensors monitor storage conditions 24/7. FIFO enforcement for shipments. Auto-alert for temperature excursions that could degrade quality.",
    steps: [
      "Log new batches: species, weight (mg), quality grade, production date, lot number",
      "Assign storage location (freezer shelf, cold room section)",
      "Monitor storage temperature continuously via IoT sensors (target: 2-8°C for lyophilized)",
      "Alert immediately if temperature exceeds ±2°C from target for >30 minutes",
      "Track batch status: raw → processing → lyophilized → packaged → shipped",
      "Calculate inventory levels by species, grade, and age",
      "Auto-flag batches approaching expiry (5-year shelf life, alert at 4 years)",
      "Match incoming orders to available inventory (FIFO, grade matching)",
      "Generate monthly inventory report: stock levels, turnover, wastage",
    ],
    kpis: ["Inventory accuracy (%)", "Temperature excursion events", "Stock turnover rate", "Wastage/expiry rate (%)"],
    stack: ["IoT sensors (ESP32 + DHT22)", "InfluxDB for sensor data", "PostgreSQL for inventory", "Grafana dashboard", "Twilio for alerts"],
    priority: "High",
  },

  // ─── OPERATIONS & LOGISTICS ───
  {
    id: "logistics-coordinator",
    name: "Logistics Coordinator Agent",
    icon: <Truck size={22} />,
    department: "Operations & Logistics",
    purpose: "Manage cold-chain shipments of venom to international buyers. Book couriers, generate shipping documents, track deliveries, ensure IATA compliance.",
    trigger: "When a sales order is confirmed and inventory is allocated",
    inputs: ["Sales order details", "Buyer location and requirements", "Inventory allocation", "Courier rate cards"],
    outputs: ["Shipping labels", "Customs documentation", "IATA DGR declarations", "Tracking updates to buyer", "Delivery confirmation"],
    tools: ["DHL / FedEx API for cold-chain shipping", "Customs documentation templates", "Tracking API integration", "Email notifications"],
    frequency: "Per-order (event-driven)",
    approach: "End-to-end shipment automation. When order is confirmed: select courier with cold-chain capability to destination, generate all customs and shipping documents, book pickup, track in transit, notify buyer, confirm delivery.",
    steps: [
      "Receive confirmed order with buyer details and allocated inventory batches",
      "Select optimal courier: cold-chain capability, destination coverage, cost, transit time",
      "Generate shipping documents: commercial invoice, packing list, certificate of analysis",
      "Generate IATA DGR declaration for biological material",
      "Generate customs documents: export declaration, health certificate, phytosanitary cert if needed",
      "Book courier pickup from cold storage facility",
      "Package: temperature-controlled shipping container with data logger",
      "Track shipment in real-time; alert if temperature excursion detected in transit",
      "Notify buyer at each milestone: shipped, in transit, customs, delivered",
      "Confirm delivery and log temperature data from shipping data logger",
    ],
    kpis: ["On-time delivery rate (%)", "Temperature compliance in transit (%)", "Shipping cost per gram", "Customs clearance time"],
    stack: ["DHL / FedEx / World Courier API", "Python for document generation", "n8n for orchestration", "SendGrid for notifications"],
    priority: "High",
  },
  {
    id: "field-coordinator",
    name: "Field Operations Agent",
    icon: <Calendar size={22} />,
    department: "Operations & Logistics",
    purpose: "Coordinate daily field operations: robot deployment schedules, field team assignments, weather-based planning, community partner coordination.",
    trigger: "Daily at 3PM (pre-sunset planning) + real-time adjustments",
    inputs: ["Weather forecast", "Robot fleet status", "Field team availability", "Community partner schedules", "Route optimizer output"],
    outputs: ["Tonight's deployment plan", "Team assignments", "Community partner notifications", "Daily ops brief"],
    tools: ["Weather API", "Fleet dashboard", "Team calendar", "WhatsApp Business API for partner comms", "Slack for team coordination"],
    frequency: "Daily planning + real-time adjustments",
    approach: "Every day before sunset: check weather, robot status, team availability. Generate deployment plan. Notify field team and community partners. Monitor operations in real-time. Generate morning-after summary.",
    steps: [
      "3PM: Pull weather forecast for all collection zones",
      "Cancel deployment to zones with rain or extreme conditions",
      "Check robot fleet status: which units are charged, maintained, available",
      "Pull optimized routes from Route Optimizer Agent",
      "Assign field team members to deployment zones",
      "Notify community partners via WhatsApp: tonight's plan, expected arrival times",
      "Post deployment plan to Slack #operations channel",
      "Monitor operations during the night (via Fleet Monitoring Agent)",
      "7AM: Generate morning summary: zones covered, specimens collected, issues encountered",
      "Update weekly operations dashboard with tonight's data",
    ],
    kpis: ["Deployment nights per month", "Weather-related cancellations (%)", "Team utilization (%)", "Partner satisfaction score"],
    stack: ["OpenWeatherMap API", "Slack API", "WhatsApp Business API", "Google Calendar", "n8n"],
    priority: "High",
  },
  {
    id: "supply-chain",
    name: "Supply Chain Agent",
    icon: <Cog size={22} />,
    department: "Operations & Logistics",
    purpose: "Manage procurement of consumables, lab supplies, robot parts, and packaging materials. Auto-reorder when stock drops below thresholds.",
    trigger: "Daily inventory check + supplier price monitoring",
    inputs: ["Inventory levels (consumables, parts, packaging)", "Supplier catalogs and pricing", "Usage forecasts", "Lead times"],
    outputs: ["Purchase orders", "Supplier comparison reports", "Cost optimization recommendations", "Delivery tracking"],
    tools: ["Inventory system integration", "Supplier APIs / email ordering", "Price comparison automation", "ERP-lite (Odoo or Airtable)"],
    frequency: "Daily checks, weekly ordering cycle",
    approach: "Set reorder points for every consumable based on usage rate and supplier lead time. When stock hits reorder point, auto-generate PO, compare supplier prices, and send to preferred supplier. Track deliveries and update inventory on receipt.",
    steps: [
      "Daily: check inventory levels against reorder points for all items",
      "Flag items below reorder point",
      "Compare prices across approved suppliers",
      "Generate purchase order for best-value supplier",
      "Route PO for approval (auto-approve if < $500, human approval if > $500)",
      "Send PO to supplier via email/API",
      "Track delivery status and expected arrival date",
      "On receipt: update inventory, verify quantity and quality, file receipt",
      "Monthly: analyze spending by category, supplier performance, cost trends",
    ],
    kpis: ["Stockout events (target: 0)", "Avg procurement cost savings (%)", "Supplier on-time delivery (%)", "Inventory carrying cost"],
    stack: ["Airtable / Odoo for inventory", "SendGrid for PO emails", "n8n for automation", "Google Sheets for reporting"],
    priority: "Medium",
  },

  // ─── LEGAL & COMPLIANCE ───
  {
    id: "compliance-monitor",
    name: "Compliance Monitor Agent",
    icon: <Shield size={22} />,
    department: "Legal & Compliance",
    purpose: "Track regulatory requirements across all operating countries. Monitor for regulation changes. Ensure all permits and certifications are current. Generate compliance checklists.",
    trigger: "Weekly regulatory scan + event-driven (new country entry, permit expiry)",
    inputs: ["Operating countries list", "Current permits and expiry dates", "Regulatory news feeds", "CITES updates"],
    outputs: ["Compliance dashboard (green/yellow/red)", "Permit renewal alerts", "Regulatory change alerts", "Country entry compliance checklist"],
    tools: ["Regulatory news monitoring (Google Alerts, CITES announcements)", "Permit tracking database", "Calendar alerts", "GPT-4 for regulation analysis"],
    frequency: "Weekly scan, daily permit expiry check",
    approach: "Maintain a master compliance register: every permit, certification, and regulatory requirement across all countries. Monitor for changes. Alert well before expiry dates. When entering a new country, auto-generate a compliance checklist based on known requirements.",
    steps: [
      "Maintain master register: all permits, certifications, licenses with expiry dates",
      "Daily: check for permits expiring in next 90/60/30 days → escalating alerts",
      "Weekly: scan CITES announcements, regulatory news, government gazette for changes",
      "When regulation changes detected: analyze impact on Mesmam operations",
      "Generate compliance impact brief for legal team",
      "For new country entry: generate compliance checklist (permits, import requirements, local regulations)",
      "Track compliance training completion for team members",
      "Monthly compliance dashboard: all-green status or items needing attention",
    ],
    kpis: ["Permit expiry compliance (% renewed on time)", "Regulatory changes detected", "Compliance score by country", "Time to new-country compliance"],
    stack: ["Airtable for permit register", "Google Alerts", "GPT-4 for analysis", "Slack for alerts", "n8n"],
    priority: "Critical",
  },
  {
    id: "ip-guardian",
    name: "IP Protection Agent",
    icon: <FileText size={22} />,
    department: "Legal & Compliance",
    purpose: "Monitor for IP infringement: trademark violations, patent conflicts, copycat products. Track own patent/trademark filing deadlines.",
    trigger: "Weekly IP landscape scan + filing deadline alerts",
    inputs: ["Own trademark/patent filings", "Competitor product launches", "Domain registrations", "App store listings"],
    outputs: ["IP infringement alerts", "Filing deadline reminders", "Competitive IP analysis", "Domain monitoring reports"],
    tools: ["Google Alerts for brand mentions", "WIPO / Espacenet patent search", "Domain monitoring (DomainTools)", "Trademark databases"],
    frequency: "Weekly scan",
    approach: "Monitor for anyone using 'Mesmam' brand, copying robot designs, or filing conflicting patents. Track own filing deadlines. Alert legal team for action.",
    steps: [
      "Monitor trademark databases for conflicting filings in key jurisdictions",
      "Google Alerts for 'Mesmam' brand name and key product names",
      "Monitor domain registrations (mesmam.* variations)",
      "Weekly patent search for scorpion venom extraction robotics filings",
      "Track own patent/trademark filing deadlines and renewal dates",
      "Alert legal team for potential infringement or filing deadlines",
      "Monthly IP portfolio review and strategy update",
    ],
    kpis: ["Infringement cases detected", "Filing deadline compliance (100%)", "IP portfolio size", "Response time to infringement"],
    stack: ["WIPO / Espacenet APIs", "Google Alerts", "DomainTools", "Airtable for tracking", "n8n"],
    priority: "Medium",
  },
  {
    id: "contract-manager",
    name: "Contract Management Agent",
    icon: <Receipt size={22} />,
    department: "Legal & Compliance",
    purpose: "Manage all contracts: buyer agreements, supplier contracts, partnership MOUs, employment contracts. Track terms, renewals, and obligations.",
    trigger: "Contract events (new, renewal, expiry, obligation due)",
    inputs: ["Contract documents (PDF)", "Key terms extracted", "Obligation calendar"],
    outputs: ["Contract database with searchable terms", "Renewal alerts", "Obligation reminders", "Contract summary for new deals"],
    tools: ["GPT-4 for contract analysis and term extraction", "Document management (Google Drive / Notion)", "Calendar integration"],
    frequency: "Event-driven + daily obligation check",
    approach: "When a new contract is signed, AI extracts key terms (dates, obligations, pricing, termination clauses). Stores in searchable database. Monitors all deadlines and obligations. Alerts responsible parties before due dates.",
    steps: [
      "Upload signed contract (PDF) to system",
      "GPT-4 extracts key terms: parties, effective date, term, renewal, pricing, obligations, termination",
      "Store extracted terms in structured database",
      "Create calendar events for all deadlines: renewal, expiry, obligation due dates",
      "Alert responsible team member 30/14/7 days before each deadline",
      "For renewals: prepare summary of current terms and performance for renegotiation",
      "Maintain searchable contract repository with full-text search",
      "Monthly: contracts expiring, obligations due, spend by category",
    ],
    kpis: ["Contract renewal on-time rate", "Obligation compliance (%)", "Time to extract terms from new contract", "Contract searchability"],
    stack: ["GPT-4 for extraction", "PostgreSQL for contract DB", "Google Calendar API", "n8n for alerts"],
    priority: "Medium",
  },

  // ─── MARKETING & CONTENT ───
  {
    id: "content-engine",
    name: "Content Creation Agent",
    icon: <PenTool size={22} />,
    department: "Marketing & Content",
    purpose: "Generate blog posts, social media content, newsletter copy, and educational materials about scorpion venom science and Mesmam's mission.",
    trigger: "Content calendar schedule + trending topic alerts",
    inputs: ["Content calendar", "Brand voice guidelines", "Research data from Studies Agent", "Trending topics in biotech"],
    outputs: ["Blog post drafts", "Social media posts (LinkedIn, X, Instagram)", "Newsletter content", "Educational infographics (copy)"],
    tools: ["GPT-4 / Claude for writing", "Canva API for graphics", "Buffer / Hootsuite for scheduling", "Google Trends / BuzzSumo"],
    frequency: "3-5 pieces per week",
    approach: "AI writes first drafts based on content calendar topics. Topics include: venom science education, robot updates, industry news commentary, rural community stories, regulatory insights. Human reviews and edits before publishing.",
    steps: [
      "Maintain content calendar: 1 blog + 5 social posts per week",
      "Research trending topics in biotech, pharma, AI, sustainability",
      "AI generates blog post draft (~1,500 words) with SEO optimization",
      "AI generates 5 social media posts (LinkedIn professional, X concise, Instagram visual)",
      "Human reviews, edits, approves content",
      "Schedule via Buffer / Hootsuite at optimal posting times",
      "Track engagement: views, likes, comments, shares, click-throughs",
      "Monthly content performance report: top posts, audience growth, engagement rate",
    ],
    kpis: ["Posts per week", "Engagement rate (%)", "Website traffic from content", "Follower growth rate", "Newsletter open rate"],
    stack: ["GPT-4 / Claude", "Buffer / Hootsuite", "Canva", "Google Analytics", "Mailchimp / ConvertKit"],
    priority: "Medium",
  },
  {
    id: "video-producer",
    name: "Video & Animation Agent",
    icon: <Video size={22} />,
    department: "Marketing & Content",
    purpose: "Plan and produce AI-generated videos, animations, and visual content for social media, investor presentations, and educational purposes.",
    trigger: "Content calendar + major milestones + investor meetings",
    inputs: ["Video brief (topic, audience, length)", "Brand assets", "Footage from field operations", "Data visualizations"],
    outputs: ["Short-form social videos (30-60s)", "Explainer animations", "Investor demo reels", "Educational content"],
    tools: ["Runway ML / Pika for AI video", "D-ID for avatar videos", "After Effects templates", "CapCut for editing", "Midjourney / DALL-E for visuals"],
    frequency: "2-3 videos per week",
    approach: "Mix of AI-generated content and real footage. Short-form for social (scorpion facts, UV demos, robot clips). Long-form for investors (full demo, team, vision). AI avatars for educational series. Real field footage when available.",
    steps: [
      "Create video brief: topic, target audience, platform, length, key message",
      "Script writing with AI (GPT-4) — concise, visual-first storytelling",
      "Generate visuals: Midjourney for scorpion/robot imagery, Runway for video clips",
      "Edit with CapCut or Premiere: add captions, music, brand watermark",
      "Create multiple versions: full video + 30s clip + 15s teaser",
      "Human review and approval before publishing",
      "Post to YouTube, LinkedIn, Instagram Reels, TikTok",
      "Track views, watch time, engagement, shares",
    ],
    kpis: ["Videos per week", "Total views", "Avg watch time (%)", "Share rate", "Investor presentation quality score"],
    stack: ["Runway ML / Pika", "Midjourney / DALL-E", "CapCut", "D-ID", "YouTube / social platforms"],
    priority: "Medium",
  },
  {
    id: "seo-growth",
    name: "SEO & Growth Agent",
    icon: <TrendingUp size={22} />,
    department: "Marketing & Content",
    purpose: "Optimize website for search engines, track rankings, identify content gaps, and drive organic traffic for relevant keywords.",
    trigger: "Weekly SEO audit + content gap analysis",
    inputs: ["Website pages and content", "Target keywords", "Competitor rankings", "Search console data"],
    outputs: ["SEO audit reports", "Keyword opportunity list", "Content optimization recommendations", "Backlink targets"],
    tools: ["Google Search Console", "Ahrefs / SEMrush for keyword research", "Screaming Frog for technical SEO", "GPT-4 for content optimization"],
    frequency: "Weekly audits, monthly deep analysis",
    approach: "Target long-tail keywords in the scorpion venom niche: 'buy scorpion venom pharmaceutical grade', 'scorpion venom price per gram', 'venom extraction technology'. Low competition, high buyer intent.",
    steps: [
      "Keyword research: identify 100+ target keywords with search volume and competition data",
      "Map keywords to existing pages or identify content gaps needing new pages",
      "Optimize existing pages: meta titles, descriptions, headers, internal links",
      "Generate SEO-optimized content briefs for new articles",
      "Track rankings weekly for top 50 target keywords",
      "Monitor backlink profile: identify link-building opportunities",
      "Technical SEO: page speed, mobile usability, structured data",
      "Monthly report: traffic, rankings, conversions from organic search",
    ],
    kpis: ["Organic traffic growth (%)", "Keywords in top 10", "Domain authority", "Conversion rate from organic"],
    stack: ["Google Search Console", "Ahrefs / SEMrush", "Screaming Frog", "GPT-4", "Google Analytics"],
    priority: "Low",
  },
  {
    id: "pr-media",
    name: "PR & Media Agent",
    icon: <Megaphone size={22} />,
    department: "Marketing & Content",
    purpose: "Identify media opportunities, draft press releases, build journalist database, and pitch Mesmam stories to tech, biotech, and African media.",
    trigger: "Major milestones + weekly media monitoring",
    inputs: ["Company milestones", "Industry news hooks", "Journalist database", "Media outlet targets"],
    outputs: ["Press releases", "Media pitch emails", "Journalist contact database", "Press coverage tracking"],
    tools: ["GPT-4 for press release drafting", "Muck Rack / Cision for journalist database", "Google News alerts", "HARO (Help a Reporter Out)"],
    frequency: "Per-milestone + weekly media monitoring",
    approach: "Proactive media outreach around milestones (funding, robot demo, first sale, expansion). Reactive newsjacking when venom/biotech topics trend. Build relationships with 50+ relevant journalists.",
    steps: [
      "Build journalist database: tech (TechCrunch, Wired), biotech (Nature Biotech, STAT), Africa (TechCabal, Disrupt Africa)",
      "Monitor HARO for relevant journalist queries about biotech, robotics, Africa, venom",
      "Draft press releases for milestones using AI (human review before sending)",
      "Pitch personalized story angles to target journalists",
      "Track all press coverage and mentions",
      "Respond to inbound media inquiries within 4 hours",
      "Monthly: press coverage report, media value, sentiment analysis",
    ],
    kpis: ["Press mentions per month", "Tier 1 media placements", "Media response time", "Website traffic from PR"],
    stack: ["GPT-4 for writing", "Muck Rack / Cision", "Google Alerts", "HARO", "Airtable for tracking"],
    priority: "Low",
  },

  // ─── FINANCE & ADMIN ───
  {
    id: "finance-tracker",
    name: "Financial Operations Agent",
    icon: <DollarSign size={22} />,
    department: "Finance & Admin",
    purpose: "Track revenue, expenses, invoicing, and financial reporting. Auto-generate invoices for venom sales. Monthly P&L reporting.",
    trigger: "Transaction events + monthly reporting cycle",
    inputs: ["Sales orders", "Expense receipts", "Bank transactions", "Payroll data"],
    outputs: ["Invoices (PDF)", "Monthly P&L statement", "Cash flow forecast", "Expense reports", "Investor financial updates"],
    tools: ["QuickBooks / Wave for accounting", "Stripe / bank API for transaction tracking", "PDF invoice generation", "Google Sheets for modeling"],
    frequency: "Per-transaction + monthly reporting",
    approach: "Automate routine financial tasks: invoice generation on sale, expense categorization, monthly P&L compilation. Human CFO/advisor reviews reports before investor distribution.",
    steps: [
      "Auto-generate invoice when sales order is confirmed and shipped",
      "Send invoice to buyer via email with payment terms",
      "Track payments: match incoming payments to invoices",
      "Categorize expenses from bank feed (AI-assisted categorization)",
      "Weekly: cash position summary (balance, receivables, payables)",
      "Monthly: generate P&L statement, balance sheet, cash flow statement",
      "Quarterly: investor financial update with key metrics",
      "Annual: year-end financial close, tax preparation assistance",
    ],
    kpis: ["Days sales outstanding (DSO)", "Monthly burn rate", "Revenue growth (%)", "Runway remaining (months)", "Invoice accuracy"],
    stack: ["Wave / QuickBooks", "Stripe", "GPT-4 for expense categorization", "Google Sheets", "React-PDF for invoices"],
    priority: "High",
  },
  {
    id: "investor-relations",
    name: "Investor Relations Agent",
    icon: <BarChart3 size={22} />,
    department: "Finance & Admin",
    purpose: "Prepare investor updates, track KPIs, maintain cap table, and manage investor communications.",
    trigger: "Monthly update cycle + major events",
    inputs: ["Financial data", "Operational KPIs", "Milestones achieved", "Pipeline data"],
    outputs: ["Monthly investor update email", "KPI dashboard", "Board deck", "Cap table updates"],
    tools: ["GPT-4 for update drafting", "Carta for cap table", "Notion for data room", "Mailchimp for email"],
    frequency: "Monthly updates + event-driven",
    approach: "AI aggregates all department KPIs into a monthly investor update. Consistent format: highlights, KPIs, financials, challenges, next month's goals. Human founder reviews and personalizes before sending.",
    steps: [
      "Aggregate KPIs from all departments: revenue, robots deployed, specimens, customers, team size",
      "Pull financial summary from Finance Agent",
      "Draft monthly investor update: highlights, challenges, metrics, asks",
      "Create visual dashboard with key charts",
      "Founder review and personal note addition",
      "Send to investors via email (BCC or individual)",
      "Track open rates and investor engagement",
      "Maintain investor data room (Notion) with latest documents",
      "Update cap table after any equity events",
    ],
    kpis: ["Investor update timeliness (by 5th of month)", "Investor response rate", "Data room completeness", "Board meeting preparation time"],
    stack: ["GPT-4 / Claude", "Carta", "Notion", "Mailchimp / SendGrid", "Google Slides for board decks"],
    priority: "High",
  },
  {
    id: "hr-onboarding",
    name: "HR & Onboarding Agent",
    icon: <Users size={22} />,
    department: "Finance & Admin",
    purpose: "Manage hiring pipeline, onboarding new team members, and maintaining HR documentation. AI-assisted job description creation and candidate screening.",
    trigger: "Hiring events + weekly pipeline review",
    inputs: ["Open positions", "Candidate applications", "Interview feedback", "Onboarding checklist"],
    outputs: ["Job descriptions", "Candidate screening summaries", "Interview schedules", "Onboarding packages", "Team directory"],
    tools: ["GPT-4 for JD writing and screening", "Lever / Workable ATS", "Google Calendar for interviews", "Notion for onboarding docs"],
    frequency: "Continuous during hiring periods, event-driven onboarding",
    approach: "AI writes job descriptions, screens resumes against requirements, generates interview questions, and creates onboarding packages. Human makes all hiring decisions.",
    steps: [
      "Write job description with AI based on role requirements and company culture",
      "Post to channels: LinkedIn, TANITJOBS, university career centers, tech communities",
      "Screen incoming resumes: AI scores against requirements, flags top candidates",
      "Schedule phone screens and interviews via calendar integration",
      "Generate interview question sets based on role (technical + culture)",
      "Collect and summarize interviewer feedback",
      "Prepare offer letter from template",
      "On hire: generate onboarding package (welcome doc, accounts to create, tools access, 30-60-90 plan)",
      "Track onboarding completion: all accounts set up, training completed, buddy assigned",
      "90-day check-in reminder for manager",
    ],
    kpis: ["Time to hire (days)", "Candidate screening accuracy", "Onboarding completion (%)", "New hire 90-day retention"],
    stack: ["GPT-4 / Claude", "Lever / Workable", "Google Calendar", "Notion", "Slack"],
    priority: "Medium",
  },

  // ─── PRODUCT & PLATFORM ───
  {
    id: "marketplace-ops",
    name: "Marketplace Operations Agent",
    icon: <Globe2 size={22} />,
    department: "Product & Platform",
    purpose: "Manage the MesMarket B2B marketplace: supplier onboarding, listing quality, buyer verification, transaction monitoring, dispute resolution.",
    trigger: "Platform events (new listing, new buyer, transaction, dispute)",
    inputs: ["Supplier applications", "Product listings", "Buyer registrations", "Transaction data", "Dispute tickets"],
    outputs: ["Verified supplier profiles", "Quality-checked listings", "Transaction reports", "Dispute resolutions", "Platform health dashboard"],
    tools: ["Custom marketplace platform", "KYC verification API", "Payment processor (Stripe)", "Support ticketing system"],
    frequency: "Continuous (event-driven)",
    approach: "AI-assisted platform operations: auto-verify supplier credentials, check listing quality, monitor transactions for anomalies, route disputes to human team with AI-generated resolution recommendations.",
    steps: [
      "Supplier onboarding: verify company registration, certifications, and venom samples",
      "Listing review: check product descriptions, quality certifications, pricing reasonableness",
      "Buyer verification: KYC check, confirm legitimate research/pharma use",
      "Transaction monitoring: flag unusual orders (volume, destination, pricing anomalies)",
      "Auto-generate compliance documentation per transaction (CITES if needed, export docs)",
      "Dispute resolution: AI generates recommended resolution, human arbitrator decides",
      "Track platform metrics: GMV, transaction volume, supplier/buyer ratings",
      "Monthly platform health report",
    ],
    kpis: ["GMV (Gross Merchandise Value)", "Transaction volume", "Supplier verification rate", "Dispute resolution time", "Platform NPS"],
    stack: ["Next.js / React marketplace", "Stripe for payments", "Persona / Onfido for KYC", "Zendesk for support", "PostgreSQL"],
    priority: "Medium",
  },
  {
    id: "dashboard-builder",
    name: "Dashboard & Reporting Agent",
    icon: <BarChart3 size={22} />,
    department: "Product & Platform",
    purpose: "Build and maintain real-time dashboards for all departments: operations, sales, finance, fleet, inventory, compliance. Single source of truth.",
    trigger: "Continuous data pipeline + daily summary generation",
    inputs: ["All department data sources", "KPI definitions", "Visualization requirements"],
    outputs: ["Real-time dashboards (web)", "Daily summary emails", "Weekly reports (PDF)", "Ad-hoc analysis"],
    tools: ["Metabase / Grafana for dashboards", "PostgreSQL for data warehouse", "Python for ETL", "SendGrid for email reports"],
    frequency: "Real-time dashboards + daily email summaries",
    approach: "Central data warehouse aggregates data from all systems. Pre-built dashboards for each department. AI generates daily summaries highlighting anomalies and trends. Weekly PDF reports for management.",
    steps: [
      "Build ETL pipelines from all data sources → central PostgreSQL warehouse",
      "Create department dashboards: Fleet, Extraction, Inventory, Sales, Finance, Compliance",
      "Create executive dashboard: key metrics from all departments on one screen",
      "Daily: AI generates summary email highlighting key changes, anomalies, achievements",
      "Weekly: auto-generate PDF report for management team",
      "Enable ad-hoc querying via Metabase for team members",
      "Maintain data dictionary documenting all metrics and definitions",
      "Monthly: review and update dashboards based on team feedback",
    ],
    kpis: ["Dashboard uptime (%)", "Data freshness (max delay)", "Daily summary email open rate", "User adoption (% of team using dashboards)"],
    stack: ["Metabase / Grafana", "PostgreSQL", "Python (pandas, dbt)", "SendGrid", "n8n for ETL"],
    priority: "High",
  },
  {
    id: "knowledge-base",
    name: "Knowledge Base Agent",
    icon: <BookOpen size={22} />,
    department: "Product & Platform",
    purpose: "Maintain and organize all company knowledge: SOPs, research, meeting notes, training materials. AI-powered search and Q&A for the team.",
    trigger: "New document creation + weekly organization review",
    inputs: ["Meeting transcripts", "SOPs", "Research papers", "Training materials", "Slack conversations"],
    outputs: ["Organized knowledge base", "AI-powered Q&A interface", "Training modules", "SOP version control"],
    tools: ["Notion / Confluence for docs", "OpenAI Embeddings for search", "Slack integration for capturing decisions"],
    frequency: "Continuous ingestion + weekly curation",
    approach: "Every document, decision, and piece of research goes into a centralized knowledge base with AI-powered semantic search. New team members can ask the AI any question about company operations and get instant answers with source links.",
    steps: [
      "Set up Notion workspace with structured sections: SOPs, Research, Meeting Notes, Training, Policies",
      "Ingest all existing documents and research into knowledge base",
      "Build AI Q&A: embed all documents with OpenAI, enable natural language questions",
      "Capture meeting decisions via Slack bot → auto-add to knowledge base",
      "Create onboarding training modules from SOPs and guides",
      "Weekly: curate and organize new content, archive outdated docs",
      "Track usage: most searched topics, unanswered questions (content gaps)",
      "Monthly: team feedback on knowledge base usefulness and gaps",
    ],
    kpis: ["Questions answered accurately (%)", "Avg time to find information", "Content coverage (%)", "New hire ramp-up time reduction"],
    stack: ["Notion / Confluence", "OpenAI Embeddings + Retrieval", "Slack bot", "Python for ingestion"],
    priority: "Medium",
  },
];

/* ─── COMPONENTS ─── */

function DeptBadge({ name, color }: { name: string; color: string }) {
  return (
    <span className={`text-[10px] font-semibold uppercase tracking-wider ${color}`}>
      {name}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const colors: Record<string, string> = {
    Critical: "bg-red-500/10 text-red-400",
    High: "bg-orange-500/10 text-orange-400",
    Medium: "bg-yellow-500/10 text-yellow-400",
    Low: "bg-green-500/10 text-green-400",
  };
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${colors[priority] || ""}`}>
      {priority}
    </span>
  );
}

function AgentCardComponent({ agent }: { agent: AgentCard }) {
  const dept = departments.find((d) => d.name === agent.department);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id={agent.id}
      className="glass rounded-2xl overflow-hidden mb-8 scroll-mt-24"
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg ${dept?.bg || "bg-gold/10"} flex items-center justify-center ${dept?.color || "text-gold"}`}>
            {agent.icon}
          </div>
          <div>
            <h3 className="font-bold">{agent.name}</h3>
            <DeptBadge name={agent.department} color={dept?.color || "text-gold"} />
          </div>
        </div>
        <PriorityBadge priority={agent.priority} />
      </div>

      {/* Body */}
      <div className="p-6 space-y-5">
        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Purpose</h4>
          <p className="text-sm text-gray-300">{agent.purpose}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Trigger</h4>
            <p className="text-xs text-gray-400">{agent.trigger}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Frequency</h4>
            <p className="text-xs text-gray-400">{agent.frequency}</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Approach</h4>
          <p className="text-xs text-gray-400 leading-relaxed">{agent.approach}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Step-by-Step Workflow</h4>
          <div className="space-y-1.5">
            {agent.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                <span className="w-5 h-5 rounded-md bg-gold/10 text-gold flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Inputs</h4>
            {agent.inputs.map((inp) => (
              <div key={inp} className="flex items-start gap-1.5 text-xs text-gray-400 mb-1">
                <ArrowRight size={10} className="text-green-400 mt-0.5 shrink-0" />{inp}
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Outputs</h4>
            {agent.outputs.map((out) => (
              <div key={out} className="flex items-start gap-1.5 text-xs text-gray-400 mb-1">
                <ArrowRight size={10} className="text-blue-400 mt-0.5 shrink-0" />{out}
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">KPIs</h4>
            {agent.kpis.map((kpi) => (
              <div key={kpi} className="flex items-start gap-1.5 text-xs text-gray-400 mb-1">
                <Target size={10} className="text-gold mt-0.5 shrink-0" />{kpi}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {agent.stack.map((tool) => (
              <span key={tool} className="text-[10px] px-2 py-1 rounded-md bg-white/3 text-gray-400 border border-white/5">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── PAGE ─── */

export default function WorkflowsPage() {
  return (
    <main>
      <PageNav current="/workflows" />

      <PageHero
        badge="AI Product Ops — Complete Workflow Architecture"
        title="Workflows &"
        titleHighlight="AI Agents"
        subtitle="32 AI agents across 9 departments. Every workflow automated, every task assigned, every tool specified. Your complete operational playbook as an AI-first company."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* OVERVIEW */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-gold rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-gold mb-2">Operational Architecture Overview</h3>
          <p className="text-sm text-gray-400 mb-6">
            Mesmam operates as an AI-first company. Every repeatable task has an AI agent or automation workflow.
            Humans focus on strategy, relationships, and judgment calls. Agents handle execution, monitoring, and reporting.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { val: "32", label: "AI Agents", sub: "Across all departments" },
              { val: "9", label: "Departments", sub: "Full company coverage" },
              { val: "n8n", label: "Orchestration", sub: "Central automation hub" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-gold">{s.val}</div>
                <div className="text-sm font-semibold mt-1">{s.label}</div>
                <div className="text-xs text-gray-500">{s.sub}</div>
              </div>
            ))}
          </div>

          <h4 className="font-bold text-sm mb-3 text-gold">Core Technology Stack</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { tool: "n8n (self-hosted)", role: "Workflow orchestration — connects all agents and triggers" },
              { tool: "GPT-4 / Claude API", role: "Language intelligence — writing, analysis, extraction, reasoning" },
              { tool: "Python", role: "Data science, ML models, scraping, custom logic" },
              { tool: "PostgreSQL + PostGIS", role: "Central database — operational data, spatial data, analytics" },
              { tool: "InfluxDB + Grafana", role: "Time-series data — robot telemetry, IoT sensors, dashboards" },
              { tool: "Airtable / Notion", role: "Lightweight CRM, project management, knowledge base" },
              { tool: "Slack + WhatsApp", role: "Team communication and field partner coordination" },
              { tool: "Vercel / Railway", role: "Web hosting, APIs, marketplace platform deployment" },
            ].map((t) => (
              <div key={t.tool} className="glass rounded-lg p-3">
                <div className="font-bold text-xs text-uv-glow">{t.tool}</div>
                <div className="text-[10px] text-gray-500 mt-1">{t.role}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DEPARTMENT INDEX */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold mb-6">Department Index — Quick Navigation</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {departments.map((d) => (
              <a
                key={d.name}
                href={`#${agents.find((a) => a.department === d.name)?.id || ""}`}
                className="glass rounded-xl p-4 hover:border-gold/20 transition-colors group flex items-center gap-3"
              >
                <div className={`w-9 h-9 rounded-lg ${d.bg} flex items-center justify-center ${d.color} group-hover:scale-110 transition-transform`}>
                  <Sparkles size={16} />
                </div>
                <div>
                  <div className="font-bold text-sm">{d.name}</div>
                  <div className="text-xs text-gray-500">{d.count} agents</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* PRIORITY ROADMAP */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-gold rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-gold mb-4">Implementation Priority</h3>
          <p className="text-sm text-gray-400 mb-6">Build agents in this order — each phase unlocks the next.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                phase: "Sprint 1",
                label: "Foundation",
                timeline: "Week 1-4",
                items: ["Lab Hunter Agent", "Cold Outreach Agent", "Content Creation Agent", "Compliance Monitor Agent"],
                reason: "Generate pipeline and establish regulatory groundwork",
              },
              {
                phase: "Sprint 2",
                label: "Operations",
                timeline: "Week 5-8",
                items: ["Robot Design Planner", "Species Classification AI", "Extraction Protocol Agent", "Field Coordinator Agent"],
                reason: "Enable core product development and field operations",
              },
              {
                phase: "Sprint 3",
                label: "Scale",
                timeline: "Week 9-12",
                items: ["Fleet Monitoring Agent", "Route Optimizer Agent", "Venom Inventory Agent", "Financial Ops Agent"],
                reason: "Operationalize and track everything",
              },
              {
                phase: "Sprint 4",
                label: "Platform",
                timeline: "Week 13-16",
                items: ["Dashboard Builder", "Marketplace Ops", "Investor Relations Agent", "Knowledge Base Agent"],
                reason: "Full visibility and platform readiness",
              },
            ].map((s) => (
              <div key={s.phase} className={`glass rounded-xl p-4 ${s.phase === "Sprint 1" ? "border border-gold/30" : ""}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-gold">{s.phase}</span>
                  <span className="text-[10px] text-gray-500">{s.timeline}</span>
                </div>
                <h4 className="font-bold text-sm mb-2">{s.label}</h4>
                <div className="space-y-1 mb-3">
                  {s.items.map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-[11px] text-gray-400">
                      <CheckCircle2 size={10} className="text-gold shrink-0" />{item}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-500 italic">{s.reason}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ALL AGENTS BY DEPARTMENT */}
        {departments.map((dept) => {
          const deptAgents = agents.filter((a) => a.department === dept.name);
          if (deptAgents.length === 0) return null;
          return (
            <div key={dept.name} className="mb-16">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div className={`w-12 h-12 rounded-xl ${dept.bg} flex items-center justify-center ${dept.color}`}>
                  <Workflow size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black">{dept.name}</h2>
                  <p className="text-sm text-gray-500">{deptAgents.length} agents</p>
                </div>
              </motion.div>

              {deptAgents.map((agent) => (
                <AgentCardComponent key={agent.id} agent={agent} />
              ))}
            </div>
          );
        })}

        {/* AUTOMATION PLATFORM RECOMMENDATION */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-gold rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-gold mb-4">Recommended Automation Platform: n8n (Self-Hosted)</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-sm mb-3">Why n8n</h4>
              <div className="space-y-2">
                {[
                  "Free self-hosted: unlimited workflows and executions ($5-10/month hosting)",
                  "Native LangChain integration for AI agent workflows",
                  "Visual workflow builder — non-engineers can build and modify",
                  "900+ integrations (Slack, Gmail, Airtable, HubSpot, Stripe, etc.)",
                  "Custom code nodes for Python/JavaScript when needed",
                  "Webhook triggers for real-time event-driven workflows",
                  "Full control over data — no vendor lock-in on sensitive venom/customer data",
                  "Active open-source community and rapid development",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 size={12} className="text-gold mt-0.5 shrink-0" />{b}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Setup Plan</h4>
              <div className="space-y-2">
                {[
                  "Deploy n8n on Railway or self-hosted VPS ($10/month)",
                  "Connect core services: Gmail, Slack, Airtable, OpenAI",
                  "Build Lab Hunter workflow first (highest ROI)",
                  "Add Cold Outreach pipeline (second highest ROI)",
                  "Build content scheduling workflow",
                  "Add monitoring and alerting workflows",
                  "Document all workflows in Knowledge Base",
                  "Train team members on building simple workflows",
                ].map((s, i) => (
                  <div key={s} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="w-4 h-4 rounded-sm bg-gold/10 text-gold flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-gold rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-black text-gold mb-4">32 Agents. 9 Departments. One Playbook.</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            This is your operational blueprint for running Mesmam as an AI-first company.
            Start with Sprint 1 (Lab Hunter + Cold Outreach), prove revenue, then build out systematically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/action-plan" className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-bold hover:shadow-xl hover:shadow-gold/30 transition-all hover:scale-105 flex items-center gap-2 justify-center">
              Action Plan <ArrowRight size={18} />
            </a>
            <a href="/pitch-deck" className="px-6 py-3 rounded-xl glass-gold text-gold font-bold hover:bg-gold/10 transition-all flex items-center gap-2 justify-center">
              Pitch Deck <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <PageFooter />
    </main>
  );
}
