import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "The Guru Who Says He Can Get Your 11-Year-Old Into Harvard",
    source: "The Wall Street Journal",
    featured: true,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
  },
  {
    title: "How To Get Into An Ivy League School? The Essential Guide",
    date: "November 08",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
  },
  {
    title: "150 Extracurricular Activity Examples From Accepted Students",
    date: "September 26",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop",
  },
  {
    title: "What Is a Good SAT Score for Top Universities in 2025?",
    date: "September 15",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
  },
];

const Articles = () => {
  const featuredArticle = articles.find((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Articles & News
            </h2>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Explore All Articles
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Article */}
          {featuredArticle && (
            <div className="group bg-card rounded-2xl overflow-hidden border border-border card-hover row-span-2">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-serif italic text-muted-foreground">
                    {featuredArticle.source}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground line-clamp-2">
                  {featuredArticle.title}
                </h3>
              </div>
            </div>
          )}

          {/* Regular Articles */}
          <div className="space-y-6">
            {regularArticles.map((article, index) => (
              <div
                key={index}
                className="group flex gap-4 bg-card rounded-xl overflow-hidden border border-border card-hover"
              >
                <div className="w-32 h-24 flex-shrink-0 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <span className="text-xs text-muted-foreground mb-1">
                    {article.date}
                  </span>
                  <h3 className="font-serif text-sm font-semibold text-foreground line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
