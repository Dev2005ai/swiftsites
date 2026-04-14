import {
  Monitor, TrendingUp, Palette, Shield,
  MapPin, Zap, DollarSign, User, Smartphone, BarChart3,
  MessageCircle, Lightbulb, Code2, Send,
  Mail, Phone, Check, Minus,
} from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ContactForm } from "@/components/ContactForm"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"

// ── Shared primitives ────────────────────────────────────────
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.12em] uppercase text-white/35 mb-4">
      {children}
    </p>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[clamp(1.875rem,4vw,2.75rem)] font-extrabold tracking-tight text-white leading-[1.1] mb-4">
      {children}
    </h2>
  )
}

function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white/45 text-[1.05rem] leading-[1.75]">
      {children}
    </p>
  )
}

// ── Leistungen ───────────────────────────────────────────────
const services = [
  {
    icon: Monitor,
    title: "Website-Erstellung",
    desc: "Maßgeschneiderte Webseiten, die Ihre Marke widerspiegeln und Besucher in Kunden verwandeln — responsiv, schnell und modern.",
    items: ["Responsives Design für alle Geräte", "Schnelle Ladezeiten & Performance", "CMS-Integration auf Wunsch"],
  },
  {
    icon: TrendingUp,
    title: "SEO-Optimierung",
    desc: "Mehr Sichtbarkeit bei Google & Co. Wir optimieren Ihre Webseite technisch und inhaltlich, damit Sie von Ihrer Zielgruppe gefunden werden.",
    items: ["On-Page SEO & Keywords", "Technisches SEO-Audit", "Google Search Console Setup"],
  },
  {
    icon: Palette,
    title: "Individuelle Gestaltung",
    desc: "Kein Template von der Stange. Jedes Design wird speziell für Ihr Unternehmen und Ihre Zielgruppe entwickelt.",
    items: ["Corporate Identity & Branding", "Logodesign auf Wunsch", "Farbkonzept & Typografie"],
  },
  {
    icon: Shield,
    title: "Wartung & Support",
    desc: "Ihre Webseite läuft rund um die Uhr — und wir auch. Updates, Backups und Anpassungen übernehmen wir für Sie.",
    items: ["Monatliche Updates & Patches", "Tägliche automatische Backups", "Direkter Ansprechpartner"],
  },
]

