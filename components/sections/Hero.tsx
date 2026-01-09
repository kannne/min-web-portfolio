"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const handleScrollDown = () => {
    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background decorative element */}
      <motion.div
        className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 opacity-30 blur-3xl -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Overline text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-base tracking-[0.3em] uppercase text-muted-foreground font-light">
              Web Developer
            </span>
          </motion.div>

          {/* Main heading with stagger effect */}
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            안녕하세요
          </motion.h3>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <span className="font-semibold relative inline-block mt-4">
                허민
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-slate-700 dark:bg-slate-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
              입니다
            </motion.span>
          </motion.h1>

          {/* About content - 통합된 내용 */}
          <motion.div
            className="space-y-6 text-muted-foreground leading-relaxed max-w-4xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-xl font-semibold sm:text-xl">
              4년차 개발자로서 사용자가 가진 어려움을 해소하는 제품을 만들고 싶습니다.
            </p>
            <p className="text-lg">
              타 직종에서 근무를 하다가 개발에 매력을 느껴 2023년부터 주니어 웹 개발자의 길을 걷기 시작했습니다. 3년 동안 근무하면서 좋은 분들과 협업하며 다양한 경험을 쌓았습니다.
            </p>
            <p className="text-lg">
              Java 백엔드 개발로 커리어를 시작했지만, 입사 후 접한 Vue.js를 통해 프론트 개발에도 매력을 느껴 현재는 파트를 가리지 않고 업무를 맡고 있습니다. 그 덕분에 양쪽 개발의 어려움을 조금이나마 함께 이해할 수 있게 되었습니다.
            </p>
            <p className="text-lg">
              처음에는 프론트와 백엔드를 모두 하게 되니 둘 다 어중간해지는 건 아닌지 고민이 많았지만, 지금은 필요한 업무라면 어느 쪽이든 대응할 수 있는 것이 저의 강점이 되었다고 생각합니다.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-12 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div>
              <div className="text-4xl font-semibold mb-1">4+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-semibold mb-1">6+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects Experienced</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        onClick={handleScrollDown}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
