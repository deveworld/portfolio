export const profile = {
    name: {
        display: "Deveworld",
        sub: "Gihyeon Sim (심기현)",
    },
    tagline: "Student Researcher · AI/ML · Backend",
    avatar: "/deveworld.png",
    bio: "고등학생 개발자이자 AI 연구자입니다. LLM, Test-Time Training, 한국어 NLP에 관심을 가지고 있으며, 오픈소스와 재현 가능한 AI 연구를 지향합니다. 백엔드부터 ML까지 다루는 풀스택 개발자이기도 합니다. (디자인 빼고요 😅)",
    links: {
        github: "https://github.com/deveworld",
        linkedin: "https://linkedin.com/in/deveworld",
        orcid: "https://orcid.org/0000-0001-7372-9423",
        email: "world@worldsw.dev",
        blog: "https://blog.worldsw.dev",
    },
};

export const projects = [
    // Featured (Research) - Priority Order
    {
        title: "PonderTTT",
        subtitle: "Adaptive Budget-Aware Test-Time Training",
        period: "Nov 2025 - Present",
        description: "코드 생성 모델을 위한 적응형 추론 시간 학습(TTT) 프레임워크. JAX/Flax NNX 구현, 82-89% Oracle Recovery 달성.",
        highlights: ["82-89% Oracle Recovery", "JAX/Flax NNX", "arXiv Preprint"],
        featured: true,
        links: {
            page: "https://ponderttt.worldsw.dev",
            github: "https://github.com/deveworld/ponderTTT",
            paper: "https://ponderttt.worldsw.dev/PonderTTT_v1_Preprint.pdf",
        },
    },
    {
        title: "BitNet-TT",
        subtitle: "BitNet LLM on Tenstorrent Hardware",
        period: "Dec 2025 - Present",
        description: "Tenstorrent Blackhole p150a에서 BitNet (1-bit LLM) 구현. HuggingFace 호환, KV-Cache 지원, HiFi2 Compute Kernel 활용.",
        highlights: ["Tenstorrent Korea OSS", "0.99+ Correlation", "BFP8 Matmul"],
        featured: true,
        links: {
            github: "https://github.com/deveworld/bitnet-tt",
        },
    },
    {
        title: "KorT",
        subtitle: "Korean Translation Benchmark",
        period: "Apr 2025 - Present",
        description: "LLM-as-a-judge 방식의 한국어-다국어 번역 품질 평가 벤치마크. BLEU의 한계를 극복한 LLM 기반 평가 시스템.",
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
        subtitle: "On-Device Translation Model",
        period: "May 2024 - Dec 2024",
        description: "Google Gemma 기반 경량 한영 양방향 번역 모델. 일반 소비자 GPU에서 실시간 번역 가능하도록 최적화.",
        highlights: ["Gemma 2B 기반", "60+ HF Downloads", "Google TRC 지원"],
        featured: true,
        links: {
            huggingface: "https://huggingface.co/DevWorld/Gemago-2b",
            github: "https://github.com/deveworld/Gemago",
        },
    },
    // Hackathon
    {
        title: "PaperPath",
        subtitle: "AI 기반 맞춤형 논문 학습 경로 생성기",
        period: "Dec 2025",
        description: "논문의 선행 지식을 분석해 개인화된 학습 경로를 생성하는 AI 도구. Instruct.KR x Sionic 2025 해커톤 3등 수상.",
        highlights: ["🥉 Hackathon 3rd", "D3.js 시각화", "MCP Agent"],
        featured: false,
        links: {
            github: "https://github.com/deveworld/paperpath",
        },
    },
    // Other Projects
    {
        title: "Gemma-EasyLM",
        subtitle: "TPU에서 Gemma 파인튜닝",
        period: "2024",
        description: "EasyLM 프레임워크에 Google Gemma 모델을 통합하여 TPU에서 파인튜닝. TPUv4-64 포드 슬라이스 분산 학습 지원.",
        highlights: ["TPU Pods", "JAX/Flax", "HuggingFace"],
        featured: false,
        links: {
            github: "https://github.com/deveworld/Gemma-EasyLM",
        },
    },
    {
        title: "ArchKing",
        subtitle: "Minecraft 서버 플러그인",
        period: "2023",
        description: "유튜버 '건축대장'의 콘텐츠를 위한 Minecraft 서버 플러그인. Paper/Purpur 호환.",
        highlights: ["5 GitHub Stars", "Kotlin", "Archived"],
        featured: false,
        links: {
            github: "https://github.com/deveworld/ArchKing",
        },
    },
    {
        title: "ButterLib",
        subtitle: "Minecraft 플러그인 라이브러리",
        period: "2023",
        description: "Kotlin 기반 Minecraft 플러그인 개발 라이브러리. JitPack 배포.",
        highlights: ["Kotlin", "JitPack"],
        featured: false,
        links: {
            github: "https://github.com/deveworld/ButterLib",
        },
    },
    {
        title: "rocket",
        subtitle: "로켓 시뮬레이션",
        period: "2023",
        description: "Python 기반 로켓 물리 시뮬레이션 프로젝트.",
        highlights: ["Python", "Physics"],
        featured: false,
        links: {
            github: "https://github.com/deveworld/rocket",
        },
    },
    {
        title: "SFML-Physics",
        subtitle: "물리 시뮬레이션",
        period: "2022",
        description: "C++과 SFML을 활용한 물리 시뮬레이션 프로젝트.",
        highlights: ["C++", "SFML", "CMake"],
        featured: false,
        links: {
            github: "https://github.com/deveworld/SFML-Physics",
        },
    },
];

export const presentations = [
    {
        title: "고등학생이 만들어 본 LLM-as-a-judge 번역 벤치마크 리더보드",
        event: "PyCon Korea 2025",
        type: "Conference Talk",
        link: "https://www.youtube.com/watch?v=oIIgDzVz_IM",
    },
];

export const media = [
    {
        title: "파파고 vs 구글, AI가 보기엔 누가 더 번역을 잘할까?",
        publisher: "요즘IT (Wishket)",
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
        description: "uv를 활용한 Python 패키지 설치 속도 개선",
    },
    {
        repo: "seleniumbase/SeleniumBase",
        title: "Compatibility for geckodriver aarch64",
        type: "PR",
        link: "https://github.com/seleniumbase/SeleniumBase/pull/3154",
        description: "aarch64 아키텍처 호환성 추가",
    },
    {
        repo: "martiniifun/pyhwpx",
        title: "subprocess 예외 처리 개선",
        type: "PR",
        link: "https://github.com/martiniifun/pyhwpx/pull/10",
        description: "가상환경에서의 pip 호출 예외 처리",
    },
];

export const freelance = {
    platform: "크몽",
    period: "2023 - Present",
    services: ["AI/LLM 연동", "웹 크롤링", "자동화 개발"],
    stats: {
        projects: 16,
        satisfaction: "100%",
        rating: "5.0/5.0",
    },
    link: "https://kmong.com/gig/597379",
};

export const achievements = [
    {
        title: "Instruct.KR x Sionic 2025 해커톤",
        award: "3등",
        project: "PaperPath",
        year: "2025",
    },
];

export const grants = [
    {
        year: "2024-2025",
        organization: "Google TPU Research Cloud",
        description: "TPU 리소스 지원",
    },
    {
        year: "2024",
        organization: "Anthropic",
        description: "API 크레딧 지원 (KorT 평가용)",
    },
    {
        year: "2025",
        organization: "Gcube",
        description: "RTX 5090/4090/5080 GPU 체험 지원",
    },
];
