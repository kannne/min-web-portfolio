"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "AI Edge", href: "#ai-edge" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // 현재 보이는 섹션 감지
      const sections = navItems.map((item) => {
        const element = document.querySelector(item.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.href.replace("#", ""),
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean);

      // 화면 상단에서 가장 가까운 섹션 찾기 (헤더 높이 고려)
      const headerOffset = 100;
      let currentSection = sections[0];

      for (const section of sections) {
        if (section && section.top <= headerOffset) {
          currentSection = section;
        }
      }

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    handleScroll(); // 초기 실행
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-14">
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-medium tracking-wide uppercase text-foreground/60 hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <button className="md:hidden absolute right-4 p-2" aria-label="Toggle menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>
    );
  }

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border/50"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14">
          {/* Desktop Navigation - 중앙 정렬 */}
          <nav className="hidden md:flex items-center space-x-8 gap-6">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "text-xs font-medium tracking-wide uppercase transition-colors relative group",
                    isActive
                      ? "text-slate-700 dark:text-slate-400"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px transition-all duration-300 bg-slate-700 dark:bg-slate-400",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </motion.a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden pb-4 pt-2 border-t border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-slate-700 dark:text-slate-400 font-semibold"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
