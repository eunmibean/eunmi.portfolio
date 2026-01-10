// Translations for English and Korean
const translations = {
    en: {
        // Header
        header: {
            title: "Emily (Eunmi) Kong | An initiative-driven software engineer",
            name: "Emily (Eunmi) Kong",
            subtitle: "Software Engineer — JAVA & Driven by curiosity, shaped by collaboration, and always building what matters.",
            location: "Vancouver, Canada (planning move)"
        },
        // Summary Section
        summary: {
            subtitle: "4+ years experience & Open to Work",
            content: `Backend engineer who owned a Point Reward Service serving the three major telecom carriers (SKT, KT, LG), 
                    designing event-driven architectures to decouple user experience from external settlement systems and ensure reliability at scale.`
        },
        // Key Skills
        keySkills: {
            title: "Key Skills",
            skill1: {
                title: "System Design & Architecture",
                meta: "Ability to design resilient backend systems under real-world constraints, separating user experience from asynchronous and failure-prone processes.",
                bullets: [
                    "Designed an event-driven architecture using Spring Application Events to decouple user point transactions from external settlement systems.",
                    "Applied a DB-based Transactional Outbox pattern with batch processing in a network-restricted environment where message brokers were not feasible.",
                    "Separated synchronous user-facing logic from asynchronous settlement, retry, and reconciliation processes to improve system resilience.",
                    "Redesigned expiration and settlement flows to guarantee ordering, idempotency, and consistency."
                ]
            },
            skill2: {
                title: "Reliability & Operational Excellence",
                meta: "Experience improving system stability, performance, and operational reliability through architectural changes and performance tuning.",
                bullets: [
                    "Reduced API response time from ~1250ms to ~150ms by splitting heavy transactional logic into asynchronous batch processes.",
                    "Identified and resolved database CPU spikes (up to 90%) caused by concurrent traffic by redesigning API responsibilities.",
                    "Collaborated with DBAs to analyze slow queries, optimize execution plans, and improve performance from full table scans (~16s) to indexed lookups (~0.001s).",
                    "Improved data consistency and operational accuracy by redesigning daily batch processes and retry strategies."
                ]
            },
            skill3: {
                title: "Communication & Collaboration",
                bullets: [
                    "Communicated closely with frontend engineers and PMs to translate ambiguous business requirements into clear backend contracts.",
                    "Coordinated with DBAs and operations teams to diagnose performance bottlenecks and apply production-safe improvements.",
                    "Worked directly with overseas teams in English, reducing delays caused by indirect communication."
                ]
            },
            skill4: {
                title: "Data Handling & Performance Optimization",
                bullets: [
                    "Optimized slow database queries in collaboration with DBAs, improving execution plans from full table scans to indexed range scans.",
                    "Reduced critical API latency from seconds to milliseconds through query tuning and architectural refactoring.",
                    "Applied caching strategies (Ehcache/Redis) to reduce database connections for rarely changing configuration and event data."
                ]
            }
        },
        // Experience
        experience: {
            title: "Experience",
            exp1: {
                title: "Backend Developer",
                company: "HECTO INNOVATION, Seoul, S.Korea",
                date: "09.2023 - Present (2 year and 5 month)",
                description: "Worked on multiple services, focusing on backend development and business logic implementation.",
                service1: {
                    title: "Service: Point Reward Service for the three major telecom carriers (SKT, KT, LG)",
                    bullets: [
                        `<a href='local-caching.html' class='custom-link'>Identified read-heavy, low-consistency-requirement data and implemented Ehcache-based local caching, intentionally limiting cache scope to minimize data consistency risks.</a>`,
                        `<a href="eda-case-study.html" class="custom-link"> Applied an event-driven architecture with a transactional outbox pattern to decouple user point transactions from external settlement processing.</a>`,
                        `<a href="ISMS-security.html" class="custom-link"> Strengthened backend security for ISMS compliance by implementing role-based access control, 2FA-based authentication flow, sensitive data encryption/masking, and audit log enhancements.</a>`,
                        `<a href="springboot-upgrade.html" class="custom-link"> Upgraded a legacy backend from Spring Boot 2.x to 3.5 and Java 8 to 17, addressing Jakarta EE migration, ORM compatibility changes, and shutdown/test behavior changes in production.</a>`,
                        `<a href="API-Optimization.html" class="custom-link"> Refactored a heavy account termination API by minimizing transactional scope and offloading non-critical operations to batch processing, reducing response time from ~1.25s to ~150ms and alleviating DB CPU spikes.</a>`,
                        `<a href="Performance-Optimization.html" class="custom-link">Reduced critical query latency from ~16s (full table scan) to ~1ms by redesigning indexes and aligning SQL with real production access patterns, validated through execution plan analysis.</a>`,
                        `<a href="expire-point.html" class="custom-link">Redesigned the point expiration system, resolving long-standing inconsistencies and recovering approximately ₩1B worth of expired points, improving settlement accuracy.</a>`,
                        `<a href="problem-driven-engineering.html" class="custom-link"> Identified and resolved multiple production issues by redesigning point settlement, expiration, and reconciliation flows.</a>`
                    ],
                    techStack: "Tech Stack: Java 8 & 17, Spring Boot2 & 3, MariaDB",
                },
                service2: {
                    title: "Service: Credit Card Benefits Service",
                    bullets: [
                        `Implemented unlimited pagination for event listing pages`,
                        `Configured a 10-minute session timeout for the admin system`,
                        `Introduced custom annotations to centralize and manage validation logic`,
                        `Integrated with external coupon providers and added coupon management features to the admin system`
                    ],
                    techStack: "Tech Stack: Java, Spring Boot, JPA, Thymeleaf"
                }
            },
            exp2: {
                title: "Backend Developer",
                company: "VIVANS, Seoul, S.Korea",
                date: "09.2020 - 07.2022 (1 year and 10 month)",
                description: "Built and operated an RPA platform (ARGOS RPA) delivering automated workflows for domestic and international clients.",
                bullets: [
                    `Developed RESTful APIs using Spring Boot for an RPA automation platform.`,
                    `Improved development quality through test code implementation, refactoring, and architectural enhancements.`,
                    `Containerized and deployed services using Docker and Docker Compose to streamline server operations.`,
                ],
                techStack: ""
            },
            exp3: {
                title: "APM/WAS Engineer",
                company: "UNIPOINT, Seoul, S.Korea",
                date: "02.2018 - 08.2020 (2 year and 6 month)",
                bullets: [
                    `Collaborated closely with clients and internal teams to explain analysis results and propose system-level improvements.`,
                    `Supported installation, configuration, and troubleshooting of APM solutions (Jennifer) and enterprise WAS environments (IBM WebSphere).`,
                    `Developed customer-specific Java-based custom adapters to extend APM functionality and meet unique monitoring requirements.`,
                    `Delivered customer-facing technical reports with accurate metrics and visualized charts to support performance analysis and decision-making.`
                ]
            }
        },
        // Projects
        projects: {
            title: "Projects",
            project1: {
                title: "Gongsamo Official Website",
                meta: "A platform that connects young professionals in international development and provides curated newsletters.",
                date: "05.2023 — 12.2023",
                location: "Remote",
                bullets: [
                    "Participated in building the first official website for the organization.",
                    "Crawled newsletter data using the BeautifulSoup library.",
                    "Stored data in both an RDBMS and ElasticSearch.",
                    "Scheduled shell scripts to run the Flask-based crawling API at regular intervals."
                ],
                techStack: `<b>Tech Stack:</b> Python 3.11, Flask, MySQL, ElasticSearch`
            },
            project2: {
                title: "Eat-it Server Development",
                meta: "A contactless ordering application used in restaurants and university dining halls.",
                date: "03.2023 — 09.2023",
                location: "Remote",
                bullets: [
                    "Developed APIs for restaurant owners (registration, update, and retrieval of restaurant information).",
                    "Led migration efforts for API upgrades by actively applying TDD and DDD principles."
                ],
                techStack: "<b>Tech Stack:</b> Java 17, Spring Boot 3, MariaDB, JPA"
            }
        },
        // Skills
        skills: {
            title: "Skills",
            skillsList: [
                {
                    name: "Java(8, 17)",
                    description: "Write clean and concise code using lambda expressions and the Stream API; build RESTful APIs by leveraging new Java 17 features such as records."
                },
                {
                    name: "Python",
                    description: "Collect data through web crawling and build RESTful APIs using Flask."
                },
                {
                    name: "Spring Boot",
                    description: "Develop RESTful APIs with Spring Boot and Java; integrate databases using JPA; utilize annotations effectively; follow Test-Driven Development (TDD) practices."
                },
                {
                    name: "MySQL",
                    description: "Design and create tables, write basic queries for data retrieval and manipulation, handle complex joins, identify slow queries, and perform performance tuning to optimize database efficiency."
                },
                {
                    name: "JPA / Hibernate",
                    description: "Proficient in performing basic CRUD operations (create, read, update, delete) and handling database integration."
                },
                {
                    name: "Docker",
                    description: "Build and deploy container images, configure container networks, and manage containerized environments."
                }
            ]
        },
        // Footer
        footer: {
            copyright: "© 2025 Eunmi Kong. All rights reserved."
        }
    },
    ko: {
        // Header
        header: {
            name: "공은미",
            subtitle: "소프트웨어 엔지니어 — JAVA & 호기심으로 움직이고, 협업으로 성장하며, 의미 있는 것을 만들어갑니다.",
            location: "밴쿠버, 캐나다 (이주 예정)"
        },
        // Summary Section
        summary: {
            subtitle: "3년 이상의 경력 & 구직 중",
            content: `저는 영감을 받는 순간 바로 행동하는 사람입니다. <br><br>

정부 지원 부트캠프와 멘토링 프로그램을 통해 강력한 학습 능력을 키웠고, 국제 모임 참여와 스터디 그룹 운영을 통해 협업과 리더십을 발전시켰습니다.
제가 개발에 깊이 끌리는 이유는 제가 만든 것들이 다른 사람들과 공유되고 의미 있고 가치 있는 서비스로 발전할 수 있기 때문입니다.
다양한 프로젝트를 통해 지속적으로 주도성을 발휘하고 도전하며 성장해왔습니다. <br><br>

2년간 API/WAS 엔지니어로 분석, 튜닝, 설계 및 배포를 담당했고, 또 다른 2년간 개발자로서 RPA 자동화 솔루션을 위한 API 서비스를 구축, 배포, 운영하면서
팀이 효율적인 배포 문화를 구축하도록 도왔습니다. 또한 깨끗한 코드와 고품질 문서 작성을 통해 다른 사람들과 효과적으로 소통하는 것을 중요하게 생각합니다. <br><br>

소프트웨어 개발에 대한 저의 여정은 새로운 곳을 탐험하는 것과 같은 열정과 모험심으로 계속되고 있습니다—항상 도전하고 앞으로 나아가고 있습니다.`
        },
        // Key Skills
        keySkills: {
            title: "핵심 역량",
            // skill1: {
            //     title: "기술 문서화",
            //     meta: "지식과 정보를 타인과 나 자신에게 효과적으로 전달하는 명확한 문서를 작성하는 능력.",
            //     bullets: [
            //         "스크린샷과 예제를 활용하여 API 문서, 위키 페이지, 히스토리 로그를 작성했습니다.",
            //         "반복되는 문제를 빠르게 해결하기 위한 트러블슈팅 노트를 작성했습니다.",
            //         "알고리즘과 시스템 워크플로우를 시각화하여 복잡한 개념을 쉽게 이해할 수 있도록 했습니다."
            //     ]
            // },
            skill2: {
                title: "커뮤니케이션 스킬",
                meta: "다양한 연령, 언어, 역할에 걸쳐 편안하게 소통하고 원활한 상호작용을 통해 요구사항에 대응하는 능력.",
                bullets: [
                    "사내 영화 동아리를 조직하여 다양한 직급 간의 소통 채널을 만들고 편안한 토론을 가능하게 했습니다.",
                    "프론트엔드 개발자 및 PM과 직접 소통하여 요구사항을 정확하게 이해했습니다.",
                    "해외 팀 및 글로벌 고객과 직접 영어로 소통하여 불필요한 번역 시간을 줄였습니다."
                ]
            },
            skill3: {
                title: "데이터 처리 및 성능 최적화",
                meta: "데이터를 분석하고 시스템을 개선하여 더 유연하고 효율적인 서비스를 제공하는 능력.",
                bullets: [
                    "MySQL에서 Elasticsearch로 마이그레이션하여 쿼리 속도와 검색 효율성을 개선했습니다.",
                    "10초 이상 걸리던 API 쿼리를 튜닝하여 응답 시간을 크게 단축했습니다.",
                    "Redis를 사용하여 비밀번호 실패 시도를 제한하고 데이터베이스 부하를 줄이는 전략을 설계했습니다."
                ]
            },
            skill4: {
                title: "서버 구축 및 운영",
                meta: "Docker를 사용하여 온프레미스 및 SaaS 환경에서 서버를 구축하고 운영하는 능력.",
                bullets: [
                    "nginx와 Docker를 사용하여 API 테스트 서버를 구축하고 관리했습니다.",
                    "버전 관리 및 배포를 위해 Docker 저장소에 API 서버 이미지를 저장했습니다.",
                    "사용자 경험과 피드백을 수집하기 위해 Google Cloud에 개인 프로젝트를 배포했습니다."
                ]
            },
            skill5: {
                title: "개발 환경 개선",
                meta: "더 효율적인 개발을 위해 워크플로우와 유지보수성을 향상시키는 능력.",
                bullets: [
                    "Clean Code 스터디 그룹에서 얻은 통찰력을 실제 코드베이스 리팩토링에 적용했습니다.",
                    "기존 API에 테스트 코드를 도입하고 Rest Docs를 사용하여 필수 테스트 커버리지를 홍보했습니다.",
                    "Git Flow 브랜치 전략을 구현하여 혼란을 줄이고 버전 히스토리를 체계적으로 유지했습니다."
                ]
            }
        },
        // Experience
        experience: {
            title: "경력",
            exp1: {
                title: "백엔드 개발자",
                company: "헥토이노베이션, 서울, 대한민국",
                date: "2023.09 - 현재 (2년 3개월)",
                description: `- 아키텍처 재설계 및 상세 모니터링과 EDA 구현을 통해 리워드 시스템을 개선했습니다. <br>
- Spring Boot를 버전 2.x에서 3.3.0으로 업그레이드하고 호환성 문제를 해결했습니다. <br>
- 스레드 풀을 사용한 멀티스레드 처리 구현과 관리자 대시보드를 통한 스케줄링 자동화로 푸시 알림 성능을 개선했습니다. <br>
- 캐싱 전략 적용 및 대형 테이블 재인덱싱을 통해 데이터베이스 부하와 연결 사용량을 줄이고 쿼리 성능을 최적화했습니다.`
            },
            exp2: {
                title: "백엔드 개발자",
                company: "비반스, 서울, 대한민국",
                date: "2020.09 - 2022.07 (1년 10개월)",
                description: `- Spring Boot를 사용하여 Restful API를 개발했습니다. <br>
- 프론트엔드 개발자 및 다른 팀과 협력하여 목표를 설정하고 코드를 설계했습니다. <br>
- Docker 및 Docker-compose를 사용하여 서버에 배포했습니다.`
            },
            exp3: {
                title: "APM/WAS 엔지니어",
                company: "유니포인트, 서울, 대한민국",
                date: "2018.02 - 2020.08 (2년 6개월)",
                description: `- 차트와 정확한 데이터를 사용하여 고객용 기술 보고서를 작성했습니다. <br>
- 고객 및 동료와 분석 결과에 대해 소통했습니다. <br>
- APM 제품(Jennifer) 및 WAS(IBM Websphere)의 설치 및 트러블슈팅을 지원했습니다. <br>
- 고객 요청에 따라 Java를 사용하여 커스텀 어댑터를 개발했습니다.`
            }
        },
        // Projects
        projects: {
            title: "프로젝트",
            project1: {
                title: "공사모 공식 웹사이트",
                meta: "국제개발 분야의 젊은 전문가들을 연결하고 큐레이션된 뉴스레터를 제공하는 플랫폼.",
                date: "2023.05 — 2023.12",
                location: "원격",
                bullets: [
                    "조직의 첫 공식 웹사이트 구축에 참여했습니다.",
                    "BeautifulSoup 라이브러리를 사용하여 뉴스레터 데이터를 크롤링했습니다.",
                    "RDBMS와 ElasticSearch 모두에 데이터를 저장했습니다.",
                    "정기적으로 Flask 기반 크롤링 API를 실행하도록 셸 스크립트를 예약했습니다."
                ],
                techStack: "기술 스택:"
            },
            project2: {
                title: "Eat-it 서버 개발",
                meta: "레스토랑 및 대학 식당에서 사용되는 비접촉 주문 애플리케이션.",
                date: "2023.03 — 2023.09",
                location: "원격",
                bullets: [
                    "레스토랑 오너를 위한 API를 개발했습니다(레스토랑 정보 등록, 업데이트 및 조회).",
                    "TDD와 DDD 원칙을 적극적으로 적용하여 API 업그레이드를 위한 마이그레이션을 주도했습니다."
                ],
                techStack: "기술 스택:"
            }
        },
        // Skills
        skills: {
            title: "기술 스택",
            skillsList: [
                {
                    name: "Java(8, 17)",
                    description: "람다 표현식과 Stream API를 사용하여 깔끔하고 간결한 코드를 작성하고, record와 같은 새로운 Java 17 기능을 활용하여 RESTful API를 구축합니다."
                },
                {
                    name: "Python",
                    description: "웹 크롤링을 통해 데이터를 수집하고 Flask를 사용하여 RESTful API를 구축합니다."
                },
                {
                    name: "Spring Boot",
                    description: "Spring Boot와 Java로 RESTful API를 개발하고, JPA를 사용하여 데이터베이스를 통합하며, 어노테이션을 효과적으로 활용하고, 테스트 주도 개발(TDD) 방법론을 따릅니다."
                },
                {
                    name: "MySQL",
                    description: "테이블을 설계 및 생성하고, 데이터 검색 및 조작을 위한 기본 쿼리를 작성하며, 복잡한 조인을 처리하고, 느린 쿼리를 식별하며, 성능 튜닝을 수행하여 데이터베이스 효율성을 최적화합니다."
                },
                {
                    name: "JPA / Hibernate",
                    description: "기본 CRUD 작업(생성, 읽기, 업데이트, 삭제)을 수행하고 데이터베이스 통합을 처리하는 데 능숙합니다."
                },
                {
                    name: "Docker",
                    description: "컨테이너 이미지를 빌드 및 배포하고, 컨테이너 네트워크를 구성하며, 컨테이너화된 환경을 관리합니다."
                }
            ]
        },
        // Footer
        footer: {
            copyright: "© 2025 공은미. All rights reserved."
        }
    }
};

// Current language (default: English)
let currentLanguage = 'en';

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Set language
function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ko') {
        console.error('Invalid language. Use "en" or "ko".');
        return;
    }
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
}

// Get translation
function getTranslation(path) {
    const keys = path.split('.');
    let value = translations[currentLanguage];

    for (const key of keys) {
        if (value && typeof value === 'object') {
            value = value[key];
        } else {
            return path; // Return the path if translation not found
        }
    }

    return value || path;
}

// Initialize language from localStorage
function initLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ko')) {
        currentLanguage = savedLanguage;
    }
}
