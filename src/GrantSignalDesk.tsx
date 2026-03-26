import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, XCircle, ChevronDown, ChevronUp, ArrowRight, Shield, Database, BarChart3, Tag, Users, Zap, ExternalLink } from 'lucide-react';

const WEBHOOK_URL = 'https://webhooks.tasklet.ai/v1/public/webhook?token=7840f43dd7e9238d92ee534939eb5429';

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const SITE_LINKS = [
  { label: 'All Programs', href: 'https://moldedfortitude.com', description: 'Explore all MFC offerings' },
  { label: '21-Day Reset', href: 'https://reset.moldedfortitude.com', description: 'Discipline & fitness transformation' },
  { label: 'Warrior Spirit', href: 'https://healing.moldedfortitude.com', description: 'Healing & identity reclamation' },
  { label: 'Culture to Contract', href: 'https://culture.moldedfortitude.com', description: 'Indigenous enterprise development' },
  { label: 'Carving Workshops', href: 'https://carving.moldedfortitude.com', description: 'Hands-on cultural workshops' },
];

function Hero() {
  const { scrollYProgress } = useScroll();
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 0.2], [0.35, 0.6]);

  return (
    <section className="relative isolate min-h-screen overflow-hidden border-b border-[#9C8350]/20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-black to-black" />
      <motion.div
        style={{ opacity: heroOverlayOpacity }}
        className="absolute inset-0 bg-black"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.38),rgba(0,0,0,0.68),rgba(0,0,0,0.92))]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-5 pb-8 pt-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="MFC mark" className="h-10 w-10 flex-shrink-0 object-contain" />
            <div className="min-w-0">
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#C9B27B] sm:text-[0.65rem] sm:tracking-[0.35em]">
                Molded Fortitude Consulting
              </p>
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/65 sm:text-xs sm:tracking-[0.28em]">
                GrantSignal Desk
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://moldedfortitude.com"
              className="hidden text-xs uppercase tracking-[0.28em] text-white/55 hover:text-[#C9B27B] transition-colors sm:inline"
            >
              All Programs
            </a>
            <a
              href="https://meet.brevo.com/clay-mfc"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[40px] items-center justify-center gap-2 border border-[#C9B27B] bg-[#C9B27B] px-5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book a Call
            </a>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={sectionFade}
          className="max-w-4xl py-16 sm:py-20 lg:py-24"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#C9B27B]">
            Fortified Funding Infrastructure
          </p>

          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#F5EFE3] sm:text-6xl md:text-7xl lg:text-8xl">
            Your team is burning out.<br />
            <span className="text-[#C9B27B]">The system should carry the weight.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#E8DECC]/82 sm:text-lg">
            Your staff aren't lazy. They're drowning — in spreadsheets that don't talk to each other, deadlines nobody tracks, knowledge that walks out the door every time someone quits. GrantSignal Desk replaces that chaos with one structured dashboard.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://meet.brevo.com/clay-mfc"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 border border-[#C9B27B] bg-[#C9B27B] px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-200 hover:-translate-y-0.5"
            >
              See If This System Fits Your Org <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#system"
              className="inline-flex min-h-[52px] items-center justify-center border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#F5EFE3] transition-colors duration-200 hover:border-[#C9B27B] hover:text-[#C9B27B]"
            >
              How The System Works
            </a>
          </div>
        </motion.div>

        <div className="flex items-center gap-2 text-[#F5EFE3]/55">
          <ChevronDown className="h-4 w-4" />
          <span className="text-xs uppercase tracking-[0.28em]">Scroll</span>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const stats = [
    { label: 'Timeline', value: '90 days' },
    { label: 'Dashboard', value: '1 source of truth' },
    { label: 'Replaces', value: '6+ disconnected tools' },
    { label: 'Delivery', value: 'White-label branded' },
  ];

  return (
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
              Built for nonprofit reality. Not corporate bloat.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#E8DECC]/78">
              One structured dashboard replaces the scattered spreadsheets, email threads, and sticky-note deadlines your team is drowning under.
            </p>
          </div>
          <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2">
            {stats.map((item) => (
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
  );
}

function Problem() {
  const items = [
    {
      icon: '🔥',
      title: 'Staff are drowning',
      body: 'Program coordinators managing grants in email threads. Directors approving budgets from memory. Deadlines tracked on sticky notes.',
      result: 'Your best people burn out and leave. The ones who stay are too exhausted to innovate.',
    },
    {
      icon: '🚪',
      title: 'Knowledge walks out the door',
      body: 'When someone leaves — and in this sector, they do — everything in their head leaves with them. Funder relationships, grant history, reporting templates.',
      result: '3–6 months to rebuild what one person carried. If you can rebuild it at all.',
    },
    {
      icon: '💸',
      title: 'Funding falls through the cracks',
      body: 'Missed deadlines. Duplicate applications. Grant opportunities nobody knew about because the information lived in someone\'s inbox.',
      result: 'Communities lose services because organizations can\'t manage the paperwork.',
    },
  ];

  const stats = [
    { stat: '19%', label: 'Annual staff turnover in Canadian nonprofits — nearly 1 in 5 every year' },
    { stat: '45%', label: 'Of nonprofit workers report burnout symptoms' },
    { stat: '6+', label: 'Disconnected tools the average org uses' },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionFade}
      className="border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B]">The Reality</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight text-[#F5EFE3] sm:text-4xl">
          This industry runs on passion. But passion doesn't prevent burnout.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#E8DECC]/78">
          The nonprofit sector has a systemic operations problem disguised as a people problem. Your team isn't failing — your systems are.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="border border-white/10 p-6">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold uppercase text-[#F5EFE3] mb-3">{item.title}</h3>
              <p className="text-sm leading-6 text-[#E8DECC]/78 mb-4">{item.body}</p>
              <div className="border border-red-900/40 bg-red-950/20 p-3">
                <p className="text-xs text-red-400/90 leading-relaxed"><strong>The result:</strong> {item.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((item) => (
            <div key={item.stat} className="border border-white/10 p-5 text-center">
              <div className="text-3xl font-bold text-[#F5EFE3] mb-2">{item.stat}</div>
              <div className="text-[#E8DECC]/55 text-xs leading-snug">{item.label}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#E8DECC]/55 mt-8 text-sm">
          This isn't a motivation problem. It's an infrastructure problem. Your team needs a system, not a pep talk.
        </p>
      </div>
    </motion.section>
  );
}

function SystemFeatures() {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-[#C9B27B]" />,
      title: 'Structured task lists',
      body: 'Every grant deadline, reporting requirement, and operational task lives in one place with clear owners, due dates, and status tracking.',
      bullets: ['Assign tasks with accountability', 'Automated deadline reminders', 'Priority queues for what matters', 'Progress dashboards for leadership'],
    },
    {
      icon: <Database className="w-5 h-5 text-[#C9B27B]" />,
      title: 'Organizational knowledge base',
      body: 'Every template, process, funder relationship, and institutional memory — documented, searchable, and accessible to your entire team.',
      bullets: ['Grant history and application archives', 'Standard operating procedures', 'Funder profiles with relationship notes', 'New staff onboard in days, not months'],
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#C9B27B]" />,
      title: 'Funding pipeline management',
      body: 'See every grant opportunity, application status, and revenue projection in one view. No more guessing where the money is coming from.',
      bullets: ['Grant prospecting by fit, deadline, and amount', 'Application status from draft to decision', 'Revenue forecasting for board reporting', 'Compliance and reporting calendar'],
    },
    {
      icon: <Tag className="w-5 h-5 text-[#C9B27B]" />,
      title: 'White-label ready',
      body: 'GrantSignal Desk ships under your organization\'s brand. Your logo, your colors, your system. Available for licensing across departments or affiliates.',
      bullets: ['Your logo and brand colors', 'Custom domain and subdomain', 'Sub-license to partner organizations', 'Available on Rollout and Enterprise plans'],
    },
    {
      icon: <Shield className="w-5 h-5 text-[#C9B27B]" />,
      title: 'Built for nonprofit reality',
      body: 'No enterprise bloat. No IT department required. Designed for nonprofits, Indigenous organizations, and community initiatives — with real capacity constraints.',
      bullets: ['No technical team required', 'Designed for limited capacity', 'Indigenous governance structures supported', 'Reconciliation-centered approach'],
    },
    {
      icon: <Users className="w-5 h-5 text-[#C9B27B]" />,
      title: 'Team coordination',
      body: 'Everyone working from the same page, literally. Shared visibility means no duplicated effort, no missed handoffs, no "I thought you were handling that."',
      bullets: ['Shared task boards', 'Role-based access', 'Comment threads on every item', 'Activity logs for accountability'],
    },
  ];

  return (
    <motion.section
      id="system"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionFade}
      className="border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B]">The System</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight text-[#F5EFE3] sm:text-4xl">
          One dashboard. One source of truth.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#E8DECC]/78">
          Everything your organization runs on — tasks, knowledge, funding pipeline, and team coordination — connected in one system your whole org can rely on.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="border border-white/10 p-6 hover:border-[#C9B27B]/30 transition-colors group">
              <div className="w-10 h-10 border border-[#C9B27B]/40 flex items-center justify-center mb-4 group-hover:border-[#C9B27B] transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold uppercase text-[#F5EFE3] mb-2">{f.title}</h3>
              <p className="text-sm leading-6 text-[#E8DECC]/78 mb-4">{f.body}</p>
              <ul className="space-y-2">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[#E8DECC]/55 text-xs">
                    <span className="text-[#C9B27B] mt-0.5 flex-shrink-0">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Implementation() {
  const steps = [
    { title: 'Audit', text: 'We map every tool, process, and knowledge silo in your organization. We find the gaps, the duplication, and the single points of failure where burnout lives.' },
    { title: 'Structure', text: 'We build your task lists, knowledge base architecture, and funding pipeline inside GrantSignal Desk — configured for your specific programs and funding streams.' },
    { title: 'Migrate', text: 'We move your existing data, templates, and processes into the system. Your team starts working inside the dashboard, not around it.' },
    { title: 'Sustain', text: 'Ongoing support, system optimization, and staff training. The system compounds — every month it runs, your operations get tighter and your team gets lighter.' },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionFade}
      className="border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B]">Implementation</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight text-[#F5EFE3] sm:text-4xl">
          How the system is implemented
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#E8DECC]/78">
          No circus. No six-month discovery phase. A structured 90-day rollout that moves you from scattered operations to a single source of truth your team can sustain.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {steps.map((step, idx) => (
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
                  transition: { duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] as const }
                }
              }}
              className="border border-white/10 p-7 flex gap-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#C9B27B]">
                <span className="text-sm font-bold text-[#C9B27B]">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase text-[#F5EFE3]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#E8DECC]/78">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Outcomes() {
  const before = [
    'Staff managing grants across 6+ disconnected systems',
    'Knowledge lost every time someone leaves',
    'Missed deadlines and duplicate work',
    'New hires take 3–6 months to get productive',
    'Board reports assembled manually from scattered data',
    'Your best people carry everything in their heads',
  ];
  const after = [
    'One dashboard — every task, document, and deadline in one place',
    'Organizational knowledge base that survives staff turnover',
    'Automated reminders — nothing slips through cracks',
    'New staff onboard in days with documented processes',
    'Board-ready reports generated from live data',
    'Your team works inside the system, not around it',
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionFade}
      className="border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B]">Outcomes</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight text-[#F5EFE3] sm:text-4xl">
          What changes when the system is in place
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="border border-red-900/40 bg-red-950/10 p-8">
            <div className="flex items-center gap-2 mb-6">
              <XCircle className="w-5 h-5 text-red-500" />
              <span className="text-xs uppercase tracking-[0.3em] text-red-400 font-semibold">Before GrantSignal Desk</span>
            </div>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#E8DECC]/70 text-sm">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[#C9B27B]/30 bg-[#C9B27B]/5 p-8">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-5 h-5 text-[#C9B27B]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9B27B] font-semibold">After GrantSignal Desk</span>
            </div>
            <ul className="space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#F5EFE3] text-sm">
                  <span className="text-[#C9B27B] mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border border-[#C9B27B]/30 bg-[#C9B27B]/5 p-8 text-center">
          <p className="text-[#F5EFE3] text-xl italic mb-3">"Even spending 15 minutes with Clay is well worth it. Such an inspiration."</p>
          <p className="text-[#E8DECC]/55 text-sm">— Shawn Bonnough</p>
        </div>
      </div>
    </motion.section>
  );
}

function Pricing() {
  const plans = [
    {
      name: 'Sprint',
      price: '$5,000',
      period: 'one-time setup',
      tag: null,
      desc: 'One-time system setup and data migration',
      features: [
        'Operational audit and gap analysis',
        'GrantSignal Desk configured for your org',
        'Task list and knowledge base architecture',
        'Data migration from existing tools',
        'Team training session',
        '30 days post-launch support',
      ],
    },
    {
      name: 'Structured Rollout',
      price: '$2,500',
      period: '/month',
      tag: 'Most Popular',
      desc: '90-day implementation + ongoing operations support',
      features: [
        'Everything in Sprint',
        'Full 90-day structured rollout',
        'Grant writing and submission support',
        'Funding pipeline management',
        'Monthly operational reviews',
        'Staff onboarding support',
        'White-label dashboard branding',
      ],
    },
    {
      name: 'Enterprise License',
      price: 'Custom',
      period: '',
      tag: null,
      desc: 'Multi-site deployment and organizational licensing',
      features: [
        'Everything in Structured Rollout',
        'Multi-department or multi-site deployment',
        'Custom integrations with existing systems',
        'Dedicated implementation manager',
        'Partner and affiliate sub-licensing',
        'Priority support and SLA',
      ],
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionFade}
      className="border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B]">Pricing</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight text-[#F5EFE3] sm:text-4xl">
          System implementation plans
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#E8DECC]/78">
          Every plan includes the full GrantSignal Desk dashboard, structured task lists, knowledge base, and funding pipeline — branded for your organization.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 flex flex-col ${plan.tag ? 'border-2 border-[#C9B27B] bg-[#C9B27B]/5' : 'border border-white/10'}`}
            >
              {plan.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9B27B] text-black text-xs font-bold px-4 py-1 tracking-widest uppercase">
                  {plan.tag}
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold uppercase text-[#F5EFE3] mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-bold text-[#F5EFE3]">{plan.price}</span>
                  {plan.period && <span className="text-[#E8DECC]/55 text-sm mb-1">{plan.period}</span>}
                </div>
                <p className="text-sm text-[#E8DECC]/78">{plan.desc}</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[#E8DECC]/78 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#C9B27B] mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://meet.brevo.com/clay-mfc"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3 text-sm font-semibold uppercase tracking-[0.15em] transition-all ${plan.tag ? 'bg-[#C9B27B] text-black hover:-translate-y-0.5' : 'border border-white/20 text-[#F5EFE3] hover:border-[#C9B27B] hover:text-[#C9B27B]'}`}
              >
                {plan.name === 'Enterprise License' ? "Let's talk" : plan.tag ? 'See if this system fits' : 'Book a strategy call'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    {
      q: 'What exactly is GrantSignal Desk?',
      a: 'GrantSignal Desk is a structured operational dashboard designed specifically for nonprofits and community organizations. It centralizes your task management, organizational knowledge, funding pipeline, and team coordination into a single source of truth — replacing the 6+ disconnected tools most organizations struggle with.',
    },
    {
      q: 'How is this different from project management software?',
      a: 'Project management tools give you task lists. GrantSignal Desk gives you an entire operational system — task management, knowledge base, grant pipeline, contact management, deadline automation, and board reporting all connected in one place. It\'s built specifically for nonprofit operations, not adapted from corporate software.',
    },
    {
      q: 'What does "white-label" mean?',
      a: 'The dashboard runs under your organization\'s brand — your logo, your colors, your name. Your team sees your system, not ours. Available on the Structured Rollout and Enterprise License plans. You can also sub-license to partner organizations.',
    },
    {
      q: 'Do we need an IT department to use this?',
      a: 'No. The system is designed for organizations with limited technical capacity. We handle setup, configuration, data migration, and training. Your team uses the dashboard — they don\'t build it.',
    },
    {
      q: 'How long does implementation take?',
      a: 'The Sprint plan delivers a configured system in 2–3 weeks. The Structured Rollout runs over 90 days, which includes deeper operational integration, grant writing support, and ongoing optimization. Most teams feel the difference within the first 30 days.',
    },
    {
      q: 'What happens to our existing data?',
      a: 'We migrate it. Spreadsheets, documents, grant records, contact lists — everything gets organized and brought into the system during implementation. Nothing gets left behind or lost.',
    },
    {
      q: 'Is this built for Indigenous organizations?',
      a: 'Yes. GrantSignal Desk is designed with the specific operational realities of Indigenous organizations, First Nations, and community-led initiatives in mind — including unique funding streams, reporting requirements, and governance structures. We work on the traditional and unceded territory of the Stó:lō people and build with reconciliation at the center.',
    },
    {
      q: 'Will this actually reduce burnout?',
      a: 'Burnout in this sector comes from carrying too much in your head, working across too many systems, and rebuilding institutional knowledge every time someone leaves. GrantSignal Desk attacks all three — structured task lists reduce cognitive load, the knowledge base preserves institutional memory, and one dashboard eliminates the context-switching that drains energy. It\'s not a wellness program. It\'s infrastructure that removes the conditions that cause burnout.',
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionFade}
      className="border-b border-white/10"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B] text-center">FAQ</p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#F5EFE3] text-center sm:text-4xl">
          Common Questions
        </h2>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => (
            <div key={i} className="border border-white/10 overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[#F5EFE3] font-medium text-sm leading-snug">{item.q}</span>
                {open === i ? <ChevronUp className="w-5 h-5 text-[#C9B27B] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-white/40 flex-shrink-0" />}
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#E8DECC]/78 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', program: 'grant-signal-desk', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.name,
          email: form.email,
          organization: form.organization,
          program_interest: 'consulting',
          problem_summary: form.message,
          budget_status: form.budget,
          lead_source: 'grant.moldedfortitude.com',
          platform: 'web'
        }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.section id="contact" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionFade} className="border-b border-white/10 bg-[linear-gradient(to_bottom,rgba(201,178,123,0.08),rgba(0,0,0,0))]">
        <div className="mx-auto max-w-xl px-5 py-24 text-center">
          <div className="w-16 h-16 border border-[#C9B27B] flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#C9B27B]" />
          </div>
          <h3 className="text-2xl font-bold uppercase text-[#F5EFE3] mb-3">We'll be in touch.</h3>
          <p className="text-[#E8DECC]/78 text-sm">Your message landed. Clay will review your organization's situation and reach out within 1–2 business days.</p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="contact"
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
              Ready to stop carrying it all in your head?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#E8DECC]/78">
              15-minute call. No pitch deck. Just an honest look at whether this system fits your organization.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">or</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <a
              href="https://meet.brevo.com/clay-mfc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[#C9B27B] hover:text-[#F5EFE3] transition-colors"
            >
              Skip the form — book a call directly <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-[0.3em] text-[#C9B27B]/85 mb-2">Your name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-[#F5EFE3] placeholder-white/30 outline-none focus:border-[#C9B27B] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.3em] text-[#C9B27B]/85 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@organization.org"
                  className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-[#F5EFE3] placeholder-white/30 outline-none focus:border-[#C9B27B] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-[#C9B27B]/85 mb-2">Organization *</label>
              <input
                type="text"
                required
                value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                placeholder="Your nonprofit or community org"
                className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-[#F5EFE3] placeholder-white/30 outline-none focus:border-[#C9B27B] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-[#C9B27B]/85 mb-2">Budget range</label>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-[#F5EFE3] outline-none focus:border-[#C9B27B] transition-colors"
              >
                <option value="">Select a range</option>
                <option value="sprint-5k">Sprint — $5,000 one-time</option>
                <option value="rollout-2500mo">Structured Rollout — $2,500/month</option>
                <option value="enterprise">Enterprise — custom</option>
                <option value="exploring">Still exploring options</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-[#C9B27B]/85 mb-2">What's your biggest operational challenge?</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe what's breaking down in your current system..."
                className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-[#F5EFE3] placeholder-white/30 outline-none focus:border-[#C9B27B] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group w-full inline-flex min-h-[52px] items-center justify-center gap-2 border border-[#C9B27B] bg-[#C9B27B] px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : <><span>Schedule a Discovery Call</span> <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></>}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Try emailing us directly at moldedfortitude@gmail.com</p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C9B27B] mb-6">
            Explore Our Programs
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {SITE_LINKS.map((link) => (
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
              <img src="/favicon.png" alt="MFC mark" className="h-6 w-6 object-contain" />
              <span className="text-xs uppercase tracking-[0.28em] text-white/55">
                Molded Fortitude Consulting
              </span>
            </div>
            <div className="flex items-center gap-6 text-white/40 text-xs">
              <a href="https://moldedfortitude.com" className="hover:text-[#C9B27B] transition-colors">moldedfortitude.com</a>
              <span>We acknowledge the traditional and unceded territory of the Stó:lō people.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function GrantSignalDesk() {
  return (
    <div className="min-h-screen bg-black text-[#F1E8D8] selection:bg-[#9C8350] selection:text-black">
      <Hero />
      <Proof />
      <Problem />
      <SystemFeatures />
      <Implementation />
      <Outcomes />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
