"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "베스핀글로벌",
    team: "MarketplaceOps 팀",
    period: "2023.02 - 2023.05",
    description: [
      "OpsNow360 Billing 파트 개발 및 운영",
      "분사로 인한 고용승계로 퇴사"
    ],
  },
  {
    id: 2,
    company: "옵스나우 주식회사",
    team: "OpsNow Service 3팀",
    period: "2023.06 - 2024.06",
    description: [
      "OpsNow FinOps Plus Billing 파트 개발",
      "OpsNow Marketplace 개발 (Drop)"
    ],
  },
  {
    id: 3,
    company: "옵스나우 주식회사",
    team: "Service Platform 팀",
    period: "2024.07 - 2024.11",
    description: [
      "OpsNow360 Kill-legacy 프로젝트 참여",
      "OpsNow360 & OpsNow FinOps Plus Billing 파트 운영"
    ],
  },
  {
    id: 4,
    company: "옵스나우 주식회사",
    team: "PS팀",
    period: "2024.12 - Present",
    description: [
      "OpsNow Prime 개발",
      "OpsNow360 GCP 포팅 프로젝트",
      "SKT GPUaaS On-demand Billing 시스템 개발",
    ],
  },
];

export function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-4 block"
              variants={fadeInUp}
            >
              Career Journey
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
              variants={fadeInUp}
            >
              경력 <span className="font-light">& 역할</span>
            </motion.h2>
          </div>

          {/* Experience timeline - Horizontal */}
          <div className="relative">
            {/* Timeline line - Horizontal */}
            <motion.div
              className="absolute left-0 right-0 top-0 h-1 bg-neutral-200 dark:bg-neutral-800"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative"
                  variants={fadeInUp}
                  custom={index}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 -top-7 w-3 h-3 rounded-full bg-slate-700 dark:bg-slate-400 border-3 border-background"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.15 }}
                  />

                  <div className="h-full bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 p-5 hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex flex-col">
                    {/* Period */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar size={14} />
                      {exp.period}
                    </div>

                    {/* Company and team */}
                    <h3 className="text-lg font-semibold mb-1">{exp.company}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Briefcase size={16} />
                      <span className="font-medium">{exp.team}</span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-1.5 flex-1">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={
                            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                          }
                          transition={{ duration: 0.4, delay: index * 0.15 + i * 0.1 }}
                        >
                          <span className="text-foreground flex-shrink-0">•</span>
                          <span className="flex-1 text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
