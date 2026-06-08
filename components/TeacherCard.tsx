"use client";

import { motion } from "framer-motion";
import { Link, BookOpen, Globe } from "lucide-react";
import type { Teacher } from "@/types/teacher";

interface TeacherCardProps {
  teacher: Teacher;
  onClick: () => void;
}

export default function TeacherCard({ teacher, onClick }: TeacherCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative p-6 rounded-2xl cursor-pointer transition-all duration-300"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--primary)";
        e.currentTarget.style.boxShadow = "0 0 30px color-mix(in srgb, var(--primary) 30%, transparent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div
          className="w-28 h-28 rounded-full flex items-center justify-center text-3xl font-bold"
          style={{
            background: `linear-gradient(135deg, var(--primary-light), var(--primary-dark))`,
            border: "3px solid var(--primary)",
          }}
        >
          {teacher.name.slice(0, 1)}
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center mb-3">
        <h3 className="text-xl font-semibold mb-1">{teacher.name}</h3>
        <p
          className="text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          {teacher.title}
        </p>
        <p
          className="text-xs mt-1"
          style={{ color: "var(--accent)" }}
        >
          {teacher.company} · {teacher.experience}
        </p>
      </div>

      {/* Expertise Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {teacher.expertise.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-lg"
            style={{
              background: "var(--surface-light)",
              color: "var(--text-secondary)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="text-center p-2 rounded-lg" style={{ background: "var(--surface-light)" }}>
          <div className="text-lg font-bold" style={{ color: "var(--primary)" }}>
            {teacher.stats.students.toLocaleString()}
          </div>
          <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
            学员
          </div>
        </div>
        <div className="text-center p-2 rounded-lg" style={{ background: "var(--surface-light)" }}>
          <div className="text-lg font-bold" style={{ color: "var(--primary)" }}>
            {teacher.stats.employment}
          </div>
          <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
            就业率
          </div>
        </div>
        <div className="text-center p-2 rounded-lg" style={{ background: "var(--surface-light)" }}>
          <div className="text-lg font-bold" style={{ color: "var(--primary)" }}>
            {teacher.stats.rating}
          </div>
          <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
            评分
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-3">
        {teacher.links.github && (
          <a
            href={teacher.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-full transition-colors"
            style={{ background: "var(--surface-light)", color: "var(--text-secondary)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <Link size={16} />
          </a>
        )}
        {teacher.links.blog && (
          <a
            href={teacher.links.blog}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-full transition-colors"
            style={{ background: "var(--surface-light)", color: "var(--text-secondary)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <BookOpen size={16} />
          </a>
        )}
        {teacher.links.juejin && (
          <a
            href={teacher.links.juejin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-full transition-colors"
            style={{ background: "var(--surface-light)", color: "var(--text-secondary)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <Globe size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
}