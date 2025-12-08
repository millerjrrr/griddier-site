import { getAllPosts } from "../blog/multiTenantLoader";
import FeaturedPostsSlider from "../components/BlogPageComponents/FeaturedPostsSlider";
import GeneralPostsSlider from "../components/BlogPageComponents/GeneralPostsSlider";

export default function BlogHome() {
  const posts = getAllPosts().sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  let featured = posts.filter((p) => p.featured);

  if (featured.length < 3) {
    const needed = 3 - featured.length;
    const fillers = posts.filter((p) => !p.featured).slice(0, needed);
    featured = [...featured, ...fillers];
  }

  return posts.length === 0 ? (
    <div className="flex flex-1 items-center justify-center">
      <h1>Coming soon.</h1>
    </div>
  ) : (
    <div className="flex w-full flex-1 flex-col items-center justify-center pb-10">
      <div className="fixed top-0 z-10 h-[60px] w-full bg-[var(--primary)] opacity-[90%]" />
      <FeaturedPostsSlider posts={featured} />
      <GeneralPostsSlider posts={posts} />
    </div>
  );
}
