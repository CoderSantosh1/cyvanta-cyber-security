import Hero from "@/components/CyberHero";
import About from "@/components/CyberAbout";
import Services from "@/components/CyberServices";
import WhyChooseUs from "@/components/CyberWhyChooseUs";
import Testimonials from "@/components/CyberTestimonials";
import FAQs from "@/components/CyberFAQs";
import Contact from "@/components/CyberContact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <ScrollReveal>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQs />
      <Contact />
    </ScrollReveal>
  );
}
