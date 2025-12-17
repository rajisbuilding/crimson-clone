import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "How Harvard & Stanford Decide Who Gets In",
    date: "Wednesday, December 17 · 8:00 PM EST",
    location: "Online Event",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=250&fit=crop",
  },
  {
    title: "Early Round Admissions Trends & Analysis",
    date: "Tuesday, January 6 · 8:00 PM EST",
    location: "Online Event",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=250&fit=crop",
  },
  {
    title: "How to Get Into Stanford, Berkeley & UCLA",
    date: "Wednesday, January 7 · 8:00 PM EST",
    location: "Online Event",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=250&fit=crop",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h3 className="font-serif text-xl text-foreground mb-2">
              Live With the Experts.
            </h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Webinars & Events.
            </h2>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Events
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin size={14} />
                  <span>{event.location}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4 line-clamp-2">
                  {event.title}
                </h3>
                <Button variant="link" className="text-primary hover:text-crimson-dark p-0 font-sans">
                  Sign Up →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
