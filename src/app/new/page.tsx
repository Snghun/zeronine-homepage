'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        const target = href ? document.querySelector(href) : null;
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });
  }, []);

  const capabilities = [
    {
      title: '웹 개발',
      description: '최신 기술을 활용한 반응형 웹사이트 개발',
      icon: '💻'
    },
    {
      title: '모바일 앱',
      description: 'iOS와 Android 플랫폼을 위한 네이티브 앱 개발',
      icon: '📱'
    },
    {
      title: 'UI/UX 디자인',
      description: '사용자 중심의 직관적인 인터페이스 디자인',
      icon: '🎨'
    }
  ];

  const businesses = [
    {
      title: 'IT 솔루션',
      description: '기업 맞춤형 IT 인프라 구축 및 관리',
      features: [
        '클라우드 서비스 구축',
        '보안 시스템 설계',
        '데이터베이스 관리'
      ]
    },
    {
      title: '디지털 마케팅',
      description: '효과적인 온라인 마케팅 전략 수립 및 실행',
      features: [
        'SEO 최적화',
        '소셜 미디어 마케팅',
        '콘텐츠 마케팅'
      ]
    }
  ];

  const contacts = [
    {
      title: '이메일',
      value: 'contact@zeronine.com',
      icon: '✉️'
    },
    {
      title: '전화',
      value: '02-1234-5678',
      icon: '📞'
    },
    {
      title: '주소',
      value: '서울특별시 강남구 테헤란로 123',
      icon: '📍'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 py-4 transition-all duration-300">
        <nav className="nav max-w-7xl mx-auto px-8 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600">ZERONINE</a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">회사소개</a>
            <a href="#capabilities" className="text-gray-600 hover:text-indigo-600 transition-colors">역량</a>
            <a href="#business" className="text-gray-600 hover:text-indigo-600 transition-colors">사업영역</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">문의하기</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              혁신적인 디지털 솔루션
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              최신 기술과 창의적인 접근으로 비즈니스의 디지털 전환을 지원합니다.
            </p>
            <a
              href="#contact"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              문의하기
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">회사소개</h2>
            <p className="text-xl text-gray-600">
              ZERONINE은 혁신적인 IT 솔루션을 제공하는 기업입니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                우리의 비전
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                디지털 혁신을 통해 더 나은 미래를 만들어갑니다. 우리는 고객의 성공을 위해 최선을 다합니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="text-indigo-600 mr-2">✓</span>
                  혁신적인 기술 솔루션
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-indigo-600 mr-2">✓</span>
                  고객 중심의 서비스
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-indigo-600 mr-2">✓</span>
                  지속 가능한 성장
                </li>
              </ul>
            </div>
            <div className="fade-in">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">핵심 역량</h2>
            <p className="text-xl text-gray-600">
              최신 기술과 전문성을 바탕으로 최고의 서비스를 제공합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="fade-in bg-white p-8 rounded-lg shadow-lg hover-card">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">사업영역</h2>
            <p className="text-xl text-gray-600">
              다양한 산업 분야에서 최적의 솔루션을 제공합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {businesses.map((business, index) => (
              <div key={index} className="fade-in hover-card">
                <h3 className="text-2xl font-bold gradient-text mb-4">{business.title}</h3>
                <p className="text-gray-600 mb-6">{business.description}</p>
                <ul className="space-y-3">
                  {business.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="text-indigo-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">문의하기</h2>
            <p className="text-xl text-gray-600">
              프로젝트나 협업에 대해 문의해 주세요.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="fade-in text-center hover-card bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 ZERONINE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
