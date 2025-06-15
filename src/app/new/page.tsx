"use client";

import { useEffect } from 'react';

export default function NewPage() {
  useEffect(() => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        const target = href ? document.querySelector(href) : null;
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Header background change on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        if (header) {
          (header as HTMLElement).style.background = 'rgba(255, 255, 255, 0.98)';
          (header as HTMLElement).style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
      } else {
        if (header) {
          (header as HTMLElement).style.background = 'rgba(255, 255, 255, 0.95)';
          (header as HTMLElement).style.boxShadow = 'none';
        }
      }
    });
  }, []);

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="header fixed top-0 w-full bg-white/95 backdrop-blur z-50 py-4 transition-all">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-8">
          <div className="text-2xl font-black bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent select-none">0.9%</div>
          <ul className="hidden md:flex gap-8 list-none">
            <li><a href="#about" className="hover:text-indigo-500 transition-colors">회사소개</a></li>
            <li><a href="#capabilities" className="hover:text-indigo-500 transition-colors">핵심역량</a></li>
            <li><a href="#business" className="hover:text-indigo-500 transition-colors">사업분야</a></li>
            <li><a href="#contact" className="hover:text-indigo-500 transition-colors">연락처</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-500 to-teal-400">
        <div className="absolute inset-0 w-[200%] h-[200%] opacity-30 pointer-events-none" style={{background: `url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"white\" opacity=\"0.15\"/><circle cx=\"20\" cy=\"80\" r=\"0.5\" fill=\"white\" opacity=\"0.15\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')`, animation: 'float 20s ease-in-out infinite'}}></div>
        <div className="max-w-screen-xl mx-auto px-8 z-10 relative text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">주식회사 영점구퍼센트<br />혁신을 현실로 만드는 통찰의 힘</h1>
          <p className="text-xl md:text-2xl mb-6 font-light opacity-90">창의적 아이디어의 가치를 발견하고,<br />세상을 변화시키는 실천적 파트너</p>
          <p className="text-base md:text-lg italic mb-1 opacity-80">&ldquo;인간의 역사는 0.1%의 창의적인 인간과<br />0.9%의 통찰적인 인간이 이끌어왔다.&rdquo;</p>
          <p className="text-sm opacity-70 mb-8">- Jeremy Rifkin</p>
          <a href="#about" className="inline-block px-8 py-3 rounded-full font-semibold border border-white/30 bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-all">자세히 알아보기</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent fade-in">0.9%와 함께하는 혁신</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform fade-in">
              <div className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">
                주식회사 0.9%는 창의적 아이디어의 가치를 알아보고, 이를 실현·확산시키는 연결자이자 실천자로서의 역할을 수행합니다. 우리는 문제의 본질을 꿰뚫어보고, 새로운 해결책을 제시하며, 미래를 예측하고, 조직과 사회의 변화를 주도합니다.
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform fade-in">
              <div className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">
                컨설팅부터 직간접 투자를 넘어, 때로는 사업이해관계자로서 비즈니스 모델 개발 및 운영에 직접 참여합니다. 변화에 대응하고, 빠른 사업전개를 통해 보다 나은 가치를 만들어가는 것을 목표로 합니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent fade-in">핵심 역량</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-gradient-to-br from-pink-300 to-pink-500 text-white p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform fade-in">
              <div className="text-4xl mb-2">🔍</div>
              <div className="text-lg font-bold mb-2">깊이 있는 관찰력</div>
              <p>복잡한 현상 속에서 본질을 파악하고 숨겨진 기회를 발견합니다.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-cyan-300 text-white p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform fade-in">
              <div className="text-4xl mb-2">💡</div>
              <div className="text-lg font-bold mb-2">비판적 사고</div>
              <p>기존 패러다임을 뛰어넘는 혁신적 사고로 새로운 관점을 제시합니다.</p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-teal-300 text-white p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform fade-in">
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-lg font-bold mb-2">감각적 지능</div>
              <p>트렌드를 예측하고 시장의 변화를 민감하게 감지합니다.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-yellow-200 text-white p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform fade-in">
              <div className="text-4xl mb-2">🤝</div>
              <div className="text-lg font-bold mb-2">협업 능력</div>
              <p>다양한 이해관계자들과의 시너지를 통해 최적의 솔루션을 창출합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent fade-in">사업 분야</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* AI 사업부 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform fade-in">
              <div className="p-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                <div className="text-xl font-bold mb-1">AI 사업부</div>
                <div className="text-sm opacity-90">인공지능으로 미래를 설계합니다</div>
              </div>
              <div className="p-8">
                <p className="mb-4">기업의 생산성과 효율성을 높이는 AI 솔루션을 제공합니다.</p>
                <ul className="list-none mt-2">
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">AI R&D 및 상용화 도구 연구</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">에이전트 AI 사업화 모델 개발</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">멀티모달 AI 분야 연구</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">커스터마이징 MCP 설계 및 컨설팅</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">AI 라이브 커머스 전용 엔진 운영</li>
                  <li className="relative pl-6 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">글로벌 마켓 진출 지원</li>
                </ul>
              </div>
            </div>
            {/* IP 사업부 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform fade-in">
              <div className="p-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                <div className="text-xl font-bold mb-1">IP 사업부</div>
                <div className="text-sm opacity-90">창작물의 가치를 극대화합니다</div>
              </div>
              <div className="p-8">
                <p className="mb-4">캐릭터 기반 콘텐츠의 기획부터 사업화까지 토탈 솔루션을 제공합니다.</p>
                <ul className="list-none mt-2">
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">트렌디한 캐릭터 기획 및 개발</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">다양한 형태의 애니메이션 제작</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">지식재산권 등록 컨설팅</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">마케팅 및 라이센싱 에이전시</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">정부지원사업 컨소시업 협업</li>
                  <li className="relative pl-6 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">사업화 컨설팅</li>
                </ul>
              </div>
            </div>
            {/* MD 사업부 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform fade-in">
              <div className="p-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                <div className="text-xl font-bold mb-1">MD 사업부</div>
                <div className="text-sm opacity-90">상품화부터 유통까지 원스톱 서비스</div>
              </div>
              <div className="p-8">
                <p className="mb-4">캐릭터 상품의 기획, 제작, 유통, 마케팅을 통합 관리합니다.</p>
                <ul className="list-none mt-2">
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">다양한 카테고리 상품 ODM</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">국내외 생산공장 네트워크 활용</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">온·오프라인 유통채널 영업</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">글로벌 유통 파트너 연계</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">통합 마케팅 커뮤니케이션</li>
                  <li className="relative pl-6 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">3PL 서비스 대행</li>
                </ul>
              </div>
            </div>
            {/* 컨설팅 & 투자 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform fade-in">
              <div className="p-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                <div className="text-xl font-bold mb-1">컨설팅 & 투자</div>
                <div className="text-sm opacity-90">0.9% 네트워크의 핵심</div>
              </div>
              <div className="p-8">
                <p className="mb-4">수익보다 네트워크 강화를 통한 생태계 구축에 집중합니다.</p>
                <ul className="list-none mt-2">
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">전략 컨설팅 서비스</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">투자유치 연계 지원</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">R&D 프로젝트 기획</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">정부지원사업 컨소시업 구성</li>
                  <li className="relative pl-6 border-b border-gray-100 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">파트너사 네트워크 활용</li>
                  <li className="relative pl-6 py-2 before:content-['▶'] before:absolute before:left-0 before:text-indigo-500 before:text-xs">통합 솔루션 제공</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-500 to-teal-400 text-white">
        <div className="max-w-screen-xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-white fade-in">연락처</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur fade-in">
              <div className="text-lg font-bold mb-2">본사</div>
              <div className="leading-relaxed">서울특별시 구로구 디지털로29길38, 201<br/>(구로동, 에이스테크노타워3차)</div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur fade-in">
              <div className="text-lg font-bold mb-2">연구실</div>
              <div className="leading-relaxed">서울특별시 강서구 마곡중앙4로 66, 7층</div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur fade-in">
              <div className="text-lg font-bold mb-2">문의</div>
              <div className="leading-relaxed">Email: 09zpnp@naver.com<br/><br/>혁신적인 아이디어와 프로젝트를<br/>함께 만들어가고 싶다면<br/>언제든 연락해 주세요.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-2xl font-black mb-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">0.9%</div>
          <p>&copy; {new Date().getFullYear()} 주식회사 영점구퍼센트. All rights reserved.</p>
          <p className="mt-4 opacity-70">&ldquo;빠르게 변화하는 세상을 두려워하기보다는 변화하지 않는 나를 두려워하자.&rdquo;</p>
        </div>
      </footer>
    </div>
  );
}
