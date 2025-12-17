const acceptanceRates = [
  { school: "Harvard", general: "3.7%", crimson: "20%" },
  { school: "Stanford", general: "3.6%", crimson: "30.8%" },
  { school: "Yale", general: "4.6%", crimson: "26.7%" },
  { school: "Columbia", general: "4.3%", crimson: "32.7%" },
  { school: "UPenn", general: "5.4%", crimson: "39.7%" },
  { school: "Dartmouth", general: "6%", crimson: "50%" },
  { school: "Princeton", general: "4.4%", crimson: "28.3%" },
  { school: "Cornell", general: "8.4%", crimson: "55.9%" },
  { school: "MIT", general: "4.5%", crimson: "26.1%" },
];

const students = [
  { name: "Jin", school: "UCLA Admit", year: "Class of 2028", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face" },
  { name: "Litong", school: "UC Berkeley Admit", year: "Class of 2028", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop&crop=face" },
  { name: "Paige", school: "Northwestern Admit", year: "Class of 2029", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face" },
  { name: "Thomas", school: "Columbia Admit", year: "Class of 2029", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face" },
];

const Stats = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-serif italic text-xl text-primary mb-2">Numbers Don't Lie.</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Proven Success.<br />Unmatched Results.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Student Cards */}
          <div>
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="bg-secondary rounded-2xl p-6">
                <div className="font-serif text-5xl font-bold text-primary mb-2">7x</div>
                <p className="text-muted-foreground font-sans text-sm">
                  Our students are 7x more likely to get into the Ivy League and Top 15 colleges.
                </p>
              </div>
              <div className="bg-secondary rounded-2xl p-6">
                <div className="font-serif text-5xl font-bold text-primary mb-2">1,350</div>
                <p className="text-muted-foreground font-sans text-sm">
                  Total Offers to the Ivy League
                </p>
              </div>
            </div>

            {/* Student Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {students.map((student, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl card-hover"
                >
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-serif text-lg text-white font-semibold">{student.name}</p>
                    <p className="text-xs text-white/80">{student.school},</p>
                    <p className="text-xs text-white/80">{student.year}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 98% Stat */}
            <div className="mt-8 bg-primary text-primary-foreground rounded-2xl p-6">
              <div className="font-serif text-5xl font-bold mb-2">98%</div>
              <p className="font-sans">
                Of our students are admitted to at least 1 of their Top 5 college choices.
              </p>
            </div>
          </div>

          {/* Right Column - Acceptance Table */}
          <div>
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
              <div className="p-6 border-b border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  College-Specific Acceptance Rates
                </h3>
                <div className="flex gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-muted-foreground/30 rounded-full" />
                    <span className="text-sm text-muted-foreground">General Admit Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-sm text-primary">Crimson Student Admit Rate</span>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="acceptance-table">
                  <thead>
                    <tr className="bg-muted/50">
                      <th>Top Colleges</th>
                      <th>General</th>
                      <th>Crimson</th>
                    </tr>
                  </thead>
                  <tbody>
                    {acceptanceRates.map((row, index) => (
                      <tr key={index}>
                        <td className="font-semibold">{row.school}</td>
                        <td className="text-muted-foreground">{row.general}</td>
                        <td className="text-primary font-semibold">{row.crimson}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offers Marquee */}
      <div className="mt-20 overflow-hidden bg-secondary py-8">
        <div className="flex gap-8 animate-marquee">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-8">
              {[
                { count: 116, school: "Yale" },
                { count: 120, school: "Harvard" },
                { count: 241, school: "Columbia" },
                { count: 314, school: "UPenn" },
                { count: 164, school: "Brown" },
                { count: 78, school: "Dartmouth" },
                { count: 216, school: "Cornell" },
                { count: 109, school: "Princeton" },
                { count: 178, school: "Stanford" },
                { count: 44, school: "MIT" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                  <span className="font-serif text-3xl font-bold text-primary">{item.count}</span>
                  <span className="text-muted-foreground">Offers to</span>
                  <span className="font-semibold text-foreground">{item.school}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
