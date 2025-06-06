const STEPS = [
  "Step 1: Driver gives voice command.",
  "Step 2: Raspberry Pi recognizes command locally (offline) using Vosk.",
  "Step 3: STM32 microcontroller controls car features via I2C/CAN.",
  "Step 4: Robot key activates system only when placed on dashboard.",
];

const HowItWorks = () => (
  <section className="py-16 bg-white" id="how-it-works">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-900">How AutoMate Works</h2>
      <div className="space-y-2 text-lg text-gray-800 mb-8">
        {STEPS.map((step, idx) => (
          <p key={idx}>{step}</p>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <img src="/assets/flowwork.png" alt="How AutoMate works" className="w-126 h-126" />
      </div>
    </div>
  </section>
);

export default HowItWorks;
