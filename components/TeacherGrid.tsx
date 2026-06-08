"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TeacherCard from "./TeacherCard";
import TeacherModal from "./TeacherModal";
import type { Teacher } from "@/types/teacher";

export default function TeacherGrid() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/teachers")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch teachers");
        return res.json();
      })
      .then((data) => {
        setTeachers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section id="teachers" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              师资团队
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              加载中...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-96 rounded-2xl animate-pulse"
                style={{ background: "var(--surface)" }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="teachers" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p style={{ color: "var(--primary)" }}>加载失败: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="teachers" className="py-24 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              师资团队
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              汇聚行业精英，每位讲师都拥有丰富的实战经验和教学经历
            </p>
          </div>

          {/* Teacher Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TeacherCard
                  teacher={teacher}
                  onClick={() => setSelectedTeacher(teacher)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedTeacher && (
        <TeacherModal
          teacher={selectedTeacher}
          onClose={() => setSelectedTeacher(null)}
        />
      )}
    </>
  );
}