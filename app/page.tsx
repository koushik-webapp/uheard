import { SimpleHeader } from "@/components/ui/simple-header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import OurStory from "./components/OurStory";
import Journal from "./components/Journal";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <SimpleHeader />
      <main>
        <Hero />
        <Hero2 />
        <OurStory />
        <Journal />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
