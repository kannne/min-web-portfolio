"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { Sparkles, Zap, Code2, Brain } from "lucide-react";

const aiCapabilities = [
  {
    icon: Brain,
    title: "최신 AI 정보 활용",
    description: "사용자 입장에서 최신 트렌드를 지속적으로 팔로우하고 개발, 디버깅, 리팩토링 등에 적극 활용",
  },
  {
    icon: Code2,
    title: "프롬프트 엔지니어링",
    description: "커스텀 지침 사용과 컨텍스트 관리, 최고의 응답을 위한 인풋 고민",
  },
  {
    icon: Zap,
    title: "러닝 커브 감소",
    description: "새로운 기술 스택과 개념을 빠르게 익히고 프로젝트에 적용하여 온보딩 속도 향상",
  },
  {
    icon: Sparkles,
    title: "반복 작업 자동화",
    description: "테스트 케이스 생성, 문서화, 스크립트 및 코드 스니펫 작성 등 반복 작업에 활용",
  },
];

const aiHighlights = [
  "처음 사용하는 라이브러리인 AmCharts의 특수한 차트를 빠르게 이해하고 구현",
  "프로젝트 인원이 퇴사하여 인수인계 받은 코드베이스 분석에 AI 활용",
  "이미 구축되어 있는 Kubernetes 환경에 MCP 연동을 통한 사용성 개선",
  "퍼블리싱이 메인이 되는 웹 이력서를 하루만에 개발 및 배포",
  "개인 미니 PC에 Docker 환경 구축 및 관리 도움",
  "토이 프로젝트로 경험이 없던 안드로이드 앱 개발을 바이브 코딩으로 실제 사용 가능한 수준까지 완성",
];

export function AIEdge() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="ai-edge"
      ref={ref}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Subtle decorative background */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-slate-500/5 dark:bg-slate-400/5 blur-3xl -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              variants={fadeInUp}
            >
              <Sparkles className="w-5 h-5 text-slate-700 dark:text-slate-400" />
              <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                Competitive Edge
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6"
              variants={fadeInUp}
            >
              <span className="font-semibold text-slate-700 dark:text-slate-400">
                AI
              </span>
              와 함께 일하는 개발자
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              단순히 AI를 사용하는 것을 넘어, AI와 효과적으로 협업하여 개발 생산성을 높입니다.
            </motion.p>
          </div>

          {/* Capabilities grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {aiCapabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group relative p-6 lg:p-8 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300"
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ y: -5 }}
                >
                  {/* Accent line */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-slate-700 dark:bg-slate-400"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    style={{ transformOrigin: "left" }}
                  />

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                      <Icon className="w-6 h-6 text-slate-700 dark:text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Highlights */}
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-semibold mb-6 text-center">주요 활용 사례</h3>
            <div className="space-y-3">
              {aiHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="mt-2">
                    <div className="w-1.5 h-1.5 bg-slate-700 dark:bg-slate-400 rounded-full" />
                  </div>
                  <p className="text-foreground/80 text-lg flex-1">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
