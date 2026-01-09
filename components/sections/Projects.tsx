"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SKT GPUaaS On-Demand Billing 시스템 개발",
    type: "company" as const,
    period: "2025.06 - 2025.12",
    description: [
      "상품관리, 청구통계, Credit 관리, 감사로그, 외부API 프론트엔드 및 백엔드 개발",
      "Prometheus+AlertManager+Blackbox Exporter을 활용한 실시간 모니터링 시스템 구축",
      "전 영역 이슈 처리 및 추가 요구사항 대응",
    ],
    tags: ["React", "TypeScript",  "Zustand", "TanStack Query", "AmCharts", "Spring Boot", "MyBatis", "MySQL", "Redis", "Keycloak", "Spring Security", "Jenkins", "ArgoCD", "Kubernetes", "Prometheus", "Grafana"],
    link: null,
  },
  {
    id: 2,
    title: "OpsNow Prime 개발",
    type: "company" as const,
    period: "2024.12 - Present",
    description: [
      "Prometheus+OpenTelemetry+VictoriaMetrics 활용을 통한 리소스 메트릭 데이터 수집 시스템 구축",
      "리소스 대시보드, 모니터링 대시보드 프론트엔드 및 백엔드 개발",
      "내부 라이브러리에서 MUI(Material-UI) 라이브러리로의 마이그레이션 작업",
    ],
    tags: ["React", "TypeScript", "ReCharts", "Redux", "Spring Boot", "JPA", "QueryDSL", "PostgreSQL", "Keycloak", "Jenkins", "ArgoCD", "Kubernetes"],
  },
  {
    id: 3,
    title: "OpsNow FinOps Plus 개발",
    type: "company" as const,
    period: "2023.09 - 2024.11",
    description: [
      "Billing 메뉴(Overview, Invoice, Payment Method) 프론트엔드 개발",
      "AutoSavings 제품 구독을 위한 Stripe 연동 API 서버 백엔드 개발",
      "Onboarding 프로세스와 연동 및 지원",
      "수동 인보이스 기능 추가 개발",
    ],
    tags: ["Vue.js", "JavaScript", "Vuex", "Spring Boot", "JPA", "MySQL", "RabbitMQ", "AWS"],
    link: "https://www.opsnow.io/kr-ko",
  },
  {
    id: 4,
    title: "OpsNow360 개발",
    type: "company" as const,
    period: "2023.02 - 2023.09",
    description: [
      "대시보드에 사내 서드파티 솔루션(HelpNow, AlertNow) 위젯 추가",
      "백엔드 서버 테스트 케이스 작성 및 코드 커버리지 90% 달성",
      "다국어/메일링 템플릿 작업",
      "Billing 관련 각종 운영 이슈 대응",
    ],
    tags: ["Vue.js", "JavaScript", "Vuex", "Spring Boot", "MyBatis", "MySQL", "RabbitMQ", "AWS"],
    link: "https://www.opsnow.com/ko/product/opsnow360",
  },
  {
    id: 5,
    title: "GoLang - AI를 활용한 외국어 학습 웹앱",
    type: "personal" as const,
    period: "2025.12 - Present",
    description: [
      "Gemini API를 활용한 AI 독해 지문/작문 첨삭/어휘 학습 기능 구현",
      "Next.js + NestJS 풀스택 아키텍처 설계 및 개발",
      "Google OAuth 2.0 인증 시스템 구축",
      "후리가나 자동 생성 및 JMdict 사전 연동 기능 개발",
    ],
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS", "shadcn/ui", "Gemini API", "Google OAuth"],
    github: "https://github.com/kannne/go-study-lang",
    link: null,
  },
  {
    id: 6,
    title: "웹 이력서 개발",
    type: "personal" as const,
    period: "2026.01",
    description: [
      "Claude Code와 협업하여 미니멀 디자인의 반응형 포트폴리오 웹사이트 제작",
      "Framer Motion을 활용한 스크롤 기반 애니메이션 구현",
      "다크모드 지원 및 일관된 디자인 시스템 구축",
      "숙련도 시각화 및 프로젝트 타입별 차별화된 UI 설계",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    github: "https://github.com/kannne/min-web-portfolio",
    link: "https://min-web-portfolio.vercel.app",
  },
];

export function Projects() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.span
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light mb-4 block"
              variants={fadeInUp}
            >
              Featured Work
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight"
              variants={fadeInUp}
            >
              주요 <span className="font-semibold">프로젝트</span> & 포트폴리오
            </motion.h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const isPersonal = project.type === "personal";
              return (
                <motion.div
                  key={project.id}
                  className="group relative flex"
                  variants={fadeInUp}
                  custom={index}
                >
                  {/* Border Accent - Left side */}
                  <motion.div
                    className={`absolute left-0 top-0 h-full w-1 ${
                      isPersonal
                        ? "bg-slate-400 dark:bg-slate-300"
                        : "bg-slate-900 dark:bg-slate-800"
                    }`}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    style={{ transformOrigin: "top" }}
                  />

                  <div
                    className={`flex-1 pl-6 p-6 bg-white dark:bg-neutral-900 border-2 transition-all duration-300 ${
                      isPersonal
                        ? "border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
                        : "border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
                    }`}
                  >
                    {/* Header with Type Badge and Links */}
                    <div className="flex items-center justify-between mb-2 gap-2 min-h-[32px]">
                      <span
                        className={`text-sm font-medium px-2 py-1 ${
                          isPersonal
                            ? "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                            : "bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-600 border border-slate-200 dark:border-slate-800 font-semibold"
                        }`}
                      >
                        {isPersonal ? "개인 프로젝트" : "회사 프로젝트"}
                      </span>

                      {/* Links - 항상 렌더링하되 내용이 없으면 빈 공간 */}
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label="View GitHub"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label="View Project"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Title and Period */}
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.period}</p>

                    {/* Description List */}
                    <ul className="space-y-1 mb-3">
                      {project.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-foreground flex-shrink-0">•</span>
                          <span className="text-base flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
