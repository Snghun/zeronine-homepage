"use client";

import { useCallback, useEffect } from 'react';

export default function Home() {
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, []);

  useEffect(() => {
    // 모든 네비게이션 링크에 이벤트 리스너 추가
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-indigo-400 to-purple-500 text-white shadow-lg backdrop-blur-md transition-colors duration-300">
        <nav className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-md">0.9%</div>
          <ul className="hidden md:flex gap-8 font-medium">
            <li><a href="#home" onClick={handleSmoothScroll} className="hover:text-gray-200 transition">홈</a></li>
            <li><a href="#about" onClick={handleSmoothScroll} className="hover:text-gray-200 transition">회사소개</a></li>
            <li><a href="#services" onClick={handleSmoothScroll} className="hover:text-gray-200 transition">사업부문</a></li>
            <li><a href="#contact" onClick={handleSmoothScroll} className="hover:text-gray-200 transition">연락처</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-300 relative pt-24">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">0.9%</h1>
          <div className="text-2xl md:text-3xl mb-4 opacity-90">주식회사 영점구퍼센트</div>
          <div className="text-lg md:text-xl italic mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            "인간의 역사는 0.1%의 창의적인 인간과<br />0.9%의 통찰적인 인간이 이끌어왔다"<br />
            <span className="text-base not-italic">- Jeremy Rifkin</span>
          </div>
          <a href="#about" className="inline-block bg-white/20 border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold backdrop-blur-md hover:bg-white/30 transition-all duration-300 shadow-lg">더 알아보기</a>
        </div>
        {/* SVG Grain 효과는 추후 컴포넌트화 가능 */}
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">0.9%의 철학</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>주식회사 영점구퍼센트는 창의적 아이디어의 가치를 알아보고, 이를 실현·확산시키는 연결자이자 실천자로써 역할을 하기 위해 설립되었습니다.</p>
              <p>문제의 본질을 꿰뚫어보고, 새로운 해결책을 제시하며, 미래를 예측하고, 조직과 사회의 변화를 주도합니다. 컨설팅부터 직간접 투자를 넘어, 때론 사업이해관계자로 BM 개발 및 운영에 직접 참여합니다.</p>
              <blockquote className="border-l-4 border-indigo-400 pl-4 italic text-gray-600 my-8">
                "빠르게 변화하는 세상을 두려워 하기보다는 변화하지 않는 나를 두려워 하자."
              </blockquote>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 transition">
                <h3 className="text-indigo-500 font-bold mb-2">깊이있는 관찰력</h3>
                <p>문제의 본질을 꿰뚫어보는 통찰력</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 transition">
                <h3 className="text-indigo-500 font-bold mb-2">비판적 사고</h3>
                <p>새로운 해결책을 제시하는 분석력</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 transition">
                <h3 className="text-indigo-500 font-bold mb-2">감각적 지능</h3>
                <p>미래를 예측하는 직관력</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-1 transition">
                <h3 className="text-indigo-500 font-bold mb-2">협업 능력</h3>
                <p>조직과 사회의 변화를 주도하는 리더십</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">사업부문</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* AI사업부 */}
            <div className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4 relative z-10">AI사업부</h3>
              <ul className="space-y-2 relative z-10">
                <li>AI R&D - 상용화된 AI Tool 활용 연구</li>
                <li>AI Commerce - 디지털 휴먼 3.5단계 도입</li>
                <li>AI Customizing - 개별 기업 맞춤형 AI 솔루션</li>
                <li>실시간 반응형 AI 쇼호스트 운영</li>
                <li>국내 유일 AI 라이브 커머스 전용 엔진</li>
              </ul>
            </div>
            {/* IP사업부 */}
            <div className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4 relative z-10">IP사업부</h3>
              <ul className="space-y-2 relative z-10">
                <li>캐릭터 기획 개발</li>
                <li>애니메이션 기획 제작</li>
                <li>콘텐츠 에이전시</li>
                <li>IP 컨설팅</li>
                <li>2D/3D/아나모픽 콘텐츠 제작</li>
                <li>지식재산권 등록 컨설팅</li>
              </ul>
            </div>
            {/* MD사업부 */}
            <div className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4 relative z-10">MD사업부</h3>
              <ul className="space-y-2 relative z-10">
                <li>상품 제작 - 완구, F&B, 패션 등</li>
                <li>유통 - 국내외 온/오프라인 채널</li>
                <li>광고대행 - IMC 수립 및 집행</li>
                <li>글로벌 유통 파트너 네트워크</li>
                <li>팝업스토어 및 오프라인 행사</li>
              </ul>
            </div>
            {/* 컨설팅 R&D 투자 */}
            <div className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4 relative z-10">컨설팅 R&D 투자</h3>
              <ul className="space-y-2 relative z-10">
                <li>전략 컨설팅</li>
                <li>투자유치 연계</li>
                <li>R&D 지원사업 컨소시엄</li>
                <li>0.9% 네트워크 활용</li>
                <li>토탈 솔루션 제공</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">연락처</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-pink-300 font-bold mb-2">본사</h3>
              <p className="mb-6">서울특별시 구로구 디지털로29길38, 201<br/>(구로동, 에이스테크노타워3차)</p>
              <h3 className="text-pink-300 font-bold mb-2 mt-8">연구실</h3>
              <p className="mb-6">서울특별시 강서구 마곡중앙4로 66, 7층</p>
              <h3 className="text-pink-300 font-bold mb-2 mt-8">이메일</h3>
              <p>09zpnp@naver.com</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-pink-300 font-bold mb-4">0.9%가 하는 일</h3>
              <ul className="space-y-4 text-lg">
                <li>✓ 창의적 가치를 알아보고 확산</li>
                <li>✓ 복잡한 문제 해결 및 새로운 솔루션 제시</li>
                <li>✓ 사회적·경제적 변화 방향 예측</li>
                <li>✓ 벨류사이클 관찰 및 시너지 창출</li>
                <li>✓ 0.9% 네트워크 자원 활용</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} 주식회사 영점구퍼센트. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
