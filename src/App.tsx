import { lazy, Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/footer";

const Services = lazy(() => import("@/components/sections/services").then((m) => ({ default: m.Services })));
const About = lazy(() => import("@/components/sections/about").then((m) => ({ default: m.About })));
const Why = lazy(() => import("@/components/sections/why").then((m) => ({ default: m.Why })));
const Contact = lazy(() => import("@/components/sections/contact").then((m) => ({ default: m.Contact })));

function SectionFallback() {
  return <div className="min-h-[50vh]" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden">
      <div className="bg-noise"></div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Why />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
