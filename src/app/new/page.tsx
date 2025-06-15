'use client';

import { useEffect } from 'react';

export default function NewHome() {
  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Header background change on scroll
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 100) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 py-4 transition-all duration-300">
        <nav className="nav max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="logo text-3xl font-black bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            0.9%
          </div>
          <ul className="nav-links hidden md:flex gap-8">
            <li><a href="#about" className="text-gray-800 hover:text-indigo-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full">회사소개</a></li>
            <li><a href="#capabilities" className="text-gray-800 hover:text-indigo-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full">핵심역량</a></li>
            <li><a href="#business" className="text-gray-800 hover:text-indigo-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full">사업분야</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-indigo-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full">연락처</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"white\" opacity=\"0.15\"/><circle cx=\"20\" cy=\"80\" r=\"0.5\" fill=\"white\" opacity=\"0.15\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')] animate-float"></div>
        <div className="hero-content max-w-7xl mx-auto px-8 text-white z-10 relative">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            혁신을 현실로 만드는<br />통찰의 힘
          </h1>
          <p className="text-2xl md:text-3xl mb-8 opacity-90 font-light">
            창의적 아이디어의 가치를 발견하고,<br />세상을 변화시키는 실천적 파트너
          </p>
          <p className="text-xl italic mb-2 opacity-80">
            &ldquo;인간의 역사는 0.1%의 창의적인 인간과<br />0.9%의 통찰적인 인간이 이끌어왔다.&rdquo;
          </p>
          <p className="text-lg opacity-70 mb-12">- Jeremy Rifkin</p>
          <a href="#about" className="inline-block px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            자세히 알아보기
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent fade-in">
            0.9%와 함께하는 혁신
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300 fade-in">
              <p className="text-lg text-gray-600 leading-relaxed">
                주식회사 0.9%는 창의적 아이디어의 가치를 알아보고, 이를 실현·확산시키는 연결자이자 실천자로서의 역할을 수행합니다. 우리는 문제의 본질을 꿰뚫어보고, 새로운 해결책을 제시하며, 미래를 예측하고, 조직과 사회의 변화를 주도합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300 fade-in">
              <p className="text-lg text-gray-600 leading-relaxed">
                컨설팅부터 직간접 투자를 넘어, 때로는 사업이해관계자로서 비즈니스 모델 개발 및 운영에 직접 참여합니다. 변화에 대응하고, 빠른 사업전개를 통해 보다 나은 가치를 만들어가는 것을 목표로 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="capabilities py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent fade-in">
            핵심 역량
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔍",
                title: "깊이 있는 관찰력",
                description: "복잡한 현상 속에서 본질을 파악하고 숨겨진 기회를 발견합니다."
              },
              {
                icon: "💡",
                title: "비판적 사고",
                description: "기존 패러다임을 뛰어넘는 혁신적 사고로 새로운 관점을 제시합니다."
              },
              {
                icon: "🎯",
                title: "감각적 지능",
                description: "트렌드를 예측하고 시장의 변화를 민감하게 감지합니다."
              },
              {
                icon: "🤝",
                title: "협업 능력",
                description: "다양한 이해관계자들과의 시너지를 통해 최적의 솔루션을 창출합니다."
              }
            ].map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 fade-in">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold mb-4">{capability.title}</h3>
                <p className="text-white/90">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="business py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent fade-in">
            사업 분야
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI 사업부",
                subtitle: "인공지능으로 미래를 설계합니다",
                description: "기업의 생산성과 효율성을 높이는 AI 솔루션을 제공합니다.",
                features: [
                  "AI R&D 및 상용화 도구 연구",
                  "에이전트 AI 사업화 모델 개발",
                  "멀티모달 AI 분야 연구",
                  "커스터마이징 MCP 설계 및 컨설팅",
                  "AI 라이브 커머스 전용 엔진 운영",
                  "글로벌 마켓 진출 지원"
                ]
              },
              {
                title: "IP 사업부",
                subtitle: "창작물의 가치를 극대화합니다",
                description: "캐릭터 기반 콘텐츠의 기획부터 사업화까지 토탈 솔루션을 제공합니다.",
                features: [
                  "트렌디한 캐릭터 기획 및 개발",
                  "다양한 형태의 애니메이션 제작",
                  "지식재산권 등록 컨설팅",
                  "마케팅 및 라이센싱 에이전시",
                  "정부지원사업 컨소시업 협업",
                  "사업화 컨설팅"
                ]
              },
              {
                title: "MD 사업부",
                subtitle: "상품화부터 유통까지 원스톱 서비스",
                description: "캐릭터 상품의 기획, 제작, 유통, 마케팅을 통합 관리합니다.",
                features: [
                  "다양한 카테고리 상품 ODM",
                  "국내외 생산공장 네트워크 활용",
                  "온·오프라인 유통채널 영업",
                  "글로벌 유통 파트너 연계",
                  "통합 마케팅 커뮤니케이션",
                  "3PL 서비스 대행"
                ]
              },
              {
                title: "컨설팅 & 투자",
                subtitle: "0.9% 네트워크의 핵심",
                description: "수익보다 네트워크 강화를 통한 생태계 구축에 집중합니다.",
                features: [
                  "전략 컨설팅 서비스",
                  "투자유치 연계 지원",
                  "R&D 프로젝트 기획",
                  "정부지원사업 컨소시업 구성",
                  "파트너사 네트워크 활용",
                  "통합 솔루션 제공"
                ]
              }
            ].map((business, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 fade-in">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8">
                  <h3 className="text-2xl font-bold mb-2">{business.title}</h3>
                  <p className="text-white/90">{business.subtitle}</p>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{business.description}</p>
                  <ul className="space-y-4">
                    {business.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-indigo-500 mr-2">▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black text-center mb-16 text-white fade-in">
            연락처
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "본사",
                content: "서울특별시 구로구 디지털로29길38, 201\n(구로동, 에이스테크노타워3차)"
              },
              {
                title: "연구실",
                content: "서울특별시 강서구 마곡중앙4로 66, 7층"
              },
              {
                title: "문의",
                content: "Email: 09zpnp@naver.com\n\n혁신적인 아이디어와 프로젝트를\n함께 만들어가고 싶다면\n언제든 연락해 주세요."
              }
            ].map((contact, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 fade-in">
                <h3 className="text-xl font-bold mb-4">{contact.title}</h3>
                <p className="text-white/90 whitespace-pre-line">{contact.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-900 text-white py-12">
        <div className="container max-w-7xl mx-auto px-8 text-center">
          <div className="text-3xl font-black mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            0.9%
          </div>
          <p>© 2024 주식회사 영점구퍼센트. All rights reserved.</p>
          <p className="mt-4 text-gray-400">
            &ldquo;빠르게 변화하는 세상을 두려워하기보다는 변화하지 않는 나를 두려워하자.&rdquo;
          </p>
        </div>
      </footer>
    </div>
  );
} 