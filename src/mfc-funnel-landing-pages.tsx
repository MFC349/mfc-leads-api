import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle, Loader2, ExternalLink } from "lucide-react";

type ProofItem = {
  label: string;
  value: string;
};

type ProcessStep = {
  title: string;
  text: string;
};

export type LandingPageConfig = {
  slug: string;
  brand: string;
  eyebrow: string;
  headline: string;
  subcopy: string;
  heroImage: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  proofIntro: string;
  proof: ProofItem[];
  processIntro: string;
  process: ProcessStep[];
  closeTitle: string;
  closeText: string;
  closeCta: { label: string; href: string };
  programInterest: string;
  formHeadline: string;
  formSubtext: string;
  canonical: string;
};

const WEBHOOK_URL = "https://webhooks.tasklet.ai/v1/public/webhook?token=7840f43dd7e9238d92ee534939eb5429";

function LeadCaptureForm({ config }: { config: LandingPageConfig }) {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", problem_summary: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.full_name) return;
    setStatus("sending");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          lead_source: `landing_page_${config.slug}`,
          program_interest: config.programInterest,
          lead_type: "individual",
          decision_maker_status: "decision-maker",
          timeline: "ready",
          budget_status: "exploring"
        })
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-[#C9B27B]/40 bg-[#C9B27B]/5 p-8 text-center"
      >
        <CheckCircle className="mx-auto h-12 w-12 text-[#C9B27B]" />
        <h3 className="mt-4 text-2xl font-bold uppercase text-[#F5EFE3]">You are in.</h3>
        <p className="mt-2 text-sm text-[#E8DECC]/78">
          Check your inbox. Clay will be in touch shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs uppercase tracking-[0.3em] text-[#C9B27B]/85 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={form.full_name}
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
          className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-[#F5EFE3] placeholder-white/30 outline-none focus:border-[#C9B27B] transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.3em] text-[#C9B27B]/85 mb-2">
          Email *
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-[#F5EFE3] placeholder-white/30 outline-none focus:border-[#C9B27B] transition-colors"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.3em] text-[#C9B27B]/85 mb-2">
          Phone
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-[#F5EFE3] placeholder-white/30 outline-none focus:border-[#C9B27B] transition-colors"
          placeholder="+1 (555) 000-0000"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.3em] text-[#C9B27B]/85 mb-2">
          What are you working through?
        </label>
        <textarea
          value={form.problem_summary}
          onChange={(e) => setForm({ ...form, problem_summary: e.target.value })}
          rows={3}
          className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-[#F5EFE3] placeholder-white/30 outline-none focus:border-[#C9B27B] transition-colors resize-none"
          placeholder="Brief description of your situation or goals..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Try again or email clay@moldedfortitude.com directly.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full min-h-[52px] items-center justify-center gap-2 border border-[#C9B27B] bg-[#C9B27B] px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
        ) : (
          <>{config.closeCta.label} <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></>
        )}
      </button>
    </form>
  );
}

const ASSET_MAP = {
  trainingHero: "/assets/mfc/training-hero.png",
  disciplineSystem: "/assets/mfc/discipline-system.png",
  warriorSpiritHero: "/assets/mfc/warrior-spirit-hero.png",
  warriorTactical: "/assets/mfc/warrior-tactical.png",
  leadershipHero: "/assets/mfc/leadership-hero.png",
  carvingHero: "/assets/mfc/carving-hero.png",
  beastMark: "/assets/mfc/beast-paw-mark.png"
};

export const PAGES: Record<string, LandingPageConfig> = {
  "21-day-reset": {
    slug: "21-day-reset",
    brand: "Molded Fortitude Consulting",
    eyebrow: "21-Day Discipline Reset",
    headline: "Build standards you still follow on bad days.",
    subcopy:
      "21 days. Six coaching sessions. Daily direction. Real accountability. This is for people who are tired of starting over.",
    heroImage: ASSET_MAP.trainingHero,
    primaryCta: {
      label: "Book Your Reset Call",
      href: "https://meet.brevo.com/clayton-williams/discovery-call"
    },
    secondaryCta: {
      label: "See The Reset",
      href: "#proof"
    },
    proofIntro:
      "No fantasy language. Just structure, contact, and a system built to hold under stress.",
    proof: [
      { label: "Format", value: "21 days of direction" },
      { label: "Coaching", value: "6 live sessions" },
      { label: "Support", value: "Daily accountability" },
      { label: "Outcome", value: "A routine you can repeat" }
    ],
    processIntro:
      "Simple enough to follow. Strong enough to matter.",
    process: [
      {
        title: "Assess",
        text: "We strip the noise and identify where your discipline breaks in real life."
      },
      {
        title: "Forge",
        text: "We build training, check-ins, and identity standards you can actually hold."
      },
      {
        title: "Repeat",
        text: "You leave with a rhythm that does not depend on motivation or mood."
      }
    ],
    closeTitle: "You do not need more hype.",
    closeText:
      "You need a system that survives pressure. Book the call. We will see if you are ready for the work.",
    closeCta: {
      label: "Start The Reset",
      href: "https://meet.brevo.com/clayton-williams/discovery-call"
    },
    programInterest: "fitness",
    formHeadline: "Lock In Your Reset",
    formSubtext: "Drop your info below. Clay will reach out with your next step.",
    canonical: "https://reset.moldedfortitude.com"
  },

  "healing-the-warrior-spirit": {
    slug: "healing-the-warrior-spirit",
    brand: "Molded Fortitude Consulting",
    eyebrow: "Healing the Warrior Spirit",
    headline: "Healing that restores identity, not just mood.",
    subcopy:
      "Trauma-informed guidance rooted in culture, structure, and lived truth. Built for people who want real reclamation.",
    heroImage: ASSET_MAP.warriorSpiritHero,
    primaryCta: {
      label: "Book A Discovery Call",
      href: "https://meet.brevo.com/clayton-williams"
    },
    secondaryCta: {
      label: "View The Work",
      href: "#proof"
    },
    proofIntro:
      "This work is grounded in culture, responsibility, and practical change. Not performance. Not therapy theater.",
    proof: [
      { label: "Approach", value: "Trauma-informed" },
      { label: "Foundation", value: "Culture + discipline" },
      { label: "Setting", value: "1:1 or group" },
      { label: "Focus", value: "Identity restoration" }
    ],
    processIntro:
      "Clear stages. No confusion. No drift.",
    process: [
      {
        title: "Witness",
        text: "We name the patterns, pressure points, and old survival habits without pretending they are your future."
      },
      {
        title: "Reclaim",
        text: "We reconnect you to standards, story, and practices that rebuild the inner frame."
      },
      {
        title: "Stand",
        text: "You leave with grounded rituals and a code you can live, not just admire."
      }
    ],
    closeTitle: "This is not passive healing.",
    closeText:
      "It is honest work with structure behind it. If that is what you are after, step forward properly.",
    closeCta: {
      label: "Apply For Support",
      href: "https://meet.brevo.com/clayton-williams"
    },
    programInterest: "healing",
    formHeadline: "Step Forward",
    formSubtext: "Share where you are. This is the beginning of honest work.",
    canonical: "https://healing.moldedfortitude.com"
  },

  "culture-to-contract": {
    slug: "culture-to-contract",
    brand: "Molded Fortitude Consulting",
    eyebrow: "Culture to Contract",
    headline: "Turn lived wisdom into signed work.",
    subcopy:
      "A disciplined cohort for Indigenous enterprise, leadership, and revenue readiness. Built to move from story to structure.",
    heroImage: ASSET_MAP.leadershipHero,
    primaryCta: {
      label: "Book Partnership Call",
      href: "https://meet.brevo.com/clayton-williams"
    },
    secondaryCta: {
      label: "See Program Fit",
      href: "#proof"
    },
    proofIntro:
      "Not another inspiration circle. This is a working system for readiness, positioning, and movement.",
    proof: [
      { label: "Focus", value: "Enterprise readiness" },
      { label: "Cadence", value: "12-week cohort" },
      { label: "Support", value: "Coaching + intensives" },
      { label: "Goal", value: "From idea to contract" }
    ],
    processIntro:
      "Built to help serious people stop hovering at the edge.",
    process: [
      {
        title: "Clarify",
        text: "Define the offer, the customer, and the value without inflated language or confusion."
      },
      {
        title: "Structure",
        text: "Build the operating basics, pricing logic, and documents needed to be taken seriously."
      },
      {
        title: "Advance",
        text: "Move into outreach, agreements, and steady execution that can become repeatable revenue."
      }
    ],
    closeTitle: "Respect the vision enough to build the frame.",
    closeText:
      "If your work is meant to serve the next seven generations, it deserves more than loose notes and hope.",
    closeCta: {
      label: "Enter The Cohort",
      href: "https://meet.brevo.com/clayton-williams"
    },
    programInterest: "leadership",
    formHeadline: "Apply For The Cohort",
    formSubtext: "Spots are limited. Tell us about your vision and readiness.",
    canonical: "https://leadership.moldedfortitude.com"
  },

  "carving-workshops": {
    slug: "carving-workshops",
    brand: "Beast of Mur x Molded Fortitude",
    eyebrow: "Carving Workshops",
    headline: "Creation as discipline. Art as reclamation.",
    subcopy:
      "Hands-on workshops that teach carving, patience, identity, and meaning through real making. No empty performance.",
    heroImage: ASSET_MAP.carvingHero,
    primaryCta: {
      label: "Book A Workshop",
      href: "https://meet.brevo.com/clayton-williams"
    },
    secondaryCta: {
      label: "See Workshop Value",
      href: "#proof"
    },
    proofIntro:
      "These workshops are not crafts for passing time. They are built for focus, story, and earned confidence.",
    proof: [
      { label: "Format", value: "Intro or full session" },
      { label: "Method", value: "Hands-on guidance" },
      { label: "Anchor", value: "Cultural meaning" },
      { label: "Result", value: "Skill + reflection" }
    ],
    processIntro:
      "The process is direct because the material does not care about excuses.",
    process: [
      {
        title: "Learn",
        text: "Understand the tool, the symbol, and the discipline behind the craft."
      },
      {
        title: "Carve",
        text: "Work the material with focus, patience, and real feedback in the moment."
      },
      {
        title: "Carry",
        text: "Leave with a finished piece and a deeper relationship to process, story, and self-command."
      }
    ],
    closeTitle: "What you shape also shapes you.",
    closeText:
      "Bring this into your school, program, team, or community and make the time mean something.",
    closeCta: {
      label: "Bring A Workshop In",
      href: "https://meet.brevo.com/clayton-williams"
    },
    programInterest: "workshop",
    formHeadline: "Request A Workshop",
    formSubtext: "Tell us about your group, community, or program. We will design the right fit.",
    canonical: "https://carving.moldedfortitude.com"
  }
};

const SITE_LINKS = [
  { label: 'All Programs', href: 'https://moldedfortitude.com', description: 'Explore all MFC offerings' },
  { label: '21-Day Reset', href: 'https://reset.moldedfortitude.com', description: 'Discipline & fitness transformation' },
  { label: 'Warrior Spirit', href: 'https://healing.moldedfortitude.com', description: 'Healing for veterans & first responders' },
  { label: 'Culture to Contract', href: 'https://leadership.moldedfortitude.com', description: 'Indigenous leadership development' },
  { label: 'Carving Workshops', href: 'https://carving.moldedfortitude.com', description: 'Hands-on cultural workshops' },
  { label: 'Grant Writing', href: 'https://grant.moldedfortitude.com', description: 'Grant writing services' },
];

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  }
};

