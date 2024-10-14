import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";
import Gallery from "@/components/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      {/* FeaturedRoom */}
      <Gallery />
      {/* NewsLetter */}
    </>
  );
};

export default Home;
