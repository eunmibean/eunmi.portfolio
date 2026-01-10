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
                    "Worked directly with overseas teams in English, reducing delays caused by indirect communication.",
                    "Initiated an internal film club, creating a space for open communication and informal idea exchange across different roles and seniority levels."
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
            title: "공은미 | 주도적으로 움직이는 소프트웨어 엔지니어",
            name: "공은미 (Emily Kong)",
            subtitle: "소프트웨어 엔지니어 — JAVA & 호기심으로 움직이고, 협업으로 성장하며, 의미 있는 것을 만들어갑니다.",
            location: "밴쿠버, 캐나다 (이주 예정)"
        },
        // Summary Section
        summary: {
            subtitle: "4년 이상의 경력 & 구직 중",
            content: `통신사(SKT, KT, LG)의 본인인증앱(PASS)에서 PASS 머니 포인트 서비스를 담당한 백엔드 엔지니어로 사용자 경험과 외부 정산 시스템을 분리하는 이벤트 주도 아키텍처를 설계하여 대규모 환경에서 안정성을 확보했습니다.`
        },
        // Key Skills
        keySkills: {
            title: "핵심 역량",
            skill1: {
                title: "시스템 설계 및 아키텍처",
                meta: "사용자 경험을 비동기 및 장애 가능성이 있는 프로세스로부터 분리하는 탄력적인 백엔드 시스템을 설계",
                bullets: [
                    "Spring Application Events를 사용한 이벤트 주도 아키텍처를 설계하여 사용자 포인트 트랜잭션을 외부 정산 시스템으로부터 분리",
                    "네트워크 제한 환경에서 DB 기반 Transactional Outbox 패턴과 배치 처리를 적용",
                    "사용자의 서비스 경험을 비동기 정산, 재시도 및 조정 프로세스로부터 분리하여 시스템 복원력을 개선",
                    "순서 보장, 멱등성 및 일관성을 보장하도록 만료 및 정산 플로우를 재설계"
                ]
            },
            skill2: {
                title: "안정성 및 운영 우수성",
                meta: "아키텍처 변경과 성능 튜닝을 통해 시스템 안정성, 성능 및 운영 신뢰성을 개선",
                bullets: [
                    "무거운 트랜잭션 로직을 비동기 배치 프로세스로 분리하여 API 응답 시간을 약1250ms에서 약150ms로 단축",
                    "API를 재설계하여 동시 트래픽으로 인한 데이터베이스 CPU 스파이크(최대 90%)를 식별",
                    "DBA와 협력하여 느린 쿼리를 분석하고 실행 계획을 최적화하여 전체 테이블 스캔(약16초)에서 인덱스 조회(약0.001초)로 성능을 개선",
                    "일일 배치 프로세스와 재시도 전략을 재설계하여 데이터 일관성과 운영 정확도를 개선"
                ]
            },
            skill3: {
                title: "커뮤니케이션 및 협업",
                bullets: [
                    "프론트엔드 엔지니어 및 PM과 긴밀하게 소통하여 모호한 비즈니스 요구사항을 명확하게 소통",
                    "DBA 및 운영팀과 협력하여 성능 병목 현상을 진단하고 프로덕션에 안전한 개선 사항을 적용",
                    "해외 팀과 직접 영어로 소통하여 간접 커뮤니케이션으로 인한 지연 감소",
                    "사내 영화소모임을 추진하여 다양한 직급과의 소통의 창구가 되어 편안한 의견 교환의 장 마련"
                ]
            },
            skill4: {
                title: "데이터 처리 및 성능 최적화",
                bullets: [
                    "DBA와 협력하여 느린 데이터베이스 쿼리를 최적화하고 전체 테이블 스캔에서 인덱스 범위 스캔으로 개선",
                    "쿼리 튜닝과 아키텍처 리팩토링을 통해 중요 API 지연 시간을 초 단위에서 밀리초 단위로 단축",
                    "거의 변경되지 않는 설정 및 이벤트 데이터에 대해 캐싱 전략(Ehcache/Redis)을 적용하여 DB 연동 횟수 감소"
                ]
            }
        },
        // Experience
        experience: {
            title: "경력",
            exp1: {
                title: "백엔드 개발자",
                company: "헥토이노베이션, 서울, 대한민국",
                date: "2023.09 - 현재 (2년 5개월)",
                description: "여러 서비스에서 백엔드 개발 및 비즈니스 로직 구현에 집중하여 작업했습니다.",
                service1: {
                    title: "서비스: 통신사(SKT, KT, LG) PASS 머니 포인트 서비스",
                    bullets: [
                        `<a href='local-caching.html' class='custom-link'>읽기 빈도가 높고 강한 일관성이 필요하지 않은 데이터를 선별해 Ehcache 기반 로컬 캐싱을 적용함으로써 DB 커넥션 사용량을 감소</a>`,
                        `<a href="eda-case-study.html" class="custom-link"> Transactional Outbox 패턴을 사용한 이벤트 주도 아키텍처를 적용하여 사용자 포인트 트랜잭션을 외부 정산 처리로부터 분리</a>`,
                        `<a href="ISMS-security.html" class="custom-link"> 역할 기반 접근 제어, 2FA 기반 인증 플로우, 민감 데이터 암호화/마스킹 및 감사 로그 강화를 구현하여 ISMS 준수를 위한 백엔드 보안을 강화</a>`,
                        `<a href="springboot-upgrade.html" class="custom-link"> 레거시 백엔드를 Spring Boot 2.x에서 3.5로, Java 8에서 17로 업그레이드하고 Jakarta EE 마이그레이션, ORM 호환성 변경 및 프로덕션의 종료/테스트 동작 변경 사항을 처리.</a>`,
                        `<a href="API-Optimization.html" class="custom-link"> 트랜잭션 범위를 최소화하고 중요하지 않은 작업을 배치 처리로 오프로드하여 무거운 계정 종료 API를 리팩토링하고 응답 시간을 약1.25초에서 약150ms로 단축하여 DB CPU 스파이크를 완화</a>`,
                        `<a href="Performance-Optimization.html" class="custom-link">인덱스를 재설계하고 SQL을 실제 프로덕션 액세스 패턴에 맞춰 중요 쿼리 지연 시간을 약16초(전체 테이블 스캔)에서 약1ms로 단축하고 실행 계획 분석을 통해 검증</a>`,
                        `<a href="expire-point.html" class="custom-link">포인트 만료 시스템을 재설계하여 오래된 불일치를 해결하고 약 10억 원 상당의 만료 포인트를 회수하여 정산 정확도를 개선</a>`,
                        `<a href="problem-driven-engineering.html" class="custom-link"> 포인트 정산, 만료 및 조정 플로우를 재설계하여 여러 프로덕션 문제를 식별하고 해결</a>`
                    ],
                    techStack: "기술 스택: Java 8 & 17, Spring Boot2 & 3, MariaDB",
                },
                service2: {
                    title: "서비스: 더쎈카드 신용카드 혜택 서비스",
                    bullets: [
                        `이벤트 목록 페이지에 무한 페이지네이션을 구현`,
                        `관리자 시스템에 10분 세션 타임아웃을 구성`,
                        `검증 로직을 중앙 집중화하고 관리하기 위해 커스텀 어노테이션을 도입`,
                        `외부 쿠폰 제공업체와 통합하고 관리자 시스템에 쿠폰 관리 기능을 추가`
                    ],
                    techStack: "기술 스택: Java, Spring Boot, JPA, Thymeleaf"
                }
            },
            exp2: {
                title: "백엔드 개발자",
                company: "비반스, 서울, 대한민국",
                date: "2020.09 - 2022.07 (1년 10개월)",
                description: "국내외 클라이언트를 위한 자동화 워크플로우를 제공하는 RPA 플랫폼(ARGOS RPA)을 구축하고 운영",
                bullets: [
                    `RPA 자동화 플랫폼을 위해 Spring Boot를 사용하여 RESTful API를 개발`,
                    `테스트 코드 구현, 리팩토링 및 아키텍처 개선을 통해 개발 품질을 향상`,
                    `Docker 및 Docker Compose를 사용하여 서비스를 컨테이너화하고 배포하여 서버 운영을 간소화`,
                ],
                techStack: ""
            },
            exp3: {
                title: "APM/WAS 엔지니어",
                company: "유니포인트, 서울, 대한민국",
                date: "2018.02 - 2020.08 (2년 6개월)",
                bullets: [
                    `고객 및 내부 팀과 협력하여 분석 결과를 설명하고 시스템 수준 개선 사항을 제안`,
                    `APM 솔루션(Jennifer) 및 엔터프라이즈 WAS 환경(IBM WebSphere)의 설치, 구성 및 문제 해결을 지원`,
                    `APM 기능을 확장하고 고유한 모니터링 요구 사항을 충족하기 위해 고객별 Java 기반 커스텀 어댑터를 개발`,
                    `정확한 메트릭과 시각화된 차트가 포함된 고객 대면 기술 보고서를 제공하여 성능 분석 및 의사 결정을 지원`
                ]
            }
        },
        // Projects
        projects: {
            title: "프로젝트",
            project1: {
                title: "사회적협동조합 공적인사적모임 공식 웹사이트",
                meta: "국제개발 분야의 젊은 전문가들을 연결하고 큐레이션된 뉴스레터를 제공하는 플랫폼",
                date: "2023.05 — 2023.12",
                location: "Remote",
                bullets: [
                    "첫 공식 웹사이트 구축에 참여",
                    "BeautifulSoup 라이브러리를 사용하여 기존에 발행된 뉴스레터 데이터를 크롤링",
                    "RDBMS와 ElasticSearch 모두에 데이터를 저장",
                    "정기적으로 Flask 기반 크롤링 API를 실행하도록 셸 스크립트를 설계"
                ],
                techStack: `<b>기술 스택:</b> Python 3.11, Flask, MySQL, ElasticSearch`
            },
            project2: {
                title: "Eat-it 서버 개발",
                meta: "식당 및 대학 식당에서 사용되는 비접촉 주문 애플리케이션",
                date: "2023.03 — 2023.09",
                location: "Remote",
                bullets: [
                    "식당 사장님를 위한 API를 개발(레스토랑 정보 등록, 업데이트 및 조회).",
                    "TDD와 DDD 원칙을 적극적으로 적용하여 API 업그레이드를 위한 마이그레이션을 주도"
                ],
                techStack: "<b>기술 스택:</b> Java 17, Spring Boot 3, MariaDB, JPA"
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
