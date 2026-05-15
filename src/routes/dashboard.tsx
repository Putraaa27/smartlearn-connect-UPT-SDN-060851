import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import {
  Users,
  BookOpen,
  Building2,
  Award,
  Calendar,
  Wifi,
  GraduationCap,
  ArrowLeft,
  TrendingUp,
} from "lucide-react";
import {
  SCHOOL,
  FACILITY_DATA,
  INFRASTRUCTURE_DATA,
  GROWTH_DATA,
  STAFF_DATA,
} from "@/lib/school-data";
import { Chatbot } from "@/components/site/Chatbot";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: `Dashboard — ${SCHOOL.shortName}` },
      { name: "description", content: `Dashboard analitik ${SCHOOL.name}.` },
    ],
  }),
});

const CHART_COLORS = [
  "oklch(0.6 0.2 255)",
  "oklch(0.7 0.16 195)",
  "oklch(0.72 0.18 145)",
  "oklch(0.78 0.16 75)",
  "oklch(0.65 0.22 320)",
];

const sidebarItems = [
  { icon: TrendingUp, label: "Overview", active: true },
  { icon: Users, label: "Tenaga Pengajar" },
  { icon: BookOpen, label: "Akademik" },
  { icon: Building2, label: "Fasilitas" },
  { icon: Calendar, label: "Jadwal" },
  { icon: Award, label: "Akreditasi" },
];

function Dashboard() {
  const kpis = [
    { icon: Users, label: "Guru", value: SCHOOL.teachers, hint: "+ 2 staf" },
    { icon: BookOpen, label: "Ruang Kelas", value: SCHOOL.classrooms, hint: "Aktif" },
    { icon: Award, label: "Akreditasi", value: SCHOOL.accreditation, hint: "Resmi", isText: true },
    { icon: Building2, label: "Luas (m²)", value: SCHOOL.area, hint: "Total area" },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar - desktop */}
      <aside className="hidden lg:flex flex-col w-64 border-r bg-card/40 backdrop-blur-md sticky top-0 h-screen p-4">
        <Link to="/" className="flex items-center gap-2.5 px-2 py-2">
          <div className="size-10 rounded-xl gradient-primary grid place-items-center shadow-glow">
            <GraduationCap className="size-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-sm">{SCHOOL.shortName}</div>
            <div className="text-[10px] text-muted-foreground">Analytics</div>
          </div>
        </Link>

        <nav className="mt-8 space-y-1">
          {sidebarItems.map((it) => (
            <button
              key={it.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                it.active
                  ? "gradient-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <it.icon className="size-4" />
              {it.label}
            </button>
          ))}
        </nav>

        <Link to="/" className="mt-auto flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:bg-accent">
          <ArrowLeft className="size-4" /> Kembali ke Beranda
        </Link>
      </aside>

      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b">
          <div className="px-4 lg:px-8 py-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Smart School Dashboard</div>
              <h1 className="font-display text-xl sm:text-2xl font-bold">Overview Sekolah</h1>
            </div>
            <Link to="/" className="lg:hidden text-sm flex items-center gap-1 text-muted-foreground">
              <ArrowLeft className="size-4" /> Beranda
            </Link>
            <div className="hidden lg:flex items-center gap-3">
              <div className="text-xs text-muted-foreground">NPSN</div>
              <div className="px-3 py-1.5 rounded-lg glass-strong text-sm font-mono">{SCHOOL.npsn}</div>
            </div>
          </div>
        </header>

        <main className="px-4 lg:px-8 py-6 space-y-6 pb-24 lg:pb-12">
          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((k, i) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-strong rounded-2xl p-5 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-xl gradient-primary grid place-items-center text-primary-foreground">
                    <k.icon className="size-5" />
                  </div>
                  <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{k.hint}</div>
                </div>
                <div className="mt-4 font-display text-3xl font-bold">
                  {k.isText ? k.value : <AnimatedCounter value={k.value as number} />}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{k.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-strong rounded-2xl p-5 shadow-soft"
            >
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <div className="font-display font-semibold">Distribusi Fasilitas</div>
                  <div className="text-xs text-muted-foreground">Komposisi sarana sekolah</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={FACILITY_DATA}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={3}
                  >
                    {FACILITY_DATA.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="glass-strong rounded-2xl p-5 shadow-soft lg:col-span-2"
            >
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <div className="font-display font-semibold">Infrastruktur Sekolah</div>
                  <div className="text-xs text-muted-foreground">Jumlah unit per kategori</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={INFRASTRUCTURE_DATA}>
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.65 0.2 255)" />
                      <stop offset="100%" stopColor="oklch(0.78 0.18 220)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.6 0.05 255 / 0.15)" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="currentColor" />
                  <YAxis tick={{ fontSize: 11 }} stroke="currentColor" />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="count" fill="url(#barGrad)" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Growth area chart */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-strong rounded-2xl p-5 shadow-soft"
          >
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <div className="font-display font-semibold">Pertumbuhan Sekolah</div>
                <div className="text-xs text-muted-foreground">
                  Indeks perkembangan sejak {SCHOOL.established}
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-xs text-success">
                <TrendingUp className="size-3.5" /> +91 sejak berdiri
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={GROWTH_DATA}>
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.65 0.2 255)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.65 0.2 255)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.6 0.05 255 / 0.15)" />
                <XAxis dataKey="year" tick={{ fontSize: 11 }} stroke="currentColor" />
                <YAxis tick={{ fontSize: 11 }} stroke="currentColor" />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="milestone"
                  stroke="oklch(0.6 0.2 255)"
                  strokeWidth={2.5}
                  fill="url(#areaGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bottom row */}
          <div className="grid lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-strong rounded-2xl p-5 shadow-soft"
            >
              <div className="font-display font-semibold mb-3">Tenaga Sekolah</div>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={STAFF_DATA}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={40}
                    outerRadius={70}
                  >
                    {STAFF_DATA.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 text-xs">
                {STAFF_DATA.map((s, i) => (
                  <div key={s.name} className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full" style={{ background: CHART_COLORS[i] }} />
                    {s.name} ({s.value})
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="glass-strong rounded-2xl p-5 shadow-soft lg:col-span-2"
            >
              <div className="font-display font-semibold mb-4">Status Operasional</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: "Internet", on: SCHOOL.internet, icon: Wifi },
                  { label: "Listrik", on: SCHOOL.electricity, icon: TrendingUp },
                  { label: "Laboratorium", on: SCHOOL.laboratory, icon: BookOpen },
                  { label: "Hari Aktif", on: true, icon: Calendar, value: SCHOOL.days },
                  { label: "Jam Operasional", on: true, icon: Calendar, value: SCHOOL.hours },
                  { label: "Kurikulum", on: true, icon: BookOpen, value: SCHOOL.curriculum },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border p-3 bg-card/50">
                    <div className="flex items-center justify-between">
                      <s.icon className="size-4 text-primary" />
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.on ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`}>
                        {s.on ? "Aktif" : "N/A"}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">{s.label}</div>
                    <div className="text-sm font-semibold mt-0.5">{s.value ?? (s.on ? "Tersedia" : "Belum")}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>

      <Chatbot />
    </div>
  );
}
