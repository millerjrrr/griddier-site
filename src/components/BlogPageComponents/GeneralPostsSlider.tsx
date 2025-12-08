import { useCallback } from "react";
import BlogCard from "./BlogCard";
import type { PostSummary } from "../../blog/types";

interface GeneralPostsSliderProps {
  posts: PostSummary[];
}

export default function GeneralPostsSlider({ posts }: GeneralPostsSliderProps) {
  const slide = useCallback((dir: "left" | "right") => {
    const slider = document.getElementById("general-posts-slider");
    if (!slider) return;

    const card = slider.querySelector("div");
    if (!card) return;

    const cardWidth = card.clientWidth + 24; // 24px gap
    slider.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="mt-10 max-w-full p-5">
      <div className="relative">
        <div
          id="general-posts-slider"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth p-4 [scroll-padding-left:1rem] [scroll-padding-right:1rem] sm:justify-start [&>*]:snap-start"
        >
          {posts.map((p) => (
            <div key={p.slug} className="flex w-full">
              <BlogCard {...p} />
            </div>
          ))}
        </div>

        <button
          onClick={() => slide("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] px-3 py-2 text-[var(--contrast-c)] opacity-[50%] hover:opacity-[90%]"
        >
          ❮
        </button>

        <button
          onClick={() => slide("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] px-3 py-2 text-[var(--contrast-c)] opacity-[50%] hover:opacity-[90%]"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
