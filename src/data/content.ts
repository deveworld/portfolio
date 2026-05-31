export const profile = {
    name: {
        display: "Deveworld",
        sub: "Gihyeon Sim (심기현)",
    },
    tagline: {
        en: "Student Researcher · AI/ML · Backend",
        ko: "학생 연구원 · AI/ML · 백엔드",
    },
    avatar: "/deveworld.png",
    bio: {
        en: "A high school developer and AI researcher. Interested in LLMs, Test-Time Training, and Korean NLP. I pursue open-source and reproducible AI research. Also a fullstack developer from backend to ML. (Except design 😅)",
        ko: "고등학생 개발자이자 AI 연구자입니다. LLM, Test-Time Training, 한국어 NLP에 관심을 가지고 있으며, 오픈소스와 재현 가능한 AI 연구를 지향합니다. 백엔드부터 ML까지 다루는 풀스택 개발자이기도 합니다. (디자인 빼고요 😅)",
    },
    links: {
        github: "https://github.com/deveworld",
        linkedin: "https://linkedin.com/in/deveworld",
        x: "https://x.com/dev_world_",
        discord: "https://discord.com/users/507157311555371008",
        huggingface: "https://huggingface.co/DevWorld",
        orcid: "https://orcid.org/0000-0001-7372-9423",
        scholar: "https://scholar.google.com/citations?user=xc1eeZIAAAAJ",
        email: "world@worldsw.dev",
        blog: "https://blog.worldsw.dev",
        calendly: "https://calendly.com/sodevsgh/30min",
    },
};

