import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkHistory from "@/components/WorkHistory";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkHistory />
        <Services />
        <Projects />
        <Testimonials />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}
