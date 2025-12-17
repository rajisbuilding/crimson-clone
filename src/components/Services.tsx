import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Get in With a Winning Strategy",
    description: "A seasoned college admissions consultant curates the perfect school list, timeline, and unique theme that helps your child stand out above the competition.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop",
  },
  {
    title: "Showcase Leadership With a High-Impact Capstone Project",
    description: "Specialist capstone advisors help your child create and scale a passion-driven project that makes a real-world impact.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=500&fit=crop",
  },
  {
    title: "Conduct Research That Stands Out",
    description: "Professors and PhD mentors from schools like Harvard, Stanford, and MIT help your child show academic excellence by developing and publishing original research.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=500&fit=crop",
  },
  {
    title: "Win Prestigious Honors & Awards",
    description: "With coaching from past winners and judges, your child is guided on how to compete in some of the most respected global academic competitions.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=500&fit=crop",
  },
  {
    title: "Write Essays That Seal the Deal",
    description: "From the perfect topic to final polish, our essay experts guide your child on how to write a personal statement and supplemental essays that prove why they belong on campus.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=500&fit=crop",
  },
  {
    title: "Top-Scoring Tutors That Lift Grades and Test Scores",
    description: "Our tutors, who got into top schools thanks to their own impressive test scores, guide your child through SAT or ACT prep.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=500&fit=crop",
  },
  {
    title: "Former Ivy League Admissions Officers, Now Working for You",
    description: "FAOs from the Ivy League and other top schools review your child's application with an insider's eye. Your child hits \"submit\" knowing that it's acceptance-worthy.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=500&fit=crop",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Everything Your Child Needs.
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            All in One Place.
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-muted-foreground font-sans">
            We guide our students through every step — from strategy to essays and extracurriculars. 
            Trusted by families nationwide, with 1,300+ Ivy League acceptances and counting.
          </p>
        </div>

        {/* Services Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-start">
          {/* Service List */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 group ${
                  activeIndex === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className={`font-serif text-xl font-semibold mb-2 ${
                      activeIndex === index ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      {service.title}
                    </h4>
                    {activeIndex === index && (
                      <p className="text-primary-foreground/80 text-sm animate-fade-in">
                        {service.description}
                      </p>
                    )}
                  </div>
                  <ChevronRight
                    className={`flex-shrink-0 transition-transform ${
                      activeIndex === index ? "rotate-90" : ""
                    } ${activeIndex === index ? "text-primary-foreground" : "text-muted-foreground"}`}
                    size={24}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Active Service Image */}
          <div className="sticky top-32">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                className="w-full h-[500px] object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Services Grid - Mobile */}
        <div className="lg:hidden space-y-6">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary rounded-2xl overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
