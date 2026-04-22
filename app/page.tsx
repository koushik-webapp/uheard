import { SimpleHeader } from "@/components/ui/simple-header";
import Hero from "./components/Hero";
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
        <OurStory />
        <Journal />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
