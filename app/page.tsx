import AboutUs from "@/components/landing-sections/AboutUs";
import AboutValues from "@/components/landing-sections/AboutValues";
import Hero from "@/components/landing-sections/Hero";
import Metrics from "@/components/landing-sections/Metrics";
import ServiceOffering from "@/components/landing-sections/ServiceOffering";
import Testimonials from "@/components/landing-sections/Testimonials";
import WhyUs from "@/components/landing-sections/why-us/WhyUs";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <AboutUs />
      <AboutValues />
      <ServiceOffering />
      <WhyUs />
      <Metrics />
      <Testimonials />
    </main>
  );
}
