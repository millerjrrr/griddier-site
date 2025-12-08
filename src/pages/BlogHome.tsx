import { getAllPosts } from "../blog/multiTenantLoader";
import FeaturedPostsSlider from "../components/BlogPageComponents/FeaturedPostsSlider";
import GeneralPostsSlider from "../components/BlogPageComponents/GeneralPostsSlider";

export default function BlogHome() {
  const posts = getAllPosts();
  let featured = posts.filter((p) => p.featured);

  if (featured.length < 3) {
    const needed = 3 - featured.length;
    const fillers = posts.filter((p) => !p.featured).slice(0, needed);
    featured = [...featured, ...fillers];
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center p-5 py-20">
      <FeaturedPostsSlider posts={featured} />
      <GeneralPostsSlider posts={posts} />
    </div>
  );
}
