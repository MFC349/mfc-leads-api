import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ASSET_MAP = {
  beastMark: '/assets/mfc/beast-paw-mark.png',
  trainingHero: '/assets/mfc/training-hero.png',
  warriorSpiritHero: '/assets/mfc/warrior-spirit-hero.png',
  leadershipHero: '/assets/mfc/leadership-hero.png',
  carvingHero: '/assets/mfc/carving-hero.png',
};

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const programs = [
  {
    name: '21-Day Discipline Reset',
    description: 'Build standards you still follow on bad days. 21 days of structure, coaching, and real accountability.',
    image: ASSET_MAP.trainingHero,
    href: 'https://reset.moldedfortitude.com',
    cta: 'Start Your Reset',
  },
  {
    name: 'Healing the Warrior Spirit',
    description: 'Trauma-informed guidance rooted in culture and structure. Identity restoration for veterans and first responders.',
    image: ASSET_MAP.warriorSpiritHero,
    href: 'https://healing.moldedfortitude.com',
    cta: 'Begin Healing',
  },
  {
    name: 'Culture to Contract',
    description: 'Turn lived wisdom into enterprise-ready execution. A 12-week leadership cohort for Indigenous leaders.',
    image: ASSET_MAP.leadershipHero,
    href: 'https://leadership.moldedfortitude.com',
    cta: 'Apply Now',
  },
  {
    name: 'Carving Workshops',
    description: 'Hands-on Indigenous carving workshops for teams, schools, and communities. Art as discipline and reclamation.',
    image: ASSET_MAP.carvingHero,
    href: 'https://carving.moldedfortitude.com',
    cta: 'Book a Workshop',
  },
];

const subdomainLinks = [
  { label: '21-Day Reset', href: 'https://reset.moldedfortitude.com' },
  { label: 'Warrior Spirit', href: 'https://healing.moldedfortitude.com' },
  { label: 'Culture to Contract', href: 'https://leadership.moldedfortitude.com' },
  { label: 'Carving Workshops', href: 'https://carving.moldedfortitude.com' },
  { label: 'Grant Writing', href: 'https://grant.moldedfortitude.com' },
];

function Hub() {
  return (
    <main className="bg-[#0D0D0D] text-[#F5EFE3] selection:bg-[#9C8350] selection:text-black">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col border-b border-[#9C8350]/20">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(13,13,13,1))]" />

        <div className="relative mx-auto flex flex-col justify-between max-w-7xl w-full px-5 pt-6 pb-8 sm:px-8 lg:px-12 flex-1">
          {/* Nav */}
          <div className="flex items-center gap-3">
            <img src={ASSET_MAP.beastMark} alt="MFC" className="h-10 w-10 object-contain" />
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#C9B27B]">
              Molded For Culture
            </p>
          </div>

          {/* Hero text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={sectionFade}
            className="max-w-4xl py-16 sm:py-20 lg:py-24"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#C9B27B]">
              Discipline · Culture · Leadership
            </p>
            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#F5EFE3] sm:text-6xl md:text-7xl lg:text-8xl">
              Molded For Culture
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#E8DECC]/82 sm:text-lg">
              Clayton Williams builds programs that hold under pressure. Fitness resets, warrior spirit healing, Indigenous leadership development, and cultural carving workshops — choose the path that matches where you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionFade}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B]">Programs</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight text-[#F5EFE3] sm:text-4xl">
              Choose your path.
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {programs.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardFade}
                className="group relative block overflow-hidden border border-[#9C8350]/30 hover:border-[#C9B27B] transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-[#F5EFE3] group-hover:text-[#C9B27B] transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#E8DECC]/72">
                    {p.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#C9B27B]">
                    {p.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* About / Foundation */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B]">The Foundation</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight text-[#F5EFE3] sm:text-4xl">
            Every path builds on the same core.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#E8DECC]/78">
            Discipline. Culture. Identity. These are not soft concepts. They are the frame that everything else hangs on. Choose where to start — every program is built by Clayton Williams to hold under real pressure.
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-2">
              <img src={ASSET_MAP.beastMark} alt="MFC" className="h-6 w-6 object-contain" />
              <span className="text-xs uppercase tracking-[0.28em] text-white/55">
                Molded For Culture
              </span>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {subdomainLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-[#C9B27B]/70 hover:text-[#C9B27B] transition-colors"
                >
                  {link.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          <p className="mt-8 text-[0.65rem] text-white/30 uppercase tracking-wider">
            © {new Date().getFullYear()} Molded For Culture. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hub />
  </StrictMode>
);
