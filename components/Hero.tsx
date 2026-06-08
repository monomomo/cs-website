"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const codeSnippets = [
  "const teacher = { name: '张明', company: '阿里巴巴' };",
  "function learnPython() { return '高薪就业'; }",
  "async function getOffer() { await study(); return success; }",
  "class Teacher { constructor(name) { this.name = name; } }",
  "export default function Developer() { return hiring; }",
  "const [skills, setSkills] = useState(['Python', 'Java']);",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[700px] flex flex-col items-center justify-center overflow-hidden px-6"
      style={{
        background:
          "radial-gradient(ellipse at center, var(--surface) 0%, var(--background) 100%)",
      }}
    >
      {/* Code Rain Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {codeSnippets.map((code, index) => (
          <div
            key={index}
            className="absolute text-xs font-mono animate-float"
            style={{
              left: `${10 + index * 15}%`,
              top: `${-10 + index * 5}%`,
              color: "var(--accent)",
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${6 + index}s`,
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            {code}
          </div>
        ))}
      </div>

      {/* Neural Network Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-full h-full opacity-10"
          viewBox="0 0 1000 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Neural network nodes */}
          {[
            { x: 100, y: 200 }, { x: 200, y: 350 }, { x: 150, y: 500 },
            { x: 400, y: 150 }, { x: 450, y: 300 }, { x: 420, y: 480 },
            { x: 700, y: 180 }, { x: 750, y: 350 }, { x: 680, y: 520 },
            { x: 900, y: 250 }, { x: 850, y: 420 },
          ].map((node, i) => (
            <g key={i}>
              <circle cx={node.x} cy={node.y} r="8" fill="var(--accent)" opacity="0.4" />
              <circle cx={node.x} cy={node.y} r="4" fill="var(--accent)" />
            </g>
          ))}
          {/* Connections */}
          <path d="M100 200 Q200 300 200 350" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M200 350 Q150 420 150 500" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M200 350 Q350 200 400 150" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M200 350 Q350 350 450 300" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M450 300 Q400 400 420 480" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M400 150 Q550 100 700 180" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M450 300 Q600 300 750 350" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M420 480 Q550 550 680 520" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M700 180 Q800 200 900 250" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M750 350 Q800 400 850 420" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M900 250 Q870 350 850 420" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          <span style={{ color: "var(--primary)" }}>专业师资</span>
          <span style={{ color: "var(--foreground)" }}> · 成就未来</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl mb-12"
          style={{ color: "var(--text-secondary)" }}
        >
          汇聚行业精英，传授真才实学
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12"
        >
          {[
            { value: "6", label: "专家教师" },
            { value: "15,000+", label: "累计学员" },
            { value: "96%", label: "就业率" },
            { value: "4.9", label: "平均评分" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-lg"
              style={{
                background: "color-mix(in srgb, var(--surface) 60%, transparent)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{ color: "var(--primary)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          href="#teachers"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 btn-glow"
          style={{ background: "var(--primary)", color: "#000" }}
        >
          探索师资团队
          <ArrowDown size={20} />
        </motion.a>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full"
        >
          <path
            d="M0 50 Q360 0 720 50 T1440 50 V100 H0 Z"
            fill="var(--surface)"
          />
        </svg>
      </div>
    </section>
  );
}