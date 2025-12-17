import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Paige G.",
    school: "Northwestern",
    major: "Cognitive Science",
    quote: "I can't help but think that I was as best prepared as possible due to really understanding the process and what admissions are looking for. I am so glad to have attained that shield from Crimson.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Derek Q.",
    school: "Columbia",
    major: "Economics-Political Science",
    quote: "My strategist probably had the largest impact on my application... he helped me find opportunities I would not have come upon otherwise.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Abby W.",
    school: "Columbia",
    major: "Public Policy-Political Science",
    quote: "My strategist helped me narrow down where I really needed to apply. He provided clarity on my goals and timelines, ensuring my application was strong and focused.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Jin T.",
    school: "UCLA",
    major: "Engineering",
    quote: "Jennifer was my essay mentor and she was just great. Whether sparking new ideas during the brainstorming process or looking over my finished draft, she clarified the focus needed for specific essay prompts.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "James N.",
    school: "Wharton (UPenn)",
    major: "Business",
    quote: "Jordan was my strategist and I know I could not have gotten into Wharton without his help. They helped me understand exactly what I needed to do.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            They Got In.
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            You Can Too.
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Testimonial Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-10">
              <p className="text-sm font-sans">Accepted to</p>
              <p className="font-serif font-bold text-xl">{currentTestimonial.school}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-sans">Name</div>
              <div className="font-serif text-2xl font-semibold text-foreground">
                {currentTestimonial.name}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-sans">Major</div>
              <div className="font-sans text-lg text-foreground">
                {currentTestimonial.major}
              </div>
            </div>
            <blockquote className="font-serif text-xl text-foreground italic leading-relaxed border-l-4 border-primary pl-6">
              "{currentTestimonial.quote}"
            </blockquote>
            <Button variant="link" className="text-primary hover:text-crimson-dark p-0 font-sans">
              Read {currentTestimonial.name}'s Story →
            </Button>

            {/* Navigation */}
            <div className="flex items-center gap-4 pt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="bg-card rounded-2xl overflow-hidden shadow-card">
            <div className="relative">
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg z-10">
                <p className="text-xs font-sans">Accepted to</p>
                <p className="font-serif font-bold">{currentTestimonial.school}</p>
              </div>
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-serif text-xl font-semibold text-foreground">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.major}
                  </div>
                </div>
              </div>
              <blockquote className="font-serif text-foreground italic">
                "{currentTestimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === currentIndex ? "bg-primary" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
