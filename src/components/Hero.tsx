const Hero = () => (
  <section
    className="relative text-white py-20 text-center"
    style={{
      backgroundImage: "url('/assets/bg-hero.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Logo AITEK góc trái trên */}
    <div className="absolute top-6 left-8 z-20 flex items-center">
      <img
        src="/assets/logo.jpg"
        alt="AITEK Logo"
        className="h-24 w-auto drop-shadow-lg"
        style={{ maxWidth: 140 }}
      />
    </div>
    {/* Overlay xanh đậm cho nền */}
    <div className="absolute inset-0 bg-blue-900/70"></div>
    <div className="relative z-10">
      <h1 className="text-7xl font-bold mb-4">Make Your Drive, Make Your Style</h1>
      <h2 className="text-4xl font-semibold mb-6">
        AutoMate – The 100% Offline Voice Assistant for Cars
      </h2>
      <p className="max-w-xl mx-auto mb-8 text-lg">
        Upgrade your driving experience with hands-free, distraction-free, and reliable control.<br />
        Experience the future of in-car safety and convenience, powered by innovative Vietnamese technology.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="#features"
          className="px-6 py-3 bg-white text-blue-800 font-bold rounded-full shadow hover:bg-blue-100 transition"
        >
          See Features
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white font-bold rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
