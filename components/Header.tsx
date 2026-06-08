"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 lg:px-12 transition-all duration-300"
      style={{
        background: isScrolled
          ? "color-mix(in srgb, var(--surface) 90%, transparent)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--border)" : "none",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span
          className="text-2xl font-bold"
          style={{ color: "var(--primary)" }}
        >
          路觅教育
        </span>
        <span className="text-lg text-[var(--text-secondary)]">Lumist</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a
          href="#"
          className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
        >
          首页
        </a>
        <a
          href="#teachers"
          className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
        >
          师资团队
        </a>
        <a
          href="#"
          className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
        >
          关于我们
        </a>
      </nav>

      {/* CTA Button */}
      <a
        href="#teachers"
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
        style={{
          border: "2px solid var(--primary)",
          color: "var(--primary)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--primary)";
          e.currentTarget.style.color = "#000";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--primary)";
        }}
      >
        联系我们
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X size={24} style={{ color: "var(--foreground)" }} />
        ) : (
          <Menu size={24} style={{ color: "var(--foreground)" }} />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-[72px] left-0 right-0 p-6 md:hidden"
          style={{
            background: "color-mix(in srgb, var(--surface) 95%, transparent)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-[var(--foreground)]">
              首页
            </a>
            <a href="#teachers" className="text-[var(--text-secondary)]">
              师资团队
            </a>
            <a href="#" className="text-[var(--text-secondary)]">
              关于我们
            </a>
            <a
              href="#teachers"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium mt-2"
              style={{
                background: "var(--primary)",
                color: "#000",
              }}
            >
              联系我们
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}