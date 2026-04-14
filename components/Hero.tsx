"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { ArrowRight } from "lucide-react"

function smoothScroll(href: string) {
  const target = document.querySelector(href)
  if (!target) return
  const top = target.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: "smooth" })
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* MeshGradient — animated dark background */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#0a0a0a", "#141414", "#1e1e1e"]}
        speed={0.35}
        distortion={0.6}
        swirl={0.08}
      />

      {/* Subtle vignette overlay for better text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-28">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.12] bg-white/[0.04] text-white/60 text-sm font-medium mb-10 hero-animate hero-delay-1">
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
          Webdesign-Agentur &middot; Hamburg
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.6rem,7.5vw,5.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white mb-6 max-w-4xl hero-animate hero-delay-2">
          Ihr professioneller<br />
          Webauftritt.<br />
          <span className="text-white/45">
            Schnell. Persönlich.<br />
            Wirkungsvoll.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-[1.1rem] text-white/45 leading-[1.75] max-w-xl mb-10 hero-animate hero-delay-3">
          Wir gestalten moderne, leistungsstarke Webseiten für kleine und mittlere
          Unternehmen in Hamburg und Umgebung — von der ersten Idee bis zum Launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16 hero-animate hero-delay-4">
          <button
            onClick={() => smoothScroll("#kontakt")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full text-base hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]"
          >
            Jetzt starten
            <ArrowRight size={17} />
          </button>
          <button
            onClick={() => smoothScroll("#portfolio")}
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.18] text-white font-semibold rounded-full text-base hover:border-white/35 hover:bg-white/[0.04] transition-all duration-200 hover:-translate-y-0.5"
          >
            Portfolio ansehen
          </button>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap items-center gap-6 hero-animate" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
          <div className="text-sm text-white/35">
            <strong className="text-white/80 font-bold mr-1.5">30+</strong>
            Projekte umgesetzt
          </div>
          <div className="w-px h-4 bg-white/[0.12]" />
          <div className="text-sm text-white/35">
            <strong className="text-white/80 font-bold mr-1.5">5&#9733;</strong>
            Kundenbewertungen
          </div>
          <div className="w-px h-4 bg-white/[0.12]" />
          <div className="text-sm text-white/35">
            <strong className="text-white/80 font-bold mr-1.5">14 Tage</strong>
            Ø bis zum Launch
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#leistungen"
        onClick={(e) => { e.preventDefault(); smoothScroll("#leistungen") }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 hover:text-white/50 transition-colors"
        aria-label="Zum nächsten Abschnitt scrollen"
      >
        <div className="relative w-[22px] h-[36px] border border-white/20 rounded-full scroll-dot" />
      </a>
    </section>
  )
}
