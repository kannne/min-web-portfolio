"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "main" },
      { name: "Vue.js", level: "main" },
      { name: "Zustand", level: "main" },
      { name: "TanStack Query", level: "main" },
      { name: "Vuex", level: "main" },
      { name: "Next.js", level: "sub" },
      { name: "Tailwind CSS", level: "sub" },
      { name: "shadcn/ui", level: "sub" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", level: "main" },
      { name: "Spring Boot", level: "main" },
      { name: "MyBatis", level: "main" },
      { name: "MySQL", level: "main" },
      { name: "PostgreSQL", level: "main" },
      { name: "JPA", level: "main" },
      { name: "QueryDSL", level: "sub" },
      { name: "Redis", level: "sub" },
      { name: "Nest.js", level: "sub" },
      { name: "Prisma", level: "sub" }
    ],
  },
  {
    title: "CI/CD & Tools",
    skills: [
      { name: "Git", level: "main" },
      { name: "Claude Code", level: "main" },
      { name: "Linux", level: "sub" },
      { name: "AWS", level: "sub" },
      { name: "Docker", level: "sub" },
      { name: "Prometheus", level: "sub" },
      { name: "Grafana", level: "sub" },
    ],
  },
];

export function Skills() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="skills"
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
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.span
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-4 block"
              variants={fadeInUp}
            >
              Skills & Tools
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
              variants={fadeInUp}
            >
              기술<span className="font-light">스택</span>
            </motion.h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="group"
                variants={fadeInUp}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-3xl font-semibold mb-6 relative inline-block">
                  {category.title}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-700 dark:bg-slate-400 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.3 }}
                  />
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const isMain = skill.level === "main";
                    return (
                      <motion.div
                        key={skill.name}
                        className={`px-4 py-2 transition-colors ${
                          isMain
                            ? "bg-slate-700 dark:bg-slate-400 text-white dark:text-neutral-900 hover:bg-slate-600 dark:hover:bg-slate-500"
                            : "bg-neutral-100 dark:bg-neutral-900 text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800"
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className={`text-base ${isMain ? "font-semibold" : "font-normal"}`}>
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
