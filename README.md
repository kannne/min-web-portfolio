# 웹 포트폴리오

4년차 개발자 허민의 개인 포트폴리오 웹사이트

## 🔗 Live Demo

[https://min-web-portfolio.vercel.app](https://min-web-portfolio.vercel.app)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animation**: Framer Motion
- **Font**: Pretendard Variable
- **Deployment**: Vercel

## ✨ Features

- 📱 반응형 디자인 (Mobile/Tablet/Desktop)
- 🌙 다크모드 지원
- 🎨 미니멀 디자인 시스템
- ⚡ 스크롤 기반 애니메이션
- 🎯 섹션별 Active 메뉴 표시
- 📊 기술 스택 숙련도 시각화
- 📋 이메일 주소 클립보드 복사

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   └── Header.tsx      # Navigation header
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── Experience.tsx  # Career timeline
│       ├── Skills.tsx      # Tech stack
│       ├── Projects.tsx    # Project portfolio
│       ├── AIEdge.tsx      # AI collaboration
│       └── Contact.tsx     # Contact info
├── hooks/
│   └── use-scroll-animation.ts
└── lib/
    └── animation-variants.ts
```

## 🎨 Design Philosophy

- **Minimal & Clean**: 불필요한 요소 제거, 콘텐츠에 집중
- **Consistent**: Slate 색상을 활용한 일관된 액센트
- **Smooth**: Framer Motion 기반 부드러운 애니메이션
- **Accessible**: 시맨틱 HTML과 키보드 네비게이션 지원

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!

---

Built with ❤️ using Claude Code
