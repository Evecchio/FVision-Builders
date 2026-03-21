import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Cases } from "@/components/sections/cases";
import { Why } from "@/components/sections/why";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative">
      <div className="bg-noise"></div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Cases />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
