import HeroSection from "@/components/HeroSection";
import { getTitles } from "@/lib/api";

const Home = async () => {
  const movies = await getTitles("MOVIE", 5);
  console.log(movies);
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default Home;
