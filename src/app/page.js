// src/pages/index.js
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Services from "./components/services";
import FounderMessage from "./components/message";
import VideoTextComponent from "./components/videoComponent";
import Video from "./components/video";
import ContactMe from "./components/contact";
import { Footer } from "./components/footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <VideoTextComponent />
      <FounderMessage />
      <Pricing />
      <Video />
      <ContactMe />
      <Footer />
  

    </main>
  );
}
