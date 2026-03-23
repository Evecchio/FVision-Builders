import { useEffect } from "react";
import { getDocFromServer, doc } from "firebase/firestore";
import { db } from "./firebase";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Cases } from "@/components/sections/cases";
import { Testimonials } from "@/components/sections/testimonials";
import { Why } from "@/components/sections/why";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function App() {
  useEffect(() => {
    async function testConnection() {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if (error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration.");
        }
      }
    }
    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden">
      <div className="bg-noise"></div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Cases />
        <Testimonials />
        <Services />
        <About />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
