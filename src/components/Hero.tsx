import { Button } from "@/components/ui/button";
import heroCampus from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCampus}
          alt="Ivy League University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="font-serif italic text-xl md:text-2xl text-white/90 mb-4 animate-fade-in">
            Thousands Apply. Few Stand Out.
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in animate-delay-100">
            We'll Make Sure You're One of Them.
          </h1>

          {/* Subtext */}
          <p className="font-sans text-lg md:text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
            The only college admissions counselors with over 1,330 Ivy League acceptances — and counting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
            <Button 
              size="lg" 
              className="rounded-full bg-primary text-primary-foreground hover:bg-crimson-dark px-8 py-6 text-lg font-sans"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-2 border-white text-white hover:bg-white hover:text-foreground px-8 py-6 text-lg font-sans bg-transparent"
            >
              View Results
            </Button>
          </div>
        </div>

        {/* Featured Student Card */}
        <div className="hidden lg:block absolute right-8 xl:right-16 bottom-32 animate-fade-in animate-delay-400">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=360&fit=crop&crop=face"
                alt="Student"
                className="w-48 h-60 object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
                <p className="font-serif text-lg text-white font-semibold">Cora P.</p>
                <p className="text-sm text-white/80">Yale Admit, Class of 2028</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* As Seen In Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-white/60 mb-4 font-sans">As seen in</p>
          <div className="overflow-hidden">
            <div className="flex gap-12 items-center animate-marquee">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-12 items-center">
                  <span className="text-white/70 font-serif text-lg whitespace-nowrap">The Wall Street Journal</span>
                  <span className="text-white/70 font-serif italic text-lg whitespace-nowrap">The New York Times</span>
                  <span className="text-white/70 font-sans font-bold text-lg whitespace-nowrap">Forbes</span>
                  <span className="text-white/70 font-sans font-bold text-lg whitespace-nowrap tracking-wider">npr</span>
                  <span className="text-white/70 font-sans font-semibold text-lg whitespace-nowrap">Bloomberg</span>
                  <span className="text-white/70 font-serif italic text-lg whitespace-nowrap">The Economist</span>
                  <span className="text-white/70 font-serif text-lg whitespace-nowrap">The Washington Post</span>
                  <span className="text-white/70 font-sans font-bold text-lg whitespace-nowrap tracking-widest">TIME</span>
                  <span className="text-white/70 font-serif text-lg whitespace-nowrap">Financial Times</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
