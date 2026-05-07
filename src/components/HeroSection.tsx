// import Image from "next/image";
import { Title } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { BiCameraMovie } from "react-icons/bi";

interface HeroSectionProps {
  movies: Title[];
}

const HeroSection = ({ movies }: HeroSectionProps) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Movie Posters Grid */}
      <div className="absolute top-0 left-0 w-full h-[70vh] grid grid-cols-9 grid-rows-4 gap-2 p-2">
        {movies.slice(0, 36).map((movie, i) => (
          <div
            key={i}
            className="relative w-full h-full rounded-lg overflow-hidden bg-sv_surface"
          >
            {movie.primaryImage?.url ? (
              <Image
                src={movie.primaryImage.url}
                alt={movie.primaryTitle}
                fill
                className="object-cover opacity-60"
              />
            ) : (
              <div className="w-full h-full bg-sv_surface" />
            )}
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-sv_bg" />

      {/* Center Logo Watermark */}
      <div className="absolute inset-0 flex items-start justify-center pt-20 pl-15">
        <BiCameraMovie size={400} className="text-white/30" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-28">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl leading-tight">
          The Best Streaming Experience
        </h1>
        <p className="text-white/60 text-sm md:text-base max-w-5xl mb-8 leading-relaxed">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <Link
          href="/movies"
          className="flex items-center gap-2 bg-sv_red hover:bg-sv_red_dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M8 5v14l11-7z" />
          </svg>
          Start Watching Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
