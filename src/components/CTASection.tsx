import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1920&h=600&fit=crop"
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Thousands of Life Changing Moments.
          </h2>
          <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground/90 mb-8">
            Are You Next?
          </h3>
          <Button 
            size="lg" 
            className="rounded-full bg-background text-primary hover:bg-background/90 px-10 py-6 text-lg font-sans"
          >
            Start Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
