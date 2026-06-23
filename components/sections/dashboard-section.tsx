"use client"

import Image from "next/image"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Tooltip,
} from "recharts"
import { AnimatedSection } from "@/components/animated-section"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useCountUp } from "@/hooks/use-count-up"

const BAR_DATA = [
  { name: "Jan", value: 65 },
  { name: "Fev", value: 78 },
  { name: "Mar", value: 82 },
  { name: "Avr", value: 91 },
  { name: "Mai", value: 88 },
  { name: "Jun", value: 95 },
]

const LINE_DATA = [
  { month: "Jan", objectifs: 60, resultats: 55 },
  { month: "Fev", objectifs: 65, resultats: 62 },
  { month: "Mar", objectifs: 70, resultats: 72 },
  { month: "Avr", objectifs: 75, resultats: 78 },
  { month: "Mai", objectifs: 80, resultats: 85 },
  { month: "Jun", objectifs: 85, resultats: 92 },
]

const PIE_DATA = [
  { name: "Sante", value: 35 },
  { name: "Education", value: 25 },
  { name: "Agriculture", value: 20 },
  { name: "Gouvernance", value: 20 },
]

const COLORS = ["#0d9488", "#14b8a6", "#f59e0b", "#64748b"]

const STATS = [
  { label: "Projets evalues", value: 150, suffix: "+" },
  { label: "Pays d'intervention", value: 12, suffix: "" },
  { label: "Indicateurs suivis", value: 2500, suffix: "+" },
  { label: "Clients satisfaits", value: 98, suffix: "%" },
] as const

function StatCard({
  label,
  value,
  suffix,
  isVisible,
}: {
  label: string
  value: number
  suffix: string
  isVisible: boolean
}) {
  const count = useCountUp(value, 2000, isVisible)

  return (
    <div className="flex flex-col items-center p-6 text-center">
      <span className="text-4xl font-bold text-primary font-[var(--font-heading)] md:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="mt-2 text-sm font-medium text-secondary-foreground/70">
        {label}
      </span>
    </div>
  )
}

export function DashboardSection() {
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver()

  return (
    <section id="dashboard" className="relative py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Tableau de bord interactif
            </span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-secondary-foreground font-[var(--font-heading)] md:text-5xl text-balance">
              Visualisez vos donnees en temps reel
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/70 text-pretty">
              Nos tableaux de bord interactifs vous permettent de suivre
              les indicateurs de performance de vos projets en temps reel.
            </p>
          </div>
        </AnimatedSection>

        {/* Dashboard Preview */}
        <AnimatedSection animation="scale-in" delay={200}>
          <div className="mt-16 rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-4 backdrop-blur-sm lg:p-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Bar Chart */}
              <div className="rounded-xl border border-secondary-foreground/10 bg-card p-6">
                <h4 className="mb-4 text-sm font-semibold text-card-foreground">
                  Taux de realisation des indicateurs
                </h4>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={BAR_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 10% 90%)" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(210 10% 60%)" />
                      <YAxis tick={{ fontSize: 12 }} stroke="hsl(210 10% 60%)" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#0d9488" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Line Chart */}
              <div className="rounded-xl border border-secondary-foreground/10 bg-card p-6">
                <h4 className="mb-4 text-sm font-semibold text-card-foreground">
                  Objectifs vs Resultats
                </h4>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={LINE_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 10% 90%)" />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(210 10% 60%)" />
                      <YAxis tick={{ fontSize: 12 }} stroke="hsl(210 10% 60%)" />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="objectifs"
                        stroke="#64748b"
                        strokeWidth={2}
                        dot={{ fill: "#64748b", r: 3 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="resultats"
                        stroke="#0d9488"
                        strokeWidth={2}
                        dot={{ fill: "#0d9488", r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="rounded-xl border border-secondary-foreground/10 bg-card p-6">
                <h4 className="mb-4 text-sm font-semibold text-card-foreground">
                  Repartition par secteur
                </h4>
                <div className="flex items-center gap-6">
                  <div className="h-48 w-48 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={PIE_DATA}
                          cx="50%"
                          cy="50%"
                          innerRadius={45}
                          outerRadius={75}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {PIE_DATA.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {PIE_DATA.map((entry, index) => (
                      <li key={entry.name} className="flex items-center gap-2 text-sm text-card-foreground">
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: COLORS[index] }}
                        />
                        {entry.name} ({entry.value}%)
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Area Chart */}
              <div className="rounded-xl border border-secondary-foreground/10 bg-card p-6">
                <h4 className="mb-4 text-sm font-semibold text-card-foreground">
                  Evolution du suivi mensuel
                </h4>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={BAR_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 10% 90%)" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(210 10% 60%)" />
                      <YAxis tick={{ fontSize: 12 }} stroke="hsl(210 10% 60%)" />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#0d9488"
                        fill="#0d948820"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Row */}
        <div ref={statsRef} className="mt-16">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-4 backdrop-blur-sm md:grid-cols-4">
              {STATS.map((stat) => (
                <StatCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={statsVisible}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
