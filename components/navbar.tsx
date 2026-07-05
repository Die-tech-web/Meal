"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const ACCUEIL_LINKS = [
  { label: "Message", href: "#message" },
  { label: "Présentation", href: "#presentation" },
  { label: "Différenciation", href: "#differenciation" },
]

const NAV_LINKS = [
  { label: "À propos", href: "#apropos" },
  { label: "Ressources", href: "#ressources" },
  { label: "Réservation", href: "#reservation" },
  { label: "Contact", href: "#contact" },
] as const

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAccueilOpen, setIsAccueilOpen] = useState(false)
  const [isMobileAccueilOpen, setIsMobileAccueilOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsAccueilOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const linkClass = `rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${
    isScrolled ? "text-foreground" : "text-white"
  }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#message">
          <Image
            src="/images/meal-sn-logo-full.svg"
            alt="MEAL.sn"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {/* Accueil dropdown */}
          <li ref={dropdownRef} className="relative">
            <div className={`${linkClass} flex items-center gap-0.5 pr-1`}>
              <Link href="#message" className="py-2 pl-3">
                Accueil
              </Link>
              <button
                type="button"
                onClick={() => setIsAccueilOpen(!isAccueilOpen)}
                className="rounded p-1 hover:bg-primary/10 transition-colors"
                aria-label="Sous-menu Accueil"
              >
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isAccueilOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            {isAccueilOpen && (
              <div className="absolute left-0 top-full mt-2 w-44 rounded-xl border border-border bg-card shadow-xl overflow-hidden">
                {ACCUEIL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsAccueilOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#reservation">Réserver une formation</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground lg:hidden hover:bg-primary/10"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-card/98 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {/* Accueil mobile */}
            <li>
              <button
                type="button"
                onClick={() => setIsMobileAccueilOpen(!isMobileAccueilOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Accueil
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileAccueilOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileAccueilOpen && (
                <ul className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                  {ACCUEIL_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileAccueilOpen(false) }}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="pt-2">
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#reservation" onClick={() => setIsMobileMenuOpen(false)}>
                  Réserver une formation
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
