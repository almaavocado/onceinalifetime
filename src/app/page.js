"use client";

import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Services from "./components/services";
import About from "./components/about";
import FounderMessage from "./components/message";
import Video from "./components/video";
import ContactMe from "./components/contact";
import { Footer } from "./components/footer";
import ScrollToTop from "./components/scroll";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Video />
        <Services />
        <About />
        <FounderMessage />
        <Pricing />
        <ContactMe />
        <Footer />
        <ScrollToTop />
      
      </main>
    </>
  );
}
