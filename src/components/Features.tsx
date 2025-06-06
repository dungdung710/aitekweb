const FEATURES = [
  {
    title: "100% Offline Voice Control",
    desc: "AutoMate works reliably anywhere. Voice commands are processed offline, ensuring privacy and zero dependence on mobile networks.",
    img: "/assets/feature.png",
  },
  {
    title: "Physical Robot Key – Fun & Secure Activation",
    desc: "Unique robot key activates AutoMate only when placed on your dashboard. Enhances personalization, provides extra control and fun.",
    img: "/assets/physical.png",
  },
  {
    title: "Deep Hardware Integration",
    desc: "Directly connect and control vehicle components – including lights, AC, dashboard, sensors, and more – via STM32, I2C, CAN bus and robust electronics. Unlock true ‘smart car’ capabilities on any model.",
    img: "/assets/deep-integration.png",
  },
  {
    title: "Retrofit Smart – Make Any Car Intelligent",
    desc: "Instantly upgrade your existing vehicle to a smart car without expensive replacements. AITEK’s solution is easy to install, fully compatible, and brings advanced voice assistant, hardware integration, and new safety features to cars of any age.",
    img: "/assets/retrofit.png",
  }
];

const Features = () => (
  <section id="features" className="relative py-16 bg-gray-50 overflow-hidden">
    {/* Ảnh nền tuyệt đẹp */}
   <img
  src="/assets/bg-main.png"
  alt="Background tech"
  className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
  style={{ zIndex: 0 }}
    />
  <div
    className="absolute inset-0 bg-blue-200/30 pointer-events-none"
    style={{ zIndex: 1 }}
  ></div>
    {/* Nội dung feature */}
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <h2 className="text-5xl font-bold mb-8 text-center text-blue-900">Why Choose AutoMate?</h2>
      <div className="space-y-10">
        {FEATURES.map((f, idx) => (
          <div key={f.title} className="flex flex-col md:flex-row items-center gap-8 bg-white/70 rounded-xl shadow p-6">
            <img src={f.img} alt={f.title} className="w-48 h-48 object-contain mb-4 md:mb-0"/>
            <div>
              <h3 className="text-3xl font-semibold text-blue-800 mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
