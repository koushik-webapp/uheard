import { SimpleHeader } from "@/components/ui/simple-header";
import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";
import OurStory from "./components/OurStory";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <SimpleHeader />
      <main>
        <Hero />
        <FeaturedCollections />
        <OurStory />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
