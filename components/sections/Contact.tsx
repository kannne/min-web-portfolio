"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { useState } from "react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "megazero56@naver.com",
    href: "",
    copyable: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/kannne",
    href: "https://github.com/kannne",
    copyable: false,
  },
];

export function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section header */}
          <motion.span
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-4 block"
            variants={fadeInUp}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6"
            variants={fadeInUp}
          >
            감사<span className="font-light">합니다</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            variants={fadeInUp}
          >
            새로운 기회를 기다리고 있습니다.
          </motion.p>

          {/* Contact links grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6 mb-12"
            variants={staggerContainer}
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              const isCopyable = link.copyable;

              const content = (
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100 dark:bg-neutral-900 group-hover:bg-slate-700 dark:group-hover:bg-slate-600 group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">
                      {link.label}
                      {isCopyable && (
                        <span className="ml-2 text-xs">
                          {copied ? "✓ 복사됨" : "(클릭하여 복사)"}
                        </span>
                      )}
                    </div>
                    <div className="font-medium group-hover:text-foreground/80 transition-colors break-all">
                      {link.value}
                    </div>
                  </div>
                </div>
              );

              return isCopyable ? (
                <motion.button
                  key={link.label}
                  onClick={() => handleCopy(link.value)}
                  className="group p-6 bg-background border border-neutral-200 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 text-left cursor-pointer w-full"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  {content}
                </motion.button>
              ) : (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-background border border-neutral-200 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 text-left"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  {content}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-8 left-0 right-0 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p>© 2026 MIN HEO All rights reserved.</p>
      </motion.footer>
    </section>
  );
}
