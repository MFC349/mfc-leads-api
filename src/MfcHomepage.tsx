import { motion } from "framer-motion";
import { ArrowRight, Shield, Heart, Briefcase, BarChart3, ChevronDown } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  TYPES                                                              */
/* ------------------------------------------------------------------ */
interface Lane {
  title: string;
  text: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
}

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */
const LANES: Lane[] = [
  {
    title: "Discipline Reset",
    text: "21 days to build the standards you still follow on bad days. Fitness, mindset, and structure — no fluff, no filler.",
    href: "https://reset.moldedfortitude.com",
    icon: <Shield className="w-7 h-7" />,
    accent: "from-amber-500/20 to-transparent",
  },
  {
    title: "Healing the Warrior Spirit",
    text: "Restore identity through grounded, trauma-informed work. For those carrying weight — and ready to set it down properly.",
    href: "https://healing.moldedfortitude.com",
    icon: <Heart className="w-7 h-7" />,
    accent: "from-rose-500/20 to-transparent",
  },
  {
    title: "Culture to Contract",
    text: "Turn lived wisdom into structured enterprise. Cultural competency meets real contracting systems.",
    href: "https://culture.moldedfortitude.com",
    icon: <Briefcase className="w-7 h-7" />,
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    title: "GrantSignal Desk",
    text: "Build funding operations that stop relying on memory and panic. Signal-based grant tracking for real teams.",
    href: "https://grant.moldedfortitude.com",
    icon: <BarChart3 className="w-7 h-7" />,
    accent: "from-blue-500/20 to-transparent",
  },
];

const PROOF_ITEMS = [
  "Systems that hold under pressure",
  "Real structure, not templates",
  "Trusted by operators & organizations",
  "Built for pressure, not perfection",
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Identify the Gap",
    text: "We meet you where you are — not where a brochure says you should be.",
  },
  {
    num: "02",
    title: "Build the System",
    text: "Discipline, healing, enterprise, or funding — we design what holds.",
  },
  {
    num: "03",
    title: "Execute Under Pressure",
    text: "Every system gets stress-tested. If it breaks in real life, we rebuild it.",
  },
];

/* ------------------------------------------------------------------ */
/*  ANIMATION VARIANTS                                                 */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/favicon.png" alt="MFC" className="w-8 h-8" />
          <span className="text-bone font-semibold tracking-tight text-sm uppercase">
            Molded Fortitude
          </span>
        </a>
        <a
          href="https://meet.brevo.com/clayton-williams"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-gold/90 hover:bg-gold text-[#050505] rounded-lg text-sm font-semibold transition-colors"
        >
          Book a Call <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1e8d8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <img
            src="/favicon.png"
            alt="Molded Fortitude Consulting"
            className="w-24 h-24 mx-auto opacity-80"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-bone tracking-[-0.04em] leading-[1.08] mb-6"
        >
          We build systems that hold
          <br />
          <span className="text-gold">when life gets heavy.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl text-bone/60 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Fitness. Healing. Enterprise. Funding systems.
          <br className="hidden sm:block" />
          Built for real people, real pressure, and real outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://meet.brevo.com/clayton-williams"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold/90 text-[#050505] rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-gold/20"
          >
            Book a Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#ecosystem"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-bone/20 hover:border-bone/40 text-bone rounded-xl text-base font-medium transition-all"
          >
            See What We Build <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-bone/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="py-16 border-y border-white/5 bg-[#080808]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {PROOF_ITEMS.map((item, i) => (
            <motion.div
              key={item}
              variants={fadeUp}
              custom={i}
              className="flex items-center gap-3 text-bone/50 text-sm sm:text-base"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            The Ecosystem
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl md:text-5xl font-bold text-bone tracking-tight">
            Four lanes. One mission.
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-bone/50 mt-4 max-w-xl mx-auto text-lg">
            Every system we build connects back to the same goal — helping people operate under pressure with clarity and structure.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {LANES.map((lane, i) => (
            <motion.a
              key={lane.title}
              href={lane.href}
              variants={fadeUp}
              custom={i}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10 hover:border-gold/30 transition-all duration-500 hover:bg-white/[0.04]"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${lane.accent}`} />

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/[0.05] text-gold">
                  {lane.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bone group-hover:text-gold transition-colors">
                    {lane.title}
                  </h3>
                </div>
              </div>

              <p className="text-bone/50 leading-relaxed mb-6">
                {lane.text}
              </p>

              <div className="flex items-center gap-2 text-gold/70 group-hover:text-gold text-sm font-medium transition-colors">
                Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#080808] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            How It Works
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl md:text-5xl font-bold text-bone tracking-tight">
            Simple. Grounded. Repeatable.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              custom={i}
              className="flex gap-6 sm:gap-8 items-start"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                <span className="text-gold font-bold text-lg">{step.num}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-bone mb-2">{step.title}</h3>
                <p className="text-bone/50 leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.img
            variants={fadeUp}
            src="/favicon.png"
            alt="MFC"
            className="w-16 h-16 mx-auto mb-8 opacity-60"
          />
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-bone tracking-tight mb-6"
          >
            Ready to build something
            <br />
            <span className="text-gold">that actually holds?</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-bone/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            No pitch decks. No hustle theater. Just a real conversation about what you need and whether we&apos;re the right people to build it.
          </motion.p>
          <motion.div variants={fadeUp} custom={3}>
            <a
              href="https://meet.brevo.com/clayton-williams"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold hover:bg-gold/90 text-[#050505] rounded-xl text-lg font-semibold transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              Book a Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="MFC" className="w-6 h-6 opacity-50" />
            <span className="text-bone/40 text-sm">
              &copy; {new Date().getFullYear()} Molded Fortitude Consulting
            </span>
          </div>
          <div className="flex gap-6">
            {LANES.map((lane) => (
              <a
                key={lane.title}
                href={lane.href}
                className="text-bone/30 hover:text-bone/60 text-xs sm:text-sm transition-colors"
              >
                {lane.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN EXPORT                                                        */
/* ------------------------------------------------------------------ */
export default function MfcHomepage() {
  return (
    <div className="min-h-screen bg-[#050505] text-bone">
      <Navbar />
      <HeroSection />
      <ProofSection />
      <EcosystemSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
