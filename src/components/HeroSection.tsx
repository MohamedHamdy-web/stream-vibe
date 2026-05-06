// import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Movie Posters Grid */}
      {/* <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-2 p-2 opacity-60">
        {[
          "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
          "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
          "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
          "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
          "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
          "https://image.tmdb.org/t/p/w500/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
          "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
          "https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
          "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
          "https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
          "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
          "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
          "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
          "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        ].map((url, i) => (
          <div
            key={i}
            className="relative w-full h-full rounded-lg overflow-hidden"
          >
            <Image src={url} alt="movie poster" fill className="object-cover" />
          </div>
        ))}
      </div> */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-sv_bg" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Play Icon */}
        <div className="w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center mb-8">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 max-w-3xl leading-tight">
          The Best Streaming Experience
        </h1>
        <p className="text-white/60 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
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
