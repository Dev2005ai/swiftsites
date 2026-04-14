"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#prozess", label: "Prozess" },
  { href: "#preise", label: "Preise" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  function smoothScroll(href: string) {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <button
          onClick={() => smoothScroll("#hero")}
          className="text-[1.35rem] font-extrabold tracking-tight text-white"
          aria-label="SwiftSites Startseite"
        >
          Swift<span className="text-white/50">Sites</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => smoothScroll(l.href)}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => smoothScroll("#kontakt")}
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-px"
          >
            Kostenlos anfragen
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-b border-white/[0.06]",
          menuOpen
            ? "max-h-[400px] bg-black/95 backdrop-blur-xl"
            : "max-h-0",
        )}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-6 pb-6 pt-2 gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => smoothScroll(l.href)}
                className="w-full text-left py-3 text-base font-medium text-white/60 hover:text-white border-b border-white/[0.06] transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <button
              onClick={() => smoothScroll("#kontakt")}
              className="w-full py-3 bg-white text-black font-semibold rounded-full text-sm hover:bg-white/90 transition-colors"
            >
              Kostenlos anfragen
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
