import HeroSection from "@/components/HeroSection";
import { getTitles } from "@/lib/api";

const Home = async () => {
  const movies = await getTitles("MOVIE", 36);
  return (
    <div>
      <HeroSection movies={movies} />
    </div>
  );
};

export default Home;
