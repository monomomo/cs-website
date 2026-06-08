"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Link, BookOpen, Globe, Trophy, FileText, Mic, Award } from "lucide-react";
import type { Teacher } from "@/types/teacher";

interface TeacherModalProps {
  teacher: Teacher;
  onClose: () => void;
}

const achievementIcons = {
  paper: FileText,
  patent: Trophy,
  speech: Mic,
  award: Award,
};

const achievementLabels = {
  paper: "论文",
  patent: "专利",
  speech: "演讲",
  award: "奖项",
};

export default function TeacherModal({ teacher, onClose }: TeacherModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{ background: "var(--surface)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full z-10 transition-colors"
          style={{ background: "var(--surface-light)", color: "var(--text-secondary)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--foreground)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-secondary)";
          }}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="p-8 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div
                className="w-36 h-36 rounded-full flex items-center justify-center text-4xl font-bold mx-auto md:mx-0"
                style={{
                  background: `linear-gradient(135deg, var(--primary-light), var(--primary-dark))`,
                  border: "4px solid var(--primary)",
                }}
              >
                {teacher.name.slice(0, 1)}
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">{teacher.name}</h2>
              <p className="text-lg mb-2" style={{ color: "var(--text-secondary)" }}>
                {teacher.title}
              </p>
              <p className="text-sm mb-4" style={{ color: "var(--accent)" }}>
                {teacher.company} · {teacher.experience}
              </p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-3 mb-4">
                {teacher.links.github && (
                  <a
                    href={teacher.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors"
                    style={{ background: "var(--surface-light)", color: "var(--text-secondary)" }}
                  >
                    <Link size={14} />
                    GitHub
                  </a>
                )}
                {teacher.links.blog && (
                  <a
                    href={teacher.links.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors"
                    style={{ background: "var(--surface-light)", color: "var(--text-secondary)" }}
                  >
                    <BookOpen size={14} />
                    博客
                  </a>
                )}
                {teacher.links.juejin && (
                  <a
                    href={teacher.links.juejin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors"
                    style={{ background: "var(--surface-light)", color: "var(--text-secondary)" }}
                  >
                    <Globe size={14} />
                    掘金
                  </a>
                )}
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {teacher.expertise.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-lg"
                    style={{
                      background: "color-mix(in srgb, var(--primary) 15%, transparent)",
                      color: "var(--primary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="p-6 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-xl" style={{ background: "var(--surface-light)" }}>
              <div className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                {teacher.stats.students.toLocaleString()}
              </div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                累计学员
              </div>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ background: "var(--surface-light)" }}>
              <div className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                {teacher.stats.employment}
              </div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                就业率
              </div>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ background: "var(--surface-light)" }}>
              <div className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                {teacher.stats.rating}
              </div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                平均评分
              </div>
            </div>
            <div className="text-center p-4 rounded-xl" style={{ background: "var(--surface-light)" }}>
              <div className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                {teacher.stats.awards}
              </div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                竞赛获奖
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Projects */}
          {teacher.projects && teacher.projects.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy size={20} style={{ color: "var(--primary)" }} />
                代表性项目
              </h3>
              <div className="space-y-3">
                {teacher.projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl"
                    style={{ background: "var(--surface-light)" }}
                  >
                    <div className="font-semibold mb-1">{project.name}</div>
                    <div className="text-sm mb-1" style={{ color: "var(--accent)" }}>
                      {project.role}
                    </div>
                    <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {project.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {teacher.achievements && teacher.achievements.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award size={20} style={{ color: "var(--primary)" }} />
                学术/竞赛成就
              </h3>
              <div className="flex flex-wrap gap-3">
                {teacher.achievements.map((achievement, index) => {
                  const Icon = achievementIcons[achievement.type];
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg"
                      style={{ background: "color-mix(in srgb, var(--primary) 10%, transparent)" }}
                    >
                      <Icon size={16} style={{ color: "var(--primary)" }} />
                      <span style={{ color: "var(--primary)" }}>
                        {achievement.title}
                      </span>
                      {achievement.description && (
                        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                          - {achievement.description}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Introduction */}
          <div>
            <h3 className="text-xl font-bold mb-4">个人简介</h3>
            <p
              className="leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {teacher.introduction}
            </p>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4">教授课程</h3>
            <div className="flex flex-wrap gap-2">
              {teacher.courses.map((course, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg text-sm"
                  style={{
                    background: "var(--surface-light)",
                    color: "var(--foreground)",
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xl font-bold mb-4">教学特色</h3>
            <div className="space-y-2">
              {teacher.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span style={{ color: "var(--primary)" }}>✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          {teacher.reviews && teacher.reviews.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4">学员评价</h3>
              <div className="space-y-4">
                {teacher.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-4 rounded-xl italic"
                    style={{ background: "var(--surface-light)" }}
                  >
                    <p className="mb-3" style={{ color: "var(--text-secondary)" }}>
                      &ldquo;{review.content}&rdquo;
                    </p>
                    <p className="text-sm font-medium" style={{ color: "var(--primary)" }}>
                      — {review.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}