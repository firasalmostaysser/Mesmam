"use client";

import { motion } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pitch Deck", href: "/pitch-deck" },
  { label: "Business Plan", href: "/business-plan" },
  { label: "Action Plan", href: "/action-plan" },
  { label: "Studies", href: "/studies" },
];

export function PageNav({ current }: { current: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
            <span className="text-black font-bold text-lg">م</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-gradient-gold">
            Mesmam
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                current === l.href
                  ? "text-gold font-semibold"
                  : "text-gray-400 hover:text-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-gray-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/5 px-6 py-4 space-y-3"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block text-sm py-1 ${
                current === l.href
                  ? "text-gold font-semibold"
                  : "text-gray-400 hover:text-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
}: {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
}) {
  return (
    <section className="pt-28 pb-16 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-uv-blue/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gold-light font-medium">{badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            {title}{" "}
            <span className="text-gradient-gold">{titleHighlight}</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors mb-8"
    >
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
}

export function PageFooter() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
              <span className="text-black font-bold">م</span>
            </div>
            <span className="font-bold">
              <span className="text-gradient-gold">Mesmam</span>{" "}
              <span className="text-gray-600">مسمام</span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SectionTitle({
  tag,
  tagColor = "text-gold",
  title,
  highlight,
  subtitle,
}: {
  tag: string;
  tagColor?: string;
  title: string;
  highlight: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <span className={`text-sm font-semibold uppercase tracking-widest ${tagColor}`}>
        {tag}
      </span>
      <h2 className="text-3xl sm:text-4xl font-black mt-4">
        {title} <span className="text-gradient-gold">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
