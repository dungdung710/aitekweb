const problems = [
  "Most affordable cars have no smart features or voice assistant.",
  "Existing in-car assistants rely on internet/cloud, which is unreliable and not private.",
  "Drivers are distracted by manual controls, increasing accident risk.",
  "Upgrading to a new smart car is expensive, not everyone can afford.",
];

const solution = "AutoMate enables anyone to instantly upgrade their car with a truly offline, reliable, safe voice assistant and smart control system. Easy to install, deeply integrates with car hardware, affordable for all.";

const ProblemSolution = () => (
  <section className="py-12 bg-gradient-to-b from-white to-blue-50" id="problem-solution">
    <div className="max-w-3xl mx-auto px-4 rounded-xl shadow-md bg-white/90 py-8">
      <h2 className="text-5xl font-bold text-blue-900 mb-6 text-center">The Problem</h2>
      <ul className="mb-10 flex flex-col gap-4 text-gray-800 text-lg">
        {problems.map((p, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-red-500 text-xl mt-0.5">⚠️</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <h2 className="text-5xl font-bold text-green-800 mb-6 text-center">Our Solution</h2>
      <div className="flex justify-center">
        <p className="text-lg text-center max-w-xl">{solution}</p>
      </div>
    </div>
  </section>
);

export default ProblemSolution;
