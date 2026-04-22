import { SimpleHeader } from "@/components/ui/simple-header";
import Collections from "../components/Collections";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

export default function CollectionsPage() {
  return (
    <>
      <SimpleHeader />
      <main style={{ paddingTop: '68px' }}>
        <Collections />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
