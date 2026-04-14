"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

type FieldError = { name?: string; email?: string; message?: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [errors, setErrors]   = useState<FieldError>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate(data: FormData): FieldError {
    const e: FieldError = {}
    const name    = (data.get("name")    as string).trim()
    const email   = (data.get("email")   as string).trim()
    const message = (data.get("message") as string).trim()
    if (!name)                    e.name    = "Bitte geben Sie Ihren Namen ein."
    if (!email)                   e.email   = "Bitte geben Sie Ihre E-Mail-Adresse ein."
    else if (!EMAIL_RE.test(email)) e.email = "Bitte eine gültige E-Mail-Adresse eingeben."
    if (!message)                 e.message = "Bitte schreiben Sie uns eine Nachricht."
    else if (message.length < 20) e.message = "Ihre Nachricht sollte mindestens 20 Zeichen lang sein."
    return e
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const err  = validate(data)
    if (Object.keys(err).length) { setErrors(err); return }

    setErrors({})
    setLoading(true)
    // Replace with fetch("/api/contact", { method: "POST", body: data }) in production
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSuccess(true)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 flex flex-col gap-5"
      aria-label="Kontaktformular"
    >
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-white/50">
          Ihr Name *
        </label>
        <input
          id="name" name="name" type="text"
          placeholder="Max Mustermann"
          autoComplete="name"
          onChange={() => setErrors((e) => ({ ...e, name: undefined }))}
          className={cn(
            "bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all duration-200 focus:border-white/35 focus:bg-white/[0.06] focus:ring-2 focus:ring-white/[0.06]",
            errors.name ? "border-red-500/60" : "border-white/[0.08]",
          )}
        />
        {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-white/50">
          E-Mail-Adresse *
        </label>
        <input
          id="email" name="email" type="email"
          placeholder="max@beispiel.de"
          autoComplete="email"
          onChange={() => setErrors((e) => ({ ...e, email: undefined }))}
          className={cn(
            "bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all duration-200 focus:border-white/35 focus:bg-white/[0.06] focus:ring-2 focus:ring-white/[0.06]",
            errors.email ? "border-red-500/60" : "border-white/[0.08]",
          )}
        />
        {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
      </div>

      {/* Company */}
      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-sm font-semibold text-white/50">
          Unternehmen
        </label>
        <input
          id="company" name="company" type="text"
          placeholder="Mustermann GmbH"
          autoComplete="organization"
          className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all duration-200 focus:border-white/35 focus:bg-white/[0.06] focus:ring-2 focus:ring-white/[0.06]"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-white/50">
          Ihre Nachricht *
        </label>
        <textarea
          id="message" name="message"
          rows={5}
          placeholder="Erzählen Sie uns von Ihrem Projekt — was planen Sie, welche Ziele haben Sie?"
          onChange={() => setErrors((e) => ({ ...e, message: undefined }))}
          className={cn(
            "bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all duration-200 focus:border-white/35 focus:bg-white/[0.06] focus:ring-2 focus:ring-white/[0.06] resize-none",
            errors.message ? "border-red-500/60" : "border-white/[0.08]",
          )}
        />
        {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || success}
        className="w-full py-4 bg-white text-black font-semibold rounded-full text-base hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-black/25 border-t-black rounded-full animate-spin" />
            Wird gesendet…
          </>
        ) : (
          "Kostenlos anfragen"
        )}
      </button>

      {/* Success */}
      {success && (
        <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.05] border border-white/[0.12] rounded-xl text-sm text-white/70" role="status">
          <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
          Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </div>
      )}
    </form>
  )
}
