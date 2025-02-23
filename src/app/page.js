import Head from 'next/head'; // Import Head from Next.js
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
    <>
      <Head>
        <title>Once in a Lifetime Quinceañera</title> 
        <meta name="description" content="Creating Once in a Lifetime Quinceañera's through Chereography" /> 
        <link rel="icon" href="/assets/logo.png" /> 
      </Head>
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
    </>
  );
}
