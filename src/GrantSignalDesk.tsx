import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ChevronDown, ChevronUp, ArrowRight, Shield, Database, BarChart3, Tag, Users, Zap } from 'lucide-react';

const WEBHOOK_URL = 'https://n8n.moldedfortitude.com/webhook/mfc-lead-qualify';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060E1E]/90 backdrop-blur-md border-b border-blue-900/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="https://moldedfortitude.com" className="flex items-center gap-3">
          <img src="/favicon.png" alt="MFC" className="w-8 h-8" />
          <span className="text-white font-semibold text-sm tracking-wide">Molded Fortitude</span>
        </a>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-blue-400 text-sm font-medium tracking-widest uppercase">GrantSignal Desk</span>
          <a
            href="https://meet.brevo.com/clayton-williams/mfc-connect"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-[#060E1E] to-[#060E1E]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center"
        >
          <motion.span variants={fadeUp} className="inline-block bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Fortified funding infrastructure for nonprofits
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
            Your team is burning out.<br />
            <span className="text-blue-400">The system should carry the weight.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Your staff aren't lazy. They're drowning — in spreadsheets that don't talk to each other, deadlines nobody tracks, knowledge that walks out the door every time someone quits. GrantSignal Desk replaces that chaos with one structured dashboard.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://meet.brevo.com/clayton-williams/mfc-connect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/30 text-lg"
            >
              See if this system fits your org <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#system"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              How the system works
            </a>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { stat: '90 days', label: 'From chaos to structured operational system' },
              { stat: '1 dashboard', label: 'Replaces 6+ disconnected tools' },
              { stat: 'White-label', label: 'Branded for your organization' },
            ].map((item) => (
              <motion.div key={item.stat} variants={fadeUp} className="bg-blue-950/40 border border-blue-900/40 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">{item.stat}</div>
                <div className="text-slate-400 text-xs leading-snug">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
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

  return (
    <section className="py-24 px-6 bg-[#060E1E]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold tracking-widest uppercase text-center mb-4">The reality</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white text-center mb-4 leading-tight">
            This industry runs on passion.<br />
            <span className="text-slate-400 font-normal">But passion doesn't prevent burnout.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            The nonprofit sector has a systemic operations problem disguised as a people problem. Your team isn't failing — your systems are.
          </motion.p>
          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6 mb-16">
            {items.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.body}</p>
                <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-3">
                  <p className="text-red-400 text-xs font-medium leading-relaxed"><strong>The result:</strong> {item.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { stat: '19%', label: 'Annual staff turnover in Canadian nonprofits — nearly 1 in 5 every year' },
              { stat: '45%', label: 'Of nonprofit workers report burnout symptoms' },
              { stat: '6+', label: 'Disconnected tools the average org uses' },
            ].map((item) => (
              <motion.div key={item.stat} variants={fadeUp} className="bg-blue-950/30 border border-blue-900/30 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-slate-500 text-xs leading-snug">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="text-center text-slate-500 mt-8 text-sm">
            This isn't a motivation problem. It's an infrastructure problem. Your team needs a system, not a pep talk.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function SystemFeatures() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Structured task lists',
      body: 'Every grant deadline, reporting requirement, and operational task lives in one place with clear owners, due dates, and status tracking.',
      bullets: ['Assign tasks with accountability', 'Automated deadline reminders', 'Priority queues for what matters', 'Progress dashboards for leadership'],
    },
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: 'Organizational knowledge base',
      body: 'Every template, process, funder relationship, and institutional memory — documented, searchable, and accessible to your entire team.',
      bullets: ['Grant history and application archives', 'Standard operating procedures', 'Funder profiles with relationship notes', 'New staff onboard in days, not months'],
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      title: 'Funding pipeline management',
      body: 'See every grant opportunity, application status, and revenue projection in one view. No more guessing where the money is coming from.',
      bullets: ['Grant prospecting by fit, deadline, and amount', 'Application status from draft to decision', 'Revenue forecasting for board reporting', 'Compliance and reporting calendar'],
    },
    {
      icon: <Tag className="w-6 h-6 text-blue-400" />,
      title: 'White-label ready',
      body: 'GrantSignal Desk ships under your organization\'s brand. Your logo, your colors, your system. Available for licensing across departments or affiliates.',
      bullets: ['Your logo and brand colors', 'Custom domain and subdomain', 'Sub-license to partner organizations', 'Available on Rollout and Enterprise plans'],
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Built for nonprofit reality',
      body: 'No enterprise bloat. No IT department required. Designed for nonprofits, Indigenous organizations, and community initiatives — with real capacity constraints.',
      bullets: ['No technical team required', 'Designed for limited capacity', 'Indigenous governance structures supported', 'Reconciliation-centered approach'],
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Team coordination',
      body: 'Everyone working from the same page, literally. Shared visibility means no duplicated effort, no missed handoffs, no "I thought you were handling that."',
      bullets: ['Shared task boards', 'Role-based access', 'Comment threads on every item', 'Activity logs for accountability'],
    },
  ];

  return (
    <section id="system" className="py-24 px-6 bg-gradient-to-b from-[#060E1E] to-[#080F1F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold tracking-widest uppercase text-center mb-4">The system</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
            One dashboard. One source of truth.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Everything your organization runs on — tasks, knowledge, funding pipeline, and team coordination — connected in one system your whole org can rely on.
          </motion.p>
          <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp} className="bg-slate-900/50 border border-slate-800/50 hover:border-blue-800/50 rounded-2xl p-6 transition-colors group">
                <div className="w-12 h-12 bg-blue-950/60 border border-blue-900/40 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-900/40 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{f.body}</p>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-slate-500 text-xs">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Implementation() {
  const steps = [
    { num: '01', title: 'Audit', body: 'We map every tool, process, and knowledge silo in your organization. We find the gaps, the duplication, and the single points of failure where burnout lives.' },
    { num: '02', title: 'Structure', body: 'We build your task lists, knowledge base architecture, and funding pipeline inside GrantSignal Desk — configured for your specific programs and funding streams.' },
    { num: '03', title: 'Migrate', body: 'We move your existing data, templates, and processes into the system. Your team starts working inside the dashboard, not around it.' },
    { num: '04', title: 'Sustain', body: 'Ongoing support, system optimization, and staff training. The system compounds — every month it runs, your operations get tighter and your team gets lighter.' },
  ];

  return (
    <section className="py-24 px-6 bg-[#060E1E]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold tracking-widest uppercase text-center mb-4">Implementation</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white text-center mb-4">How the system is implemented</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            No circus. No six-month discovery phase. A structured 90-day rollout that moves you from scattered operations to a single source of truth your team can sustain.
          </motion.p>
          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <motion.div key={step.num} variants={fadeUp} className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-7 flex gap-5">
                <div className="text-blue-600/60 font-bold text-4xl leading-none flex-shrink-0">{step.num}</div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
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
    <section className="py-24 px-6 bg-gradient-to-b from-[#080F1F] to-[#060E1E]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold tracking-widest uppercase text-center mb-4">Outcomes</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white text-center mb-16">What changes when the system is in place</motion.h2>
          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="bg-red-950/20 border border-red-900/30 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-400 font-semibold">Before GrantSignal Desk</span>
              </div>
              <ul className="space-y-4">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="text-red-600 mt-0.5 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-blue-950/20 border border-blue-900/30 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">After GrantSignal Desk</span>
              </div>
              <ul className="space-y-4">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-12 bg-blue-950/30 border border-blue-800/30 rounded-2xl p-8 text-center">
            <p className="text-slate-300 text-xl italic mb-3">"Even spending 15 minutes with Clay is well worth it. Such an inspiration."</p>
            <p className="text-slate-500 text-sm">— Past client</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
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
    <section className="py-24 px-6 bg-[#060E1E]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold tracking-widest uppercase text-center mb-4">Pricing</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white text-center mb-4">System implementation plans</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Every plan includes the full GrantSignal Desk dashboard, structured task lists, knowledge base, and funding pipeline — branded for your organization.
          </motion.p>
          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={`relative rounded-2xl p-8 flex flex-col ${plan.tag ? 'bg-blue-900/30 border-2 border-blue-600/60' : 'bg-slate-900/40 border border-slate-800/50'}`}
              >
                {plan.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                    {plan.tag}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-slate-400 text-sm mb-1">{plan.period}</span>}
                  </div>
                  <p className="text-slate-400 text-sm">{plan.desc}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://meet.brevo.com/clayton-williams/mfc-connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${plan.tag ? 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-600/30' : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'}`}
                >
                  {plan.name === 'Enterprise License' ? "Let's talk" : plan.tag ? 'See if this system fits' : 'Book a strategy call'}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
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
    <section className="py-24 px-6 bg-gradient-to-b from-[#060E1E] to-[#080F1F]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold tracking-widest uppercase text-center mb-4">FAQ</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Common questions</motion.h2>
          <motion.div variants={stagger} className="space-y-3">
            {items.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-slate-900/40 border border-slate-800/50 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-white font-medium text-sm leading-snug">{item.q}</span>
                  {open === i ? <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />}
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
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
        body: JSON.stringify({ ...form, source: 'grant.moldedfortitude.com', timestamp: new Date().toISOString() }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 px-6 bg-[#060E1E]">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-white font-bold text-2xl mb-3">We'll be in touch.</h3>
          <p className="text-slate-400">Your message landed. Clayton will review your organization's situation and reach out within 1–2 business days.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#060E1E]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-blue-400 text-sm font-semibold tracking-widest uppercase text-center mb-4">Ready to build something that holds</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Ready to stop carrying it all in your head?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-center mb-10">
            15-minute call. No pitch deck. Just an honest look at whether this system fits your organization.
          </motion.p>
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Your name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Clayton Williams"
                  className="w-full bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Email address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@organization.org"
                  className="w-full bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Organization</label>
              <input
                type="text"
                required
                value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                placeholder="Your nonprofit or community org"
                className="w-full bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Budget range</label>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="w-full bg-slate-800/60 border border-slate-700/50 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors"
              >
                <option value="">Select a range</option>
                <option value="sprint-5k">Sprint — $5,000 one-time</option>
                <option value="rollout-2500mo">Structured Rollout — $2,500/month</option>
                <option value="enterprise">Enterprise — custom</option>
                <option value="exploring">Still exploring options</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">What's your biggest operational challenge?</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe what's breaking down in your current system..."
                className="w-full bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? 'Sending...' : <><span>Schedule a Discovery Call</span> <ArrowRight className="w-5 h-5" /></>}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Try emailing us directly at moldedfortitude@gmail.com</p>
            )}
          </motion.form>
          <motion.div variants={fadeUp} className="text-center mt-8">
            <a
              href="https://meet.brevo.com/clayton-williams/mfc-connect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Or book directly on calendar →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-slate-800/50 bg-[#060E1E]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/favicon.png" alt="MFC" className="w-7 h-7 opacity-70" />
          <span className="text-slate-500 text-sm">Molded Fortitude Consulting</span>
        </div>
        <div className="flex items-center gap-6 text-slate-600 text-xs">
          <a href="https://moldedfortitude.com" className="hover:text-slate-400 transition-colors">moldedfortitude.com</a>
          <span>We acknowledge the traditional and unceded territory of the Stó:lō people.</span>
        </div>
      </div>
    </footer>
  );
}

export default function GrantSignalDesk() {
  return (
    <div className="min-h-screen bg-[#060E1E] text-white">
      <Nav />
      <Hero />
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
