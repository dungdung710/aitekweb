const TEAM = [
  { name: "Tieu Chi", role: "Team Leader, Embedded Software", img: "/assets/tieu-chi.jpg" },
  { name: "Thuy Tien", role: "Hardware Developer", img: "/assets/thuy-tien.jpg" },
  { name: "Minh Duy", role: "Software Developer", img: "/assets/minh-duy.jpg" },
  { name: "Nang Tri", role: "Team Spokesperson", img: "/assets/nang-tri.jpg" },
  { name: "Tien Dung", role: "Market Analyst", img: "/assets/tien-dung.jpg" },
  { name: "Mr. P.T Dang Quang", role: "Mentor – Faculty of Transportation Engineering, HCMUT", img: "/assets/mentor.jpg" },
];

const Team = () => (
  <section id="team" className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
    {/* Ảnh nền tech nhạt */}
    <img
      src="/assets/team-bg.png"
      alt="Tech background"
      className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
      style={{ zIndex: 0 }}
    />
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <h2 className="text-5xl font-bold mb-8 text-blue-900">Meet the AITEK Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {TEAM.map(m => (
          <div key={m.name} className="bg-white/70 p-4 rounded-xl shadow flex flex-col items-center">
            <img
              src={m.img}
              alt={m.name}
              className="w-34 h-34 rounded-full mb-4 object-cover border-4 border-blue-200 shadow"
            />
            <h3 className="text-xl md:text-2xl font-extrabold text-blue-800 mb-2">{m.name}</h3>
            <p className="text-center">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
