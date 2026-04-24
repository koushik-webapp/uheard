import { SimpleHeader } from "@/components/ui/simple-header";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

export default function CollectionsPage() {
  return (
    <>
      <SimpleHeader />
      <main>
        <Hero />
        <Collections />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
