"use client";

import { useCallback, useEffect } from 'react';
import '../globals.css';
import Image from 'next/image'

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

    // 스크롤 애니메이션을 위한 Intersection Observer 설정
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // 애니메이션을 적용할 요소들 선택
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black text-white shadow-lg backdrop-blur-md transition-colors duration-300">
        <nav className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="text-3xl font-bold text-white">0.9%</div>
          <ul className="hidden md:flex gap-8 font-medium">
            <li><a href="#home" onClick={handleSmoothScroll} className="hover:text-gray-300 transition">홈</a></li>
            <li><a href="#about" onClick={handleSmoothScroll} className="hover:text-gray-300 transition">회사소개</a></li>
            <li><a href="#services" onClick={handleSmoothScroll} className="hover:text-gray-300 transition">사업부문</a></li>
            <li><a href="#contact" onClick={handleSmoothScroll} className="hover:text-gray-300 transition">연락처</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero flex items-center justify-center min-h-screen bg-black relative pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
            <div className="w-full text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg text-white animate-on-scroll opacity-0 translate-y-4">0.9%</h1>
              <div className="text-2xl md:text-3xl opacity-90 text-gray-300 animate-on-scroll opacity-0 translate-y-4">주식회사 영점구퍼센트</div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center w-full md:translate-x-[10%]">
              <div className="order-2 md:order-1 mb-8 md:mb-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative w-[180px] h-[180px]">
                    <Image
                      src="/jeremy-rifkin.jpg"
                      alt="Jeremy Rifkin"
                      fill
                      className="rounded-full object-cover transform transition-all duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 order-3 md:order-2 text-center md:text-left md:ml-16 md:max-w-2xl">
                <div className="flex items-center justify-center md:justify-start animate-on-scroll opacity-0 translate-y-4">
                  <div className="text-lg md:text-xl italic leading-relaxed opacity-90 text-gray-400">
                    &ldquo;인간의 역사는 0.1%의 창의적인 인간과<br />0.9%의 통찰적인 인간이 이끌어왔다&rdquo;<br />
                    <span className="text-base not-italic text-gray-500">- Jeremy Rifkin</span>
                  </div>
                </div>
                <div className="text-center md:text-left mt-12">
                  <a href="#about" className="inline-block bg-white/20 border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold backdrop-blur-md hover:bg-white/30 transition-all duration-300 shadow-lg animate-on-scroll opacity-0 translate-y-4">더 알아보기</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll opacity-0 translate-y-4 text-black">0.9%의 철학</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed animate-on-scroll opacity-0 translate-y-4 text-gray-800">
              <p>주식회사 영점구퍼센트는 창의적 아이디어의 가치를 알아보고, 이를 실현·확산시키는 연결자이자 실천자로써 역할을 하기 위해 설립되었습니다.</p>
              <p>문제의 본질을 꿰뚫어보고, 새로운 해결책을 제시하며, 미래를 예측하고, 조직과 사회의 변화를 주도합니다. 컨설팅부터 직간접 투자를 넘어, 때론 사업이해관계자로 BM 개발 및 운영에 직접 참여합니다.</p>
              <blockquote className="border-l-4 border-gray-800 pl-4 italic text-gray-600 my-8">
                &ldquo;빠르게 변화하는 세상을 두려워 하기보다는 변화하지 않는 나를 두려워 하자.&rdquo;
              </blockquote>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:-translate-y-1 transition animate-on-scroll opacity-0 translate-y-4">
                <h3 className="text-gray-900 font-bold mb-2">깊이있는 관찰력</h3>
                <p className="text-gray-700">문제의 본질을 꿰뚫어보는 통찰력</p>
              </div>
              <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:-translate-y-1 transition animate-on-scroll opacity-0 translate-y-4">
                <h3 className="text-gray-900 font-bold mb-2">비판적 사고</h3>
                <p className="text-gray-700">새로운 해결책을 제시하는 분석력</p>
              </div>
              <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:-translate-y-1 transition animate-on-scroll opacity-0 translate-y-4">
                <h3 className="text-gray-900 font-bold mb-2">감각적 지능</h3>
                <p className="text-gray-700">미래를 예측하는 직관력</p>
              </div>
              <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:-translate-y-1 transition animate-on-scroll opacity-0 translate-y-4">
                <h3 className="text-gray-900 font-bold mb-2">협업 능력</h3>
                <p className="text-gray-700">조직과 사회의 변화를 주도하는 리더십</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll opacity-0 translate-y-4 text-gray-800">사업부문</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* AI사업부 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl animate-on-scroll opacity-0 translate-y-4 border border-gray-700/30 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800">
              <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-100">AI사업부</h3>
              <ul className="space-y-2 relative z-10 text-gray-300">
                <li>AI R&D - 상용화된 AI Tool 활용 연구</li>
                <li>AI Commerce - 디지털 휴먼 3.5단계 도입</li>
                <li>AI Customizing - 개별 기업 맞춤형 AI 솔루션</li>
                <li>실시간 반응형 AI 쇼호스트 운영</li>
                <li>국내 유일 AI 라이브 커머스 전용 엔진</li>
              </ul>
            </div>
            {/* IP사업부 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl animate-on-scroll opacity-0 translate-y-4 border border-gray-700/30 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800">
              <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-100">IP사업부</h3>
              <ul className="space-y-2 relative z-10 text-gray-300">
                <li>캐릭터 기획 개발</li>
                <li>애니메이션 기획 제작</li>
                <li>콘텐츠 에이전시</li>
                <li>IP 컨설팅</li>
                <li>2D/3D/아나모픽 콘텐츠 제작</li>
                <li>지식재산권 등록 컨설팅</li>
              </ul>
            </div>
            {/* MD사업부 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl animate-on-scroll opacity-0 translate-y-4 border border-gray-700/30 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800">
              <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-100">MD사업부</h3>
              <ul className="space-y-2 relative z-10 text-gray-300">
                <li>상품 제작 - 완구, F&B, 패션 등</li>
                <li>유통 - 국내외 온/오프라인 채널</li>
                <li>광고대행 - IMC 수립 및 집행</li>
                <li>글로벌 유통 파트너 네트워크</li>
                <li>팝업스토어 및 오프라인 행사</li>
              </ul>
            </div>
            {/* 컨설팅 R&D 투자 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl animate-on-scroll opacity-0 translate-y-4 border border-gray-700/30 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800">
              <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-100">컨설팅 R&D 투자</h3>
              <ul className="space-y-2 relative z-10 text-gray-300">
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
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll opacity-0 translate-y-4">연락처</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-md animate-on-scroll opacity-0 translate-y-4 border border-gray-700/30 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-gray-200 font-bold mb-2">본사</h3>
              <p className="mb-6 text-gray-300">서울특별시 구로구 디지털로29길38, 201<br/>(구로동, 에이스테크노타워3차)</p>
              <h3 className="text-gray-200 font-bold mb-2 mt-8">연구실</h3>
              <p className="mb-6 text-gray-300">서울특별시 강서구 마곡중앙4로 66, 7층</p>
              <h3 className="text-gray-200 font-bold mb-2 mt-8">이메일</h3>
              <p className="text-gray-300">09zpnp@naver.com</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-md animate-on-scroll opacity-0 translate-y-4 border border-gray-700/30 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-gray-200 font-bold mb-4">0.9%가 하는 일</h3>
              <ul className="space-y-4 text-lg text-gray-300">
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
      <footer className="bg-gray-900 text-gray-300 text-center py-8 border-t border-gray-800">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} 주식회사 영점구퍼센트. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 