export const projects = [
    // Featured (Research) - Priority Order
    {
        title: "PonderTTT",
        subtitle: {
            en: "Adaptive Budget-Aware Test-Time Training",
            ko: "적응형 예산 인식 테스트 시간 학습",
        },
        period: "Nov 2025 - Present",
        description: {
            en: "Adaptive test-time training (TTT) framework for code generation models. JAX/Flax NNX implementation, achieving 82-89% Oracle Recovery.",
            ko: "코드 생성 모델을 위한 적응형 추론 시간 학습(TTT) 프레임워크. JAX/Flax NNX 구현, 82-89% Oracle Recovery 달성.",
        },
        highlights: ["82-89% Oracle Recovery", "JAX/Flax NNX", "arXiv Preprint"],
        featured: true,
        links: {
            page: "https://ponderttt.worldsw.dev",
            github: "https://github.com/deveworld/ponderTTT",
            paper: "https://arxiv.org/abs/2601.00894",
        },
    },
    {
        title: "BitNet-TT",
        subtitle: {
            en: "BitNet LLM on Tenstorrent Hardware",
            ko: "텐스토렌트 하드웨어에서의 BitNet LLM",
        },
        period: "Dec 2025 - Present",
        description: {
            en: "BitNet (1-bit LLM) implementation on Tenstorrent Blackhole p150a. HuggingFace compatible, KV-Cache support, HiFi2 Compute Kernel.",
            ko: "Tenstorrent Blackhole p150a에서 BitNet (1-bit LLM) 구현. HuggingFace 호환, KV-Cache 지원, HiFi2 Compute Kernel 활용.",
        },
        highlights: ["Tenstorrent Korea OSS", "0.99+ Correlation", "BFP8 Matmul"],
        featured: true,
        links: {
            github: "https://github.com/deveworld/bitnet-tt",
        },
    },
    {
        title: "KorT",
        subtitle: {
            en: "Korean Translation Benchmark",
            ko: "한국어 번역 벤치마크",
        },
        period: "Apr 2025 - Present",
        description: {
            en: "Korean-multilingual translation quality evaluation benchmark using LLM-as-a-judge. LLM-based evaluation system overcoming BLEU limitations.",
            ko: "LLM-as-a-judge 방식의 한국어-다국어 번역 품질 평가 벤치마크. BLEU의 한계를 극복한 LLM 기반 평가 시스템.",
        },
        highlights: ["22 GitHub Stars", "PyCon Korea 2025", "PyPI Package"],
        featured: true,
        links: {
            page: "https://kort.worldsw.dev",
            github: "https://github.com/deveworld/KorT",
            pypi: "https://pypi.org/project/kort-cli/",
        },
    },
    {
        title: "Gemago",
        subtitle: {
            en: "On-Device Translation Model",
            ko: "온디바이스 번역 모델",
        },
        period: "May 2024 - Dec 2024",
        description: {
            en: "Lightweight Korean-English bidirectional translation model based on Google Gemma. Optimized for real-time translation on consumer GPUs.",
            ko: "Google Gemma 기반 경량 한영 양방향 번역 모델. 일반 소비자 GPU에서 실시간 번역 가능하도록 최적화.",
        },
        highlights: [
            { en: "Gemma 2B Based", ko: "Gemma 2B 기반" },
            "60+ HF Downloads",
            { en: "Google TRC Support", ko: "Google TRC 지원" },
        ],
        featured: true,
        links: {
            huggingface: "https://huggingface.co/DevWorld/Gemago-2b",
            github: "https://github.com/deveworld/Gemago",
        },
    },
    // Hackathon
    {
        title: "PaperPath",
        subtitle: {
            en: "AI-Powered Personalized Paper Learning Path Generator",
            ko: "AI 기반 맞춤형 논문 학습 경로 생성기",
        },
        period: "Dec 2025",
        description: {
            en: "AI tool that analyzes paper prerequisites and generates personalized learning paths. 3rd place at Instruct.KR x Sionic 2025 Hackathon.",
            ko: "논문의 선행 지식을 분석해 개인화된 학습 경로를 생성하는 AI 도구. Instruct.KR x Sionic 2025 해커톤 3등 수상.",
        },
        highlights: [
            { en: "🥉 Hackathon 3rd", ko: "🥉 해커톤 3등" },
            { en: "D3.js Visualization", ko: "D3.js 시각화" },
            "MCP Agent",
        ],
        featured: false,
        links: {
            github: "https://github.com/deveworld/paperpath",
        },
    },
    // Other Projects
    {
        title: "Gemma-EasyLM",
        subtitle: {
            en: "Fine-tuning Gemma on TPU",
            ko: "TPU에서 Gemma 파인튜닝",
        },
        period: "2024",
        description: {
            en: "Integrated Google Gemma model into EasyLM framework for TPU fine-tuning. Supports distributed training on TPUv4-64 pod slices.",
            ko: "EasyLM 프레임워크에 Google Gemma 모델을 통합하여 TPU에서 파인튜닝. TPUv4-64 포드 슬라이스 분산 학습 지원.",
        },
        highlights: ["TPU Pods", "JAX/Flax", "HuggingFace"],
        featured: false,
        links: {
            github: "https://github.com/deveworld/Gemma-EasyLM",
        },
    },
    {
        title: "ArchKing",
        subtitle: {
            en: "Minecraft Server Plugin",
            ko: "Minecraft 서버 플러그인",
        },
        period: "2023",
        description: {
            en: "Minecraft server plugin for YouTuber 'ArchKing' content. Paper/Purpur compatible.",
            ko: "유튜버 '건축대장'의 콘텐츠를 위한 Minecraft 서버 플러그인. Paper/Purpur 호환.",
        },
        highlights: ["5 GitHub Stars", "Kotlin", "Archived"],
        featured: false,
        links: {
            github: "https://github.com/deveworld/ArchKing",
        },
    },
    {
        title: "ButterLib",
        subtitle: {
            en: "Minecraft Plugin Library",
            ko: "Minecraft 플러그인 라이브러리",
        },
        period: "2023",
        description: {
            en: "Kotlin-based Minecraft plugin development library. Distributed via JitPack.",
            ko: "Kotlin 기반 Minecraft 플러그인 개발 라이브러리. JitPack 배포.",
        },
        highlights: ["Kotlin", "JitPack"],
        featured: false,
        links: {
            github: "https://github.com/deveworld/ButterLib",
        },
    },
    {
        title: "rocket",
        subtitle: {
            en: "Rocket Simulation",
            ko: "로켓 시뮬레이션",
        },
        period: "2023",
        description: {
            en: "Python-based rocket physics simulation project.",
            ko: "Python 기반 로켓 물리 시뮬레이션 프로젝트.",
        },
        highlights: ["Python", "Physics"],
        featured: false,
        links: {
            github: "https://github.com/deveworld/rocket",
        },
    },
    {
        title: "SFML-Physics",
        subtitle: {
            en: "Physics Simulation",
            ko: "물리 시뮬레이션",
        },
        period: "2022",
        description: {
            en: "Physics simulation project using C++ and SFML.",
            ko: "C++과 SFML을 활용한 물리 시뮬레이션 프로젝트.",
        },
        highlights: ["C++", "SFML", "CMake"],
        featured: false,
        links: {
            github: "https://github.com/deveworld/SFML-Physics",
        },
    },
];

