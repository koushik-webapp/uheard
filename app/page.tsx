import { SimpleHeader } from "@/components/ui/simple-header";
import Hero2 from "./components/Hero2";
import OurStory from "./components/OurStory";
import Journal from "./components/Journal";
import Lifestyle from "./components/Lifestyle";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SimpleHeader />
      <main>
        <Hero2 />
        <OurStory />
        <Journal />
        <Lifestyle />

        {/* ── Shared background: Contact + FAQ ── */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Single background spanning both sections */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image
              src="/location-bg.jpg"
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: '90% bottom' }}
              sizes="100vw"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.30)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 50%)' }} />
          </div>

          <Contact />
          <FAQ />
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
