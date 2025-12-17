import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Counselors from "@/components/Counselors";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import Articles from "@/components/Articles";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Counselors />
      <Services />
      <Testimonials />
      <Events />
      <Articles />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
