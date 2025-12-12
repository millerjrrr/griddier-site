import fs from "fs";
import path from "path";
import sites from "./seo-sites.js";

const BLOG_ROOT = path.join(process.cwd(), "src", "blog");
const OUTPUT_DIR = path.join(process.cwd(), "public", "sitemaps");

const STATIC_ROUTES = [
  "/",
  "/about",
  "/mobile-app",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/blog",
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getBlogSlugs(siteKey) {
  const dir = path.join(BLOG_ROOT, siteKey);

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

function generateSitemap(siteKey) {
  const site = sites[siteKey];

  if (!site?.canonicalDomain) return;

  const base = `https://${site.canonicalDomain}`;
  const slugs = getBlogSlugs(siteKey);

  const staticUrls = STATIC_ROUTES.map((route) => `${base}${route}`);

  const blogUrls = slugs.map((slug) => `${base}/blog/${slug}`);

  const urls = [...staticUrls, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

  ensureDir(OUTPUT_DIR);

  const outPath = path.join(
    OUTPUT_DIR,
    `${site.canonicalDomain.split(".")[0]}.xml`,
  );

  fs.writeFileSync(outPath, xml, "utf8");

  console.log(`✓ sitemap generated for ${site.canonicalDomain}`);
}

Object.keys(sites).forEach(generateSitemap);
