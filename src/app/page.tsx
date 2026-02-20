import ItemsSection from "@/Components/Home/Items/ItemsSection";
import Banner from "@/Components/Shared/Banner";

export default function Home() {
  return (
    <div className="min-h-screen mt-30">
      <section>
        <Banner />
      </section>
      <section>
        <ItemsSection />
      </section>
    </div>
  );
}
