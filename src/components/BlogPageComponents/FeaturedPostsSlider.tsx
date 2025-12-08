import { useState } from "react";
import type { PostSummary } from "../../blog/types";
import { Link } from "react-router-dom";
import { getSiteKey } from "../../getSiteContent";

interface FeaturedPostsSliderProps {
  posts: PostSummary[];
}

export default function FeaturedPostsSlider({
  posts,
}: FeaturedPostsSliderProps) {
  const [index, setIndex] = useState(0);

  const siteKey = getSiteKey();

  const slide = posts[index];

  const prev = () => {
    setIndex((i) => (i === 0 ? posts.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === posts.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="group relative h-[300px] w-full overflow-hidden rounded-xl shadow-lg lg:h-[400px] lg:h-[500px]">
      {/* IMAGE */}
      <Link to={`/blog/${slide.slug}`}>
        <img
          src={`/app-specific/${siteKey}/thumbnails/${slide.thumbnail}`}
          alt={slide.title}
          className="absolute inset-0 h-full w-full cursor-pointer object-cover transition-all duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 cursor-pointer bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </Link>

      {/* TEXT */}
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h2 className="mb-1 text-2xl font-bold drop-shadow-lg sm:text-3xl">
          {slide.title}
        </h2>
        <p className="text-sm opacity-80">
          {new Date(slide.date).toLocaleDateString()}
        </p>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {posts.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 cursor-pointer rounded-full transition-all ${i === index ? "scale-125 bg-white" : "bg-white/40"} `}
          />
        ))}
      </div>
    </div>
  );
}