function Leistungen() {
  return (
    <section id="leistungen" className="py-28 md:py-36 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <SectionEyebrow>Was wir bieten</SectionEyebrow>
          <SectionTitle>Unsere Leistungen</SectionTitle>
          <SectionSubtitle>
            Von der ersten Zeile Code bis zur fertigen Webseite — alles aus einer Hand.
          </SectionSubtitle>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 80}>
              <div className="group h-full p-7 rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-6 text-white/60 group-hover:bg-white/[0.1] group-hover:text-white transition-all duration-200">
                  <s.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-white mb-2.5">{s.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-xs text-white/30 flex items-start gap-2">
                      <span className="text-white/40 mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Warum SwiftSites ─────────────────────────────────────────
const usps = [
  { icon: MapPin,      title: "Hamburg-lokal",              desc: "Wir sind vor Ort in Hamburg. Persönliche Treffen, kurze Wege, echte Partnerschaft statt anonymer Agentur." },
  { icon: Zap,         title: "Schnell umgesetzt",          desc: "Von der Anfrage bis zum fertigen Launch in durchschnittlich 14 Tagen. Keine langen Wartezeiten." },
  { icon: DollarSign,  title: "Feste Preise",               desc: "Transparente Paketpreise ohne versteckte Kosten. Sie wissen von Anfang an, was Sie investieren." },
  { icon: User,        title: "Persönlicher Ansprechpartner", desc: "Sie haben immer einen direkten Ansprechpartner — keine Ticket-Systeme, kein Callcenter." },
  { icon: Smartphone,  title: "Mobile First",               desc: "Über 60 % Ihrer Besucher kommen per Smartphone. Unsere Webseiten sehen auf jedem Gerät perfekt aus." },
  { icon: BarChart3,   title: "Messbare Ergebnisse",        desc: "Webseiten, die nicht nur gut aussehen, sondern Anfragen generieren und Ihr Geschäft wachsen lassen." },
]

function Warum() {
  return (
    <section id="warum-swiftsites" className="py-28 md:py-36 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <SectionEyebrow>Warum wir</SectionEyebrow>
          <SectionTitle>Warum SwiftSites?</SectionTitle>
          <SectionSubtitle>
            Was uns von anderen Agenturen unterscheidet — und warum Hamburger Unternehmen uns vertrauen.
          </SectionSubtitle>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {usps.map((u, i) => (
            <AnimateOnScroll key={u.title} delay={i * 70}>
              <div className="group flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.035] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center flex-shrink-0 text-white/50 group-hover:text-white/80 transition-colors">
                  <u.icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{u.title}</h3>
                  <p className="text-xs text-white/38 leading-relaxed">{u.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Portfolio ────────────────────────────────────────────────
const projects = [
  {
    tag: "Restaurant",
    title: "Hanseatische Küche",
    desc: "Moderner Webauftritt mit Online-Reservierung, Speisekarte und Google Maps Integration.",
    tags: ["Webdesign", "SEO"],
    gradient: "from-[#1a0800] via-[#3d1200] to-[#6b2800]",
  },
  {
    tag: "Handwerk",
    title: "Meister Elektriker GmbH",
    desc: "Professionelle Unternehmenswebseite mit Angebotsformular, Referenzen und Google Maps.",
    tags: ["Webdesign", "Wartung"],
    gradient: "from-[#05111f] via-[#0c2040] to-[#183060]",
  },
  {
    tag: "Einzelhandel",
    title: "Alsterblick Boutique",
    desc: "Online-Shop und Markenpräsenz für eine Hamburger Modeboutique mit 50+ Produkten.",
    tags: ["E-Commerce", "Branding"],
    gradient: "from-[#150520] via-[#2e0a50] to-[#5a1a8a]",
  },
]

function Portfolio() {
  return (
    <section id="portfolio" className="py-28 md:py-36 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <SectionEyebrow>Unsere Arbeit</SectionEyebrow>
          <SectionTitle>Ausgewählte Projekte</SectionTitle>
          <SectionSubtitle>
            Ein Blick auf einige unserer Lieblingsprojekte für Hamburger Unternehmen.
          </SectionSubtitle>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 100}>
              <article className="group rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.15] transition-all duration-300 bg-white/[0.02]">
                {/* Mockup image */}
                <div className="relative aspect-video overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${p.gradient} transition-transform duration-500 group-hover:scale-[1.04]`} />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block self-start mb-2 px-2.5 py-1 rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-white/80 uppercase tracking-wider">
                      {p.tag}
                    </span>
                    <h3 className="text-base font-bold text-white mb-1.5">{p.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed mb-4">{p.desc}</p>
                    <a
                      href="#kontakt"
                      className="self-start inline-flex px-4 py-2 bg-white text-black text-xs font-semibold rounded-full hover:bg-white/90 transition-colors"
                    >
                      Ähnliches Projekt anfragen
                    </a>
                  </div>
                </div>
                {/* Meta */}
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm font-semibold text-white/70">{p.title}</span>
                  <div className="flex gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] font-semibold text-white/40 uppercase tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Prozess ──────────────────────────────────────────────────
const steps = [
  { num: "01", icon: MessageCircle, title: "Erstgespräch",       desc: "Wir lernen uns kennen. Sie schildern Ihre Ziele, wir zeigen, was möglich ist — kostenlos & unverbindlich.", duration: "Ca. 30 Min." },
  { num: "02", icon: Lightbulb,     title: "Konzept & Design",   desc: "Wir entwickeln ein individuelles Konzept, Seitenstruktur und Design-Mockup — Sie geben Feedback, wir feilen.", duration: "2–4 Tage" },
  { num: "03", icon: Code2,         title: "Umsetzung",          desc: "Ihr Design wird zur echten Webseite. Voller Funktionsumfang, responsiv und optimiert — laufend informiert.", duration: "5–10 Tage" },
  { num: "04", icon: Send,          title: "Launch & Übergabe",  desc: "Go live! Wir stellen Ihre Webseite online, schulen Sie ein und bleiben als Partner an Ihrer Seite.", duration: "Tag 14" },
]

function Prozess() {
  return (
    <section id="prozess" className="py-28 md:py-36 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <SectionEyebrow>So arbeiten wir</SectionEyebrow>
          <SectionTitle>Unser Prozess</SectionTitle>
          <SectionSubtitle>
            Transparent, strukturiert und mit Ihnen im Mittelpunkt — von der ersten Idee bis zum Launch.
          </SectionSubtitle>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector (desktop only) */}
          <div className="hidden lg:block absolute top-[22px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-white/[0.06]" />

          {steps.map((s, i) => (
            <AnimateOnScroll key={s.num} delay={i * 100}>
              <div className="flex flex-col items-start lg:items-center lg:text-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] relative">
                {/* Step number */}
                <div className="w-10 h-10 rounded-full border border-white/[0.15] bg-black flex items-center justify-center flex-shrink-0 relative z-10">
                  <span className="text-xs font-bold text-white/50">{s.num}</span>
                </div>
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/50">
                  <s.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-white/38 leading-relaxed mb-3">{s.desc}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-white/40">
                    {s.duration}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Preise ───────────────────────────────────────────────────
type PriceFeature = { text: string; included: boolean }

const plans: {
  name: string; desc: string; price: string; features: PriceFeature[]
  featured?: boolean
}[] = [
  {
    name: "Starter", desc: "Perfekt für den ersten Webauftritt", price: "990",
    features: [
      { text: "Bis zu 5 Unterseiten",        included: true },
      { text: "Responsives Design",           included: true },
      { text: "Kontaktformular",              included: true },
      { text: "Google Analytics Setup",       included: true },
      { text: "SSL-Zertifikat inklusive",     included: true },
      { text: "SEO-Optimierung",              included: false },
      { text: "Wartungsvertrag",              included: false },
      { text: "Online-Shop",                  included: false },
    ],
  },
  {
    name: "Business", desc: "Für wachsende Unternehmen", price: "1.990",
    featured: true,
    features: [
      { text: "Bis zu 10 Unterseiten",        included: true },
      { text: "Responsives Design",           included: true },
      { text: "Kontaktformular & CRM",        included: true },
      { text: "SEO-Optimierung",              included: true },
      { text: "Analytics & Search Console",  included: true },
      { text: "3 Monate Wartung inklusive",  included: true },
      { text: "SSL-Zertifikat inklusive",     included: true },
      { text: "Online-Shop",                  included: false },
    ],
  },
  {
    name: "Premium", desc: "Maximale Wirkung & Sichtbarkeit", price: "3.490",
    features: [
      { text: "Unbegrenzte Unterseiten",      included: true },
      { text: "Premium Custom Design",        included: true },
      { text: "Online-Shop (bis 50 Produkte)",included: true },
      { text: "Umfassende SEO-Strategie",     included: true },
      { text: "Analytics-Dashboard",          included: true },
      { text: "12 Monate Wartung inklusive", included: true },
      { text: "Priority Support",             included: true },
      { text: "Logodesign inklusive",         included: true },
    ],
  },
]

function Preise() {
  return (
    <section id="preise" className="py-28 md:py-36 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <SectionEyebrow>Transparente Kosten</SectionEyebrow>
          <SectionTitle>Unsere Preise</SectionTitle>
          <SectionSubtitle>
            Feste Pakete ohne versteckte Kosten. Sie wissen von Anfang an, was Sie bekommen.
          </SectionSubtitle>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {plans.map((plan, i) => (
            <AnimateOnScroll key={plan.name} delay={i * 80}>
              <div className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${
                plan.featured
                  ? "bg-white/[0.06] border-white/[0.22] shadow-[0_0_60px_rgba(255,255,255,0.04)] scale-[1.02]"
                  : "bg-white/[0.025] border-white/[0.07] hover:border-white/[0.14]"
              }`}>
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold rounded-full whitespace-nowrap">
                    Beliebteste Wahl
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-white/40">{plan.desc}</p>
                </div>

                <div className="flex items-end gap-1 mb-8 pb-8 border-b border-white/[0.07]">
                  <span className="text-lg font-bold text-white/50 mb-1">€</span>
                  <span className={`text-5xl font-extrabold tracking-tight ${plan.featured ? "text-white" : "text-white/80"}`}>
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/35 mb-1.5 ml-1">einmalig</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className={`flex items-center gap-3 text-sm ${f.included ? "text-white/60" : "text-white/20 line-through"}`}>
                      {f.included
                        ? <Check size={14} className="text-white/60 flex-shrink-0" strokeWidth={2.5} />
                        : <Minus size={14} className="text-white/20 flex-shrink-0" strokeWidth={2} />
                      }
                      {f.text}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`w-full py-3.5 rounded-full text-sm font-semibold text-center transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/[0.15] text-white hover:border-white/30 hover:bg-white/[0.04]"
                  }`}
                >
                  Jetzt anfragen
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <p className="text-center text-white/25 text-sm mt-10">
          Alle Preise zzgl. gesetzlicher MwSt. Individuelle Angebote auf Anfrage.
        </p>
      </div>
    </section>
  )
}

// ── Kontakt ──────────────────────────────────────────────────
function Kontakt() {
  return (
    <section id="kontakt" className="py-28 md:py-36 bg-[#050505] relative overflow-hidden">
      {/* Subtle center glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Copy */}
          <AnimateOnScroll>
            <div>
              <SectionEyebrow>Bereit loszulegen?</SectionEyebrow>
              <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight text-white leading-[1.1] mb-5">
                Ihr neuer Webauftritt<br />
                <span className="text-white/40">beginnt hier.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10">
                Schreiben Sie uns — wir melden uns innerhalb von 24 Stunden
                mit einem kostenlosen Erstgespräch-Termin bei Ihnen.
              </p>
              <address className="not-italic flex flex-col gap-4">
                {[
                  { icon: Mail,  label: "hallo@swiftsites.de",   href: "mailto:hallo@swiftsites.de" },
                  { icon: Phone, label: "+49 40 123 456 789",     href: "tel:+4940123456789" },
                  { icon: MapPin,label: "Hamburg, Deutschland",   href: undefined },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3 text-white/40">
                    <c.icon size={16} strokeWidth={1.5} className="flex-shrink-0" />
                    {c.href
                      ? <a href={c.href} className="hover:text-white transition-colors text-sm">{c.label}</a>
                      : <span className="text-sm">{c.label}</span>
                    }
                  </div>
                ))}
              </address>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll delay={150}>
            <ContactForm />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

// ── Footer ───────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-[1.2rem] font-extrabold tracking-tight text-white mb-4">
              Swift<span className="text-white/40">Sites</span>
            </p>
            <p className="text-sm text-white/30 leading-relaxed mb-5 max-w-[220px]">
              Professionelle Webseiten für Hamburger Unternehmen — schnell, persönlich, wirkungsvoll.
            </p>
            <address className="not-italic text-xs text-white/20 leading-relaxed">
              Musterstraße 12<br />20095 Hamburg<br />Deutschland
            </address>
          </div>

          {/* Leistungen */}
          <nav aria-label="Leistungen">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-white/40 mb-5">Leistungen</h4>
            <ul className="space-y-3">
              {["Website-Erstellung", "SEO-Optimierung", "Individuelle Gestaltung", "Wartung & Support"].map((t) => (
                <li key={t}><a href="#leistungen" className="text-sm text-white/30 hover:text-white transition-colors">{t}</a></li>
              ))}
            </ul>
          </nav>

          {/* Agentur */}
          <nav aria-label="Agentur">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-white/40 mb-5">Agentur</h4>
            <ul className="space-y-3">
              {[
                { label: "Portfolio", href: "#portfolio" },
                { label: "Prozess",   href: "#prozess" },
                { label: "Preise",    href: "#preise" },
                { label: "Kontakt",   href: "#kontakt" },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="text-sm text-white/30 hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </nav>

          {/* Rechtliches */}
          <nav aria-label="Rechtliches">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-white/40 mb-5">Rechtliches</h4>
            <ul className="space-y-3">
              {["Impressum", "Datenschutzerklärung", "AGB"].map((t) => (
                <li key={t}><a href="#" className="text-sm text-white/30 hover:text-white transition-colors">{t}</a></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-wrap justify-between items-center gap-3">
          <p className="text-xs text-white/20">© {year} SwiftSites. Alle Rechte vorbehalten.</p>
          <p className="text-xs text-white/15">Gemacht mit Leidenschaft in Hamburg</p>
        </div>
      </div>
    </footer>
  )
}

// ── Page ─────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Leistungen />
        <Warum />
        <Portfolio />
        <Prozess />
        <Preise />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