export const presentations = [
    {
        title: {
            en: "A High Schooler's LLM-as-a-judge Translation Benchmark Leaderboard",
            ko: "고등학생이 만들어 본 LLM-as-a-judge 번역 벤치마크 리더보드",
        },
        event: "PyCon Korea 2025",
        type: "Conference Talk",
        link: "https://www.youtube.com/watch?v=oIIgDzVz_IM",
    },
];

export const media = [
    {
        title: {
            en: "Papago vs Google, Who Translates Better According to AI?",
            ko: "파파고 vs 구글, AI가 보기엔 누가 더 번역을 잘할까?",
        },
        publisher: {
            en: "Yozm IT (Wishket)",
            ko: "요즘IT (Wishket)",
        },
        year: "2025",
        link: "https://yozm.wishket.com/magazine/detail/3524/",
    },
];

export const skills = {
    Languages: ["Python", "TypeScript", "Kotlin", "Java", "C++", "Go"],
    "ML/DL": ["JAX/Flax", "PyTorch", "HuggingFace", "Axolotl"],
    Infrastructure: ["Google Cloud Platform (GCP)", "TPU Pods", "AWS", "Docker"],
    DevOps: ["Linux (Kubuntu)", "Docker Compose", "GitHub Actions", "CI/CD"],
};

export const openSourceContributions = [
    {
        repo: "tenstorrent/tt-installer",
        title: "Add uv support for Python package installation",
        type: "PR",
        link: "https://github.com/tenstorrent/tt-installer/pull/103",
        description: {
            en: "Improved Python package installation speed using uv",
            ko: "uv를 활용한 Python 패키지 설치 속도 개선",
        },
    },
    {
        repo: "seleniumbase/SeleniumBase",
        title: "Compatibility for geckodriver aarch64",
        type: "PR",
        link: "https://github.com/seleniumbase/SeleniumBase/pull/3154",
        description: {
            en: "Added aarch64 architecture compatibility",
            ko: "aarch64 아키텍처 호환성 추가",
        },
    },
    {
        repo: "martiniifun/pyhwpx",
        title: {
            en: "Improved subprocess exception handling",
            ko: "subprocess 예외 처리 개선",
        },
        type: "PR",
        link: "https://github.com/martiniifun/pyhwpx/pull/10",
        description: {
            en: "pip call exception handling in virtual environments",
            ko: "가상환경에서의 pip 호출 예외 처리",
        },
    },
];

export const freelance = {
    platform: {
        en: "Kmong",
        ko: "크몽",
    },
    period: "2023 - Present",
    badge: {
        en: "Top 2% Expert · Prime",
        ko: "상위 2% 전문가 Prime",
    },
    services: [
        { en: "AI/LLM Integration", ko: "AI/LLM 연동" },
        { en: "Web Crawling", ko: "웹 크롤링" },
        { en: "Automation Development", ko: "자동화 개발" },
    ],
    stats: {
        projects: 22,
        satisfaction: "100%",
        rating: "5.0/5.0",
    },
    link: "https://kmong.com/gig/597379",
};

export const achievements = [
    {
        title: {
            en: "Instruct.KR x Sionic 2025 Hackathon",
            ko: "Instruct.KR x Sionic 2025 해커톤",
        },
        award: {
            en: "3rd Place",
            ko: "3등",
        },
        project: "PaperPath",
        year: "2025",
    },
];

export const grants = [
    {
        year: "2024-2025",
        organization: "Google TPU Research Cloud",
        description: {
            en: "TPU resource support",
            ko: "TPU 리소스 지원",
        },
    },
    {
        year: "2024",
        organization: "Anthropic",
        description: {
            en: "API credit support (for KorT evaluation)",
            ko: "API 크레딧 지원 (KorT 평가용)",
        },
    },
    {
        year: "2025",
        organization: "Gcube",
        description: {
            en: "RTX 5090/4090/5080 GPU experience support",
            ko: "RTX 5090/4090/5080 GPU 체험 지원",
        },
    },
];
