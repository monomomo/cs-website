"use client";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{
        background: "var(--background)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              路觅教育
            </span>
            <span className="text-lg text-[var(--text-secondary)]">Lumist</span>
          </div>
          <p
            className="mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            专注计算机教育多年
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            联系我们：contact@lumist.com
          </p>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "var(--border)" }}
        />

        {/* Bottom */}
        <div className="text-center text-sm" style={{ color: "var(--text-secondary)" }}>
          <p>© 2024 路觅教育 Lumist. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-[var(--primary)] transition-colors">
              沪ICP备XXXXXXXX号
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}