import { Button } from "@/components/ui/button";

const counselors = [
  {
    name: "Yanlin M.",
    title: "Dartmouth & Harvard Graduate",
    bio: "Yanni has helped her students gain acceptance into Harvard, MIT, Stanford, Yale, UPenn, Columbia, Duke, Johns Hopkins",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=480&fit=crop&crop=face",
  },
  {
    name: "Kimberley L.",
    title: "Former Stanford Admissions Officer",
    bio: "Former Stanford & Northwestern Admissions Officer, Kimberley works with students to earn places at the Ivy League, Stanford, and top colleges.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=480&fit=crop&crop=face",
  },
  {
    name: "Devery D.",
    title: "Former Harvard Admissions Officer",
    bio: "With extensive admissions experience at Harvard, UC Berkeley, and more, Devery has helped students stand out and earn places at Top 50 US colleges.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=480&fit=crop&crop=face",
  },
  {
    name: "Ibrahim K.",
    title: "Harvard & UChicago Graduate",
    bio: "A uniquely gifted strategist, Ibrahim gets phenomenal results for students — even across top-tier programs at the most selective US universities.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=480&fit=crop&crop=face",
  },
  {
    name: "Dana C.",
    title: "Former Princeton Admissions Officer",
    bio: "Dana is a Princeton alum and Former Admissions Officer with 10+ years guiding students to top colleges with standout profiles and essays.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=480&fit=crop&crop=face",
  },
];

const Counselors = () => {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our College Counselors Getting<br />Students Into the Top Colleges
          </h2>
          <Button
            variant="outline"
            className="mt-6 rounded-full border-background/30 text-background hover:bg-background hover:text-foreground"
          >
            Meet All Our Counselors
          </Button>
        </div>

        {/* Counselor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {counselors.map((counselor, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={counselor.image}
                  alt={counselor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-xl font-semibold text-white mb-1">
                  {counselor.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {counselor.title}
                </p>
                <p className="text-white/70 text-xs line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {counselor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counselors;
