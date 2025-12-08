import { Link } from "react-router-dom";
import type { PostSummary } from "../../blog/types";
import { getSiteKey } from "../../getSiteContent";

export default function BlogCard(props: PostSummary) {
  const { slug, title, excerpt, thumbnail } = props;
  const siteKey = getSiteKey();

  return (
    <Link to={`/blog/${slug}`} className="blog-card">
      {thumbnail && (
        <img
          src={`/app-specific/${siteKey}/thumbnails/${thumbnail}`}
          alt={title}
          className="mb-1 w-full rounded-xl object-cover"
        />
      )}
      <h2 className="mb-1 text-left text-xl font-bold">{title}</h2>
      <p className="text-sm">{excerpt}</p>
    </Link>
  );
}