// Landing Page View Component
export function LandingPageView({ page }: { page: LandingPageConfig }) {
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 0.2], [0.35, 0.6]);

  const footerLinks = SITE_LINKS.filter((link) => link.href !== page.canonical);

  return (
    <main className="bg-black text-[#F1E8D8] selection:bg-[#9C8350] selection:text-black">
      <section className="relative isolate min-h-screen overflow-hidden border-b border-[#9C8350]/20">
        <motion.div style={{ y: heroImageY }} className="absolute inset-0">
          <img
            src={page.heroImage}
            alt={page.headline}
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOverlayOpacity }}
          className="absolute inset-0 bg-black"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.38),rgba(0,0,0,0.68),rgba(0,0,0,0.92))]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-5 pb-8 pt-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={ASSET_MAP.beastMark}
                alt="MFC mark"
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#C9B27B]">
                  {page.brand}
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-white/65">
                  {page.eyebrow}
                </p>
              </div>
            </div>
            <a
              href="https://moldedfortitude.com"
              className="text-xs uppercase tracking-[0.28em] text-white/55 hover:text-[#C9B27B] transition-colors"
            >
              All Programs
            </a>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={sectionFade}
            className="max-w-4xl py-16 sm:py-20 lg:py-24"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#C9B27B]">
              Earn Your Strength
            </p>

            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-hero text-[#F5EFE3] sm:text-6xl md:text-7xl lg:text-8xl">
              {page.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#E8DECC]/82 sm:text-lg">
              {page.subcopy}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={page.primaryCta.href}
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 border border-[#C9B27B] bg-[#C9B27B] px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                {page.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href={page.secondaryCta.href}
                className="inline-flex min-h-[52px] items-center justify-center border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#F5EFE3] transition-colors duration-200 hover:border-[#C9B27B] hover:text-[#C9B27B]"
              >
                {page.secondaryCta.label}
              </a>
            </div>
          </motion.div>

          <div className="flex items-center gap-2 text-[#F5EFE3]/55">
            <ChevronDown className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.28em]">Scroll</span>
          </div>
        </div>
      </section>

      <motion.section
        id="proof"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B]">
                Proof
              </p>
              <h2 className="mt-4 max-w-lg text-3xl font-black uppercase leading-tight text-[#F5EFE3] sm:text-4xl">
                Real work. Clear structure. No inflated claims.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#E8DECC]/78">
                {page.proofIntro}
              </p>
            </div>

            <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2">
              {page.proof.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10 py-6 sm:border-r sm:px-6 [&:nth-child(2n)]:sm:border-r-0"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#C9B27B]/85">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-bold uppercase leading-tight text-[#F5EFE3]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B]">
              Process
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-black uppercase leading-tight text-[#F5EFE3] sm:text-4xl">
              {page.processIntro}
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {page.process.map((step, idx) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      delay: idx * 0.1,
                      ease: [0.22, 1, 0.36, 1] as const
                    }
                  }
                }}
                className="border-t border-white/10 pt-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#C9B27B]">
                    <span className="text-sm font-bold text-[#C9B27B]">
                      {idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase text-[#F5EFE3]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#E8DECC]/78">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Lead Capture Form */}
      <motion.section
        id="apply"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="border-b border-white/10 bg-[linear-gradient(to_bottom,rgba(201,178,123,0.08),rgba(0,0,0,0))]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B]">
                Take Action
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#F5EFE3] sm:text-5xl">
                {page.formHeadline}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#E8DECC]/78">
                {page.formSubtext}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">or</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <a
                href={page.closeCta.href}
                className="mt-6 inline-flex items-center gap-2 text-sm text-[#C9B27B] hover:text-[#F5EFE3] transition-colors"
              >
                Skip the form — book a call directly <ArrowRight className="h-3 w-3" />
              </a>
            </div>
            <div>
              <LeadCaptureForm config={page} />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Close CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase leading-tight text-[#F5EFE3] sm:text-5xl">
              {page.closeTitle}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#E8DECC]/78">
              {page.closeText}
            </p>

            <div className="mt-8">
              <a
                href={page.closeCta.href}
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 border border-[#C9B27B] bg-[#C9B27B] px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                {page.closeCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Backlinks Footer — Explore Our Programs */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B] mb-6">
            Explore Our Programs
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 border border-white/10 hover:border-[#C9B27B]/50 transition-colors"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-[#C9B27B] group-hover:text-[#F5EFE3] transition-colors flex items-center gap-1">
                  {link.label}
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
                <p className="mt-1 text-xs text-[#E8DECC]/55 leading-relaxed">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <img
                src={ASSET_MAP.beastMark}
                alt="MFC mark"
                className="h-6 w-6 object-contain"
              />
              <span className="text-xs uppercase tracking-[0.28em] text-white/55">
                Molded Fortitude Consulting
              </span>
            </div>
            <a
              href="https://moldedfortitude.com"
              className="text-xs uppercase tracking-[0.28em] text-white/55 hover:text-[#C9B27B] transition-colors"
            >
              View All Programs
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
