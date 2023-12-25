import Faq from "../components/Faq";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto">
      <Hero />
      <Features/>
      <Services/>
      <Faq/>
    </main>
  );
}
