export default function NewHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <section className="hero flex items-center justify-center min-h-screen relative pt-24">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl">
            0.9%
          </h1>
          <div className="text-3xl md:text-4xl mb-6 text-white/90 font-light">
            주식회사 영점구퍼센트
          </div>
          <div className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/80 font-serif">
            <p className="italic mb-4">
              &ldquo;인간의 역사는 0.1%의 창의적인 인간과<br />
              0.9%의 통찰적인 인간이 이끌어왔다&rdquo;
            </p>
            <p className="text-lg not-italic">- Jeremy Rifkin</p>
          </div>
          <a 
            href="#about" 
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            더 알아보기
          </a>
        </div>
        
        {/* 배경 효과 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/10"></div>
        </div>
      </section>
    </main>
  );
} 